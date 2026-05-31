# Pretext ecosystem collection (aculich fork)

[![Awesome pretext site](https://img.shields.io/badge/awesome--pretext-site-0f766e)](https://shipitandpray.github.io/awesome-pretext/) [![Upstream Pretext](https://img.shields.io/badge/upstream-chenglou%2Fpretext-111827)](https://github.com/chenglou/pretext) [![Local catalog demo](https://img.shields.io/badge/catalog-demo-8b4d2f)](https://github.com/aculich/pretext/blob/main/pages/demos/ecosystem-catalog.html)

This document mirrors the *intent* of [ShipItAndPray/awesome-pretext](https://github.com/ShipItAndPray/awesome-pretext)’s README while grounding the **full superset** in [`ecosystem-inventory.json`](ecosystem-inventory.json). Regenerate both with `bun run ecosystem:intake`.

_Inventory generated: 2026-05-31 · 170 repos (core 119, adjacent 33, unclear 18)._

## How to read this vs awesome-pretext

1. **Official resources first** — upstream Pretext, live demos, community demo hub, development notes.
2. **Ecosystem packages with live demos** — curated in awesome-pretext `app.js`; we carry the same repos plus metadata from the GitHub API.
3. **Selected community experiments** — `communityProjects` in their `app.js`.
4. **Beyond their README** — discovery repos we added (see end), plus repos found via **GitHub code search** for `package.json` references to Pretext (see dedicated section). Intake also warns if their README introduces new `github.com/o/r` links not present in the inventory.

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
| [`ShipItAndPray/pretext-diff-navigator`](https://github.com/ShipItAndPray/pretext-diff-navigator) | Editors & Docs | [demo](https://shipitandpray.github.io/pretext-diff-navigator/) | `adjacent-pretext` | 1 | 0 | 2026-04-02 |
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
| [`ShipItAndPray/pretext-ssr`](https://github.com/ShipItAndPray/pretext-ssr) | Foundations | [demo](https://shipitandpray.github.io/pretext-ssr/) | `adjacent-pretext` | 1 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-tooltip`](https://github.com/ShipItAndPray/pretext-tooltip) | Foundations | [demo](https://shipitandpray.github.io/pretext-tooltip/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-truncate`](https://github.com/ShipItAndPray/pretext-truncate) | Foundations | [demo](https://shipitandpray.github.io/pretext-truncate/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-typewriter`](https://github.com/ShipItAndPray/pretext-typewriter) | Foundations | [demo](https://shipitandpray.github.io/pretext-typewriter/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-canvas`](https://github.com/ShipItAndPray/pretext-canvas) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-canvas/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-code-minimap`](https://github.com/ShipItAndPray/pretext-code-minimap) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-code-minimap/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-comic`](https://github.com/ShipItAndPray/pretext-comic) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-comic/) | `adjacent-pretext` | 1 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-gantt`](https://github.com/ShipItAndPray/pretext-gantt) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-gantt/) | `core-pretext-ecosystem` | 1 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-infinite-canvas`](https://github.com/ShipItAndPray/pretext-infinite-canvas) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-infinite-canvas/) | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-map-labels`](https://github.com/ShipItAndPray/pretext-map-labels) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-map-labels/) | `adjacent-pretext` | 0 | 0 | 2026-04-02 |
| [`ShipItAndPray/pretext-og`](https://github.com/ShipItAndPray/pretext-og) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-og/) | `core-pretext-ecosystem` | 1 | 0 | 2026-04-02 |
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
| [`0xnayuta/0xnayuta.github.io`](https://github.com/0xnayuta/0xnayuta.github.io) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-17 |
| [`0xNyk/pretext-playground`](https://github.com/0xNyk/pretext-playground) | Community | — | `core-pretext-ecosystem` | 39 | 4 | 2026-03-30 |
| [`0xRupeshSardar/0xrupeshsardar.github.io`](https://github.com/0xRupeshSardar/0xrupeshsardar.github.io) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-27 |
| [`1sh22/pretex`](https://github.com/1sh22/pretex) | Code search (importers) | — | `core-pretext-ecosystem` | 1 | 0 | 2026-04-20 |
| [`acoyfellow/cloudterm`](https://github.com/acoyfellow/cloudterm) | Discovery | — | `core-pretext-ecosystem` | 1 | 0 | 2026-05-13 |
| [`aflansburg/consultme`](https://github.com/aflansburg/consultme) | Code search (importers) | — | `core-pretext-ecosystem` | 1 | 0 | 2026-05-29 |
| [`alexanderchen/typebeat`](https://github.com/alexanderchen/typebeat) | Code search (importers) | — | `core-pretext-ecosystem` | 6 | 1 | 2026-04-02 |
| [`alpeshvas/pretext-pdfjs`](https://github.com/alpeshvas/pretext-pdfjs) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-03-31 |
| [`amulil/amulil`](https://github.com/amulil/amulil) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-27 |
| [`AnanyaKulkarni205/TailsOfBijapur`](https://github.com/AnanyaKulkarni205/TailsOfBijapur) | Code search (importers) | — | `adjacent-pretext` | 1 | 2 | 2026-05-01 |
| [`AntoniovanDijck/sharecap`](https://github.com/AntoniovanDijck/sharecap) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-13 |
| [`archiseino/pretext-playground`](https://github.com/archiseino/pretext-playground) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-13 |
| [`ashishkr710/portfolio_Ashish`](https://github.com/ashishkr710/portfolio_Ashish) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-22 |
| [`aswinzz/portfolio`](https://github.com/aswinzz/portfolio) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-01 |
| [`B4uti4github/tslash`](https://github.com/B4uti4github/tslash) | Code search (importers) | — | `core-pretext-ecosystem` | 1 | 0 | 2026-04-03 |
| [`bamarler/bamarler`](https://github.com/bamarler/bamarler) | Code search (importers) | — | `adjacent-pretext` | 0 | 0 | 2026-04-01 |
| [`BlackBoxRecorder/memos`](https://github.com/BlackBoxRecorder/memos) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-25 |
| [`blackjune67/asterum-system`](https://github.com/blackjune67/asterum-system) | Code search (importers) | — | `adjacent-pretext` | 0 | 0 | 2026-04-21 |
| [`BrianIto/portfolio`](https://github.com/BrianIto/portfolio) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-28 |
| [`bunizao/site`](https://github.com/bunizao/site) | Code search (importers) | — | `core-pretext-ecosystem` | 3 | 0 | 2026-05-31 |
| [`cathy0305/studio_ipad`](https://github.com/cathy0305/studio_ipad) | Code search (importers) | — | `adjacent-pretext` | 0 | 0 | 2026-05-26 |
| [`chomiruku/seija-kij.in`](https://github.com/chomiruku/seija-kij.in) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-25 |
| [`chthollyphile/folia-major`](https://github.com/chthollyphile/folia-major) | Code search (importers) | — | `core-pretext-ecosystem` | 99 | 11 | 2026-05-31 |
| [`cocktailpeanut/textmash`](https://github.com/cocktailpeanut/textmash) | Community | — | `core-pretext-ecosystem` | 0 | 0 | 2026-03-29 |
| [`code-highway-patrol/chp-web`](https://github.com/code-highway-patrol/chp-web) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-26 |
| [`codehz/pretext-bug-diag`](https://github.com/codehz/pretext-bug-diag) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-09 |
| [`Cofounder-Customer-Projects-1/shonda-martin-media-5c2fd1-marketing`](https://github.com/Cofounder-Customer-Projects-1/shonda-martin-media-5c2fd1-marketing) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-15 |
| [`Compassie/Flame-test`](https://github.com/Compassie/Flame-test) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-07 |
| [`darkroomengineering/fitbox`](https://github.com/darkroomengineering/fitbox) | Discovery | — | `core-pretext-ecosystem` | 7 | 0 | 2026-04-22 |
| [`daytonaio/daytona`](https://github.com/daytonaio/daytona) | Code search (importers) | — | `core-pretext-ecosystem` | 72501 | 5613 | 2026-05-31 |
| [`developing-today/code`](https://github.com/developing-today/code) | Code search (importers) | — | `unclear-or-noise` | 1 | 0 | 2026-05-28 |
| [`DovieW/microbook-maker`](https://github.com/DovieW/microbook-maker) | Code search (importers) | — | `adjacent-pretext` | 3 | 0 | 2026-05-01 |
| [`Dragslayr/creativeProjects`](https://github.com/Dragslayr/creativeProjects) | Code search (importers) | — | `adjacent-pretext` | 0 | 0 | 2026-04-19 |
| [`dredamonsta1/andre-portfolio-react`](https://github.com/dredamonsta1/andre-portfolio-react) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-22 |
| [`eanzhao/Aexon`](https://github.com/eanzhao/Aexon) | Code search (importers) | — | `adjacent-pretext` | 4 | 0 | 2026-04-22 |
| [`eiaserinnys/remiel`](https://github.com/eiaserinnys/remiel) | Code search (importers) | — | `unclear-or-noise` | 0 | 0 | 2026-05-29 |
| [`electrifiedchan/sparta-edge-proctoring`](https://github.com/electrifiedchan/sparta-edge-proctoring) | Code search (importers) | — | `adjacent-pretext` | 0 | 0 | 2026-05-07 |
| [`fakoli/baara-next`](https://github.com/fakoli/baara-next) | Code search (importers) | — | `unclear-or-noise` | 1 | 0 | 2026-05-26 |
| [`fibegg/fibe-agent`](https://github.com/fibegg/fibe-agent) | Code search (importers) | — | `core-pretext-ecosystem` | 1 | 1 | 2026-05-31 |
| [`filipsjolanderr/filip-personal`](https://github.com/filipsjolanderr/filip-personal) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-07 |
| [`fvnju/noteey`](https://github.com/fvnju/noteey) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-28 |
| [`HachiXD/Gatherend`](https://github.com/HachiXD/Gatherend) | Code search (importers) | — | `unclear-or-noise` | 6 | 2 | 2026-05-28 |
| [`HamsterNote/HtmlParser`](https://github.com/HamsterNote/HtmlParser) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-29 |
| [`Haneef99/portfolio`](https://github.com/Haneef99/portfolio) | Code search (importers) | — | `adjacent-pretext` | 0 | 0 | 2026-04-05 |
| [`haoyangli16/pretext-research-tools`](https://github.com/haoyangli16/pretext-research-tools) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-03-31 |
| [`haru516-web/burn_two`](https://github.com/haru516-web/burn_two) | Code search (importers) | — | `core-pretext-ecosystem` | 1 | 1 | 2026-05-16 |
| [`hencter/newtab-home`](https://github.com/hencter/newtab-home) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-30 |
| [`heygen-com/hyperframes`](https://github.com/heygen-com/hyperframes) | Code search (importers) | — | `unclear-or-noise` | 22794 | 2117 | 2026-05-31 |
| [`HongMing-Huang/pretext-frontend-motion`](https://github.com/HongMing-Huang/pretext-frontend-motion) | Code search (importers) | — | `adjacent-pretext` | 2 | 0 | 2026-05-25 |
| [`Icamtu/algo-trader`](https://github.com/Icamtu/algo-trader) | Code search (importers) | — | `unclear-or-noise` | 0 | 0 | 2026-05-30 |
| [`JAYATIAHUJA/Basilisk-s-Hunger`](https://github.com/JAYATIAHUJA/Basilisk-s-Hunger) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-03-31 |
| [`jensrot/portfolio-site`](https://github.com/jensrot/portfolio-site) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-26 |
| [`JeromyJSmith/GraftKit`](https://github.com/JeromyJSmith/GraftKit) | Code search (importers) | — | `unclear-or-noise` | 1 | 0 | 2026-05-12 |
| [`jihchi/react-pretext`](https://github.com/jihchi/react-pretext) | Community | — | `core-pretext-ecosystem` | 1 | 0 | 2026-03-31 |
| [`jmilinovich/daily-paper`](https://github.com/jmilinovich/daily-paper) | Code search (importers) | — | `core-pretext-ecosystem` | 1 | 0 | 2026-03-31 |
| [`joeflateau-octavius/pretext-rich`](https://github.com/joeflateau-octavius/pretext-rich) | Community | — | `core-pretext-ecosystem` | 2 | 0 | 2026-03-30 |
| [`joshuadsilva1/altbridge`](https://github.com/joshuadsilva1/altbridge) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 1 | 2026-04-08 |
| [`kabeer11000/otherdev.web-02`](https://github.com/kabeer11000/otherdev.web-02) | Code search (importers) | — | `adjacent-pretext` | 0 | 0 | 2026-05-31 |
| [`kristianernst/piui`](https://github.com/kristianernst/piui) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-16 |
| [`leCheeseRoyale/ascii-games`](https://github.com/leCheeseRoyale/ascii-games) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-23 |
| [`leesangb/caret`](https://github.com/leesangb/caret) | Code search (importers) | — | `unclear-or-noise` | 0 | 0 | 2026-04-14 |
| [`leesx/pretext-time-typography`](https://github.com/leesx/pretext-time-typography) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-09 |
| [`liam-brophy/pretext`](https://github.com/liam-brophy/pretext) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-13 |
| [`Liiift-Studio/AxisRhythm`](https://github.com/Liiift-Studio/AxisRhythm) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-31 |
| [`Liiift-Studio/SteadyGray`](https://github.com/Liiift-Studio/SteadyGray) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-31 |
| [`lkevincc0/agent-react-native-template`](https://github.com/lkevincc0/agent-react-native-template) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-16 |
| [`llstarfish/pretext-dog`](https://github.com/llstarfish/pretext-dog) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-01 |
| [`lucascrespo23/pinch-type`](https://github.com/lucascrespo23/pinch-type) | Community | — | `core-pretext-ecosystem` | 107 | 2 | 2026-03-31 |
| [`luckysolanki902/luckysolanki`](https://github.com/luckysolanki902/luckysolanki) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-19 |
| [`MarJC5/wp-agent`](https://github.com/MarJC5/wp-agent) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-13 |
| [`mateffy/pretext-php`](https://github.com/mateffy/pretext-php) | Community | — | `core-pretext-ecosystem` | 1 | 0 | 2026-03-29 |
| [`mayneyao/eidos`](https://github.com/mayneyao/eidos) | Code search (importers) | — | `unclear-or-noise` | 3134 | 135 | 2026-05-30 |
| [`MonaSweataSK/pretext-demo`](https://github.com/MonaSweataSK/pretext-demo) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-26 |
| [`muni106/munilogs`](https://github.com/muni106/munilogs) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-03 |
| [`nacs-970/gallery`](https://github.com/nacs-970/gallery) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-17 |
| [`NolanCotter/svelte-tool-dashboard`](https://github.com/NolanCotter/svelte-tool-dashboard) | Code search (importers) | — | `core-pretext-ecosystem` | 1 | 0 | 2026-05-31 |
| [`nu-wa/curricularr`](https://github.com/nu-wa/curricularr) | Code search (importers) | — | `core-pretext-ecosystem` | 2 | 0 | 2026-04-12 |
| [`ohcnetwork/careui`](https://github.com/ohcnetwork/careui) | Code search (importers) | — | `core-pretext-ecosystem` | 2 | 2 | 2026-05-23 |
| [`Only0neHpLeft/Aperture_web`](https://github.com/Only0neHpLeft/Aperture_web) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-21 |
| [`open-pencil/open-pencil`](https://github.com/open-pencil/open-pencil) | Code search (importers) | — | `core-pretext-ecosystem` | 5296 | 480 | 2026-05-31 |
| [`Paradise-in-Matrix/Paradise`](https://github.com/Paradise-in-Matrix/Paradise) | Code search (importers) | — | `core-pretext-ecosystem` | 15 | 2 | 2026-05-31 |
| [`PetrGuan/Prelayout`](https://github.com/PetrGuan/Prelayout) | Code search (importers) | — | `core-pretext-ecosystem` | 56 | 1 | 2026-03-31 |
| [`phodal/routa`](https://github.com/phodal/routa) | Code search (importers) | — | `core-pretext-ecosystem` | 1622 | 226 | 2026-05-26 |
| [`Poojan38380/TextVerse`](https://github.com/Poojan38380/TextVerse) | Code search (importers) | — | `core-pretext-ecosystem` | 2 | 0 | 2026-04-08 |
| [`puppe1990/epub-reader`](https://github.com/puppe1990/epub-reader) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-03-29 |
| [`rararulab/rara`](https://github.com/rararulab/rara) | Code search (importers) | — | `adjacent-pretext` | 8 | 0 | 2026-05-28 |
| [`RazorConsole/RazorConsole`](https://github.com/RazorConsole/RazorConsole) | Code search (importers) | — | `adjacent-pretext` | 1713 | 46 | 2026-05-18 |
| [`Retroneek/syncbox-react`](https://github.com/Retroneek/syncbox-react) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-02 |
| [`rinesh/pretext-breaker`](https://github.com/rinesh/pretext-breaker) | Code search (importers) | — | `core-pretext-ecosystem` | 11 | 1 | 2026-03-30 |
| [`samwillis/premirror`](https://github.com/samwillis/premirror) | Code search (importers) | — | `unclear-or-noise` | 69 | 7 | 2026-03-29 |
| [`SaranshBangar/weekly_dx`](https://github.com/SaranshBangar/weekly_dx) | Code search (importers) | — | `adjacent-pretext` | 0 | 0 | 2026-04-05 |
| [`ScaleModeTools/WebGPU_Metaverse`](https://github.com/ScaleModeTools/WebGPU_Metaverse) | Code search (importers) | — | `unclear-or-noise` | 0 | 0 | 2026-05-02 |
| [`SeloSlav/weft`](https://github.com/SeloSlav/weft) | Code search (importers) | — | `core-pretext-ecosystem` | 2 | 0 | 2026-03-31 |
| [`shapidesign/portfolio`](https://github.com/shapidesign/portfolio) | Code search (importers) | — | `core-pretext-ecosystem` | 1 | 0 | 2026-05-21 |
| [`sizzlorox/react-pretext`](https://github.com/sizzlorox/react-pretext) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-04 |
| [`somnai-dreams/preimage`](https://github.com/somnai-dreams/preimage) | Discovery | — | `core-pretext-ecosystem` | 5 | 0 | 2026-05-05 |
| [`spike-land-ai/spike-land`](https://github.com/spike-land-ai/spike-land) | Code search (importers) | — | `unclear-or-noise` | 1 | 2 | 2026-04-09 |
| [`stayradiated/aeon`](https://github.com/stayradiated/aeon) | Code search (importers) | — | `core-pretext-ecosystem` | 1 | 1 | 2026-05-31 |
| [`sumy7/piant`](https://github.com/sumy7/piant) | Code search (importers) | — | `unclear-or-noise` | 1 | 0 | 2026-05-17 |
| [`SuperiormonLBJ/blog`](https://github.com/SuperiormonLBJ/blog) | Code search (importers) | — | `core-pretext-ecosystem` | 1 | 0 | 2026-04-05 |
| [`swoo1226/stitch-mcp-app`](https://github.com/swoo1226/stitch-mcp-app) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-13 |
| [`Tamnud-ghule/Effects_using_pretext`](https://github.com/Tamnud-ghule/Effects_using_pretext) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-12 |
| [`TanStack/virtual`](https://github.com/TanStack/virtual) | Code search (importers) | — | `unclear-or-noise` | 6927 | 433 | 2026-05-28 |
| [`tattle-made/Uli`](https://github.com/tattle-made/Uli) | Code search (importers) | — | `adjacent-pretext` | 52 | 34 | 2026-04-23 |
| [`TheCoder30ec4/Ch_Varun`](https://github.com/TheCoder30ec4/Ch_Varun) | Code search (importers) | — | `adjacent-pretext` | 4 | 1 | 2026-05-08 |
| [`TheGardenGallery/the-garden`](https://github.com/TheGardenGallery/the-garden) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-30 |
| [`Timcai06/LinuxWeek11-Django-FormulaLab`](https://github.com/Timcai06/LinuxWeek11-Django-FormulaLab) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-28 |
| [`Todomir/trunky`](https://github.com/Todomir/trunky) | Code search (importers) | — | `unclear-or-noise` | 10 | 0 | 2026-03-31 |
| [`Tonkic/Tonkic.github.io`](https://github.com/Tonkic/Tonkic.github.io) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-31 |
| [`Top-g-hash/nuxt-pretext`](https://github.com/Top-g-hash/nuxt-pretext) | Discovery | — | `core-pretext-ecosystem` | 1 | 0 | 2026-04-21 |
| [`Travis-Gilbert/travisgilbert.me`](https://github.com/Travis-Gilbert/travisgilbert.me) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-30 |
| [`TruElysia02/NekoPaw`](https://github.com/TruElysia02/NekoPaw) | Code search (importers) | — | `core-pretext-ecosystem` | 66 | 3 | 2026-04-29 |
| [`UnablePath/MemoSpark`](https://github.com/UnablePath/MemoSpark) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 1 | 2026-05-13 |
| [`vdavid/cmdr`](https://github.com/vdavid/cmdr) | Code search (importers) | — | `unclear-or-noise` | 14 | 1 | 2026-05-30 |
| [`vectorize-io/hindsight`](https://github.com/vectorize-io/hindsight) | Code search (importers) | — | `unclear-or-noise` | 15333 | 865 | 2026-05-29 |
| [`vedantlahane/Mnemos`](https://github.com/vedantlahane/Mnemos) | Code search (importers) | — | `adjacent-pretext` | 0 | 0 | 2026-04-29 |
| [`vinayak-gh/portfolio`](https://github.com/vinayak-gh/portfolio) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-13 |
| [`wesen/2026-05-27--pretext-design-system`](https://github.com/wesen/2026-05-27--pretext-design-system) | Code search (importers) | — | `adjacent-pretext` | 0 | 0 | 2026-05-27 |
| [`whcss-5213/whc.blog.io`](https://github.com/whcss-5213/whc.blog.io) | Code search (importers) | — | `core-pretext-ecosystem` | 1 | 0 | 2026-05-23 |
| [`WOOU-0510/uode`](https://github.com/WOOU-0510/uode) | Code search (importers) | — | `unclear-or-noise` | 0 | 0 | 2026-04-17 |
| [`wxyhgk/retain-pdf`](https://github.com/wxyhgk/retain-pdf) | Code search (importers) | — | `adjacent-pretext` | 1828 | 216 | 2026-05-31 |
| [`xeuxdev/pretext-demo`](https://github.com/xeuxdev/pretext-demo) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-04 |
| [`xli2333/FDSM_Business_Knowledge`](https://github.com/xli2333/FDSM_Business_Knowledge) | Code search (importers) | — | `adjacent-pretext` | 0 | 0 | 2026-05-12 |
| [`yeci226/personalWeb`](https://github.com/yeci226/personalWeb) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-15 |
| [`yihui315/tianji-global`](https://github.com/yihui315/tianji-global) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-05-27 |
| [`YungBricoCoop/portfolio`](https://github.com/YungBricoCoop/portfolio) | Code search (importers) | — | `core-pretext-ecosystem` | 3 | 1 | 2026-04-27 |
| [`zackham/stepwise`](https://github.com/zackham/stepwise) | Code search (importers) | — | `adjacent-pretext` | 14 | 1 | 2026-05-26 |
| [`ZYKJShadow/Async`](https://github.com/ZYKJShadow/Async) | Code search (importers) | — | `core-pretext-ecosystem` | 482 | 78 | 2026-05-19 |

## Repos referencing @chenglou/pretext (code search)

_These rows come from public `gh search code` hits on `package.json` (npm scope and git-style references). They may include false positives, fork noise, or version ranges that do not match what you run locally. **awesome-pretext** remains the curated product list._

| Repo | Stars | Relevance | Rationale (short) |
| --- | ---: | --- | --- |
| [`daytonaio/daytona`](https://github.com/daytonaio/daytona) | 72501 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`heygen-com/hyperframes`](https://github.com/heygen-com/hyperframes) | 22794 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`vectorize-io/hindsight`](https://github.com/vectorize-io/hindsight) | 15333 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`TanStack/virtual`](https://github.com/TanStack/virtual) | 6927 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`open-pencil/open-pencil`](https://github.com/open-pencil/open-pencil) | 5296 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`mayneyao/eidos`](https://github.com/mayneyao/eidos) | 3134 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`wxyhgk/retain-pdf`](https://github.com/wxyhgk/retain-pdf) | 1828 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`RazorConsole/RazorConsole`](https://github.com/RazorConsole/RazorConsole) | 1713 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`phodal/routa`](https://github.com/phodal/routa) | 1622 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`ZYKJShadow/Async`](https://github.com/ZYKJShadow/Async) | 482 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`chthollyphile/folia-major`](https://github.com/chthollyphile/folia-major) | 99 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`samwillis/premirror`](https://github.com/samwillis/premirror) | 69 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`TruElysia02/NekoPaw`](https://github.com/TruElysia02/NekoPaw) | 66 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`PetrGuan/Prelayout`](https://github.com/PetrGuan/Prelayout) | 56 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`tattle-made/Uli`](https://github.com/tattle-made/Uli) | 52 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Paradise-in-Matrix/Paradise`](https://github.com/Paradise-in-Matrix/Paradise) | 15 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`vdavid/cmdr`](https://github.com/vdavid/cmdr) | 14 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`zackham/stepwise`](https://github.com/zackham/stepwise) | 14 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`rinesh/pretext-breaker`](https://github.com/rinesh/pretext-breaker) | 11 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Todomir/trunky`](https://github.com/Todomir/trunky) | 10 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`rararulab/rara`](https://github.com/rararulab/rara) | 8 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`alexanderchen/typebeat`](https://github.com/alexanderchen/typebeat) | 6 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`HachiXD/Gatherend`](https://github.com/HachiXD/Gatherend) | 6 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`eanzhao/Aexon`](https://github.com/eanzhao/Aexon) | 4 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`TheCoder30ec4/Ch_Varun`](https://github.com/TheCoder30ec4/Ch_Varun) | 4 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`bunizao/site`](https://github.com/bunizao/site) | 3 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`DovieW/microbook-maker`](https://github.com/DovieW/microbook-maker) | 3 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`YungBricoCoop/portfolio`](https://github.com/YungBricoCoop/portfolio) | 3 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`HongMing-Huang/pretext-frontend-motion`](https://github.com/HongMing-Huang/pretext-frontend-motion) | 2 | `adjacent-pretext` | Name or description suggests Pretext ecosystem; no package.json proof via API. |
| [`nu-wa/curricularr`](https://github.com/nu-wa/curricularr) | 2 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`ohcnetwork/careui`](https://github.com/ohcnetwork/careui) | 2 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Poojan38380/TextVerse`](https://github.com/Poojan38380/TextVerse) | 2 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`SeloSlav/weft`](https://github.com/SeloSlav/weft) | 2 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`1sh22/pretex`](https://github.com/1sh22/pretex) | 1 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`aflansburg/consultme`](https://github.com/aflansburg/consultme) | 1 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`AnanyaKulkarni205/TailsOfBijapur`](https://github.com/AnanyaKulkarni205/TailsOfBijapur) | 1 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`B4uti4github/tslash`](https://github.com/B4uti4github/tslash) | 1 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`developing-today/code`](https://github.com/developing-today/code) | 1 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`fakoli/baara-next`](https://github.com/fakoli/baara-next) | 1 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`fibegg/fibe-agent`](https://github.com/fibegg/fibe-agent) | 1 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`haru516-web/burn_two`](https://github.com/haru516-web/burn_two) | 1 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`JeromyJSmith/GraftKit`](https://github.com/JeromyJSmith/GraftKit) | 1 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`jmilinovich/daily-paper`](https://github.com/jmilinovich/daily-paper) | 1 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`NolanCotter/svelte-tool-dashboard`](https://github.com/NolanCotter/svelte-tool-dashboard) | 1 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`shapidesign/portfolio`](https://github.com/shapidesign/portfolio) | 1 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`spike-land-ai/spike-land`](https://github.com/spike-land-ai/spike-land) | 1 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`stayradiated/aeon`](https://github.com/stayradiated/aeon) | 1 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`sumy7/piant`](https://github.com/sumy7/piant) | 1 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`SuperiormonLBJ/blog`](https://github.com/SuperiormonLBJ/blog) | 1 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`whcss-5213/whc.blog.io`](https://github.com/whcss-5213/whc.blog.io) | 1 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`0xnayuta/0xnayuta.github.io`](https://github.com/0xnayuta/0xnayuta.github.io) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`0xRupeshSardar/0xrupeshsardar.github.io`](https://github.com/0xRupeshSardar/0xrupeshsardar.github.io) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`alpeshvas/pretext-pdfjs`](https://github.com/alpeshvas/pretext-pdfjs) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`amulil/amulil`](https://github.com/amulil/amulil) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`AntoniovanDijck/sharecap`](https://github.com/AntoniovanDijck/sharecap) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`archiseino/pretext-playground`](https://github.com/archiseino/pretext-playground) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`ashishkr710/portfolio_Ashish`](https://github.com/ashishkr710/portfolio_Ashish) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`aswinzz/portfolio`](https://github.com/aswinzz/portfolio) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`bamarler/bamarler`](https://github.com/bamarler/bamarler) | 0 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`BlackBoxRecorder/memos`](https://github.com/BlackBoxRecorder/memos) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`blackjune67/asterum-system`](https://github.com/blackjune67/asterum-system) | 0 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`BrianIto/portfolio`](https://github.com/BrianIto/portfolio) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`cathy0305/studio_ipad`](https://github.com/cathy0305/studio_ipad) | 0 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`chomiruku/seija-kij.in`](https://github.com/chomiruku/seija-kij.in) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`code-highway-patrol/chp-web`](https://github.com/code-highway-patrol/chp-web) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`codehz/pretext-bug-diag`](https://github.com/codehz/pretext-bug-diag) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Cofounder-Customer-Projects-1/shonda-martin-media-5c2fd1-marketing`](https://github.com/Cofounder-Customer-Projects-1/shonda-martin-media-5c2fd1-marketing) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Compassie/Flame-test`](https://github.com/Compassie/Flame-test) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Dragslayr/creativeProjects`](https://github.com/Dragslayr/creativeProjects) | 0 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`dredamonsta1/andre-portfolio-react`](https://github.com/dredamonsta1/andre-portfolio-react) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`eiaserinnys/remiel`](https://github.com/eiaserinnys/remiel) | 0 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`electrifiedchan/sparta-edge-proctoring`](https://github.com/electrifiedchan/sparta-edge-proctoring) | 0 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`filipsjolanderr/filip-personal`](https://github.com/filipsjolanderr/filip-personal) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`fvnju/noteey`](https://github.com/fvnju/noteey) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`HamsterNote/HtmlParser`](https://github.com/HamsterNote/HtmlParser) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Haneef99/portfolio`](https://github.com/Haneef99/portfolio) | 0 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`haoyangli16/pretext-research-tools`](https://github.com/haoyangli16/pretext-research-tools) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`hencter/newtab-home`](https://github.com/hencter/newtab-home) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Icamtu/algo-trader`](https://github.com/Icamtu/algo-trader) | 0 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`JAYATIAHUJA/Basilisk-s-Hunger`](https://github.com/JAYATIAHUJA/Basilisk-s-Hunger) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`jensrot/portfolio-site`](https://github.com/jensrot/portfolio-site) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`joshuadsilva1/altbridge`](https://github.com/joshuadsilva1/altbridge) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`kabeer11000/otherdev.web-02`](https://github.com/kabeer11000/otherdev.web-02) | 0 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`kristianernst/piui`](https://github.com/kristianernst/piui) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`leCheeseRoyale/ascii-games`](https://github.com/leCheeseRoyale/ascii-games) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`leesangb/caret`](https://github.com/leesangb/caret) | 0 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`leesx/pretext-time-typography`](https://github.com/leesx/pretext-time-typography) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`liam-brophy/pretext`](https://github.com/liam-brophy/pretext) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Liiift-Studio/AxisRhythm`](https://github.com/Liiift-Studio/AxisRhythm) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Liiift-Studio/SteadyGray`](https://github.com/Liiift-Studio/SteadyGray) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`lkevincc0/agent-react-native-template`](https://github.com/lkevincc0/agent-react-native-template) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`llstarfish/pretext-dog`](https://github.com/llstarfish/pretext-dog) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`luckysolanki902/luckysolanki`](https://github.com/luckysolanki902/luckysolanki) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`MarJC5/wp-agent`](https://github.com/MarJC5/wp-agent) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`MonaSweataSK/pretext-demo`](https://github.com/MonaSweataSK/pretext-demo) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`muni106/munilogs`](https://github.com/muni106/munilogs) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`nacs-970/gallery`](https://github.com/nacs-970/gallery) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Only0neHpLeft/Aperture_web`](https://github.com/Only0neHpLeft/Aperture_web) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`puppe1990/epub-reader`](https://github.com/puppe1990/epub-reader) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Retroneek/syncbox-react`](https://github.com/Retroneek/syncbox-react) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`SaranshBangar/weekly_dx`](https://github.com/SaranshBangar/weekly_dx) | 0 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`ScaleModeTools/WebGPU_Metaverse`](https://github.com/ScaleModeTools/WebGPU_Metaverse) | 0 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`sizzlorox/react-pretext`](https://github.com/sizzlorox/react-pretext) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`swoo1226/stitch-mcp-app`](https://github.com/swoo1226/stitch-mcp-app) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Tamnud-ghule/Effects_using_pretext`](https://github.com/Tamnud-ghule/Effects_using_pretext) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`TheGardenGallery/the-garden`](https://github.com/TheGardenGallery/the-garden) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Timcai06/LinuxWeek11-Django-FormulaLab`](https://github.com/Timcai06/LinuxWeek11-Django-FormulaLab) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Tonkic/Tonkic.github.io`](https://github.com/Tonkic/Tonkic.github.io) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Travis-Gilbert/travisgilbert.me`](https://github.com/Travis-Gilbert/travisgilbert.me) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`UnablePath/MemoSpark`](https://github.com/UnablePath/MemoSpark) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`vedantlahane/Mnemos`](https://github.com/vedantlahane/Mnemos) | 0 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`vinayak-gh/portfolio`](https://github.com/vinayak-gh/portfolio) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`wesen/2026-05-27--pretext-design-system`](https://github.com/wesen/2026-05-27--pretext-design-system) | 0 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`WOOU-0510/uode`](https://github.com/WOOU-0510/uode) | 0 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`xeuxdev/pretext-demo`](https://github.com/xeuxdev/pretext-demo) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`xli2333/FDSM_Business_Knowledge`](https://github.com/xli2333/FDSM_Business_Knowledge) | 0 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`yeci226/personalWeb`](https://github.com/yeci226/personalWeb) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`yihui315/tianji-global`](https://github.com/yihui315/tianji-global) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |

## Repos in this fork’s inventory but not in awesome-pretext README tables

- [`acoyfellow/cloudterm`](https://github.com/acoyfellow/cloudterm) — Web terminal emulator. DOM-rendered. Built on @chenglou/pretext.
- [`darkroomengineering/fitbox`](https://github.com/darkroomengineering/fitbox) — Reflow-free text-to-box fitting for React, built on Pretext.
- [`somnai-dreams/preimage`](https://github.com/somnai-dreams/preimage) — Fast, accurate & comprehensive image measurement & layout, based on @chenglou/pretext
- [`Top-g-hash/nuxt-pretext`](https://github.com/Top-g-hash/nuxt-pretext) — Pretext integration for Nuxt. Fast multiline text measurement without DOM reflow. Components, composables, and canvas rendering included.

