# Pretext ecosystem collection (aculich fork)

[![Awesome pretext site](https://img.shields.io/badge/awesome--pretext-site-0f766e)](https://shipitandpray.github.io/awesome-pretext/) [![Upstream Pretext](https://img.shields.io/badge/upstream-chenglou%2Fpretext-111827)](https://github.com/chenglou/pretext) [![Local catalog demo](https://img.shields.io/badge/catalog-demo-8b4d2f)](https://github.com/aculich/pretext/blob/main/pages/demos/ecosystem-catalog.html)

This document mirrors the *intent* of [ShipItAndPray/awesome-pretext](https://github.com/ShipItAndPray/awesome-pretext)’s README while grounding the **full superset** in [`ecosystem-inventory.json`](ecosystem-inventory.json). Regenerate both with `bun run ecosystem:intake`.

_Inventory generated: 2026-04-23 · 167 repos (core 0, adjacent 162, unclear 5)._

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
| [`ShipItAndPray/pretext-chat`](https://github.com/ShipItAndPray/pretext-chat) | Chat & Logs | [demo](https://shipitandpray.github.io/pretext-chat/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-logviewer`](https://github.com/ShipItAndPray/pretext-logviewer) | Chat & Logs | [demo](https://shipitandpray.github.io/pretext-logviewer/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-repl`](https://github.com/ShipItAndPray/pretext-repl) | Chat & Logs | [demo](https://shipitandpray.github.io/pretext-repl/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-terminal`](https://github.com/ShipItAndPray/pretext-terminal) | Chat & Logs | [demo](https://shipitandpray.github.io/pretext-terminal/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-blocks`](https://github.com/ShipItAndPray/pretext-blocks) | Editors & Docs | [demo](https://shipitandpray.github.io/pretext-blocks/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-captions`](https://github.com/ShipItAndPray/pretext-captions) | Editors & Docs | [demo](https://shipitandpray.github.io/pretext-captions/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-diff`](https://github.com/ShipItAndPray/pretext-diff) | Editors & Docs | [demo](https://shipitandpray.github.io/pretext-diff/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-diff-navigator`](https://github.com/ShipItAndPray/pretext-diff-navigator) | Editors & Docs | [demo](https://shipitandpray.github.io/pretext-diff-navigator/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-docgen`](https://github.com/ShipItAndPray/pretext-docgen) | Editors & Docs | [demo](https://shipitandpray.github.io/pretext-docgen/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-editor`](https://github.com/ShipItAndPray/pretext-editor) | Editors & Docs | [demo](https://shipitandpray.github.io/pretext-editor/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-epub`](https://github.com/ShipItAndPray/pretext-epub) | Editors & Docs | [demo](https://shipitandpray.github.io/pretext-epub/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-markdown`](https://github.com/ShipItAndPray/pretext-markdown) | Editors & Docs | [demo](https://shipitandpray.github.io/pretext-markdown/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-pdf`](https://github.com/ShipItAndPray/pretext-pdf) | Editors & Docs | [demo](https://shipitandpray.github.io/pretext-pdf/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-slides`](https://github.com/ShipItAndPray/pretext-slides) | Editors & Docs | [demo](https://shipitandpray.github.io/pretext-slides/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-accordion`](https://github.com/ShipItAndPray/pretext-accordion) | Foundations | [demo](https://shipitandpray.github.io/pretext-accordion/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-animate`](https://github.com/ShipItAndPray/pretext-animate) | Foundations | [demo](https://shipitandpray.github.io/pretext-animate/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-forms`](https://github.com/ShipItAndPray/pretext-forms) | Foundations | [demo](https://shipitandpray.github.io/pretext-forms/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-masonry`](https://github.com/ShipItAndPray/pretext-masonry) | Foundations | [demo](https://shipitandpray.github.io/pretext-masonry/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-overflow-menu`](https://github.com/ShipItAndPray/pretext-overflow-menu) | Foundations | [demo](https://shipitandpray.github.io/pretext-overflow-menu/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-react`](https://github.com/ShipItAndPray/pretext-react) | Foundations | [demo](https://shipitandpray.github.io/pretext-react/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-ssr`](https://github.com/ShipItAndPray/pretext-ssr) | Foundations | [demo](https://shipitandpray.github.io/pretext-ssr/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-tooltip`](https://github.com/ShipItAndPray/pretext-tooltip) | Foundations | [demo](https://shipitandpray.github.io/pretext-tooltip/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-truncate`](https://github.com/ShipItAndPray/pretext-truncate) | Foundations | [demo](https://shipitandpray.github.io/pretext-truncate/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-typewriter`](https://github.com/ShipItAndPray/pretext-typewriter) | Foundations | [demo](https://shipitandpray.github.io/pretext-typewriter/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-canvas`](https://github.com/ShipItAndPray/pretext-canvas) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-canvas/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-code-minimap`](https://github.com/ShipItAndPray/pretext-code-minimap) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-code-minimap/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-comic`](https://github.com/ShipItAndPray/pretext-comic) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-comic/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-gantt`](https://github.com/ShipItAndPray/pretext-gantt) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-gantt/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-infinite-canvas`](https://github.com/ShipItAndPray/pretext-infinite-canvas) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-infinite-canvas/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-map-labels`](https://github.com/ShipItAndPray/pretext-map-labels) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-map-labels/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-og`](https://github.com/ShipItAndPray/pretext-og) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-og/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-sparkline`](https://github.com/ShipItAndPray/pretext-sparkline) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-sparkline/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-tts-highlight`](https://github.com/ShipItAndPray/pretext-tts-highlight) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-tts-highlight/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-webxr`](https://github.com/ShipItAndPray/pretext-webxr) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-webxr/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-word-cloud`](https://github.com/ShipItAndPray/pretext-word-cloud) | Graphics & Media | [demo](https://shipitandpray.github.io/pretext-word-cloud/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-rn`](https://github.com/ShipItAndPray/pretext-rn) | Platform Targets | [demo](https://shipitandpray.github.io/pretext-rn/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-table`](https://github.com/ShipItAndPray/pretext-table) | Platform Targets | [demo](https://shipitandpray.github.io/pretext-table/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-a11y`](https://github.com/ShipItAndPray/pretext-a11y) | Testing & CI | [demo](https://shipitandpray.github.io/pretext-a11y/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-devtools`](https://github.com/ShipItAndPray/pretext-devtools) | Testing & CI | [demo](https://shipitandpray.github.io/pretext-devtools/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-i18n`](https://github.com/ShipItAndPray/pretext-i18n) | Testing & CI | [demo](https://shipitandpray.github.io/pretext-i18n/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-overflow-monitor`](https://github.com/ShipItAndPray/pretext-overflow-monitor) | Testing & CI | [demo](https://shipitandpray.github.io/pretext-overflow-monitor/) | `adjacent-pretext` | — | — | — |
| [`ShipItAndPray/pretext-storybook`](https://github.com/ShipItAndPray/pretext-storybook) | Testing & CI | [demo](https://shipitandpray.github.io/pretext-storybook/) | `adjacent-pretext` | — | — | — |
| [`0xGF/boneyard`](https://github.com/0xGF/boneyard) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`0xNyk/pretext-playground`](https://github.com/0xNyk/pretext-playground) | Community | — | `adjacent-pretext` | — | — | — |
| [`1sh22/pretex`](https://github.com/1sh22/pretex) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`8run3r/bcbtech`](https://github.com/8run3r/bcbtech) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`aaryapatel09/aaryapatel-website`](https://github.com/aaryapatel09/aaryapatel-website) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`abhishek462307/Convos-Agentic-Commerce`](https://github.com/abhishek462307/Convos-Agentic-Commerce) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Abhishekingle662/pretext-flow-demo`](https://github.com/Abhishekingle662/pretext-flow-demo) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`acoyfellow/cloudterm`](https://github.com/acoyfellow/cloudterm) | Discovery | — | `unclear-or-noise` | — | — | — |
| [`alanvww/watchwords`](https://github.com/alanvww/watchwords) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`aleclarson/pretext-markdown-stream`](https://github.com/aleclarson/pretext-markdown-stream) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`aloewright/smooth-site`](https://github.com/aloewright/smooth-site) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`AnupBhat30/twinkytype`](https://github.com/AnupBhat30/twinkytype) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`BEKO2210/my_interactive_books`](https://github.com/BEKO2210/my_interactive_books) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`bensongeorgethomas/portfolio`](https://github.com/bensongeorgethomas/portfolio) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`bevyip/play-part-3`](https://github.com/bevyip/play-part-3) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`blackjune67/asterum-system`](https://github.com/blackjune67/asterum-system) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`BlazeUp-AI/Observal`](https://github.com/BlazeUp-AI/Observal) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`blipman35/blipman35.github.io`](https://github.com/blipman35/blipman35.github.io) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`blueif16/astro-blog`](https://github.com/blueif16/astro-blog) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`broomva/life`](https://github.com/broomva/life) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Bruce699/Experimental-Todos`](https://github.com/Bruce699/Experimental-Todos) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Cbturtle2/PersonalWebsite`](https://github.com/Cbturtle2/PersonalWebsite) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Changan-Su/Forsion-AI-Studio`](https://github.com/Changan-Su/Forsion-AI-Studio) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Charles-xdx/UAV`](https://github.com/Charles-xdx/UAV) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`cocktailpeanut/textmash`](https://github.com/cocktailpeanut/textmash) | Community | — | `unclear-or-noise` | — | — | — |
| [`cybrowl/job_raptor`](https://github.com/cybrowl/job_raptor) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`d3plus/d3plus`](https://github.com/d3plus/d3plus) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`danmindru/pretext-changed-the-internet`](https://github.com/danmindru/pretext-changed-the-internet) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`darkroomengineering/fitbox`](https://github.com/darkroomengineering/fitbox) | Discovery | — | `unclear-or-noise` | — | — | — |
| [`declanhuggins/dhugs-com`](https://github.com/declanhuggins/dhugs-com) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`developing-today/code`](https://github.com/developing-today/code) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`dioliveira07/second-brain-hub`](https://github.com/dioliveira07/second-brain-hub) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`divsmith/webtuner`](https://github.com/divsmith/webtuner) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Dreyzab/grenzwanderer`](https://github.com/Dreyzab/grenzwanderer) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`EARider23/BusinessLauncha`](https://github.com/EARider23/BusinessLauncha) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`electrifiedchan/club_website`](https://github.com/electrifiedchan/club_website) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`f3liz-casa/yukari-rubi`](https://github.com/f3liz-casa/yukari-rubi) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Fearvox/dash-persona`](https://github.com/Fearvox/dash-persona) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`frank1003A/use-pretext`](https://github.com/frank1003A/use-pretext) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`fu351/SecretSauce`](https://github.com/fu351/SecretSauce) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`futurelesswindchan/blog0fwindchan`](https://github.com/futurelesswindchan/blog0fwindchan) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`geeksbaek/daily-magazine`](https://github.com/geeksbaek/daily-magazine) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`giolaq/giolaqaiblog`](https://github.com/giolaq/giolaqaiblog) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`girl-dream/VideoInHTML`](https://github.com/girl-dream/VideoInHTML) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`GizzyUwU/suri`](https://github.com/GizzyUwU/suri) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`greenmoach/pretext-app`](https://github.com/greenmoach/pretext-app) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Gregoryc28/VellumReader`](https://github.com/Gregoryc28/VellumReader) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`groupsum/markdown_workspace`](https://github.com/groupsum/markdown_workspace) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Guneshbari/SentinelCore_DEV`](https://github.com/Guneshbari/SentinelCore_DEV) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`h00mankind/Forge`](https://github.com/h00mankind/Forge) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`haoyangli16/pretext-research-tools`](https://github.com/haoyangli16/pretext-research-tools) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`heristop/heristop.github.io`](https://github.com/heristop/heristop.github.io) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`hgxszhj/pretext`](https://github.com/hgxszhj/pretext) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Himaan1998Y/pretext-pdf`](https://github.com/Himaan1998Y/pretext-pdf) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`imurodl/pretext-flow`](https://github.com/imurodl/pretext-flow) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`inference-sh/shadcn-registry`](https://github.com/inference-sh/shadcn-registry) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Innei/shuffle-article`](https://github.com/Innei/shuffle-article) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`inxeoz/pretext-inxeoz`](https://github.com/inxeoz/pretext-inxeoz) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Itsnotaka/v7`](https://github.com/Itsnotaka/v7) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`itxashancode/Refresh-My-Web`](https://github.com/itxashancode/Refresh-My-Web) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`jaddenki/gyaru`](https://github.com/jaddenki/gyaru) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Jamailar/RedBox`](https://github.com/Jamailar/RedBox) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`JeromyJSmith/GraftKit`](https://github.com/JeromyJSmith/GraftKit) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`jihchi/react-pretext`](https://github.com/jihchi/react-pretext) | Community | — | `adjacent-pretext` | — | — | — |
| [`joeflateau-octavius/pretext-rich`](https://github.com/joeflateau-octavius/pretext-rich) | Community | — | `adjacent-pretext` | — | — | — |
| [`justyn-clark/pretext-chat-poc`](https://github.com/justyn-clark/pretext-chat-poc) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`jwyxym/YGOPro3`](https://github.com/jwyxym/YGOPro3) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`jyami-kim/gitbook-page`](https://github.com/jyami-kim/gitbook-page) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`KakarotDB/interactive-calendar-component`](https://github.com/KakarotDB/interactive-calendar-component) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`kitsuyui/react-playground`](https://github.com/kitsuyui/react-playground) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`KyleDerZweite/basalt`](https://github.com/KyleDerZweite/basalt) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`L31T1NH0/modrinth-downloader`](https://github.com/L31T1NH0/modrinth-downloader) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`lawrenceli0228/pretext-playground`](https://github.com/lawrenceli0228/pretext-playground) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Leo555/pre-markdown`](https://github.com/Leo555/pre-markdown) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`libondev/pxd`](https://github.com/libondev/pxd) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`lucascrespo23/pinch-type`](https://github.com/lucascrespo23/pinch-type) | Community | — | `unclear-or-noise` | — | — | — |
| [`lyc-aon/successor-agent`](https://github.com/lyc-aon/successor-agent) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`LydiaShanCode/rainy-day`](https://github.com/LydiaShanCode/rainy-day) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`MaskyS/fractal-kanban-demo`](https://github.com/MaskyS/fractal-kanban-demo) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`mateffy/pretext-php`](https://github.com/mateffy/pretext-php) | Community | — | `adjacent-pretext` | — | — | — |
| [`mertcicekci0/merth-pretext-blockverse`](https://github.com/mertcicekci0/merth-pretext-blockverse) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`micaavigliano/the-editorial-engine-a11y`](https://github.com/micaavigliano/the-editorial-engine-a11y) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`MikeSchirtzinger/pretext-rs`](https://github.com/MikeSchirtzinger/pretext-rs) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`morten-olsen/editions`](https://github.com/morten-olsen/editions) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`MultiboxLabs/flow-browser`](https://github.com/MultiboxLabs/flow-browser) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`naitokosuke/lab`](https://github.com/naitokosuke/lab) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`NathanWalker/ns-pretext`](https://github.com/NathanWalker/ns-pretext) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`noletorious/portfolio-experimental`](https://github.com/noletorious/portfolio-experimental) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Notes9Org/Notes9`](https://github.com/Notes9Org/Notes9) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`ossaidqadri/otherdev-web-v2`](https://github.com/ossaidqadri/otherdev-web-v2) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Paradise-in-Matrix/Paradise`](https://github.com/Paradise-in-Matrix/Paradise) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`PASToR1951/QPIR-AIP`](https://github.com/PASToR1951/QPIR-AIP) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`PavanCodesNY/Pavan`](https://github.com/PavanCodesNY/Pavan) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`paxoscn/pretextall`](https://github.com/paxoscn/pretextall) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`peteriadamgabor/inkmirror`](https://github.com/peteriadamgabor/inkmirror) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Poojan38380/pretext-playground-upgrade`](https://github.com/Poojan38380/pretext-playground-upgrade) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Poojan38380/TextVerse`](https://github.com/Poojan38380/TextVerse) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`PoosaSaikiran/Project-01`](https://github.com/PoosaSaikiran/Project-01) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Pranesh-2005/digital-bouquet-pretext`](https://github.com/Pranesh-2005/digital-bouquet-pretext) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`ProjectMusa/tikzjs`](https://github.com/ProjectMusa/tikzjs) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`proticom/paperboy`](https://github.com/proticom/paperboy) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`quinteroac/pretext-tables`](https://github.com/quinteroac/pretext-tables) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`r-y-ren/renyxin`](https://github.com/r-y-ren/renyxin) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`rararulab/rara`](https://github.com/rararulab/rara) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`roip/chrome-extensions`](https://github.com/roip/chrome-extensions) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`samwillis/premirror`](https://github.com/samwillis/premirror) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`seocorp/figflow`](https://github.com/seocorp/figflow) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Signet-AI/signetai`](https://github.com/Signet-AI/signetai) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Simon-He95/markstream-vue`](https://github.com/Simon-He95/markstream-vue) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`sivavarunan/portfolio`](https://github.com/sivavarunan/portfolio) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`somnai-dreams/preimage`](https://github.com/somnai-dreams/preimage) | Discovery | — | `unclear-or-noise` | — | — | — |
| [`sonnes/september`](https://github.com/sonnes/september) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`souki1/AIMarketResearch`](https://github.com/souki1/AIMarketResearch) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`szkkb/wechat_miniprogram_dashboard`](https://github.com/szkkb/wechat_miniprogram_dashboard) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`TirtheshJani/portfolio`](https://github.com/TirtheshJani/portfolio) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Todomir/trunky`](https://github.com/Todomir/trunky) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Top-g-hash/nuxt-pretext`](https://github.com/Top-g-hash/nuxt-pretext) | Discovery | — | `adjacent-pretext` | — | — | — |
| [`UNLINEARITY/Atlas-of-Control-and-AI`](https://github.com/UNLINEARITY/Atlas-of-Control-and-AI) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`UOR-Foundation/website`](https://github.com/UOR-Foundation/website) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`vectorize-io/hindsight`](https://github.com/vectorize-io/hindsight) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`Wetty-Technology/wetty-chat`](https://github.com/Wetty-Technology/wetty-chat) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`yys-4/pretext-try-lab`](https://github.com/yys-4/pretext-try-lab) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`zummed/starch`](https://github.com/zummed/starch) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`ZVN-DEV/yable`](https://github.com/ZVN-DEV/yable) | Code search (importers) | — | `adjacent-pretext` | — | — | — |
| [`ZYKJShadow/Async`](https://github.com/ZYKJShadow/Async) | Code search (importers) | — | `adjacent-pretext` | — | — | — |

## Repos referencing @chenglou/pretext (code search)

_These rows come from public `gh search code` hits on `package.json` (npm scope and git-style references). They may include false positives, fork noise, or version ranges that do not match what you run locally. **awesome-pretext** remains the curated product list._

| Repo | Stars | Relevance | Rationale (short) |
| --- | ---: | --- | --- |
| [`0xGF/boneyard`](https://github.com/0xGF/boneyard) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`1sh22/pretex`](https://github.com/1sh22/pretex) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`8run3r/bcbtech`](https://github.com/8run3r/bcbtech) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`aaryapatel09/aaryapatel-website`](https://github.com/aaryapatel09/aaryapatel-website) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`abhishek462307/Convos-Agentic-Commerce`](https://github.com/abhishek462307/Convos-Agentic-Commerce) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Abhishekingle662/pretext-flow-demo`](https://github.com/Abhishekingle662/pretext-flow-demo) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`alanvww/watchwords`](https://github.com/alanvww/watchwords) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`aleclarson/pretext-markdown-stream`](https://github.com/aleclarson/pretext-markdown-stream) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`aloewright/smooth-site`](https://github.com/aloewright/smooth-site) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`AnupBhat30/twinkytype`](https://github.com/AnupBhat30/twinkytype) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`BEKO2210/my_interactive_books`](https://github.com/BEKO2210/my_interactive_books) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`bensongeorgethomas/portfolio`](https://github.com/bensongeorgethomas/portfolio) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`bevyip/play-part-3`](https://github.com/bevyip/play-part-3) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`blackjune67/asterum-system`](https://github.com/blackjune67/asterum-system) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`BlazeUp-AI/Observal`](https://github.com/BlazeUp-AI/Observal) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`blipman35/blipman35.github.io`](https://github.com/blipman35/blipman35.github.io) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`blueif16/astro-blog`](https://github.com/blueif16/astro-blog) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`broomva/life`](https://github.com/broomva/life) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Bruce699/Experimental-Todos`](https://github.com/Bruce699/Experimental-Todos) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Cbturtle2/PersonalWebsite`](https://github.com/Cbturtle2/PersonalWebsite) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Changan-Su/Forsion-AI-Studio`](https://github.com/Changan-Su/Forsion-AI-Studio) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Charles-xdx/UAV`](https://github.com/Charles-xdx/UAV) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`cybrowl/job_raptor`](https://github.com/cybrowl/job_raptor) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`d3plus/d3plus`](https://github.com/d3plus/d3plus) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`danmindru/pretext-changed-the-internet`](https://github.com/danmindru/pretext-changed-the-internet) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`declanhuggins/dhugs-com`](https://github.com/declanhuggins/dhugs-com) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`developing-today/code`](https://github.com/developing-today/code) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`dioliveira07/second-brain-hub`](https://github.com/dioliveira07/second-brain-hub) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`divsmith/webtuner`](https://github.com/divsmith/webtuner) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Dreyzab/grenzwanderer`](https://github.com/Dreyzab/grenzwanderer) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`EARider23/BusinessLauncha`](https://github.com/EARider23/BusinessLauncha) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`electrifiedchan/club_website`](https://github.com/electrifiedchan/club_website) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`f3liz-casa/yukari-rubi`](https://github.com/f3liz-casa/yukari-rubi) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Fearvox/dash-persona`](https://github.com/Fearvox/dash-persona) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`frank1003A/use-pretext`](https://github.com/frank1003A/use-pretext) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`fu351/SecretSauce`](https://github.com/fu351/SecretSauce) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`futurelesswindchan/blog0fwindchan`](https://github.com/futurelesswindchan/blog0fwindchan) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`geeksbaek/daily-magazine`](https://github.com/geeksbaek/daily-magazine) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`giolaq/giolaqaiblog`](https://github.com/giolaq/giolaqaiblog) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`girl-dream/VideoInHTML`](https://github.com/girl-dream/VideoInHTML) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`GizzyUwU/suri`](https://github.com/GizzyUwU/suri) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`greenmoach/pretext-app`](https://github.com/greenmoach/pretext-app) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Gregoryc28/VellumReader`](https://github.com/Gregoryc28/VellumReader) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`groupsum/markdown_workspace`](https://github.com/groupsum/markdown_workspace) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Guneshbari/SentinelCore_DEV`](https://github.com/Guneshbari/SentinelCore_DEV) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`h00mankind/Forge`](https://github.com/h00mankind/Forge) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`haoyangli16/pretext-research-tools`](https://github.com/haoyangli16/pretext-research-tools) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`heristop/heristop.github.io`](https://github.com/heristop/heristop.github.io) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`hgxszhj/pretext`](https://github.com/hgxszhj/pretext) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Himaan1998Y/pretext-pdf`](https://github.com/Himaan1998Y/pretext-pdf) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`imurodl/pretext-flow`](https://github.com/imurodl/pretext-flow) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`inference-sh/shadcn-registry`](https://github.com/inference-sh/shadcn-registry) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Innei/shuffle-article`](https://github.com/Innei/shuffle-article) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`inxeoz/pretext-inxeoz`](https://github.com/inxeoz/pretext-inxeoz) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Itsnotaka/v7`](https://github.com/Itsnotaka/v7) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`itxashancode/Refresh-My-Web`](https://github.com/itxashancode/Refresh-My-Web) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`jaddenki/gyaru`](https://github.com/jaddenki/gyaru) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Jamailar/RedBox`](https://github.com/Jamailar/RedBox) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`JeromyJSmith/GraftKit`](https://github.com/JeromyJSmith/GraftKit) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`justyn-clark/pretext-chat-poc`](https://github.com/justyn-clark/pretext-chat-poc) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`jwyxym/YGOPro3`](https://github.com/jwyxym/YGOPro3) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`jyami-kim/gitbook-page`](https://github.com/jyami-kim/gitbook-page) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`KakarotDB/interactive-calendar-component`](https://github.com/KakarotDB/interactive-calendar-component) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`kitsuyui/react-playground`](https://github.com/kitsuyui/react-playground) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`KyleDerZweite/basalt`](https://github.com/KyleDerZweite/basalt) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`L31T1NH0/modrinth-downloader`](https://github.com/L31T1NH0/modrinth-downloader) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`lawrenceli0228/pretext-playground`](https://github.com/lawrenceli0228/pretext-playground) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Leo555/pre-markdown`](https://github.com/Leo555/pre-markdown) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`libondev/pxd`](https://github.com/libondev/pxd) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`lyc-aon/successor-agent`](https://github.com/lyc-aon/successor-agent) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`LydiaShanCode/rainy-day`](https://github.com/LydiaShanCode/rainy-day) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`MaskyS/fractal-kanban-demo`](https://github.com/MaskyS/fractal-kanban-demo) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`mertcicekci0/merth-pretext-blockverse`](https://github.com/mertcicekci0/merth-pretext-blockverse) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`micaavigliano/the-editorial-engine-a11y`](https://github.com/micaavigliano/the-editorial-engine-a11y) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`MikeSchirtzinger/pretext-rs`](https://github.com/MikeSchirtzinger/pretext-rs) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`morten-olsen/editions`](https://github.com/morten-olsen/editions) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`MultiboxLabs/flow-browser`](https://github.com/MultiboxLabs/flow-browser) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`naitokosuke/lab`](https://github.com/naitokosuke/lab) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`NathanWalker/ns-pretext`](https://github.com/NathanWalker/ns-pretext) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`noletorious/portfolio-experimental`](https://github.com/noletorious/portfolio-experimental) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Notes9Org/Notes9`](https://github.com/Notes9Org/Notes9) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`ossaidqadri/otherdev-web-v2`](https://github.com/ossaidqadri/otherdev-web-v2) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Paradise-in-Matrix/Paradise`](https://github.com/Paradise-in-Matrix/Paradise) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`PASToR1951/QPIR-AIP`](https://github.com/PASToR1951/QPIR-AIP) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`PavanCodesNY/Pavan`](https://github.com/PavanCodesNY/Pavan) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`paxoscn/pretextall`](https://github.com/paxoscn/pretextall) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`peteriadamgabor/inkmirror`](https://github.com/peteriadamgabor/inkmirror) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Poojan38380/pretext-playground-upgrade`](https://github.com/Poojan38380/pretext-playground-upgrade) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Poojan38380/TextVerse`](https://github.com/Poojan38380/TextVerse) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`PoosaSaikiran/Project-01`](https://github.com/PoosaSaikiran/Project-01) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Pranesh-2005/digital-bouquet-pretext`](https://github.com/Pranesh-2005/digital-bouquet-pretext) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`ProjectMusa/tikzjs`](https://github.com/ProjectMusa/tikzjs) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`proticom/paperboy`](https://github.com/proticom/paperboy) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`quinteroac/pretext-tables`](https://github.com/quinteroac/pretext-tables) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`r-y-ren/renyxin`](https://github.com/r-y-ren/renyxin) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`rararulab/rara`](https://github.com/rararulab/rara) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`roip/chrome-extensions`](https://github.com/roip/chrome-extensions) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`samwillis/premirror`](https://github.com/samwillis/premirror) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`seocorp/figflow`](https://github.com/seocorp/figflow) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Signet-AI/signetai`](https://github.com/Signet-AI/signetai) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Simon-He95/markstream-vue`](https://github.com/Simon-He95/markstream-vue) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`sivavarunan/portfolio`](https://github.com/sivavarunan/portfolio) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`sonnes/september`](https://github.com/sonnes/september) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`souki1/AIMarketResearch`](https://github.com/souki1/AIMarketResearch) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`szkkb/wechat_miniprogram_dashboard`](https://github.com/szkkb/wechat_miniprogram_dashboard) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`TirtheshJani/portfolio`](https://github.com/TirtheshJani/portfolio) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Todomir/trunky`](https://github.com/Todomir/trunky) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`UNLINEARITY/Atlas-of-Control-and-AI`](https://github.com/UNLINEARITY/Atlas-of-Control-and-AI) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`UOR-Foundation/website`](https://github.com/UOR-Foundation/website) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`vectorize-io/hindsight`](https://github.com/vectorize-io/hindsight) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Wetty-Technology/wetty-chat`](https://github.com/Wetty-Technology/wetty-chat) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`yys-4/pretext-try-lab`](https://github.com/yys-4/pretext-try-lab) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`zummed/starch`](https://github.com/zummed/starch) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`ZVN-DEV/yable`](https://github.com/ZVN-DEV/yable) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`ZYKJShadow/Async`](https://github.com/ZYKJShadow/Async) | — | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |

## Repos in this fork’s inventory but not in awesome-pretext README tables

- [`acoyfellow/cloudterm`](https://github.com/acoyfellow/cloudterm) — (gh repo view failed: SyntaxError: JSON Parse error: Unrecognized token '')
- [`darkroomengineering/fitbox`](https://github.com/darkroomengineering/fitbox) — (gh repo view failed: SyntaxError: JSON Parse error: Unrecognized token '')
- [`somnai-dreams/preimage`](https://github.com/somnai-dreams/preimage) — (gh repo view failed: SyntaxError: JSON Parse error: Unrecognized token '')
- [`Top-g-hash/nuxt-pretext`](https://github.com/Top-g-hash/nuxt-pretext) — (gh repo view failed: SyntaxError: JSON Parse error: Unrecognized token '')

