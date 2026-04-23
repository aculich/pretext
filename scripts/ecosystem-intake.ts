/**
 * Build research/forks/ecosystem-inventory.json from awesome-pretext app.js + extra discovery hits.
 * Classifies repos via package.json (when present) and gh metadata.
 *
 * Usage: bun run scripts/ecosystem-intake.ts
 * Requires: gh CLI authenticated.
 */

import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const OUT_JSON = join(ROOT, 'research', 'forks', 'ecosystem-inventory.json')
/** Copy for bundling the local ecosystem catalog demo (see pages/demos/ecosystem-catalog.ts). */
const OUT_DEMO_ASSET = join(ROOT, 'pages', 'assets', 'ecosystem-inventory.json')
const OUT_COLLECTION_MD = join(ROOT, 'research', 'forks', 'ECOSYSTEM-COLLECTION.md')

const AWESOME_README_RAW =
  'https://raw.githubusercontent.com/ShipItAndPray/awesome-pretext/main/README.md'

const AWESOME_APP_JS =
  'https://raw.githubusercontent.com/ShipItAndPray/awesome-pretext/main/app.js'

/** Repos from today’s `gh search repos "pretext fork:true"` (approved scope). */
const EXTRA_GITHUB_REPOS = [
  'darkroomengineering/fitbox',
  'acoyfellow/cloudterm',
  'Top-g-hash/nuxt-pretext',
  'somnai-dreams/preimage',
]

type Relevance = 'core-pretext-ecosystem' | 'adjacent-pretext' | 'unclear-or-noise'

type InventoryEntry = {
  fullName: string
  source:
    | 'awesome-pretext-package'
    | 'awesome-pretext-community'
    | 'discovery-search'
    | 'pretext-dependent-search'
  /** Display name from awesome-pretext `app.js` `name` (package short name). */
  packageName?: string
  /** `label` from communityProjects (e.g. "creative coding"). */
  communityLabel?: string
  category?: string
  summary?: string
  demoUrl?: string
  tags?: string[]
  repoUrl: string
  ghDescription: string | null
  pushedAt: string | null
  stargazerCount?: number
  forkCount?: number
  updatedAt?: string | null
  isArchived?: boolean
  isFork?: boolean
  relevance: Relevance
  relevanceRationale: string
  hasPackageJson: boolean
  declaresChenglouPretext: boolean
}

async function ghJson<T>(args: string[]): Promise<T> {
  const proc = Bun.spawn(['gh', ...args], { stdout: 'pipe', stderr: 'pipe' })
  const err = await new Response(proc.stderr).text()
  const out = await new Response(proc.stdout).text()
  const code = await proc.exited
  if (code !== 0) throw new Error(`gh ${args.join(' ')} failed: ${err || out}`)
  return JSON.parse(out) as T
}

/** Skip strings so `{` / `[` inside quotes do not affect depth. */
function findMatchingBracket(source: string, openIdx: number): number {
  let depth = 1
  let i = openIdx + 1
  let inStr: '"' | "'" | null = null
  let escape = false
  for (; i < source.length; i++) {
    const c = source[i]
    if (inStr) {
      if (escape) {
        escape = false
        continue
      }
      if (c === '\\') {
        escape = true
        continue
      }
      if (c === inStr) inStr = null
      continue
    }
    if (c === '"' || c === "'") {
      inStr = c
      continue
    }
    if (c === '[') depth++
    else if (c === ']') {
      depth--
      if (depth === 0) return i
    }
  }
  return -1
}

function findMatchingBrace(source: string, openIdx: number): number {
  let depth = 0
  let i = openIdx
  let inStr: '"' | "'" | null = null
  let escape = false
  for (; i < source.length; i++) {
    const c = source[i]
    if (inStr) {
      if (escape) {
        escape = false
        continue
      }
      if (c === '\\') {
        escape = true
        continue
      }
      if (c === inStr) inStr = null
      continue
    }
    if (c === '"' || c === "'") {
      inStr = c
      continue
    }
    if (c === '{') depth++
    else if (c === '}') {
      depth--
      if (depth === 0) return i
    }
  }
  return -1
}

function extractArrayInner(source: string, marker: string): string | null {
  const idx = source.indexOf(marker)
  if (idx === -1) return null
  const openBracket = source.indexOf('[', idx + marker.length)
  if (openBracket === -1) return null
  const closeBracket = findMatchingBracket(source, openBracket)
  if (closeBracket === -1) return null
  return source.slice(openBracket + 1, closeBracket)
}

function extractTopLevelObjectStrings(arrayInner: string): string[] {
  const out: string[] = []
  let i = 0
  while (i < arrayInner.length) {
    let ch = arrayInner.charAt(i)
    while (i < arrayInner.length && /[\s,]/.test(ch)) {
      i++
      ch = arrayInner.charAt(i)
    }
    if (i >= arrayInner.length) break
    if (ch === '{') {
      const end = findMatchingBrace(arrayInner, i)
      if (end === -1) break
      out.push(arrayInner.slice(i, end + 1))
      i = end + 1
    } else {
      i++
    }
  }
  return out
}

function fieldDoubleQuoted(obj: string, key: string): string | undefined {
  const re = new RegExp(`${key}:\\s*"((?:\\\\.|[^"\\\\])*)"`)
  const m = re.exec(obj)
  if (!m?.[1]) return undefined
  return m[1].replace(/\\"/g, '"').replace(/\\\\/g, '\\')
}

function parseTagsArray(obj: string): string[] {
  const tagRe = /tags:\s*\[([\s\S]*?)\]/m.exec(obj)
  const inner = tagRe?.[1]
  if (!inner) return []
  const tags: string[] = []
  for (const t of inner.matchAll(/"((?:\\.|[^"\\])*)"/g)) {
    if (t[1]) tags.push(t[1].replace(/\\"/g, '"'))
  }
  return tags
}

function parseGithubReposFromAwesomeAppJs(text: string): {
  packages: Array<{ repo: string; demo?: string; name?: string; category?: string; summary?: string; tags?: string[] }>
  community: Array<{ url: string; name?: string; description?: string; label?: string }>
} {
  const packages: Array<{
    repo: string
    demo?: string
    name?: string
    category?: string
    summary?: string
    tags?: string[]
  }> = []

  const inner = extractArrayInner(text, 'const packages = ')
  if (inner) {
    for (const obj of extractTopLevelObjectStrings(inner)) {
      const repo = fieldDoubleQuoted(obj, 'repo')
      if (!repo) continue
      const rec: (typeof packages)[number] = { repo }
      const demo = fieldDoubleQuoted(obj, 'demo')
      if (demo !== undefined) rec.demo = demo
      const name = fieldDoubleQuoted(obj, 'name')
      if (name !== undefined) rec.name = name
      const category = fieldDoubleQuoted(obj, 'category')
      if (category !== undefined) rec.category = category
      const summary = fieldDoubleQuoted(obj, 'summary')
      if (summary !== undefined) rec.summary = summary
      const tags = parseTagsArray(obj)
      if (tags.length > 0) rec.tags = tags
      packages.push(rec)
    }
  }

  const community: Array<{ url: string; name?: string; description?: string; label?: string }> = []
  const commInner = extractArrayInner(text, 'const communityProjects = ')
  if (commInner) {
    for (const obj of extractTopLevelObjectStrings(commInner)) {
      const url = fieldDoubleQuoted(obj, 'url')
      if (!url) continue
      const crec: (typeof community)[number] = { url }
      const name = fieldDoubleQuoted(obj, 'name')
      if (name !== undefined) crec.name = name
      const description = fieldDoubleQuoted(obj, 'description')
      if (description !== undefined) crec.description = description
      const label = fieldDoubleQuoted(obj, 'label')
      if (label !== undefined) crec.label = label
      community.push(crec)
    }
  }

  return { packages, community }
}

function fullNameFromRepoUrl(url: string): string | null {
  const u = new URL(url)
  if (u.hostname !== 'github.com') return null
  const parts = u.pathname.replace(/^\/+|\/+$/g, '').split('/')
  if (parts.length < 2) return null
  return `${parts[0]}/${parts[1]}`
}

function decodeGhContentBase64(content: string | undefined): string | null {
  if (!content) return null
  return Buffer.from(content, 'base64').toString('utf8')
}

async function fetchPackageJson(fullName: string): Promise<{ raw: string | null; has: boolean }> {
  try {
    const row = await ghJson<{ content?: string }>(['api', `repos/${fullName}/contents/package.json`])
    const raw = decodeGhContentBase64(row.content)
    return { raw, has: raw !== null }
  } catch {
    return { raw: null, has: false }
  }
}

function declaresPretext(pkg: string | null): boolean {
  if (!pkg) return false
  return (
    pkg.includes('@chenglou/pretext') ||
    pkg.includes('"chenglou/pretext"') ||
    pkg.includes("'chenglou/pretext'")
  )
}

function classify(args: {
  fullName: string
  description: string | null
  pkg: string | null
  hasPackageJson: boolean
  source: InventoryEntry['source']
}): { relevance: Relevance; rationale: string } {
  if (args.source === 'pretext-dependent-search' && !args.pkg && args.hasPackageJson === false) {
    return {
      relevance: 'adjacent-pretext',
      rationale:
        'Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify locally.',
    }
  }
  const desc = (args.description ?? '').toLowerCase()
  const lowerName = args.fullName.toLowerCase()

  if (args.pkg && declaresPretext(args.pkg)) {
    return {
      relevance: 'core-pretext-ecosystem',
      rationale: 'package.json lists @chenglou/pretext (dependency / peer / dev).',
    }
  }
  if (desc.includes('@chenglou/pretext') || desc.includes('chenglou/pretext')) {
    return {
      relevance: 'core-pretext-ecosystem',
      rationale: 'Repository description references chenglou/pretext.',
    }
  }
  if (
    lowerName.includes('pretext') ||
    desc.includes('pretext') ||
    args.source === 'awesome-pretext-package'
  ) {
    return {
      relevance: 'adjacent-pretext',
      rationale:
        args.source === 'awesome-pretext-package'
          ? 'Listed in awesome-pretext catalog as Pretext ecosystem package; verify package.json on disk after clone.'
          : 'Name or description suggests Pretext ecosystem; no package.json proof via API.',
    }
  }
  return {
    relevance: 'unclear-or-noise',
    rationale:
      'Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone.',
  }
}

async function sleep(ms: number) {
  await new Promise((r) => setTimeout(r, ms))
}

type GhCodeRepository = { nameWithOwner?: string }

/** Public repos whose package.json references Pretext (GitHub code search; noisy, deduped). */
async function collectDependentFullNames(seen: Set<string>): Promise<string[]> {
  const queries: string[][] = [
    ['search', 'code', '"@chenglou/pretext"', '--filename', 'package.json', '--json', 'repository', '--limit', '80'],
    ['search', 'code', '"chenglou/pretext"', '--filename', 'package.json', '--json', 'repository', '--limit', '50'],
  ]
  const byLower = new Map<string, string>()
  for (const q of queries) {
    try {
      const proc = Bun.spawn(['gh', ...q], { stdout: 'pipe', stderr: 'pipe' })
      const err = await new Response(proc.stderr).text()
      const out = await new Response(proc.stdout).text()
      const code = await proc.exited
      if (code !== 0) {
        console.warn('gh', q.join(' '), 'failed:', err || out)
        continue
      }
      const rows = JSON.parse(out) as Array<{ repository?: GhCodeRepository }>
      for (const row of rows) {
        const id = row.repository?.nameWithOwner
        if (!id) continue
        const lower = id.toLowerCase()
        if (lower === 'chenglou/pretext') continue
        if (seen.has(lower) || byLower.has(lower)) continue
        byLower.set(lower, id)
      }
    } catch (e) {
      console.warn('dependent code search error:', e)
    }
    await sleep(400)
  }
  return [...byLower.values()]
}

function repoSeenKey(fullName: string): string {
  return fullName.toLowerCase()
}

async function main() {
  console.log('Fetching', AWESOME_APP_JS)
  const res = await fetch(AWESOME_APP_JS)
  if (!res.ok) throw new Error(`fetch app.js: ${res.status}`)
  const appJs = await res.text()
  const { packages, community } = parseGithubReposFromAwesomeAppJs(appJs)

  const seen = new Set<string>()
  type QueueItem = {
    fullName: string
    source: InventoryEntry['source']
    packageName?: string
    communityLabel?: string
    category?: string
    summary?: string
    demoUrl?: string
    tags?: string[]
  }
  const queue: QueueItem[] = []

  for (const p of packages) {
    const fn = fullNameFromRepoUrl(p.repo)
    if (!fn) continue
    const sk = repoSeenKey(fn)
    if (seen.has(sk)) continue
    seen.add(sk)
    const row: QueueItem = { fullName: fn, source: 'awesome-pretext-package' }
    if (p.name !== undefined) row.packageName = p.name
    if (p.category !== undefined) row.category = p.category
    if (p.summary !== undefined) row.summary = p.summary
    if (p.demo !== undefined) row.demoUrl = p.demo
    if (p.tags !== undefined) row.tags = p.tags
    queue.push(row)
  }
  for (const c of community) {
    const fn = fullNameFromRepoUrl(c.url)
    if (!fn) continue
    const sk = repoSeenKey(fn)
    if (seen.has(sk)) continue
    seen.add(sk)
    const row: QueueItem = { fullName: fn, source: 'awesome-pretext-community' }
    if (c.name !== undefined) row.packageName = c.name
    if (c.label !== undefined) row.communityLabel = c.label
    if (c.description !== undefined) row.summary = c.description
    else if (c.name !== undefined) row.summary = c.name
    queue.push(row)
  }
  for (const fn of EXTRA_GITHUB_REPOS) {
    const sk = repoSeenKey(fn)
    if (seen.has(sk)) continue
    seen.add(sk)
    queue.push({ fullName: fn, source: 'discovery-search' })
  }

  console.log('\nCollecting dependent repos (gh search code)…')
  const dependents = await collectDependentFullNames(seen)
  let depAdded = 0
  for (const id of dependents) {
    const sk = repoSeenKey(id)
    if (seen.has(sk)) continue
    seen.add(sk)
    queue.push({ fullName: id, source: 'pretext-dependent-search' })
    depAdded++
  }
  console.log(`Added ${String(depAdded)} repo(s) from package.json code search (deduped against prior sources).`)

  const entries: InventoryEntry[] = []
  let i = 0
  for (const item of queue) {
    i++
    process.stderr.write(`\r[${i}/${queue.length}] ${item.fullName}`)
    await sleep(120)

    let ghDescription: string | null = null
    let pushedAt: string | null = null
    let stargazerCount: number | undefined
    let forkCount: number | undefined
    let updatedAt: string | null = null
    let isArchived: boolean | undefined
    let isFork: boolean | undefined
    try {
      const meta = await ghJson<{
        description: string | null
        pushedAt: string | null
        stargazerCount: number
        forkCount: number
        updatedAt: string
        isArchived: boolean
        isFork: boolean
      }>([
        'repo',
        'view',
        item.fullName,
        '--json',
        'description,pushedAt,stargazerCount,forkCount,updatedAt,isArchived,isFork',
      ])
      ghDescription = meta.description
      pushedAt = meta.pushedAt
      stargazerCount = meta.stargazerCount
      forkCount = meta.forkCount
      updatedAt = meta.updatedAt
      isArchived = meta.isArchived
      isFork = meta.isFork
    } catch (e) {
      ghDescription = `(gh repo view failed: ${e})`
    }

    const { raw: pkg, has: hasPackageJson } = await fetchPackageJson(item.fullName)
    const declaresChenglouPretext = declaresPretext(pkg)

    const { relevance, rationale } = classify({
      fullName: item.fullName,
      description: ghDescription,
      pkg,
      hasPackageJson,
      source: item.source,
    })

    const row: InventoryEntry = {
      fullName: item.fullName,
      source: item.source,
      repoUrl: `https://github.com/${item.fullName}`,
      ghDescription,
      pushedAt,
      relevance,
      relevanceRationale: rationale,
      hasPackageJson,
      declaresChenglouPretext,
    }
    if (item.packageName !== undefined) row.packageName = item.packageName
    if (item.communityLabel !== undefined) row.communityLabel = item.communityLabel
    if (item.category !== undefined) row.category = item.category
    if (item.summary !== undefined) row.summary = item.summary
    if (item.demoUrl !== undefined) row.demoUrl = item.demoUrl
    if (item.tags !== undefined) row.tags = item.tags
    if (stargazerCount !== undefined) row.stargazerCount = stargazerCount
    if (forkCount !== undefined) row.forkCount = forkCount
    if (updatedAt !== undefined) row.updatedAt = updatedAt
    if (isArchived !== undefined) row.isArchived = isArchived
    if (isFork !== undefined) row.isFork = isFork
    entries.push(row)
  }
  process.stderr.write('\n')

  const manifest = {
    generated_at: new Date().toISOString(),
    awesome_app_js: AWESOME_APP_JS,
    counts: {
      total: entries.length,
      core: entries.filter((e) => e.relevance === 'core-pretext-ecosystem').length,
      adjacent: entries.filter((e) => e.relevance === 'adjacent-pretext').length,
      unclear: entries.filter((e) => e.relevance === 'unclear-or-noise').length,
    },
    entries: entries.sort((a, b) => a.fullName.localeCompare(b.fullName)),
  }

  await mkdir(dirname(OUT_JSON), { recursive: true })
  await mkdir(dirname(OUT_DEMO_ASSET), { recursive: true })
  const body = `${JSON.stringify(manifest, null, 2)}\n`
  await writeFile(OUT_JSON, body, 'utf8')
  await writeFile(OUT_DEMO_ASSET, body, 'utf8')
  console.log('Wrote', OUT_JSON, 'and', OUT_DEMO_ASSET, manifest.counts)

  await verifyAwesomeReadmeCoversInventory(new Set(entries.map((e) => e.fullName.toLowerCase())))
  await writeEcosystemCollectionMd(manifest.generated_at, entries, manifest.counts)
}

/** Warn if awesome-pretext README links a GitHub repo we did not merge into inventory. */
async function verifyAwesomeReadmeCoversInventory(inventoryLower: Set<string>): Promise<void> {
  const res = await fetch(AWESOME_README_RAW)
  if (!res.ok) {
    console.warn('Could not fetch awesome README for link check:', res.status)
    return
  }
  const readme = await res.text()
  const re = /https:\/\/github\.com\/([\w.-]+)\/([\w.-]+)(?=\/|\)|\s|"|'|$)/g
  const fromReadme = new Set<string>()
  let m: RegExpExecArray | null
  while ((m = re.exec(readme)) !== null) {
    const fn = `${m[1]}/${m[2]}`.toLowerCase()
    if (fn === 'chenglou/pretext') continue
    fromReadme.add(fn)
  }
  const missing = [...fromReadme].filter((f) => !inventoryLower.has(f))
  if (missing.length > 0) {
    console.warn('README lists GitHub repos not in inventory — update intake or README:', missing.sort().join(', '))
  }
}

function mdEscapeCell(s: string): string {
  return s.replace(/\|/g, '\\|').replace(/\r?\n/g, ' ')
}

async function writeEcosystemCollectionMd(
  generatedAt: string,
  entries: InventoryEntry[],
  counts: { total: number; core: number; adjacent: number; unclear: number },
): Promise<void> {
  const discovery = entries.filter((e) => e.source === 'discovery-search')
  const lines: string[] = []
  lines.push('# Pretext ecosystem collection (aculich fork)')
  lines.push('')
  lines.push(
    '[![Awesome pretext site](https://img.shields.io/badge/awesome--pretext-site-0f766e)](https://shipitandpray.github.io/awesome-pretext/) [![Upstream Pretext](https://img.shields.io/badge/upstream-chenglou%2Fpretext-111827)](https://github.com/chenglou/pretext) [![Local catalog demo](https://img.shields.io/badge/catalog-demo-8b4d2f)](https://github.com/aculich/pretext/blob/main/pages/demos/ecosystem-catalog.html)',
  )
  lines.push('')
  lines.push(
    'This document mirrors the *intent* of [ShipItAndPray/awesome-pretext](https://github.com/ShipItAndPray/awesome-pretext)’s README while grounding the **full superset** in [`ecosystem-inventory.json`](ecosystem-inventory.json). Regenerate both with `bun run ecosystem:intake`.',
  )
  lines.push('')
  lines.push(`_Inventory generated: ${generatedAt.slice(0, 10)} · ${counts.total} repos (core ${counts.core}, adjacent ${counts.adjacent}, unclear ${counts.unclear})._`)
  lines.push('')
  lines.push('## How to read this vs awesome-pretext')
  lines.push('')
  lines.push('1. **Official resources first** — upstream Pretext, live demos, community demo hub, development notes.')
  lines.push('2. **Ecosystem packages with live demos** — curated in awesome-pretext `app.js`; we carry the same repos plus metadata from the GitHub API.')
  lines.push('3. **Selected community experiments** — `communityProjects` in their `app.js`.')
  lines.push(
    '4. **Beyond their README** — discovery repos we added (see end), plus repos found via **GitHub code search** for `package.json` references to Pretext (see dedicated section). Intake also warns if their README introduces new `github.com/o/r` links not present in the inventory.',
  )
  lines.push('')
  lines.push('## Official Pretext resources')
  lines.push('')
  lines.push('- [Pretext repository](https://github.com/chenglou/pretext)')
  lines.push('- [Live demos by Cheng Lou](https://chenglou.me/pretext/)')
  lines.push('- [Additional community demos](https://somnai-dreams.github.io/pretext-demos/)')
  lines.push('- [Development notes](https://github.com/chenglou/pretext/blob/main/DEVELOPMENT.md)')
  lines.push('')
  lines.push('## Flagship ecosystem packages (curated)')
  lines.push('')
  lines.push('| Project | What it does | Links |')
  lines.push('| --- | --- | --- |')
  lines.push(
    '| [`pretext-react`](https://github.com/ShipItAndPray/pretext-react) | React hooks and UI primitives for stable text sizing, bubbles, streaming text, and virtualization. | [demo](https://shipitandpray.github.io/pretext-react/) |',
  )
  lines.push(
    '| [`pretext-chat`](https://github.com/ShipItAndPray/pretext-chat) | Chat UI components with precomputed message sizing and streaming-friendly layout. | [demo](https://shipitandpray.github.io/pretext-chat/) |',
  )
  lines.push(
    '| [`pretext-terminal`](https://github.com/ShipItAndPray/pretext-terminal) | Canvas-first terminal and log UI for large scrollback and ANSI-rich output. | [demo](https://shipitandpray.github.io/pretext-terminal/) |',
  )
  lines.push(
    '| [`pretext-editor`](https://github.com/ShipItAndPray/pretext-editor) | Canvas text editor using Pretext for line measurement instead of DOM text nodes. | [demo](https://shipitandpray.github.io/pretext-editor/) |',
  )
  lines.push(
    '| [`pretext-pdf`](https://github.com/ShipItAndPray/pretext-pdf) | PDF generation with correct wrapping and pagination powered by Pretext + pdf-lib. | [demo](https://shipitandpray.github.io/pretext-pdf/) |',
  )
  lines.push('')
  lines.push('## Full machine catalog (superset)')
  lines.push('')
  lines.push(
    'Sorted by **use-case category** (from awesome-pretext when present), then repo. Demo and relevance come from [`ecosystem-inventory.json`](ecosystem-inventory.json).',
  )
  lines.push('')
  lines.push('| Repo | Category | Demo | Relevance | Stars | Forks | Pushed |')
  lines.push('| --- | --- | --- | --- | ---: | ---: | --- |')
  const sorted = [...entries].sort((a, b) => {
    const ca = (a.category ?? '\uFFFF').localeCompare(b.category ?? '\uFFFF')
    if (ca !== 0) return ca
    return a.fullName.localeCompare(b.fullName)
  })
  for (const e of sorted) {
    const demo = e.demoUrl ? `[demo](${e.demoUrl})` : '—'
    const cat =
      e.category ??
      (e.source === 'awesome-pretext-community'
        ? 'Community'
        : e.source === 'discovery-search'
          ? 'Discovery'
          : e.source === 'pretext-dependent-search'
            ? 'Code search (importers)'
            : '—')
    const stars = e.stargazerCount ?? '—'
    const forks = e.forkCount ?? '—'
    const pushed = e.pushedAt ? e.pushedAt.slice(0, 10) : '—'
    lines.push(
      `| [\`${mdEscapeCell(e.fullName)}\`](${e.repoUrl}) | ${mdEscapeCell(cat)} | ${demo} | \`${e.relevance}\` | ${String(stars)} | ${String(forks)} | ${pushed} |`,
    )
  }
  lines.push('')
  const dependents = entries.filter((e) => e.source === 'pretext-dependent-search')
  lines.push('## Repos referencing @chenglou/pretext (code search)')
  lines.push('')
  lines.push(
    '_These rows come from public `gh search code` hits on `package.json` (npm scope and git-style references). They may include false positives, fork noise, or version ranges that do not match what you run locally. **awesome-pretext** remains the curated product list._',
  )
  lines.push('')
  if (dependents.length === 0) {
    lines.push('_None in this run._')
  } else {
    lines.push('| Repo | Stars | Relevance | Rationale (short) |')
    lines.push('| --- | ---: | --- | --- |')
    for (const e of dependents.sort((a, b) => (b.stargazerCount ?? 0) - (a.stargazerCount ?? 0))) {
      const stars = e.stargazerCount ?? '—'
      const rat = mdEscapeCell(e.relevanceRationale.slice(0, 120))
      lines.push(
        `| [\`${mdEscapeCell(e.fullName)}\`](${e.repoUrl}) | ${String(stars)} | \`${e.relevance}\` | ${rat}${e.relevanceRationale.length > 120 ? '…' : ''} |`,
      )
    }
  }
  lines.push('')
  lines.push('## Repos in this fork’s inventory but not in awesome-pretext README tables')
  lines.push('')
  if (discovery.length === 0) {
    lines.push('_None._')
  } else {
    for (const e of discovery.sort((a, b) => a.fullName.localeCompare(b.fullName))) {
      lines.push(`- [\`${e.fullName}\`](${e.repoUrl}) — ${mdEscapeCell(e.ghDescription ?? '')}`)
    }
  }
  lines.push('')
  await writeFile(OUT_COLLECTION_MD, `${lines.join('\n')}\n`, 'utf8')
  console.log('Wrote', OUT_COLLECTION_MD)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
