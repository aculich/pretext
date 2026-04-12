# PRISSUES: upstream PRs and issues catalog

This file is **generated** from `research/github/*.jsonl` plus live `gh api` pull details. It is a **heuristic** triage aid, not maintainer judgment.

- **Upstream snapshot (export):** 2026-04-12T12:17:26.762Z
- **Regenerated:** 2026-04-12T18:15:46.257Z
- **Repo:** chenglou/pretext
- **Regenerate:** `bun run github:export` (refresh JSONL) then `bun run github:priissues`

## Merge philosophy

Do **not** merge all open PRs at once. Prefer **small waves** (cherry-pick or branch per PR), verify with `bun run check`, `bun test`, and `bun run site:build`. See [WORKFLOW.md](WORKFLOW.md) and [DEVELOPMENT.md](DEVELOPMENT.md).

## Already integrated in this fork (wave 1)

See [FEATURES.md](FEATURES.md): PRs **#80, #97, #114, #119, #125** are marked `already_in_fork` below.

## External fork (not a GitHub PR row)

- [TheMarco/pretext-a11y](https://github.com/TheMarco/pretext-a11y) — demo accessibility patterns; analysis: [research/github/pretext-a11y-analysis.md](research/github/pretext-a11y-analysis.md)

## Summary counts

### Pull requests by merge difficulty (heuristic)

| Band | Count |
|:---|---:|
| easy | 37 |
| medium | 21 |
| hard | 8 |

### Pull requests by recommendation

| Recommendation | Count |
|:---|---:|
| already_in_fork | 5 |
| candidate_next | 3 |
| closed_unmerged | 23 |
| draft_hold | 2 |
| merged_upstream | 7 |
| review_carefully | 26 |

### Issues by effort (heuristic)

| Effort | Count |
|:---|---:|
| triage_only | 24 |
| doc_work | 6 |
| repro_needed | 4 |
| engine_work | 25 |

## Suggested next merge candidates (`candidate_next`)

[#17](https://github.com/chenglou/pretext/pull/17), [#41](https://github.com/chenglou/pretext/pull/41), [#81](https://github.com/chenglou/pretext/pull/81)

## All pull requests

| # | State | Merged | Draft | Files | +/− | Value | Difficulty | Recommendation | Title |
|---:|:---|:---:|:---:|:---:|---:|:---|:---|:---|:---|
| [#3](https://github.com/chenglou/pretext/pull/3) | open | no | no | 7 | 62+/32- | medium | medium | review_carefully | Fix bidi surrogate handling, ctx.font caching, emoji correction, and cleanup |
| [#4](https://github.com/chenglou/pretext/pull/4) | closed | yes | no | 2 | 36+/36- | high | easy | merged_upstream | Bump dev deps and allow TypeScript 6 |
| [#5](https://github.com/chenglou/pretext/pull/5) | open | no | no | 1 | 62+/0- | high | easy | review_carefully | Document layout/algorithm technique in README.md |
| [#7](https://github.com/chenglou/pretext/pull/7) | closed | no | no | 2 | 5+/5- | medium | easy | closed_unmerged | fix(demo): text deselection in demos by skipping unchanged textContent writes |
| [#9](https://github.com/chenglou/pretext/pull/9) | closed | no | no | 1 | 5+/0- | high | easy | closed_unmerged | docs: add integration tips to README |
| [#10](https://github.com/chenglou/pretext/pull/10) | closed | no | no | 3 | 52+/19- | high | easy | closed_unmerged | perf: speed up isCJK |
| [#13](https://github.com/chenglou/pretext/pull/13) | closed | no | no | 1 | 11+/4- | high | easy | closed_unmerged | Use binary search for chunk lookup in layoutNextLine() |
| [#14](https://github.com/chenglou/pretext/pull/14) | closed | no | no | 1 | 2+/2- | high | easy | closed_unmerged | perf: Replace Array.from with new Array in measureAnalysis |
| [#15](https://github.com/chenglou/pretext/pull/15) | closed | no | no | 1 | 6+/0- | high | easy | closed_unmerged | perf: Fast-path splitSegmentByBreakKind for pure-text segments |
| [#16](https://github.com/chenglou/pretext/pull/16) | open | no | no | 6 | 465+/0- | medium | medium | review_carefully | feat: add MCP server for AI-assisted text measurement |
| [#17](https://github.com/chenglou/pretext/pull/17) | open | no | no | 3 | 62+/6- | medium | easy | candidate_next | feat: add `setMeasureFunction` for custom measurement backends |
| [#19](https://github.com/chenglou/pretext/pull/19) | open | no | no | 4 | 580+/0- | low | medium | review_carefully | Add editorial reflow demo with drop cap and pull quote |
| [#20](https://github.com/chenglou/pretext/pull/20) | open | no | no | 2 | 34+/0- | high | easy | review_carefully | Fix lineCount inconsistency between layout() and layoutWithLines() |
| [#21](https://github.com/chenglou/pretext/pull/21) | open | no | no | 2 | 378+/0- | medium | medium | review_carefully | Add usage guide with practical examples and integration patterns |
| [#23](https://github.com/chenglou/pretext/pull/23) | open | no | no | 5 | 119+/8- | medium | medium | review_carefully | Add French language support to editorial demos |
| [#24](https://github.com/chenglou/pretext/pull/24) | closed | no | no | 10 | 294+/112- | medium | medium | closed_unmerged | corpus(ko): replace Korean corpus with Sonagi by Hwang Sun-won |
| [#25](https://github.com/chenglou/pretext/pull/25) | closed | yes | no | 1 | 993+/0- | low | medium | merged_upstream | demo: justification algorithm comparison (CSS vs Pretext vs Knuth-Plass) |
| [#26](https://github.com/chenglou/pretext/pull/26) | closed | yes | no | 2 | 992+/0- | medium | medium | merged_upstream | refactor: split justification-comparison into .html + .ts |
| [#29](https://github.com/chenglou/pretext/pull/29) | open | no | no | 2 | 46+/0- | high | easy | review_carefully | fix: align trailing collapsible space handling across all line-break paths |
| [#30](https://github.com/chenglou/pretext/pull/30) | open | no | no | 1 | 10+/0- | high | easy | review_carefully | docs: add browser requirements section to README |
| [#31](https://github.com/chenglou/pretext/pull/31) | open | no | no | 3 | 234+/0- | low | medium | review_carefully | demo: virtual scroll with zero DOM measurement |
| [#32](https://github.com/chenglou/pretext/pull/32) | open | no | no | 5 | 544+/1- | low | medium | review_carefully | added server-side canvas support & Created Masonry Demo |
| [#33](https://github.com/chenglou/pretext/pull/33) | closed | no | no | 2 | 12+/1- | high | easy | closed_unmerged | fix: add CJK Extension H/I to isCJK and fix pre-wrap fast path |
| [#35](https://github.com/chenglou/pretext/pull/35) | closed | no | yes | 1 | 7+/0- | low | hard | draft_hold | docs: clarify prepare() vs layout() performance expectations |
| [#37](https://github.com/chenglou/pretext/pull/37) | open | no | no | 4 | 108+/4- | medium | medium | review_carefully | Add vertical Japanese layout support |
| [#38](https://github.com/chenglou/pretext/pull/38) | open | no | no | 5 | 2182+/1290- | high | hard | review_carefully | perf: complete V8 optimization suite (Phase 1-3: line-break, analysis, bidi) |
| [#41](https://github.com/chenglou/pretext/pull/41) | open | no | no | 1 | 1+/1- | high | easy | candidate_next | Updated |
| [#45](https://github.com/chenglou/pretext/pull/45) | open | no | no | 4 | 167+/1- | medium | medium | review_carefully | Add intrinsic sizing APIs: minContentWidth and maxContentWidth |
| [#46](https://github.com/chenglou/pretext/pull/46) | open | no | no | 4 | 536+/0- | low | medium | review_carefully | Add virtual chat demo with side-by-side DOM-layout comparison |
| [#52](https://github.com/chenglou/pretext/pull/52) | closed | no | no | 1 | 5+/3- | high | easy | closed_unmerged | fix: unify countPreparedLines with walkPreparedLines to fix lineCount mismatch (#49) |
| [#53](https://github.com/chenglou/pretext/pull/53) | closed | no | no | 1 | 1086+/1084- | high | hard | closed_unmerged | fix: resume walk from pending break point to prevent segment skipping (#50) |
| [#58](https://github.com/chenglou/pretext/pull/58) | closed | yes | no | 1 | 1+/0- | high | easy | merged_upstream | chore: add repository field to package.json |
| [#61](https://github.com/chenglou/pretext/pull/61) | closed | no | no | 1 | 1+/1- | high | easy | closed_unmerged | bun start available in Windows |
| [#62](https://github.com/chenglou/pretext/pull/62) | open | no | no | 1 | 1+/1- | high | easy | review_carefully | Fix undefined variable in README example code |
| [#65](https://github.com/chenglou/pretext/pull/65) | closed | yes | no | 1 | 1+/1- | high | easy | merged_upstream | Add LTR mark to README example string for bidi readability |
| [#66](https://github.com/chenglou/pretext/pull/66) | closed | no | no | 2 | 371+/74- | medium | medium | closed_unmerged | compatible-windows-start |
| [#67](https://github.com/chenglou/pretext/pull/67) | closed | no | no | 2 | 164+/0- | medium | easy | closed_unmerged | add bun start for windows |
| [#69](https://github.com/chenglou/pretext/pull/69) | closed | no | no | 1 | 1+/8- | high | easy | closed_unmerged | Cleanup files to be published to npm |
| [#71](https://github.com/chenglou/pretext/pull/71) | open | no | no | 6 | 3089+/0- | medium | hard | review_carefully | feat: add a compat entrypoint for portable regex support |
| [#72](https://github.com/chenglou/pretext/pull/72) | open | no | no | 4 | 273+/16- | medium | medium | review_carefully | feat: add measurement host config entrypoint |
| [#73](https://github.com/chenglou/pretext/pull/73) | closed | no | no | 1 | 156+/0- | medium | easy | closed_unmerged | Add SECURITY.md |
| [#75](https://github.com/chenglou/pretext/pull/75) | closed | no | no | 1 | 9+/0- | high | easy | closed_unmerged | docs:add windows demos run instructions using vite |
| [#79](https://github.com/chenglou/pretext/pull/79) | open | no | no | 4 | 674+/0- | low | medium | review_carefully | feat: add CJK line-breaking demo |
| [#80](https://github.com/chenglou/pretext/pull/80) | open | no | no | 1 | 2+/0- | high | easy | already_in_fork | docs: link to community awesome-pretext list |
| [#81](https://github.com/chenglou/pretext/pull/81) | open | no | no | 1 | 91+/0- | high | easy | candidate_next | Docs/quickstart usage guide |
| [#82](https://github.com/chenglou/pretext/pull/82) | closed | no | no | 4 | 409+/3- | medium | medium | closed_unmerged | Fix bidi paragraph direction and add canvas-to-DOM shaping correction for RTL segments |
| [#83](https://github.com/chenglou/pretext/pull/83) | closed | no | no | 20 | 2039+/1389- | medium | hard | closed_unmerged | Support word-break: keep-all for CJK text |
| [#87](https://github.com/chenglou/pretext/pull/87) | closed | no | no | 20 | 1752+/0- | medium | hard | closed_unmerged | Add masonry-next app with card actions and regression coverage |
| [#90](https://github.com/chenglou/pretext/pull/90) | open | no | no | 4 | 269+/10- | medium | medium | review_carefully | Add source span mapping to rich layout APIs |
| [#93](https://github.com/chenglou/pretext/pull/93) | open | no | no | 3 | 987+/0- | low | medium | review_carefully | feat(demos): Floating Languages — multilingual physics demo with live reflow |
| [#97](https://github.com/chenglou/pretext/pull/97) | open | no | no | 2 | 45+/0- | high | easy | already_in_fork | Add real-world examples and performance benchmarks |
| [#100](https://github.com/chenglou/pretext/pull/100) | closed | no | no | 2 | 138+/3- | high | easy | closed_unmerged | fix: make the dev server start script cross-platform |
| [#101](https://github.com/chenglou/pretext/pull/101) | closed | no | no | 1 | 14+/0- | high | easy | closed_unmerged | docs: add a README FAQ for common onboarding questions |
| [#102](https://github.com/chenglou/pretext/pull/102) | closed | no | no | 1 | 11+/0- | high | easy | closed_unmerged | docs: add hyphenation guidance for manual layout |
| [#103](https://github.com/chenglou/pretext/pull/103) | closed | yes | no | 1 | 2+/0- | high | easy | merged_upstream | docs: clarify bidi metadata and rich-path limits |
| [#104](https://github.com/chenglou/pretext/pull/104) | closed | no | no | 1 | 1+/0- | high | easy | closed_unmerged | docs: clarify the current variable-font support story |
| [#105](https://github.com/chenglou/pretext/pull/105) | open | no | no | 2 | 13+/2- | high | easy | review_carefully | fix: currency symbols stick to adjacent numbers during line breaking |
| [#108](https://github.com/chenglou/pretext/pull/108) | open | no | no | 2 | 98+/16- | high | easy | review_carefully | feat: letterSpacing option in prepare() |
| [#109](https://github.com/chenglou/pretext/pull/109) | open | no | no | 16 | 4343+/6- | medium | hard | review_carefully | feat: resolve rem/em font units to px before canvas measurement |
| [#112](https://github.com/chenglou/pretext/pull/112) | open | no | yes | 3 | 159+/0- | low | hard | draft_hold | Add optional Playwright Chrome correctness driver |
| [#113](https://github.com/chenglou/pretext/pull/113) | open | no | no | 6 | 818+/2- | low | medium | review_carefully | demo: add Knuth-Plass optimal line-breaking with fitness classification |
| [#114](https://github.com/chenglou/pretext/pull/114) | open | no | no | 1 | 1+/1- | high | easy | already_in_fork | Use localhost for Windows start script |
| [#118](https://github.com/chenglou/pretext/pull/118) | closed | yes | no | 3 | 3+/8- | high | easy | merged_upstream | fix: deduplicate isCJK test, remove no-op pre-wrap replace, document empty-string layout |
| [#119](https://github.com/chenglou/pretext/pull/119) | open | no | no | 1 | 69+/0- | high | easy | already_in_fork | perf: skip no-op merge passes in analysis pipeline |
| [#124](https://github.com/chenglou/pretext/pull/124) | open | no | no | 3 | 196+/10- | medium | medium | review_carefully | Improve Korean keep-all mixed-script breaks |
| [#125](https://github.com/chenglou/pretext/pull/125) | open | no | no | 1 | 1+/1- | high | easy | already_in_fork | docs: fix unclosed parenthesis in walkLineRanges description |

### Recommendation legend (PRs)

| Tag | Meaning |
|:---|:---|
| `already_in_fork` | Wave 1 picked into this fork ([FEATURES.md](FEATURES.md)) |
| `merged_upstream` | Already merged on upstream `main` — sync via `upstream`, not cherry-pick |
| `closed_unmerged` | Closed without merge — inspect thread before reviving |
| `draft_hold` | Draft PR — wait for author |
| `candidate_next` | Heuristic: smaller / actionable open PR |
| `review_carefully` | Default for larger or riskier open PRs |
| `defer_large_surface` | Very large diff — plan dedicated time + tests |

## All issues (true issues only)

| # | State | Value | Effort | Notes | Title |
|---:|:---|:---|:---|:---|:---|
| [#1](https://github.com/chenglou/pretext/issues/1) | open | low | triage_only | general | Request: vertical-rtl |
| [#2](https://github.com/chenglou/pretext/issues/2) | closed | high | engine_work | general; server | speeding up isCJK |
| [#6](https://github.com/chenglou/pretext/issues/6) | open | high | engine_work | bug+engine; server | For fun: "Auto-researched" performance optimizations (analysis + bidi + layout) |
| [#8](https://github.com/chenglou/pretext/issues/8) | open | low | triage_only | general | usage guide needed ! |
| [#11](https://github.com/chenglou/pretext/issues/11) | closed | high | engine_work | bug+engine | layout() and layoutWithLines() return different lineCount for trailing collapsible spaces |
| [#12](https://github.com/chenglou/pretext/issues/12) | open | high | engine_work | bug+engine | Thank you for open-sourcing this project |
| [#18](https://github.com/chenglou/pretext/issues/18) | open | low | triage_only | discussion | performance question :) |
| [#22](https://github.com/chenglou/pretext/issues/22) | closed | low | triage_only | general | 支持能想到的所有语言？ |
| [#27](https://github.com/chenglou/pretext/issues/27) | closed | low | triage_only | general | Using opentype.js as backend |
| [#28](https://github.com/chenglou/pretext/issues/28) | open | high | engine_work | bug+engine | Error message "Intl.Segmenter is not a constructor" |
| [#34](https://github.com/chenglou/pretext/issues/34) | open | high | engine_work | bug+engine; server | Feature request: pluggable measure function for non-browser environments |
| [#36](https://github.com/chenglou/pretext/issues/36) | open | high | doc_work | docs | Agent skill for Pretext — helps AI coding agents use the library correctly |
| [#39](https://github.com/chenglou/pretext/issues/39) | open | low | triage_only | general | Prefessorchecker |
| [#40](https://github.com/chenglou/pretext/issues/40) | open | high | repro_needed | bug | Bug: In justification demo both 2nd and 3rd columns are broken at some width |
| [#42](https://github.com/chenglou/pretext/issues/42) | open | low | triage_only | discussion | Request: more demos? |
| [#43](https://github.com/chenglou/pretext/issues/43) | closed | high | engine_work | bug+engine | Inconsistent leading space behavior between layoutWithLines and layoutNextLine with ZWSP + space |
| [#44](https://github.com/chenglou/pretext/issues/44) | open | low | triage_only | general | Request: HTML layout |
| [#47](https://github.com/chenglou/pretext/issues/47) | closed | low | triage_only | general | bxbxbxbx |
| [#48](https://github.com/chenglou/pretext/issues/48) | closed | low | triage_only | general | jgjkuj |
| [#49](https://github.com/chenglou/pretext/issues/49) | closed | high | engine_work | bug+engine | Bug: layout() and layoutWithLines() disagree on lineCount when ZWSP forces overflow-wrap grapheme breaking at narrow widths |
| [#50](https://github.com/chenglou/pretext/issues/50) | closed | high | engine_work | bug+engine | Bug: layoutNextLine() produces different line breaks than layoutWithLines() on mixed-script text (CJK + RTL + emoji) |
| [#51](https://github.com/chenglou/pretext/issues/51) | closed | low | triage_only | general | Make text selectable by default |
| [#54](https://github.com/chenglou/pretext/issues/54) | closed | high | repro_needed | bug | Bug: Justification Algorithms Compared, Greedy with syllable-level hyphenation |
| [#55](https://github.com/chenglou/pretext/issues/55) | open | low | triage_only | discussion | can it use in form or table  or editTable? |
| [#56](https://github.com/chenglou/pretext/issues/56) | closed | low | triage_only | discussion | Have tested for performance bottlenecks? |
| [#57](https://github.com/chenglou/pretext/issues/57) | closed | high | engine_work | bug+engine | Adjacent symbols cause `layoutWithLines()` to swallow characters. |
| [#59](https://github.com/chenglou/pretext/issues/59) | open | high | engine_work | bug+engine | Accessibility use case: using Pretext for WCAG text measurement |
| [#60](https://github.com/chenglou/pretext/issues/60) | open | low | triage_only | general | cover to a skill for ai |
| [#63](https://github.com/chenglou/pretext/issues/63) | open | low | triage_only | general | 即Transforms架构之后的更复杂的向量数据解析的注意力机制引擎的雏形。 |
| [#64](https://github.com/chenglou/pretext/issues/64) | closed | high | engine_work | bug+engine | Bug: The smaller width, the greater height error calculated by the layout method. |
| [#68](https://github.com/chenglou/pretext/issues/68) | closed | high | engine_work | bug+engine | Dynamic Layout Demo Has Nondeterministic Movements? |
| [#70](https://github.com/chenglou/pretext/issues/70) | open | high | doc_work | docs | REQUEST: render an HTML string (rich text) which contains tags like h1, h2, or table |
| [#74](https://github.com/chenglou/pretext/issues/74) | closed | high | engine_work | bug+engine | Feature request: support `word-break: keep-all` for CJK text |
| [#76](https://github.com/chenglou/pretext/issues/76) | closed | low | triage_only | general | AI assisted coding |
| [#77](https://github.com/chenglou/pretext/issues/77) | closed | high | engine_work | bug+engine; server | [BUG] Pretext bidi: canvas.measureText vs DOM width divergence |
| [#78](https://github.com/chenglou/pretext/issues/78) | open | high | engine_work | bug+engine | Feature request: letterSpacing support in prepare() |
| [#84](https://github.com/chenglou/pretext/issues/84) | open | high | engine_work | bug+engine | AI agent skill for helping developers use pretext correctly |
| [#85](https://github.com/chenglou/pretext/issues/85) | closed | high | doc_work | docs | [suggestion] Could you add a quick start verification feature for Docker? |
| [#86](https://github.com/chenglou/pretext/issues/86) | open | high | doc_work | docs | Questions |
| [#88](https://github.com/chenglou/pretext/issues/88) | closed | high | engine_work | bug+engine | layoutInlineItems in rich-note demo can overflow maxWidth |
| [#89](https://github.com/chenglou/pretext/issues/89) | open | high | engine_work | bug+engine | Mismatching cases (Pretext vs. CSS) |
| [#91](https://github.com/chenglou/pretext/issues/91) | open | high | engine_work | bug+engine | Improve Pretext docs/examples for hyphenation with user-generated text |
| [#92](https://github.com/chenglou/pretext/issues/92) | closed | high | repro_needed | bug; server | `bun start` fails on Windows due to `lsof` not being available |
| [#94](https://github.com/chenglou/pretext/issues/94) | open | high | doc_work | docs | Shrinkwrap showdown mix-up |
| [#95](https://github.com/chenglou/pretext/issues/95) | open | low | triage_only | discussion | Question: VFont supported or not? |
| [#96](https://github.com/chenglou/pretext/issues/96) | closed | low | triage_only | general | 中文+连续数字出现断行问题 |
| [#98](https://github.com/chenglou/pretext/issues/98) | open | low | triage_only | general | Wrapping of "$___" is inconsistent with browser |
| [#99](https://github.com/chenglou/pretext/issues/99) | open | high | doc_work | docs | Seeking feedback: Charming Pretext extension for flowing text inside shapes |
| [#106](https://github.com/chenglou/pretext/issues/106) | closed | low | triage_only | discussion | Does the following preview work as expected?: "How Pretext.js works: measure once, lay out forever." |
| [#107](https://github.com/chenglou/pretext/issues/107) | open | low | triage_only | general | Canvas doesn't account for `letter-spacing`, `font-optical-sizing` and `font-feature-settings` |
| [#110](https://github.com/chenglou/pretext/issues/110) | open | low | triage_only | general | Justification not old enough, fonts not new enough. |
| [#111](https://github.com/chenglou/pretext/issues/111) | closed | low | triage_only | general | Missing `@chenglou/pretext/rich-inline` |
| [#115](https://github.com/chenglou/pretext/issues/115) | closed | high | engine_work | bug+engine | Duplicate test 'isCJK covers the newer CJK extension blocks' appears twice in layout.test.ts |
| [#116](https://github.com/chenglou/pretext/issues/116) | closed | high | engine_work | bug+engine | normalizeWhitespacePreWrap fast-path runs a no-op replace on every pre-wrap prepare() call |
| [#117](https://github.com/chenglou/pretext/issues/117) | closed | high | engine_work | bug+engine | layout() returns height: 0 for empty string — browser renders 1 × lineHeight |
| [#120](https://github.com/chenglou/pretext/issues/120) | open | high | repro_needed | bug | Inline-rich mode + CJK fragment cause overflow |
| [#121](https://github.com/chenglou/pretext/issues/121) | open | high | engine_work | bug+engine | Bug: `layoutNextLine` and `walkLineRanges` mismatch with `layoutWithLines` |
| [#122](https://github.com/chenglou/pretext/issues/122) | open | low | triage_only | general | Invalid regular expression: /\p{Script=Arabic}/: Invalid property name |
| [#123](https://github.com/chenglou/pretext/issues/123) | open | medium | engine_work | general; server | Server Side Rendering (SSR) support |

### Issue effort legend

| Tag | Meaning |
|:---|:---|
| `triage_only` | Question / discussion — may not need a code change |
| `doc_work` | Documentation or examples |
| `repro_needed` | Bug report — need minimal repro before fix |
| `engine_work` | Likely `src/` layout/measurement work |

