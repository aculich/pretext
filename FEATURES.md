# Features and fixes catalog

Baseline capabilities are described in [README.md](README.md) (APIs, `prepare` / `layout`, rich layout helpers, caveats). This file summarizes **library behavior** plus **fork-specific additions**.

## Core library (upstream-aligned)

- **DOM-free measurement** — `prepare` + `layout` for height/line count without layout thrash.
- **Rich layout APIs** — `prepareWithSegments`, `layoutWithLines`, `walkLineRanges`, `layoutNextLineRange`, `materializeLineRange`, `measureLineStats` (see README).
- **Modes** — `whiteSpace: 'pre-wrap'`, `wordBreak: 'keep-all'`, bidi-aware rich path.
- **Tooling** — Browser accuracy/benchmark pages, corpus sweeps, dashboards ([DEVELOPMENT.md](DEVELOPMENT.md)); performance vocabulary and measurement framing ([PERFORMANCE.md](PERFORMANCE.md)).

## Added in this fork (wave 1 — upstream PRs)

| Area | Change | Source |
|------|--------|--------|
| Documentation | README: correct parenthesis/wording in API glossary for line-range APIs | [PR #125](https://github.com/chenglou/pretext/pull/125) |
| Documentation | README: link to curated [awesome-pretext](https://github.com/ShipItAndPray/awesome-pretext) list | [PR #80](https://github.com/chenglou/pretext/pull/80) |
| Performance | Analysis pipeline skips redundant merge passes when a merge would be a no-op | [PR #119](https://github.com/chenglou/pretext/pull/119) (`src/analysis.ts`) |
| Developer experience | Windows demo server command binds to `127.0.0.1` via `localhost` in `start:windows` | [PR #114](https://github.com/chenglou/pretext/pull/114) |
| Documentation + examples | README: “Real-world use cases”, best-practices bullets, DOM vs Pretext comparison table | [PR #97](https://github.com/chenglou/pretext/pull/97) |
| Benchmarks | New optional script `benchmarks/simple-benchmark.ts` — micro-timing `layout()` in a loop (**needs canvas**; not a headless Bun script) | [PR #97](https://github.com/chenglou/pretext/pull/97) |

## Added in this fork (wave 2 — demos)

| Area | Change | Source |
|------|--------|--------|
| Demos | Virtual scroll list demo | [PR #31](https://github.com/chenglou/pretext/pull/31) |
| Demos | Virtual chat + DOM comparison | [PR #46](https://github.com/chenglou/pretext/pull/46) |
| Demos | CJK line-breaking explorer | [PR #79](https://github.com/chenglou/pretext/pull/79) |
| Demos | “Old Man and the Sea” editorial reflow / drop cap | [PR #19](https://github.com/chenglou/pretext/pull/19) |
| Demos | Floating Languages physics-style demo | [PR #93](https://github.com/chenglou/pretext/pull/93) |
| Demos | Optimal line breaking (Knuth–Plass) playground | [PR #113](https://github.com/chenglou/pretext/pull/113) |

## Added in this fork (wave 2 — capabilities and docs)

| Area | Change | Source |
|------|--------|--------|
| API | `setMeasureFunction()` for custom measurement backends (plus tests) | [PR #17](https://github.com/chenglou/pretext/pull/17) |
| API | Intrinsic sizing: `minContentWidth()` / `maxContentWidth()` | [PR #45](https://github.com/chenglou/pretext/pull/45) |
| Documentation | Quick start, framework snippets (React / Vue / Angular), “which API” table, trimmed overlap | [PR #81](https://github.com/chenglou/pretext/pull/81) |
| Documentation | Progressive **[USAGE.md](USAGE.md)** (hooks, canvas, shrink-wrap, columns) linked from README | [PR #21](https://github.com/chenglou/pretext/pull/21) |

## Research / triage (not runtime features)

- **GitHub export** — `research/github/*.jsonl` snapshots for issues, PRs, and comments (`bun run github:export`).
- **Triage** — `research/github/triage.json` / `triage-summary.md` (`bun run github:triage`).
- **PRISSUES catalog** — [PRISSUES.md](PRISSUES.md) lists **every** exported upstream PR and issue with heuristic value, merge difficulty, and recommendations; machine-readable `research/github/priissues.json` (`bun run github:priissues`).
- **Accessibility fork analysis** — [research/github/pretext-a11y-analysis.md](research/github/pretext-a11y-analysis.md) (demo-layer a11y patterns; no `src/` changes in that fork snapshot).

## Not yet merged (examples)

Use [PRISSUES.md](PRISSUES.md) for the full ranked view. Examples: accessibility (#59), performance threads, CJK/hyphenation docs.

## How to refresh this document

After future integration waves, update the “Added in this fork” table from merged PR titles and run `bun run github:export`, `bun run github:triage`, and `bun run github:priissues` to refresh research artifacts. For the full cadence (git merge from `upstream`, verification log, fork registry checks, optional new-fork search), follow [WORKFLOW.md](WORKFLOW.md) **Periodic upstream sync & triage**.
