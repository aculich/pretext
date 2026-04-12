/**
 * Full upstream PR + issue catalog for triage (PRISSUES.md + priissues.json).
 * Fetches gh api pull details for every PR in pulls.jsonl (open + closed + merged).
 *
 * Usage: bun run scripts/priissues.ts [--repo owner/name] [--max-pr-api-calls N]
 */

import { readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const GH_DIR = join(ROOT, 'research', 'github')
const OUT_JSON = join(GH_DIR, 'priissues.json')
const OUT_MD = join(ROOT, 'PRISSUES.md')

/** Wave 1–2 PRs cherry-picked into aculich fork (see FEATURES.md). */
const ALREADY_IN_FORK = new Set([
  17, 19, 21, 31, 45, 46, 79, 80, 81, 93, 97, 113, 114, 119, 125,
])

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

function escCell(s: string): string {
  return s.replace(/\|/g, '\\|').replace(/\n/g, ' ')
}

type ValueBand = 'high' | 'medium' | 'low'
type Difficulty = 'easy' | 'medium' | 'hard'
type PrRecommendation =
  | 'already_in_fork'
  | 'merged_upstream'
  | 'closed_unmerged'
  | 'draft_hold'
  | 'candidate_next'
  | 'review_carefully'
  | 'defer_large_surface'

type IssueEffort = 'triage_only' | 'doc_work' | 'repro_needed' | 'engine_work'

type PrRow = {
  number: number
  title: string
  state: string
  draft: boolean
  html_url: string
  merged: boolean
  merged_at: string | null
  changed_files: number
  additions: number
  deletions: number
  mergeable: unknown
  value: ValueBand
  merge_difficulty: Difficulty
  recommendation: PrRecommendation
}

function prValueAndDifficulty(
  title: string,
  draft: boolean,
  changedFiles: number,
  delta: number,
): { value: ValueBand; merge_difficulty: Difficulty } {
  const t = title.toLowerCase()
  let value: ValueBand = 'medium'
  let merge_difficulty: Difficulty = 'medium'

  if (draft) {
    value = 'low'
    merge_difficulty = 'hard'
    return { value, merge_difficulty }
  }

  if (/^(docs|doc|fix|perf|chore|build)(\(|:)/.test(t) || /readme|typo|link to/.test(t)) {
    value = 'high'
  }
  if (/\bdemo\b|\bexample\b|\bwip\b/.test(t)) {
    value = value === 'high' ? 'medium' : 'low'
  }
  if (changedFiles <= 2 && delta < 120 && !/\bdemo\b/i.test(title)) {
    value = 'high'
  }

  if (changedFiles <= 3 && delta < 200) {
    merge_difficulty = 'easy'
  } else if (changedFiles > 18 || delta > 4500) {
    merge_difficulty = 'hard'
  } else if (changedFiles > 10 || delta > 1500) {
    merge_difficulty = 'hard'
  }

  return { value, merge_difficulty }
}

function prRecommendation(
  num: number,
  state: string,
  draft: boolean,
  mergedAt: string | null,
  mergeable: unknown,
  mergeDifficulty: Difficulty,
  value: ValueBand,
  changedFiles: number,
  delta: number,
  title: string,
): PrRecommendation {
  if (ALREADY_IN_FORK.has(num)) return 'already_in_fork'
  if (draft) return 'draft_hold'
  if (mergedAt) return 'merged_upstream'
  if (state === 'closed') return 'closed_unmerged'
  if (changedFiles > 22 || delta > 6000) return 'defer_large_surface'
  if (mergeable === false) return 'review_carefully'
  if (/\bdemo\b/i.test(title) && changedFiles > 12) return 'review_carefully'
  if (mergeDifficulty === 'easy' && value !== 'low') return 'candidate_next'
  if (mergeDifficulty === 'medium' && value === 'high') return 'candidate_next'
  if (mergeDifficulty === 'hard') return 'review_carefully'
  return 'review_carefully'
}

function issueEffortAndValue(issue: UnknownRecord): {
  issue_effort: IssueEffort
  value: ValueBand
  notes: string
} {
  const title = String(issue['title'] ?? '')
  const body = String(issue['body'] ?? '')
  const t = `${title}\n${body}`.toLowerCase()

  const bits: string[] = []
  const isBug = /\bbug\b|mismatch|incorrect|wrong|overflow|crash|error\b/i.test(t)
  const engineKw = /\blayout|break|bidi|canvas|segment|prepare|line-break|measurement\b/i.test(t)
  const isDoc = /\bdoc|readme|example|hyphenation guide\b/i.test(t)
  const isDiscuss =
    /\bquestion\b|seeking feedback|feedback wanted|discussion\b|^re:/i.test(t) || /\?/.test(title)

  let issue_effort: IssueEffort
  if (isBug && engineKw) {
    issue_effort = 'engine_work'
    bits.push('bug+engine')
  } else if (isBug) {
    issue_effort = 'repro_needed'
    bits.push('bug')
  } else if (isDoc) {
    issue_effort = 'doc_work'
    bits.push('docs')
  } else if (isDiscuss) {
    issue_effort = 'triage_only'
    bits.push('discussion')
  } else {
    issue_effort = 'triage_only'
    bits.push('general')
  }

  if (/\bssr|server-side|node\b/i.test(t)) {
    if (issue_effort === 'triage_only') issue_effort = 'engine_work'
    bits.push('server')
  }

  let value: ValueBand = 'medium'
  if (isBug || /\ba11y|accessib|wcag|screen reader\b/i.test(t) || /\bperf|slow|optimization\b/i.test(t)) {
    value = 'high'
  }
  if (isDoc) value = 'high'
  if (issue_effort === 'triage_only' && !isDoc && !isBug) value = 'low'

  return { issue_effort, value, notes: bits.join('; ') }
}

async function main() {
  const args = process.argv.slice(2)
  let repo = 'chenglou/pretext'
  let maxApi = Infinity
  const repoIdx = args.indexOf('--repo')
  if (repoIdx >= 0 && args[repoIdx + 1]) repo = args[repoIdx + 1]!
  const maxIdx = args.indexOf('--max-pr-api-calls')
  if (maxIdx >= 0 && args[maxIdx + 1]) maxApi = Math.max(0, Number(args[maxIdx + 1]))

  const manifestPath = join(GH_DIR, 'manifest.json')
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8')) as {
    exported_at?: string
    repo?: string
    counts?: Record<string, number>
  }

  const [issues, pulls] = await Promise.all([
    readJsonl(join(GH_DIR, 'issues.jsonl')),
    readJsonl(join(GH_DIR, 'pulls.jsonl')),
  ])

  pulls.sort((a, b) => Number(a['number']) - Number(b['number']))

  const prEnriched: PrRow[] = []
  let apiCalls = 0

  for (const pull of pulls) {
    const num = Number(pull['number'])
    if (!Number.isFinite(num)) continue
    let detail: UnknownRecord | null = null
    if (apiCalls < maxApi) {
      detail = await ghApiJson(`repos/${repo}/pulls/${num}`)
      apiCalls += 1
    }

    const title = String(pull['title'] ?? '')
    const state = String(pull['state'] ?? '')
    const draft = Boolean(pull['draft'])
    const htmlUrl = String(pull['html_url'] ?? '')

    const changedFiles = detail ? Number(detail['changed_files'] ?? 0) : 0
    const additions = detail ? Number(detail['additions'] ?? 0) : 0
    const deletions = detail ? Number(detail['deletions'] ?? 0) : 0
    const delta = additions + deletions
    const mergedAt = detail?.['merged_at'] != null ? String(detail['merged_at']) : null
    const mergeable = detail?.['mergeable']

    const { value, merge_difficulty } = prValueAndDifficulty(title, draft, changedFiles, delta)
    const recommendation = prRecommendation(
      num,
      state,
      draft,
      mergedAt,
      mergeable,
      merge_difficulty,
      value,
      changedFiles,
      delta,
      title,
    )

    const row: PrRow = {
      number: num,
      title,
      state,
      draft,
      html_url: htmlUrl,
      merged: Boolean(detail?.['merged']),
      merged_at: mergedAt,
      changed_files: changedFiles,
      additions,
      deletions,
      mergeable,
      value,
      merge_difficulty,
      recommendation,
    }
    prEnriched.push(row)
  }

  const issueRows = issues
    .map((issue) => {
      const num = Number(issue['number'])
      const title = String(issue['title'] ?? '')
      const state = String(issue['state'] ?? '')
      const htmlUrl = String(issue['html_url'] ?? '')
      const { issue_effort, value, notes } = issueEffortAndValue(issue)
      return { number: num, title, state, html_url: htmlUrl, issue_effort, value, notes }
    })
    .sort((a, b) => a.number - b.number)

  const generatedAt = new Date().toISOString()

  const priissues = {
    repo,
    upstream_manifest_exported_at: manifest.exported_at ?? null,
    generated_at: generatedAt,
    counts: {
      pulls: pulls.length,
      issues: issues.length,
      pr_api_calls: apiCalls,
    },
    wave1_in_fork: [...ALREADY_IN_FORK].sort((a, b) => a - b),
    pulls: prEnriched,
    issues: issueRows,
    summary: {
      pr_by_difficulty: { easy: 0, medium: 0, hard: 0 } as Record<Difficulty, number>,
      pr_by_recommendation: {} as Record<string, number>,
      issue_by_effort: { triage_only: 0, doc_work: 0, repro_needed: 0, engine_work: 0 } as Record<
        IssueEffort,
        number
      >,
    },
  }

  for (const p of prEnriched) {
    priissues.summary.pr_by_difficulty[p.merge_difficulty] += 1
    priissues.summary.pr_by_recommendation[p.recommendation] =
      (priissues.summary.pr_by_recommendation[p.recommendation] ?? 0) + 1
  }
  for (const i of issueRows) {
    priissues.summary.issue_by_effort[i.issue_effort] += 1
  }

  await writeFile(OUT_JSON, `${JSON.stringify(priissues, null, 2)}\n`, 'utf8')

  const md: string[] = []
  md.push('# PRISSUES: upstream PRs and issues catalog')
  md.push('')
  md.push(
    'This file is **generated** from `research/github/*.jsonl` plus live `gh api` pull details. It is a **heuristic** triage aid, not maintainer judgment.',
  )
  md.push('')
  md.push(`- **Upstream snapshot (export):** ${manifest.exported_at ?? 'unknown'}`)
  md.push(`- **Regenerated:** ${generatedAt}`)
  md.push(`- **Repo:** ${repo}`)
  md.push(
    `- **Regenerate:** \`bun run github:export\` (refresh JSONL) then \`bun run github:priissues\``,
  )
  md.push('')

  md.push('## Merge philosophy')
  md.push('')
  md.push(
    'Do **not** merge all open PRs at once. Prefer **small waves** (cherry-pick or branch per PR), verify with `bun run check`, `bun test`, and `bun run site:build`. See [WORKFLOW.md](WORKFLOW.md) and [DEVELOPMENT.md](DEVELOPMENT.md).',
  )
  md.push('')

  md.push('## Already integrated in this fork (wave 1)')
  md.push('')
  md.push(
    'See [FEATURES.md](FEATURES.md): PRs **#80, #97, #114, #119, #125** are marked `already_in_fork` below.',
  )
  md.push('')

  md.push('## External fork (not a GitHub PR row)')
  md.push('')
  md.push(
    '- [TheMarco/pretext-a11y](https://github.com/TheMarco/pretext-a11y) — demo accessibility patterns; analysis: [research/github/pretext-a11y-analysis.md](research/github/pretext-a11y-analysis.md)',
  )
  md.push('')

  md.push('## Summary counts')
  md.push('')
  md.push('### Pull requests by merge difficulty (heuristic)')
  md.push('')
  md.push('| Band | Count |')
  md.push('|:---|---:|')
  for (const k of ['easy', 'medium', 'hard'] as const) {
    md.push(`| ${k} | ${priissues.summary.pr_by_difficulty[k]} |`)
  }
  md.push('')
  md.push('### Pull requests by recommendation')
  md.push('')
  md.push('| Recommendation | Count |')
  md.push('|:---|---:|')
  const recKeys = Object.keys(priissues.summary.pr_by_recommendation).sort()
  for (const k of recKeys) {
    md.push(`| ${k} | ${priissues.summary.pr_by_recommendation[k]} |`)
  }
  md.push('')
  md.push('### Issues by effort (heuristic)')
  md.push('')
  md.push('| Effort | Count |')
  md.push('|:---|---:|')
  for (const k of ['triage_only', 'doc_work', 'repro_needed', 'engine_work'] as const) {
    md.push(`| ${k} | ${priissues.summary.issue_by_effort[k]} |`)
  }
  md.push('')

  const candidates = prEnriched.filter((p) => p.recommendation === 'candidate_next').map((p) => p.number)
  md.push('## Suggested next merge candidates (`candidate_next`)')
  md.push('')
  if (candidates.length === 0) {
    md.push('_None under current heuristics; inspect `review_carefully` and open PRs manually._')
  } else {
    md.push(
      candidates.map((n) => `[#${n}](https://github.com/${repo}/pull/${n})`).join(', '),
    )
  }
  md.push('')

  md.push('## All pull requests')
  md.push('')
  md.push(
    '| # | State | Merged | Draft | Files | +/− | Value | Difficulty | Recommendation | Title |',
  )
  md.push('|---:|:---|:---:|:---:|:---:|---:|:---|:---|:---|:---|')
  for (const p of prEnriched) {
    const delta = `${p.additions}+/${p.deletions}-`
    md.push(
      `| [#${p.number}](${p.html_url}) | ${p.state} | ${p.merged ? 'yes' : 'no'} | ${p.draft ? 'yes' : 'no'} | ${p.changed_files} | ${delta} | ${p.value} | ${p.merge_difficulty} | ${p.recommendation} | ${escCell(p.title)} |`,
    )
  }
  md.push('')

  md.push('### Recommendation legend (PRs)')
  md.push('')
  md.push('| Tag | Meaning |')
  md.push('|:---|:---|')
  md.push('| `already_in_fork` | Wave 1 picked into this fork ([FEATURES.md](FEATURES.md)) |')
  md.push('| `merged_upstream` | Already merged on upstream `main` — sync via `upstream`, not cherry-pick |')
  md.push('| `closed_unmerged` | Closed without merge — inspect thread before reviving |')
  md.push('| `draft_hold` | Draft PR — wait for author |')
  md.push('| `candidate_next` | Heuristic: smaller / actionable open PR |')
  md.push('| `review_carefully` | Default for larger or riskier open PRs |')
  md.push('| `defer_large_surface` | Very large diff — plan dedicated time + tests |')
  md.push('')

  md.push('## All issues (true issues only)')
  md.push('')
  md.push('| # | State | Value | Effort | Notes | Title |')
  md.push('|---:|:---|:---|:---|:---|:---|')
  for (const i of issueRows) {
    md.push(
      `| [#${i.number}](${i.html_url}) | ${i.state} | ${i.value} | ${i.issue_effort} | ${escCell(i.notes)} | ${escCell(i.title)} |`,
    )
  }
  md.push('')

  md.push('### Issue effort legend')
  md.push('')
  md.push('| Tag | Meaning |')
  md.push('|:---|:---|')
  md.push('| `triage_only` | Question / discussion — may not need a code change |')
  md.push('| `doc_work` | Documentation or examples |')
  md.push('| `repro_needed` | Bug report — need minimal repro before fix |')
  md.push('| `engine_work` | Likely `src/` layout/measurement work |')
  md.push('')

  await writeFile(OUT_MD, `${md.join('\n')}\n`, 'utf8')
  console.log(`Wrote ${OUT_MD} and ${OUT_JSON} (${apiCalls} gh pull API calls)`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
