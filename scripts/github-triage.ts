/**
 * Read research/github/*.jsonl and score issues + PRs for local triage.
 * Fetches per-PR details for open PRs (changed_files, mergeable).
 *
 * Usage: bun run scripts/github-triage.ts [--repo owner/name]
 */

import { readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const GH_DIR = join(ROOT, 'research', 'github')

type UnknownRecord = Record<string, unknown>

async function ghApiJson(pathWithQuery: string): Promise<UnknownRecord> {
  const proc = Bun.spawn(['gh', 'api', '-H', 'Accept: application/vnd.github+json', pathWithQuery], {
    stdout: 'pipe',
    stderr: 'pipe',
  })
  const err = await new Response(proc.stderr).text()
  const out = await new Response(proc.stdout).text()
  const code = await proc.exited
  if (code !== 0) {
    throw new Error(`gh api failed (${code}): ${pathWithQuery}\n${err || out}`)
  }
  return JSON.parse(out) as UnknownRecord
}

async function readJsonl(path: string): Promise<UnknownRecord[]> {
  const text = await readFile(path, 'utf8')
  const lines = text.trim().split('\n').filter(Boolean)
  return lines.map((line) => JSON.parse(line) as UnknownRecord)
}

function scoreIssue(issue: UnknownRecord): { score: number; tags: string[] } {
  const tags: string[] = []
  let score = 40
  const title = String(issue.title ?? '')
  const body = String(issue.body ?? '')
  const state = String(issue.state ?? '')

  if (state === 'open') {
    score += 10
    tags.push('open')
  }

  const t = `${title}\n${body}`.toLowerCase()
  if (/\bbug\b|mismatch|incorrect|wrong\b|overflow|crash|error\b/.test(t)) {
    score += 15
    tags.push('bug-ish')
  }
  if (/\bdoc|readme|example\b/.test(t)) {
    score += 8
    tags.push('docs-ish')
  }
  if (/\ba11y|accessib|screen reader|aria\b/i.test(t)) {
    score += 12
    tags.push('a11y-ish')
  }
  if (/\bperf|slow|optimization\b/.test(t)) {
    score += 10
    tags.push('perf-ish')
  }
  if (/\bssr|server\b/.test(t)) {
    score += 5
    tags.push('server-ish')
  }

  return { score, tags }
}

function scorePullFromDetail(
  base: UnknownRecord,
  detail: UnknownRecord | null,
): { score: number; tags: string[]; risk: string; cleanliness: string } {
  const tags: string[] = []
  let score = 35

  const state = String(base.state ?? '')
  const draft = Boolean(base.draft)
  const title = String(base.title ?? '')

  if (state === 'open') {
    score += 15
    tags.push('open')
  } else {
    tags.push('not-open')
  }

  if (draft) {
    score -= 45
    tags.push('draft')
  }

  const titleLower = title.toLowerCase()
  if (titleLower.startsWith('docs:') || titleLower.startsWith('doc:')) {
    score += 22
    tags.push('conventional-docs')
  }
  if (titleLower.startsWith('fix:') || titleLower.startsWith('fix(')) {
    score += 18
    tags.push('conventional-fix')
  }
  if (titleLower.startsWith('perf:')) {
    score += 14
    tags.push('conventional-perf')
  }
  if (/\bdemo\b/i.test(title)) {
    score -= 6
    tags.push('demo-heavy-title')
  }

  let risk: 'low' | 'medium' | 'high' = 'medium'
  let cleanliness: 'unknown' | 'likely-clean' | 'likely-messy' = 'unknown'

  if (detail) {
    const changed = Number(detail.changed_files ?? 999)
    const additions = Number(detail.additions ?? 0)
    const deletions = Number(detail.deletions ?? 0)
    const mergeable = detail.mergeable
    const mergeableState = String(detail.mergeable_state ?? '')

    if (changed <= 2 && additions + deletions < 80) {
      score += 20
      cleanliness = 'likely-clean'
      tags.push('small-diff')
    } else if (changed <= 8) {
      score += 8
      cleanliness = 'likely-clean'
      tags.push('medium-diff')
    } else {
      score -= 12
      cleanliness = 'likely-messy'
      tags.push('large-diff')
    }

    if (mergeable === false) {
      score -= 35
      tags.push('not-mergeable')
    }
    if (mergeableState === 'dirty') {
      score -= 12
      tags.push('mergeable-dirty')
    }

    if (changed > 25 || additions + deletions > 4000) {
      risk = 'high'
    } else if (changed <= 8 && additions + deletions < 500) {
      risk = 'low'
    }
  }

  return { score, tags, risk, cleanliness }
}

function formatIssueRow(i: UnknownRecord, scored: ReturnType<typeof scoreIssue>): string {
  const num = i.number
  const title = String(i.title ?? '').replace(/\|/g, '\\|')
  const state = String(i.state ?? '')
  return `| #${num} | ${state} | ${scored.score} | ${scored.tags.join(', ')} | ${title} |`
}

function formatPullRow(
  p: UnknownRecord,
  scored: ReturnType<typeof scorePullFromDetail>,
  detail: UnknownRecord | null,
): string {
  const num = p.number
  const title = String(p.title ?? '').replace(/\|/g, '\\|')
  const state = String(p.state ?? '')
  const draft = p.draft ? 'yes' : 'no'
  const files = detail ? String(detail.changed_files ?? '') : '—'
  const mergeable = detail && detail.mergeable != null ? String(detail.mergeable) : '—'
  return `| #${num} | ${state} | ${draft} | ${scored.score} | ${scored.risk} | ${files} | ${mergeable} | ${title} |`
}

async function main() {
  const args = process.argv.slice(2)
  let repo = 'chenglou/pretext'
  const repoIdx = args.indexOf('--repo')
  if (repoIdx >= 0 && args[repoIdx + 1]) {
    repo = args[repoIdx + 1]!
  }

  const [issues, pulls] = await Promise.all([
    readJsonl(join(GH_DIR, 'issues.jsonl')),
    readJsonl(join(GH_DIR, 'pulls.jsonl')),
  ])

  const issueRows: { issue: UnknownRecord; scored: ReturnType<typeof scoreIssue> }[] = []
  for (const issue of issues) {
    issueRows.push({ issue, scored: scoreIssue(issue) })
  }
  issueRows.sort((a, b) => b.scored.score - a.scored.score)

  const pullRows: {
    pull: UnknownRecord
    detail: UnknownRecord | null
    scored: ReturnType<typeof scorePullFromDetail>
  }[] = []

  for (const pull of pulls) {
    const state = String(pull.state ?? '')
    const num = Number(pull.number)
    let detail: UnknownRecord | null = null
    if (state === 'open' && Number.isFinite(num)) {
      detail = await ghApiJson(`repos/${repo}/pulls/${num}`)
    }
    const scored = scorePullFromDetail(pull, detail)
    pullRows.push({ pull, detail, scored })
  }

  pullRows.sort((a, b) => b.scored.score - a.scored.score)

  const wave1 = pullRows
    .filter(
      (r) =>
        String(r.pull.state ?? '') === 'open' &&
        !r.pull.draft &&
        r.scored.score >= 55 &&
        r.detail &&
        r.detail.mergeable !== false &&
        Number(r.detail.changed_files ?? 999) <= 12,
    )
    .slice(0, 5)

  const triage = {
    repo,
    generated_at: new Date().toISOString(),
    wave1_recommendations: wave1.map((r) => ({
      number: r.pull.number,
      title: r.pull.title,
      html_url: r.pull.html_url,
      score: r.scored.score,
      tags: r.scored.tags,
      risk: r.scored.risk,
      cleanliness: r.scored.cleanliness,
      changed_files: r.detail?.changed_files,
      additions: r.detail?.additions,
      deletions: r.detail?.deletions,
      head_sha: (r.pull.head as UnknownRecord | undefined)?.sha,
      head_ref: (r.pull.head as UnknownRecord | undefined)?.ref,
    })),
    issues_top: issueRows.slice(0, 25).map((r) => ({
      number: r.issue.number,
      title: r.issue.title,
      state: r.issue.state,
      score: r.scored.score,
      tags: r.scored.tags,
      html_url: r.issue.html_url,
    })),
    pulls_ranked: pullRows.map((r) => ({
      number: r.pull.number,
      title: r.pull.title,
      state: r.pull.state,
      draft: r.pull.draft,
      score: r.scored.score,
      tags: r.scored.tags,
      risk: r.scored.risk,
      cleanliness: r.scored.cleanliness,
      changed_files: r.detail?.changed_files ?? null,
      mergeable: r.detail?.mergeable ?? null,
      html_url: r.pull.html_url,
    })),
  }

  await writeFile(join(GH_DIR, 'triage.json'), `${JSON.stringify(triage, null, 2)}\n`, 'utf8')

  const md: string[] = []
  md.push(`# Upstream triage summary (${repo})`)
  md.push('')
  md.push(`Generated: ${triage.generated_at}`)
  md.push('')
  md.push('## Wave 1 (recommended safe PRs)')
  md.push('')
  if (wave1.length === 0) {
    md.push('_No candidates matched the default filters._')
  } else {
    md.push('| PR | Score | Risk | Files | Title |')
    md.push('|---:|---:|:---|---:|:---|')
    for (const r of wave1) {
      const n = r.pull.number
      const url = String(r.pull.html_url ?? '')
      md.push(
        `| [#${n}](${url}) | ${r.scored.score} | ${r.scored.risk} | ${r.detail?.changed_files} | ${String(r.pull.title ?? '')} |`,
      )
    }
  }
  md.push('')
  md.push('## Issues (top 25 by heuristic score)')
  md.push('')
  md.push('| # | State | Score | Tags | Title |')
  md.push('|---:|:---:|---:|:---|:---|')
  for (const r of issueRows.slice(0, 25)) {
    md.push(formatIssueRow(r.issue, r.scored))
  }
  md.push('')
  md.push('## PRs (all, ranked)')
  md.push('')
  md.push('| # | State | Draft | Score | Risk | Files | Mergeable | Title |')
  md.push('|---:|:---|:---:|:---:|---|---:|:---|:---|')
  for (const r of pullRows) {
    md.push(formatPullRow(r.pull, r.scored, r.detail))
  }
  md.push('')

  await writeFile(join(GH_DIR, 'triage-summary.md'), `${md.join('\n')}\n`, 'utf8')
  console.log('Wrote research/github/triage.json and triage-summary.md')
  console.log(
    'Wave1:',
    wave1.map((r) => `#${r.pull.number}`).join(', ') || '(none)',
  )
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
