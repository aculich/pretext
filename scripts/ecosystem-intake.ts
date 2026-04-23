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
  source: 'awesome-pretext-package' | 'awesome-pretext-community' | 'discovery-search'
  category?: string
  summary?: string
  demoUrl?: string
  tags?: string[]
  repoUrl: string
  ghDescription: string | null
  pushedAt: string | null
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

function parseGithubReposFromAwesomeAppJs(text: string): {
  packages: Array<{ repo: string; demo?: string; name?: string; category?: string; summary?: string; tags?: string[] }>
  community: Array<{ url: string; name?: string }>
} {
  const packages: Array<{
    repo: string
    demo?: string
    name?: string
    category?: string
    summary?: string
    tags?: string[]
  }> = []

  const pkgBlocks = text.match(/const packages = \[[\s\S]*?\];/)
  if (pkgBlocks) {
    const block = pkgBlocks[0]
    const repoRe = /repo:\s*"(https:\/\/github\.com\/[^"]+)"/g
    let m: RegExpExecArray | null
    while ((m = repoRe.exec(block)) !== null) {
      const end = block.indexOf('},', m.index)
      const slice = end === -1 ? block.slice(m.index) : block.slice(m.index, end + 2)
      const demoM = /demo:\s*"(https:\/\/[^"]+)"/.exec(slice)
      const nameM = /name:\s*"([^"]+)"/.exec(slice)
      const catM = /category:\s*"([^"]+)"/.exec(slice)
      const sumM = /summary:\s*"([^"]+)"/.exec(slice)
      const tags: string[] = []
      const tagRe = /tags:\s*\[([\s\S]*?)\]/m.exec(slice)
      const innerTags = tagRe?.[1]
      if (innerTags) {
        const tm = innerTags.matchAll(/"([^"]+)"/g)
        for (const t of tm) {
          if (t[1]) tags.push(t[1])
        }
      }
      const repoUrl = m[1]
      if (!repoUrl) continue
      const rec: {
        repo: string
        demo?: string
        name?: string
        category?: string
        summary?: string
        tags?: string[]
      } = { repo: repoUrl }
      if (demoM?.[1] !== undefined) rec.demo = demoM[1]
      if (nameM?.[1] !== undefined) rec.name = nameM[1]
      if (catM?.[1] !== undefined) rec.category = catM[1]
      if (sumM?.[1] !== undefined) rec.summary = sumM[1]
      if (tags.length > 0) rec.tags = tags
      packages.push(rec)
    }
  }

  const community: Array<{ url: string; name?: string }> = []
  const commBlocks = text.match(/const communityProjects = \[[\s\S]*?\];/)
  if (commBlocks) {
    const block = commBlocks[0]
    const urlRe = /url:\s*"(https:\/\/github\.com\/[^"]+)"/g
    let m: RegExpExecArray | null
    while ((m = urlRe.exec(block)) !== null) {
      const end = block.indexOf('},', m.index)
      const slice = end === -1 ? block.slice(m.index) : block.slice(m.index, end + 2)
      const nameM = /name:\s*"([^"]+)"/.exec(slice)
      const u = m[1]
      if (u) {
        const crec: { url: string; name?: string } = { url: u }
        if (nameM?.[1] !== undefined) crec.name = nameM[1]
        community.push(crec)
      }
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
    category?: string
    summary?: string
    demoUrl?: string
    tags?: string[]
  }
  const queue: QueueItem[] = []

  for (const p of packages) {
    const fn = fullNameFromRepoUrl(p.repo)
    if (!fn || seen.has(fn)) continue
    seen.add(fn)
    const row: QueueItem = { fullName: fn, source: 'awesome-pretext-package' }
    if (p.category !== undefined) row.category = p.category
    if (p.summary !== undefined) row.summary = p.summary
    if (p.demo !== undefined) row.demoUrl = p.demo
    if (p.tags !== undefined) row.tags = p.tags
    queue.push(row)
  }
  for (const c of community) {
    const fn = fullNameFromRepoUrl(c.url)
    if (!fn || seen.has(fn)) continue
    seen.add(fn)
    const row: QueueItem = { fullName: fn, source: 'awesome-pretext-community' }
    if (c.name !== undefined) row.summary = c.name
    queue.push(row)
  }
  for (const fn of EXTRA_GITHUB_REPOS) {
    if (seen.has(fn)) continue
    seen.add(fn)
    queue.push({ fullName: fn, source: 'discovery-search' })
  }

  const entries: InventoryEntry[] = []
  let i = 0
  for (const item of queue) {
    i++
    process.stderr.write(`\r[${i}/${queue.length}] ${item.fullName}`)
    await sleep(120)

    let ghDescription: string | null = null
    let pushedAt: string | null = null
    try {
      const meta = await ghJson<{ description: string | null; pushedAt: string | null }>([
        'repo',
        'view',
        item.fullName,
        '--json',
        'description,pushedAt',
      ])
      ghDescription = meta.description
      pushedAt = meta.pushedAt
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
    if (item.category !== undefined) row.category = item.category
    if (item.summary !== undefined) row.summary = item.summary
    if (item.demoUrl !== undefined) row.demoUrl = item.demoUrl
    if (item.tags !== undefined) row.tags = item.tags
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
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
