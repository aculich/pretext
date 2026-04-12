# Features and fixes catalog

Baseline capabilities are described in [README.md](README.md) (APIs, `prepare` / `layout`, rich layout helpers, caveats). This file summarizes **library behavior** plus **fork-specific additions**.

## Core library (upstream-aligned)

- **DOM-free measurement** — `prepare` + `layout` for height/line count without layout thrash.
- **Rich layout APIs** — `prepareWithSegments`, `layoutWithLines`, `walkLineRanges`, `layoutNextLineRange`, `materializeLineRange`, `measureLineStats` (see README).
- **Modes** — `whiteSpace: 'pre-wrap'`, `wordBreak: 'keep-all'`, bidi-aware rich path.
- **Tooling** — Browser accuracy/benchmark pages, corpus sweeps, dashboards ([DEVELOPMENT.md](DEVELOPMENT.md)).

## Added in this fork (wave 1 — upstream PRs)

| Area | Change | Source |
|------|--------|--------|
| Documentation | README: correct parenthesis/wording in API glossary for line-range APIs | [PR #125](https://github.com/chenglou/pretext/pull/125) |
| Documentation | README: link to curated [awesome-pretext](https://github.com/ShipItAndPray/awesome-pretext) list | [PR #80](https://github.com/chenglou/pretext/pull/80) |
| Performance | Analysis pipeline skips redundant merge passes when a merge would be a no-op | [PR #119](https://github.com/chenglou/pretext/pull/119) (`src/analysis.ts`) |
| Developer experience | Windows demo server command binds to `127.0.0.1` via `localhost` in `start:windows` | [PR #114](https://github.com/chenglou/pretext/pull/114) |
| Documentation + examples | README: “Real-world use cases”, best-practices bullets, DOM vs Pretext comparison table | [PR #97](https://github.com/chenglou/pretext/pull/97) |
| Benchmarks | New optional script `benchmarks/simple-benchmark.ts` — micro-timing `layout()` in a loop (**needs canvas**; not a headless Bun script) | [PR #97](https://github.com/chenglou/pretext/pull/97) |

## Research / triage (not runtime features)

- **GitHub export** — `research/github/*.jsonl` snapshots for issues, PRs, and comments (`bun run github:export`).
- **Triage** — `research/github/triage.json` / `triage-summary.md` (`bun run github:triage`).
- **PRISSUES catalog** — [PRISSUES.md](PRISSUES.md) lists **every** exported upstream PR and issue with heuristic value, merge difficulty, and recommendations; machine-readable `research/github/priissues.json` (`bun run github:priissues`).
- **Accessibility fork analysis** — [research/github/pretext-a11y-analysis.md](research/github/pretext-a11y-analysis.md) (demo-layer a11y patterns; no `src/` changes in that fork snapshot).

## Not yet merged (examples)

Use [PRISSUES.md](PRISSUES.md) for the full ranked view. Examples: accessibility (#59), performance threads, CJK/hyphenation docs.

## How to refresh this document

After future integration waves, update the “Added in this fork” table from merged PR titles and run `bun run github:export`, `bun run github:triage`, and `bun run github:priissues` to refresh research artifacts.
