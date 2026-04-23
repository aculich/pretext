# Pretext ecosystem collection (aculich fork)

[![Awesome pretext site](https://img.shields.io/badge/awesome--pretext-site-0f766e)](https://shipitandpray.github.io/awesome-pretext/) [![Upstream Pretext](https://img.shields.io/badge/upstream-chenglou%2Fpretext-111827)](https://github.com/chenglou/pretext) [![Local catalog demo](https://img.shields.io/badge/catalog-demo-8b4d2f)](https://github.com/aculich/pretext/blob/main/pages/demos/ecosystem-catalog.html)

This document mirrors the *intent* of [ShipItAndPray/awesome-pretext](https://github.com/ShipItAndPray/awesome-pretext)’s README while grounding the **full superset** in [`ecosystem-inventory.json`](ecosystem-inventory.json). Regenerate both with `bun run ecosystem:intake`.

_Inventory generated: 2026-04-23 · 52 repos (core 40, adjacent 12, unclear 0)._

## How to read this vs awesome-pretext

1. **Official resources first** — upstream Pretext, live demos, community demo hub, development notes.
2. **Ecosystem packages with live demos** — curated in awesome-pretext `app.js`; we carry the same repos plus metadata from the GitHub API.
3. **Selected community experiments** — `communityProjects` in their `app.js`.
4. **Beyond their README** — discovery repos we added (see end). Intake also warns if their README introduces new `github.com/o/r` links not present in the inventory.

## Official Pretext resources

- [Pretext repository](https://github.com/chenglou/pretext)
- [Live demos by Cheng Lou](https://chenglou.me/pretext/)
- [Additional community demos](https://somnai-dreams.github.io/pretext-demos/)
- [Development notes](https://github.com/chenglou/pretext/blob/main/DEVELOPMENT.md)

## Flagship ecosystem packages (curated)

| Project | What it does | Links |
| --- | --- | --- |
| [`pretext-react`](https://github.com/ShipItAndPray/pretext-react) | React hooks and UI primitives for stable text sizing, bubbles, streaming text, and virtualization. | [demo](https://shipitandpray.github.io/pretext-react/) |
| [`pretext-chat`](https://github.com/ShipItAndPray/pretext-chat) | Chat UI components with precomputed message sizing and streaming-friendly layout. | [demo](https://shipitandpray.github.io/pretext-chat/) |
| [`pretext-terminal`](https://github.com/ShipItAndPray/pretext-terminal) | Canvas-first terminal and log UI for large scrollback and ANSI-rich output. | [demo](https://shipitandpray.github.io/pretext-terminal/) |
| [`pretext-editor`](https://github.com/ShipItAndPray/pretext-editor) | Canvas text editor using Pretext for line measurement instead of DOM text nodes. | [demo](https://shipitandpray.github.io/pretext-editor/) |
| [`pretext-pdf`](https://github.com/ShipItAndPray/pretext-pdf) | PDF generation with correct wrapping and pagination powered by Pretext + pdf-lib. | [demo](https://shipitandpray.github.io/pretext-pdf/) |

## Full machine catalog (superset)

Sorted by **use-case category** (from awesome-pretext when present), then repo. Demo and relevance come from [`ecosystem-inventory.json`](ecosystem-inventory.json).

| Repo | Category | Demo | Relevance | Stars | Forks | Pushed |
| --- | --- | --- | --- | ---: | ---: | --- |
| [`ShipItAndPray/pretext-chat`](https://github.com/ShipItAndPray/pretext-chat) | Chat & Logs | [demo](https://shipitandpray.github.io/pretext-chat/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-logviewer`](https://github.com/ShipItAndPray/pretext-logviewer) | Chat & Logs | [demo](https://shipitandpray.github.io/pretext-logviewer/) | `adjacent-pretext` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-repl`](https://github.com/ShipItAndPray/pretext-repl) | Chat & Logs | [demo](https://shipitandpray.github.io/pretext-repl/) | `adjacent-pretext` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-terminal`](https://github.com/ShipItAndPray/pretext-terminal) | Chat & Logs | [demo](https://shipitandpray.github.io/pretext-terminal/) | `core-pretext-ecosystem` | 1 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-blocks`](https://github.com/ShipItAndPray/pretext-blocks) | Editors & Docs | [demo](https://shipitandpray.github.io/pretext-blocks/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-captions`](https://github.com/ShipItAndPray/pretext-captions) | Editors & Docs | [demo](https://shipitandpray.github.io/pretext-captions/) | `adjacent-pretext` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-diff`](https://github.com/ShipItAndPray/pretext-diff) | Editors & Docs | [demo](https://shipitandpray.github.io/pretext-diff/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-diff-navigator`](https://github.com/ShipItAndPray/pretext-diff-navigator) | Editors & Docs | [demo](https://shipitandpray.github.io/pretext-diff-navigator/) | `adjacent-pretext` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-docgen`](https://github.com/ShipItAndPray/pretext-docgen) | Editors & Docs | [demo](https://shipitandpray.github.io/pretext-docgen/) | `core-pretext-ecosystem` | 1 | 0 | 2026-03-30 |
| [`ShipItAndPray/pretext-editor`](https://github.com/ShipItAndPray/pretext-editor) | Editors & Docs | [demo](https://shipitandpray.github.io/pretext-editor/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-epub`](https://github.com/ShipItAndPray/pretext-epub) | Editors & Docs | [demo](https://shipitandpray.github.io/pretext-epub/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-markdown`](https://github.com/ShipItAndPray/pretext-markdown) | Editors & Docs | [demo](https://shipitandpray.github.io/pretext-markdown/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-pdf`](https://github.com/ShipItAndPray/pretext-pdf) | Editors & Docs | [demo](https://shipitandpray.github.io/pretext-pdf/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-slides`](https://github.com/ShipItAndPray/pretext-slides) | Editors & Docs | [demo](https://shipitandpray.github.io/pretext-slides/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-accordion`](https://github.com/ShipItAndPray/pretext-accordion) | Foundations | [demo](https://shipitandpray.github.io/pretext-accordion/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-animate`](https://github.com/ShipItAndPray/pretext-animate) | Foundations | [demo](https://shipitandpray.github.io/pretext-animate/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-forms`](https://github.com/ShipItAndPray/pretext-forms) | Foundations | [demo](https://shipitandpray.github.io/pretext-forms/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-masonry`](https://github.com/ShipItAndPray/pretext-masonry) | Foundations | [demo](https://shipitandpray.github.io/pretext-masonry/) | `core-pretext-ecosystem` | 2 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-overflow-menu`](https://github.com/ShipItAndPray/pretext-overflow-menu) | Foundations | [demo](https://shipitandpray.github.io/pretext-overflow-menu/) | `adjacent-pretext` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-react`](https://github.com/ShipItAndPray/pretext-react) | Foundations | [demo](https://shipitandpray.github.io/pretext-react/) | `core-pretext-ecosystem` | 1 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-ssr`](https://github.com/ShipItAndPray/pretext-ssr) | Foundations | [demo](https://shipitandpray.github.io/pretext-ssr/) | `adjacent-pretext` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-tooltip`](https://github.com/ShipItAndPray/pretext-tooltip) | Foundations | [demo](https://shipitandpray.github.io/pretext-tooltip/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-truncate`](https://github.com/ShipItAndPray/pretext-truncate) | Foundations | [demo](https://shipitandpray.github.io/pretext-truncate/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-typewriter`](https://github.com/ShipItAndPray/pretext-typewriter) | Foundations | [demo](https://shipitandpray.github.io/pretext-typewriter/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-canvas`](https://github.com/ShipItAndPray/pretext-canvas) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-canvas/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-code-minimap`](https://github.com/ShipItAndPray/pretext-code-minimap) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-code-minimap/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-comic`](https://github.com/ShipItAndPray/pretext-comic) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-comic/) | `adjacent-pretext` | 1 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-gantt`](https://github.com/ShipItAndPray/pretext-gantt) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-gantt/) | `core-pretext-ecosystem` | 1 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-infinite-canvas`](https://github.com/ShipItAndPray/pretext-infinite-canvas) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-infinite-canvas/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-map-labels`](https://github.com/ShipItAndPray/pretext-map-labels) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-map-labels/) | `adjacent-pretext` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-og`](https://github.com/ShipItAndPray/pretext-og) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-og/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-sparkline`](https://github.com/ShipItAndPray/pretext-sparkline) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-sparkline/) | `core-pretext-ecosystem` | 1 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-tts-highlight`](https://github.com/ShipItAndPray/pretext-tts-highlight) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-tts-highlight/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-webxr`](https://github.com/ShipItAndPray/pretext-webxr) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-webxr/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-word-cloud`](https://github.com/ShipItAndPray/pretext-word-cloud) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-word-cloud/) | `adjacent-pretext` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-rn`](https://github.com/ShipItAndPray/pretext-rn) | Platform Targets | [demo](https://shipitandpray.github.io/pretext-rn/) | `adjacent-pretext` | 0 | 0 | 2026-03-30 |
| [`ShipItAndPray/pretext-table`](https://github.com/ShipItAndPray/pretext-table) | Platform Targets | [demo](https://shipitandpray.github.io/pretext-table/) | `core-pretext-ecosystem` | 1 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-a11y`](https://github.com/ShipItAndPray/pretext-a11y) | Testing & CI | [demo](https://shipitandpray.github.io/pretext-a11y/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-devtools`](https://github.com/ShipItAndPray/pretext-devtools) | Testing & CI | [demo](https://shipitandpray.github.io/pretext-devtools/) | `adjacent-pretext` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-i18n`](https://github.com/ShipItAndPray/pretext-i18n) | Testing & CI | [demo](https://shipitandpray.github.io/pretext-i18n/) | `adjacent-pretext` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-overflow-monitor`](https://github.com/ShipItAndPray/pretext-overflow-monitor) | Testing & CI | [demo](https://shipitandpray.github.io/pretext-overflow-monitor/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-storybook`](https://github.com/ShipItAndPray/pretext-storybook) | Testing & CI | [demo](https://shipitandpray.github.io/pretext-storybook/) | `core-pretext-ecosystem` | 1 | 0 | 2026-04-02 |
| [`0xNyk/pretext-playground`](https://github.com/0xNyk/pretext-playground) | Community | — | `core-pretext-ecosystem` | 23 | 0 | 2026-03-30 |
| [`acoyfellow/cloudterm`](https://github.com/acoyfellow/cloudterm) | Discovery | — | `core-pretext-ecosystem` | 1 | 0 | 2026-04-21 |
| [`cocktailpeanut/textmash`](https://github.com/cocktailpeanut/textmash) | Community | — | `core-pretext-ecosystem` | 0 | 0 | 2026-03-29 |
| [`darkroomengineering/fitbox`](https://github.com/darkroomengineering/fitbox) | Discovery | — | `core-pretext-ecosystem` | 3 | 0 | 2026-04-22 |
| [`jihchi/react-pretext`](https://github.com/jihchi/react-pretext) | Community | — | `core-pretext-ecosystem` | 1 | 0 | 2026-03-31 |
| [`joeflateau-octavius/pretext-rich`](https://github.com/joeflateau-octavius/pretext-rich) | Community | — | `core-pretext-ecosystem` | 2 | 0 | 2026-03-30 |
| [`lucascrespo23/pinch-type`](https://github.com/lucascrespo23/pinch-type) | Community | — | `core-pretext-ecosystem` | 106 | 2 | 2026-03-31 |
| [`mateffy/pretext-php`](https://github.com/mateffy/pretext-php) | Community | — | `core-pretext-ecosystem` | 0 | 0 | 2026-03-29 |
| [`somnai-dreams/preimage`](https://github.com/somnai-dreams/preimage) | Discovery | — | `core-pretext-ecosystem` | 1 | 0 | 2026-04-23 |
| [`Top-g-hash/nuxt-pretext`](https://github.com/Top-g-hash/nuxt-pretext) | Discovery | — | `core-pretext-ecosystem` | 1 | 0 | 2026-04-21 |

## Repos in this fork’s inventory but not in awesome-pretext README tables

- [`acoyfellow/cloudterm`](https://github.com/acoyfellow/cloudterm) — Web terminal emulator. DOM-rendered. Built on @chenglou/pretext.
- [`darkroomengineering/fitbox`](https://github.com/darkroomengineering/fitbox) — Reflow-free text-to-box fitting for React, built on Pretext.
- [`somnai-dreams/preimage`](https://github.com/somnai-dreams/preimage) — Fast, accurate & comprehensive image measurement & layout, based on @chenglou/pretext
- [`Top-g-hash/nuxt-pretext`](https://github.com/Top-g-hash/nuxt-pretext) — Pretext integration for Nuxt. Fast multiline text measurement without DOM reflow. Components, composables, and canvas rendering included.

