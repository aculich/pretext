# Upstream triage summary (chenglou/pretext)

Generated: 2026-04-21T16:51:50.954Z

## Wave 1 (recommended safe PRs)

| PR | Score | Risk | Files | Title |
|---:|---:|:---|---:|:---|
| [#139](https://github.com/chenglou/pretext/pull/139) | 92 | low | 1 | docs: document breakableFitAdvances cache invariant |
| [#80](https://github.com/chenglou/pretext/pull/80) | 92 | low | 1 | docs: link to community awesome-pretext list |
| [#132](https://github.com/chenglou/pretext/pull/132) | 88 | low | 2 | fix: prevent rich inline CJK fragments from overflowing maxWidth |
| [#119](https://github.com/chenglou/pretext/pull/119) | 84 | low | 1 | perf: skip no-op merge passes in analysis pipeline |
| [#38](https://github.com/chenglou/pretext/pull/38) | 72 | medium | 5 | perf: complete V8 optimization suite (Phase 1-3: line-break, analysis, bidi) |

## Issues (top 25 by heuristic score)

| # | State | Score | Tags | Title |
|---:|:---:|---:|:---|:---|
| #59 | open | 85 | open, bug-ish, docs-ish, a11y-ish | Accessibility use case: using Pretext for WCAG text measurement |
| #6 | open | 75 | open, bug-ish, perf-ish | For fun: "Auto-researched" performance optimizations (analysis + bidi + layout) |
| #137 | open | 73 | open, bug-ish, docs-ish | getSegmentBreakableFitAdvances: cached result does not distinguish BreakableFitMode |
| #12 | open | 73 | open, bug-ish, docs-ish | Thank you for open-sourcing this project |
| #34 | open | 70 | open, bug-ish, server-ish | Feature request: pluggable measure function for non-browser environments |
| #136 | open | 65 | open, bug-ish | Simplify rich-inline: unify stepRichInlineLine/Stats and remove containsCJKText wrapper |
| #120 | open | 65 | open, bug-ish | Inline-rich mode + CJK fragment cause overflow |
| #89 | open | 65 | open, bug-ish | Mismatching cases (Pretext vs. CSS) |
| #88 | closed | 65 | bug-ish, perf-ish | layoutInlineItems in rich-note demo can overflow maxWidth |
| #84 | open | 65 | open, bug-ish | AI agent skill for helping developers use pretext correctly |
| #78 | open | 65 | open, bug-ish | Feature request: letterSpacing support in prepare() |
| #40 | open | 65 | open, bug-ish | Bug: In justification demo both 2nd and 3rd columns are broken at some width |
| #121 | closed | 63 | bug-ish, docs-ish | Bug: `layoutNextLine` and `walkLineRanges` mismatch with `layoutWithLines` |
| #117 | closed | 63 | bug-ish, docs-ish | layout() returns height: 0 for empty string — browser renders 1 × lineHeight |
| #91 | closed | 63 | bug-ish, docs-ish | Improve Pretext docs/examples for hyphenation with user-generated text |
| #77 | closed | 63 | bug-ish, docs-ish | [BUG] Pretext bidi: canvas.measureText vs DOM width divergence |
| #64 | closed | 63 | bug-ish, docs-ish | Bug: The smaller width, the greater height error calculated by the layout method. |
| #43 | closed | 63 | bug-ish, docs-ish | Inconsistent leading space behavior between layoutWithLines and layoutNextLine with ZWSP + space |
| #11 | closed | 63 | bug-ish, docs-ish | layout() and layoutWithLines() return different lineCount for trailing collapsible spaces |
| #153 | open | 60 | open, perf-ish | Feature request: incremental / append-only prepare API for streaming text UIs |
| #92 | closed | 60 | bug-ish, server-ish | `bun start` fails on Windows due to `lsof` not being available |
| #18 | open | 60 | open, perf-ish | performance question :) |
| #143 | open | 58 | open, docs-ish | Add direct tests for documented public APIs |
| #99 | open | 58 | open, docs-ish | Seeking feedback: Charming Pretext extension for flowing text inside shapes |
| #94 | open | 58 | open, docs-ish | Shrinkwrap showdown mix-up |

## PRs (all, ranked)

| # | State | Draft | Score | Risk | Files | Mergeable | Title |
|---:|:---|:---:|:---:|---|---:|:---|:---|
| #139 | open | no | 92 | low | 1 | — | docs: document breakableFitAdvances cache invariant |
| #80 | open | no | 92 | low | 1 | true | docs: link to community awesome-pretext list |
| #132 | open | no | 88 | low | 2 | true | fix: prevent rich inline CJK fragments from overflowing maxWidth |
| #119 | open | no | 84 | low | 1 | true | perf: skip no-op merge passes in analysis pipeline |
| #38 | open | no | 72 | medium | 5 | — | perf: complete V8 optimization suite (Phase 1-3: line-break, analysis, bidi) |
| #114 | open | no | 70 | low | 1 | true | Use localhost for Windows start script |
| #97 | open | no | 70 | low | 2 | true | Add real-world examples and performance benchmarks |
| #41 | open | no | 70 | low | 1 | true | Updated |
| #149 | open | no | 58 | low | 1 | true | test: add direct coverage for documented public APIs |
| #140 | open | no | 58 | low | 3 | true | Perf/streaming layout optimizations |
| #138 | open | no | 58 | low | 2 | — | simplify: unify stepRichInlineLine/Stats and remove containsCJKText wrapper |
| #126 | open | no | 58 | low | 3 | true | feat: add SSR support via setMeasureContext |
| #124 | open | no | 58 | low | 3 | true | Improve Korean keep-all mixed-script breaks |
| #90 | open | no | 58 | low | 4 | — | Add source span mapping to rich layout APIs |
| #81 | open | no | 58 | low | 1 | true | Docs/quickstart usage guide |
| #37 | open | no | 58 | low | 4 | — | Add vertical Japanese layout support |
| #23 | open | no | 58 | low | 5 | true | Add French language support to editorial demos |
| #21 | open | no | 58 | low | 2 | true | Add usage guide with practical examples and integration patterns |
| #17 | open | no | 58 | low | 3 | true | feat: add `setMeasureFunction` for custom measurement backends |
| #16 | open | no | 58 | low | 6 | true | feat: add MCP server for AI-assisted text measurement |
| #128 | closed | no | 57 | medium | — | — | docs: correct typo in comments and documentation |
| #125 | closed | no | 57 | medium | — | — | docs: fix unclosed parenthesis in walkLineRanges description |
| #104 | closed | no | 57 | medium | — | — | docs: clarify the current variable-font support story |
| #103 | closed | no | 57 | medium | — | — | docs: clarify bidi metadata and rich-path limits |
| #102 | closed | no | 57 | medium | — | — | docs: add hyphenation guidance for manual layout |
| #101 | closed | no | 57 | medium | — | — | docs: add a README FAQ for common onboarding questions |
| #75 | closed | no | 57 | medium | — | — | docs:add windows demos run instructions using vite |
| #30 | closed | no | 57 | medium | — | — | docs: add browser requirements section to README |
| #9 | closed | no | 57 | medium | — | — | docs: add integration tips to README |
| #148 | closed | no | 53 | medium | — | — | fix: CJK + opening bracket line break segmentation |
| #147 | closed | no | 53 | medium | — | — | fix: CJK + opening bracket line break segmentation |
| #146 | closed | no | 53 | medium | — | — | fix: CJK + opening bracket line break segmentation |
| #141 | closed | no | 53 | medium | — | — | fix: classify Hangul Compatibility Jamo (U+3130–U+318F) as CJK |
| #135 | closed | no | 53 | medium | — | — | fix: sync streaming line-break stepper with batch walker |
| #118 | closed | no | 53 | medium | — | — | fix: deduplicate isCJK test, remove no-op pre-wrap replace, document empty-string layout |
| #100 | closed | no | 53 | medium | — | — | fix: make the dev server start script cross-platform |
| #53 | closed | no | 53 | medium | — | — | fix: resume walk from pending break point to prevent segment skipping (#50) |
| #52 | closed | no | 53 | medium | — | — | fix: unify countPreparedLines with walkPreparedLines to fix lineCount mismatch (#49) |
| #33 | closed | no | 53 | medium | — | — | fix: add CJK Extension H/I to isCJK and fix pre-wrap fast path |
| #133 | open | no | 52 | low | 3 | true | Add Mouse & Cheese demo  |
| #113 | open | no | 52 | medium | 6 | — | demo: add Knuth-Plass optimal line-breaking with fitness classification |
| #93 | open | no | 52 | medium | 3 | true | feat(demos): Floating Languages — multilingual physics demo with live reflow |
| #79 | open | no | 52 | medium | 4 | true | feat: add CJK line-breaking demo |
| #46 | open | no | 52 | medium | 4 | true | Add virtual chat demo with side-by-side DOM-layout comparison |
| #32 | open | no | 52 | medium | 5 | true | added server-side canvas support & Created Masonry Demo |
| #31 | open | no | 52 | low | 3 | true | demo: virtual scroll with zero DOM measurement |
| #19 | open | no | 52 | medium | 4 | true | Add editorial reflow demo with drop cap and pull quote |
| #15 | closed | no | 49 | medium | — | — | perf: Fast-path splitSegmentByBreakKind for pure-text segments |
| #14 | closed | no | 49 | medium | — | — | perf: Replace Array.from with new Array in measureAnalysis |
| #10 | closed | no | 49 | medium | — | — | perf: speed up isCJK |
| #7 | closed | no | 47 | medium | — | — | fix(demo): text deselection in demos by skipping unchanged textContent writes |
| #105 | open | no | 41 | low | 2 | false | fix: currency symbols stick to adjacent numbers during line breaking |
| #29 | open | no | 41 | low | 2 | false | fix: align trailing collapsible space handling across all line-break paths |
| #109 | open | no | 38 | high | 16 | true | feat: resolve rem/em font units to px before canvas measurement |
| #155 | closed | no | 35 | medium | — | — | Unicode line breaks 18218157775797050513 |
| #154 | closed | no | 35 | medium | — | — | unicode-line-breaks-18218157775797050513 |
| #144 | closed | no | 35 | medium | — | — | test: add direct coverage for documented public APIs |
| #87 | closed | no | 35 | medium | — | — | Add masonry-next app with card actions and regression coverage |
| #83 | closed | no | 35 | medium | — | — | Support word-break: keep-all for CJK text |
| #82 | closed | no | 35 | medium | — | — | Fix bidi paragraph direction and add canvas-to-DOM shaping correction for RTL segments |
| #73 | closed | no | 35 | medium | — | — | Add SECURITY.md |
| #69 | closed | no | 35 | medium | — | — | Cleanup files to be published to npm |
| #67 | closed | no | 35 | medium | — | — | add bun start for windows |
| #66 | closed | no | 35 | medium | — | — | compatible-windows-start |
| #65 | closed | no | 35 | medium | — | — | Add LTR mark to README example string for bidi readability |
| #62 | closed | no | 35 | medium | — | — | Fix undefined variable in README example code |
| #61 | closed | no | 35 | medium | — | — | bun start available in Windows |
| #58 | closed | no | 35 | medium | — | — | chore: add repository field to package.json |
| #26 | closed | no | 35 | medium | — | — | refactor: split justification-comparison into .html + .ts |
| #24 | closed | no | 35 | medium | — | — | corpus(ko): replace Korean corpus with Sonagi by Hwang Sun-won |
| #13 | closed | no | 35 | medium | — | — | Use binary search for chunk lookup in layoutNextLine() |
| #4 | closed | no | 35 | medium | — | — | Bump dev deps and allow TypeScript 6 |
| #25 | closed | no | 29 | medium | — | — | demo: justification algorithm comparison (CSS vs Pretext vs Knuth-Plass) |
| #20 | open | no | 23 | low | 2 | false | Fix lineCount inconsistency between layout() and layoutWithLines() |
| #5 | open | no | 23 | low | 1 | false | Document layout/algorithm technique in README.md |
| #112 | open | yes | 13 | low | 3 | true | Add optional Playwright Chrome correctness driver |
| #35 | closed | yes | 12 | medium | — | — | docs: clarify prepare() vs layout() performance expectations |
| #108 | open | no | 11 | low | 2 | false | feat: letterSpacing option in prepare() |
| #72 | open | no | 11 | low | 4 | false | feat: add measurement host config entrypoint |
| #71 | open | no | 11 | medium | 6 | false | feat: add a compat entrypoint for portable regex support |
| #45 | open | no | 11 | low | 4 | false | Add intrinsic sizing APIs: minContentWidth and maxContentWidth |
| #3 | open | no | 11 | low | 7 | false | Fix bidi surrogate handling, ctx.font caching, emoji correction, and cleanup |
| #129 | closed | yes | 8 | medium | — | — | fix: preserve streamed line starts inside a chunk |

