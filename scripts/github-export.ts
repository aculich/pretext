/**
 * Export all GitHub issues, pull requests, and comments for chenglou/pretext
 * into research/github/*.jsonl (and a small manifest.json).
 *
 * Requires: `gh` CLI authenticated (`gh auth login`).
 *
 * Usage: bun run scripts/github-export.ts [--repo owner/name]
 */

import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const OUT_DIR = join(ROOT, 'research', 'github')

type JsonValue = Record<string, unknown> | unknown[] | string | number | boolean | null

async function ghApiJson(pathWithQuery: string): Promise<JsonValue> {
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
  return JSON.parse(out) as JsonValue
}

async function fetchAllPages<T extends JsonValue>(basePath: string): Promise<T[]> {
  const all: T[] = []
  let page = 1
  for (;;) {
    const sep = basePath.includes('?') ? '&' : '?'
    const path = `${basePath}${sep}per_page=100&page=${page}`
    const chunk = (await ghApiJson(path)) as unknown
    if (!Array.isArray(chunk)) {
      throw new Error(`Expected array from ${path}, got ${typeof chunk}`)
    }
    if (chunk.length === 0) break
    all.push(...(chunk as T[]))
    if (chunk.length < 100) break
    page += 1
  }
  return all
}

function writeJsonl(path: string, rows: unknown[]): Promise<void> {
  const lines = rows.map((r) => JSON.stringify(r))
  return writeFile(path, `${lines.join('\n')}\n`, 'utf8')
}

function partitionIssues(raw: Record<string, unknown>[]) {
  const issues: Record<string, unknown>[] = []
  const issueLikePrs: Record<string, unknown>[] = []
  for (const row of raw) {
    if (row.pull_request != null) {
      issueLikePrs.push(row)
    } else {
      issues.push(row)
    }
  }
  return { issues, issueLikePrs }
}

async function main() {
  const args = process.argv.slice(2)
  let repo = 'chenglou/pretext'
  const repoIdx = args.indexOf('--repo')
  if (repoIdx >= 0 && args[repoIdx + 1]) {
    repo = args[repoIdx + 1]!
  }

  await mkdir(OUT_DIR, { recursive: true })

  const exportedAt = new Date().toISOString()
  console.log(`Exporting ${repo} → ${OUT_DIR}`)

  const issuesRaw = await fetchAllPages<Record<string, unknown>>(`repos/${repo}/issues?state=all`)
  const { issues, issueLikePrs } = partitionIssues(issuesRaw)

  const pulls = await fetchAllPages<Record<string, unknown>>(`repos/${repo}/pulls?state=all`)

  const issueComments = await fetchAllPages<Record<string, unknown>>(`repos/${repo}/issues/comments`)
  const pullReviewComments = await fetchAllPages<Record<string, unknown>>(`repos/${repo}/pulls/comments`)

  await writeJsonl(join(OUT_DIR, 'issues.jsonl'), issues)
  await writeJsonl(join(OUT_DIR, 'issues.pull_requests_as_issues.jsonl'), issueLikePrs)
  await writeJsonl(join(OUT_DIR, 'pulls.jsonl'), pulls)
  await writeJsonl(join(OUT_DIR, 'issues.comments.jsonl'), issueComments)
  await writeJsonl(join(OUT_DIR, 'pulls.review_comments.jsonl'), pullReviewComments)

  const manifest = {
    repo,
    exported_at: exportedAt,
    counts: {
      issues: issues.length,
      issues_pull_requests_as_issues: issueLikePrs.length,
      pulls: pulls.length,
      issues_comments: issueComments.length,
      pulls_review_comments: pullReviewComments.length,
    },
    files: [
      'issues.jsonl',
      'issues.pull_requests_as_issues.jsonl',
      'pulls.jsonl',
      'issues.comments.jsonl',
      'pulls.review_comments.jsonl',
    ],
  }
  await writeFile(join(OUT_DIR, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')

  console.log('Done.', manifest.counts)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
