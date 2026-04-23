#!/usr/bin/env bun
/**
 * One-off Lighthouse performance runs for ecosystem catalog comparison:
 * 1) upstream awesome-pretext (GitHub Pages)
 * 2) local built catalog at site/ecosystem-catalog/ (served over HTTP)
 *
 * Prerequisites: Chrome/Chromium available (Lighthouse uses chrome-launcher).
 * Usage: bun run ecosystem:lighthouse [--skip-build]
 */

import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const root = path.join(import.meta.dir, '..')
const siteRoot = path.join(root, 'site')
const reportsDir = path.join(root, 'research/forks/lighthouse/reports')
const upstreamUrl = 'https://shipitandpray.github.io/awesome-pretext/'

const skipBuild = process.argv.includes('--skip-build')

function safeJoinSite(urlPath: string): string | null {
  const decoded = decodeURIComponent(urlPath)
  let rel = decoded === '/' || decoded === '' ? 'index.html' : decoded.slice(1)
  if (rel.endsWith('/')) rel += 'index.html'
  const abs = path.normalize(path.join(siteRoot, rel))
  if (!abs.startsWith(siteRoot)) return null
  return abs
}

async function main(): Promise<void> {
  if (!skipBuild) {
    const build = Bun.spawnSync(['bun', 'run', 'site:build'], { cwd: root, stdout: 'inherit', stderr: 'inherit' })
    if (build.exitCode !== 0) process.exit(build.exitCode ?? 1)
  }

  const catalogIndex = path.join(siteRoot, 'ecosystem-catalog', 'index.html')
  if (!(await Bun.file(catalogIndex).exists())) {
    console.error(`Missing ${catalogIndex}. Run: bun run site:build`)
    process.exit(1)
  }

  await mkdir(reportsDir, { recursive: true })

  const server = Bun.serve({
    port: 0,
    hostname: '127.0.0.1',
    async fetch(request) {
      const u = new URL(request.url)
      const abs = safeJoinSite(u.pathname)
      if (abs == null) return new Response('Forbidden', { status: 403 })
      const file = Bun.file(abs)
      if (!(await file.exists())) return new Response('Not Found', { status: 404 })
      return new Response(file)
    },
  })

  const localCatalogUrl = `http://127.0.0.1:${server.port}/ecosystem-catalog/`

  const lighthouseBin = path.join(root, 'node_modules', 'lighthouse', 'cli', 'index.js')
  if (!(await Bun.file(lighthouseBin).exists())) {
    console.error('Lighthouse CLI missing. Run: bun install')
    server.stop()
    process.exit(1)
  }

  const runs: { label: string; url: string; report: string }[] = [
    { label: 'awesome-pretext (upstream)', url: upstreamUrl, report: path.join(reportsDir, 'awesome-pretext.json') },
    { label: 'ecosystem-catalog (local site build)', url: localCatalogUrl, report: path.join(reportsDir, 'ecosystem-catalog-local.json') },
  ]

  console.log('Lighthouse targets:\n', runs.map((r) => `  ${r.label}\n    ${r.url}`).join('\n'), '\n')

  for (const run of runs) {
    const proc = Bun.spawn(
      [
        process.execPath,
        lighthouseBin,
        run.url,
        '--only-categories=performance',
        '--chrome-flags=--headless=new --no-sandbox --disable-gpu',
        '--output=json',
        `--output-path=${run.report}`,
        '--quiet',
      ],
      { cwd: root, stdout: 'inherit', stderr: 'inherit' },
    )
    const code = await proc.exited
    if (code !== 0) {
      console.error(`Lighthouse failed for ${run.label} (exit ${code})`)
      server.stop()
      process.exit(code)
    }
    await printSummary(run.label, run.report)
  }

  server.stop()
  console.log(`\nFull JSON reports: ${reportsDir}/`)
}

async function printSummary(label: string, reportPath: string): Promise<void> {
  const raw = await Bun.file(reportPath).text()
  const data = JSON.parse(raw) as {
    categories?: { performance?: { score: number | null } }
    audits?: Record<string, { numericValue?: number; displayValue?: string }>
  }
  const perf = data.categories?.performance?.score
  const score = perf == null ? 'n/a' : Math.round(perf * 100)
  const fcp = data.audits?.['first-contentful-paint']
  const lcp = data.audits?.['largest-contentful-paint']
  const tbt = data.audits?.['total-blocking-time']
  const cls = data.audits?.['cumulative-layout-shift']
  const si = data.audits?.['speed-index']

  console.log(`--- ${label} ---`)
  console.log(`  performance score: ${score}`)
  console.log(`  FCP: ${fcp?.displayValue ?? 'n/a'}`)
  console.log(`  LCP: ${lcp?.displayValue ?? 'n/a'}`)
  console.log(`  TBT: ${tbt?.displayValue ?? 'n/a'}`)
  console.log(`  CLS: ${cls?.displayValue ?? 'n/a'}`)
  console.log(`  Speed Index: ${si?.displayValue ?? 'n/a'}`)
}

await main()
