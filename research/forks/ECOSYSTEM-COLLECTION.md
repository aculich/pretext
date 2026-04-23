# Pretext ecosystem collection (aculich fork)

[![Awesome pretext site](https://img.shields.io/badge/awesome--pretext-site-0f766e)](https://shipitandpray.github.io/awesome-pretext/) [![Upstream Pretext](https://img.shields.io/badge/upstream-chenglou%2Fpretext-111827)](https://github.com/chenglou/pretext) [![Local catalog demo](https://img.shields.io/badge/catalog-demo-8b4d2f)](https://github.com/aculich/pretext/blob/main/pages/demos/ecosystem-catalog.html)

This document mirrors the *intent* of [ShipItAndPray/awesome-pretext](https://github.com/ShipItAndPray/awesome-pretext)’s README while grounding the **full superset** in [`ecosystem-inventory.json`](ecosystem-inventory.json). Regenerate both with `bun run ecosystem:intake`.

_Inventory generated: 2026-04-23 · 130 repos (core 88, adjacent 24, unclear 18)._

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
| [`aashirpersonal/pretextui`](https://github.com/aashirpersonal/pretextui) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-04 |
| [`Abhishek-701/abhishek701`](https://github.com/Abhishek-701/abhishek701) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-02 |
| [`Abhishekingle662/pretext-flow-demo`](https://github.com/Abhishekingle662/pretext-flow-demo) | Code search (importers) | — | `adjacent-pretext` | 0 | 0 | 2026-03-31 |
| [`acoyfellow/cloudterm`](https://github.com/acoyfellow/cloudterm) | Discovery | — | `core-pretext-ecosystem` | 1 | 0 | 2026-04-21 |
| [`aflansburg/consultme`](https://github.com/aflansburg/consultme) | Code search (importers) | — | `core-pretext-ecosystem` | 1 | 0 | 2026-03-31 |
| [`ashishmaharana188/cognitiveGraph`](https://github.com/ashishmaharana188/cognitiveGraph) | Code search (importers) | — | `unclear-or-noise` | 0 | 0 | 2026-04-21 |
| [`awaisqazi/latinasweatproject`](https://github.com/awaisqazi/latinasweatproject) | Code search (importers) | — | `core-pretext-ecosystem` | 1 | 1 | 2026-04-21 |
| [`B4uti4github/tslash`](https://github.com/B4uti4github/tslash) | Code search (importers) | — | `core-pretext-ecosystem` | 1 | 0 | 2026-04-03 |
| [`badoomb4/DMY-Agency-public`](https://github.com/badoomb4/DMY-Agency-public) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-19 |
| [`binods1313/Sampada-Store`](https://github.com/binods1313/Sampada-Store) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-23 |
| [`blackcater/Acme`](https://github.com/blackcater/Acme) | Code search (importers) | — | `unclear-or-noise` | 0 | 0 | 2026-04-11 |
| [`BlazeUp-AI/Observal`](https://github.com/BlazeUp-AI/Observal) | Code search (importers) | — | `adjacent-pretext` | 635 | 61 | 2026-04-23 |
| [`bonsng/virtualization-benchmark-pretext`](https://github.com/bonsng/virtualization-benchmark-pretext) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-10 |
| [`boutchaz/agritech`](https://github.com/boutchaz/agritech) | Code search (importers) | — | `unclear-or-noise` | 0 | 0 | 2026-04-22 |
| [`Cbturtle2/PersonalWebsite`](https://github.com/Cbturtle2/PersonalWebsite) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-22 |
| [`CharlieGreenman/demo-text-only`](https://github.com/CharlieGreenman/demo-text-only) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-03-29 |
| [`cocktailpeanut/textmash`](https://github.com/cocktailpeanut/textmash) | Community | — | `core-pretext-ecosystem` | 0 | 0 | 2026-03-29 |
| [`Compassie/Flame-test`](https://github.com/Compassie/Flame-test) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-07 |
| [`crossaspeed/ai-agent`](https://github.com/crossaspeed/ai-agent) | Code search (importers) | — | `adjacent-pretext` | 1 | 0 | 2026-04-11 |
| [`d3plus/d3plus`](https://github.com/d3plus/d3plus) | Code search (importers) | — | `unclear-or-noise` | 1618 | 185 | 2026-04-10 |
| [`daniel-raad/web.d`](https://github.com/daniel-raad/web.d) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-19 |
| [`darkroomengineering/fitbox`](https://github.com/darkroomengineering/fitbox) | Discovery | — | `core-pretext-ecosystem` | 3 | 0 | 2026-04-22 |
| [`Dominic789654/Dominic789654.github.io`](https://github.com/Dominic789654/Dominic789654.github.io) | Code search (importers) | — | `core-pretext-ecosystem` | 1 | 0 | 2026-03-31 |
| [`dsbissett/dsbissett.github.io`](https://github.com/dsbissett/dsbissett.github.io) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-05 |
| [`EARider23/BusinessLauncha`](https://github.com/EARider23/BusinessLauncha) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-11 |
| [`fakturapp/faktur`](https://github.com/fakturapp/faktur) | Code search (importers) | — | `unclear-or-noise` | 3 | 1 | 2026-04-22 |
| [`fastrepl/char`](https://github.com/fastrepl/char) | Code search (importers) | — | `unclear-or-noise` | 8309 | 589 | 2026-04-22 |
| [`Fearvox/evermemos-pretext`](https://github.com/Fearvox/evermemos-pretext) | Code search (importers) | — | `adjacent-pretext` | 0 | 0 | 2026-03-31 |
| [`fengzai6/MyReactDemo`](https://github.com/fengzai6/MyReactDemo) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-13 |
| [`FoodTruckNerdz/docs`](https://github.com/FoodTruckNerdz/docs) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-12 |
| [`gin-melodic/ginmel-portfolio`](https://github.com/gin-melodic/ginmel-portfolio) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-03-30 |
| [`GizzyUwU/suri`](https://github.com/GizzyUwU/suri) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-21 |
| [`greenmoach/pretext-app`](https://github.com/greenmoach/pretext-app) | Code search (importers) | — | `adjacent-pretext` | 1 | 0 | 2026-04-02 |
| [`Gregoryc28/Pretext-Playmaker`](https://github.com/Gregoryc28/Pretext-Playmaker) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-03 |
| [`guangzan/tona`](https://github.com/guangzan/tona) | Code search (importers) | — | `unclear-or-noise` | 248 | 59 | 2026-04-17 |
| [`Iemontine/portfolio`](https://github.com/Iemontine/portfolio) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-04 |
| [`imjustinliao/eye-read`](https://github.com/imjustinliao/eye-read) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-01 |
| [`intergalacticspacehighway/pretext-react-native-example`](https://github.com/intergalacticspacehighway/pretext-react-native-example) | Code search (importers) | — | `core-pretext-ecosystem` | 18 | 1 | 2026-03-29 |
| [`Itsnotaka/v7`](https://github.com/Itsnotaka/v7) | Code search (importers) | — | `unclear-or-noise` | 0 | 0 | 2026-04-07 |
| [`jayhansim/pretext-gsap`](https://github.com/jayhansim/pretext-gsap) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-06 |
| [`jihchi/react-pretext`](https://github.com/jihchi/react-pretext) | Community | — | `core-pretext-ecosystem` | 1 | 0 | 2026-03-31 |
| [`joeflateau-octavius/pretext-rich`](https://github.com/joeflateau-octavius/pretext-rich) | Community | — | `core-pretext-ecosystem` | 2 | 0 | 2026-03-30 |
| [`justyn-clark/pretext-chat-poc`](https://github.com/justyn-clark/pretext-chat-poc) | Code search (importers) | — | `core-pretext-ecosystem` | 1 | 0 | 2026-04-07 |
| [`ketanvelip/unwritten`](https://github.com/ketanvelip/unwritten) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-17 |
| [`kitsuyui/react-playground`](https://github.com/kitsuyui/react-playground) | Code search (importers) | — | `unclear-or-noise` | 1 | 1 | 2026-04-20 |
| [`lntegrals/atlas`](https://github.com/lntegrals/atlas) | Code search (importers) | — | `unclear-or-noise` | 0 | 0 | 2026-03-30 |
| [`Lomuss33/myWebsite`](https://github.com/Lomuss33/myWebsite) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-15 |
| [`lucascrespo23/pinch-type`](https://github.com/lucascrespo23/pinch-type) | Community | — | `core-pretext-ecosystem` | 106 | 2 | 2026-03-31 |
| [`mastog/satellite-monitoring-system`](https://github.com/mastog/satellite-monitoring-system) | Code search (importers) | — | `core-pretext-ecosystem` | 1 | 0 | 2026-04-08 |
| [`mateffy/pretext-php`](https://github.com/mateffy/pretext-php) | Community | — | `core-pretext-ecosystem` | 0 | 0 | 2026-03-29 |
| [`minsing-jin/flUId`](https://github.com/minsing-jin/flUId) | Code search (importers) | — | `unclear-or-noise` | 1 | 0 | 2026-04-21 |
| [`moghalsaif/moghalsaif`](https://github.com/moghalsaif/moghalsaif) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-21 |
| [`morten-olsen/editions`](https://github.com/morten-olsen/editions) | Code search (importers) | — | `unclear-or-noise` | 1 | 0 | 2026-04-08 |
| [`MultiboxLabs/flow-browser`](https://github.com/MultiboxLabs/flow-browser) | Code search (importers) | — | `core-pretext-ecosystem` | 960 | 56 | 2026-04-21 |
| [`naitokosuke/blog`](https://github.com/naitokosuke/blog) | Code search (importers) | — | `core-pretext-ecosystem` | 1 | 0 | 2026-04-18 |
| [`nexus-research-lab/nexus`](https://github.com/nexus-research-lab/nexus) | Code search (importers) | — | `adjacent-pretext` | 4 | 0 | 2026-04-23 |
| [`nirholas/visualize-web3-realtime`](https://github.com/nirholas/visualize-web3-realtime) | Code search (importers) | — | `core-pretext-ecosystem` | 12 | 2 | 2026-04-14 |
| [`nomideusz/yoga`](https://github.com/nomideusz/yoga) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-22 |
| [`northpoleforce/demo-260406`](https://github.com/northpoleforce/demo-260406) | Code search (importers) | — | `unclear-or-noise` | 0 | 0 | 2026-04-06 |
| [`nteract/desktop`](https://github.com/nteract/desktop) | Code search (importers) | — | `unclear-or-noise` | 70 | 4 | 2026-04-23 |
| [`pa001024/dna-builder`](https://github.com/pa001024/dna-builder) | Code search (importers) | — | `core-pretext-ecosystem` | 72 | 1 | 2026-04-22 |
| [`PavanCodesNY/Pavan`](https://github.com/PavanCodesNY/Pavan) | Code search (importers) | — | `adjacent-pretext` | 0 | 0 | 2026-04-22 |
| [`Poojan38380/glyphstream`](https://github.com/Poojan38380/glyphstream) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-08 |
| [`pritamscodee/habit-tracker`](https://github.com/pritamscodee/habit-tracker) | Code search (importers) | — | `adjacent-pretext` | 0 | 0 | 2026-04-20 |
| [`reverb256/reverb256.github.io`](https://github.com/reverb256/reverb256.github.io) | Code search (importers) | — | `unclear-or-noise` | 0 | 0 | 2026-04-17 |
| [`Samuel-Fikre/snaptext`](https://github.com/Samuel-Fikre/snaptext) | Code search (importers) | — | `core-pretext-ecosystem` | 5 | 0 | 2026-04-11 |
| [`samwillis/premirror`](https://github.com/samwillis/premirror) | Code search (importers) | — | `unclear-or-noise` | 64 | 6 | 2026-03-29 |
| [`siddhantripathi/Personal-Website`](https://github.com/siddhantripathi/Personal-Website) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-03 |
| [`somnai-dreams/preimage`](https://github.com/somnai-dreams/preimage) | Discovery | — | `core-pretext-ecosystem` | 1 | 0 | 2026-04-23 |
| [`SumanthAitham/LeetMotion`](https://github.com/SumanthAitham/LeetMotion) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-07 |
| [`sunweijieMJ/aix`](https://github.com/sunweijieMJ/aix) | Code search (importers) | — | `unclear-or-noise` | 1 | 0 | 2026-04-21 |
| [`SuperiormonLBJ/blog`](https://github.com/SuperiormonLBJ/blog) | Code search (importers) | — | `core-pretext-ecosystem` | 1 | 0 | 2026-04-05 |
| [`sushil-kamble/1cc`](https://github.com/sushil-kamble/1cc) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-04 |
| [`swoo1226/stitch-mcp-app`](https://github.com/swoo1226/stitch-mcp-app) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-15 |
| [`the-pudding/menu-story`](https://github.com/the-pudding/menu-story) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-21 |
| [`TirtheshJani/portfolio`](https://github.com/TirtheshJani/portfolio) | Code search (importers) | — | `adjacent-pretext` | 0 | 0 | 2026-04-03 |
| [`Top-g-hash/nuxt-pretext`](https://github.com/Top-g-hash/nuxt-pretext) | Discovery | — | `core-pretext-ecosystem` | 1 | 0 | 2026-04-21 |
| [`tornikegomareli/pipecraft.me`](https://github.com/tornikegomareli/pipecraft.me) | Code search (importers) | — | `core-pretext-ecosystem` | 1 | 0 | 2026-04-18 |
| [`Tsegazeab3/linkler`](https://github.com/Tsegazeab3/linkler) | Code search (importers) | — | `adjacent-pretext` | 0 | 2 | 2026-04-19 |
| [`UNLINEARITY/Atlas-of-Control-and-AI`](https://github.com/UNLINEARITY/Atlas-of-Control-and-AI) | Code search (importers) | — | `core-pretext-ecosystem` | 101 | 6 | 2026-03-31 |
| [`vectorize-io/hindsight`](https://github.com/vectorize-io/hindsight) | Code search (importers) | — | `unclear-or-noise` | 10247 | 613 | 2026-04-22 |
| [`vedantlahane/Mnemos`](https://github.com/vedantlahane/Mnemos) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-21 |
| [`vivinarya/web-program`](https://github.com/vivinarya/web-program) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-05 |
| [`wxyhgk/retain-pdf`](https://github.com/wxyhgk/retain-pdf) | Code search (importers) | — | `adjacent-pretext` | 528 | 65 | 2026-04-16 |
| [`Y4shin/open-caucus`](https://github.com/Y4shin/open-caucus) | Code search (importers) | — | `adjacent-pretext` | 0 | 0 | 2026-04-12 |
| [`yeyouyby/grok2api`](https://github.com/yeyouyby/grok2api) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-09 |
| [`zalivo/astro-portfolio`](https://github.com/zalivo/astro-portfolio) | Code search (importers) | — | `core-pretext-ecosystem` | 0 | 0 | 2026-04-12 |

## Repos referencing @chenglou/pretext (code search)

_These rows come from public `gh search code` hits on `package.json` (npm scope and git-style references). They may include false positives, fork noise, or version ranges that do not match what you run locally. **awesome-pretext** remains the curated product list._

| Repo | Stars | Relevance | Rationale (short) |
| --- | ---: | --- | --- |
| [`vectorize-io/hindsight`](https://github.com/vectorize-io/hindsight) | 10247 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`fastrepl/char`](https://github.com/fastrepl/char) | 8309 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`d3plus/d3plus`](https://github.com/d3plus/d3plus) | 1618 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`MultiboxLabs/flow-browser`](https://github.com/MultiboxLabs/flow-browser) | 960 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`BlazeUp-AI/Observal`](https://github.com/BlazeUp-AI/Observal) | 635 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`wxyhgk/retain-pdf`](https://github.com/wxyhgk/retain-pdf) | 528 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`guangzan/tona`](https://github.com/guangzan/tona) | 248 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`UNLINEARITY/Atlas-of-Control-and-AI`](https://github.com/UNLINEARITY/Atlas-of-Control-and-AI) | 101 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`pa001024/dna-builder`](https://github.com/pa001024/dna-builder) | 72 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`nteract/desktop`](https://github.com/nteract/desktop) | 70 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`samwillis/premirror`](https://github.com/samwillis/premirror) | 64 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`intergalacticspacehighway/pretext-react-native-example`](https://github.com/intergalacticspacehighway/pretext-react-native-example) | 18 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`nirholas/visualize-web3-realtime`](https://github.com/nirholas/visualize-web3-realtime) | 12 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Samuel-Fikre/snaptext`](https://github.com/Samuel-Fikre/snaptext) | 5 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`nexus-research-lab/nexus`](https://github.com/nexus-research-lab/nexus) | 4 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`fakturapp/faktur`](https://github.com/fakturapp/faktur) | 3 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`aflansburg/consultme`](https://github.com/aflansburg/consultme) | 1 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`awaisqazi/latinasweatproject`](https://github.com/awaisqazi/latinasweatproject) | 1 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`B4uti4github/tslash`](https://github.com/B4uti4github/tslash) | 1 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`crossaspeed/ai-agent`](https://github.com/crossaspeed/ai-agent) | 1 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Dominic789654/Dominic789654.github.io`](https://github.com/Dominic789654/Dominic789654.github.io) | 1 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`greenmoach/pretext-app`](https://github.com/greenmoach/pretext-app) | 1 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`justyn-clark/pretext-chat-poc`](https://github.com/justyn-clark/pretext-chat-poc) | 1 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`kitsuyui/react-playground`](https://github.com/kitsuyui/react-playground) | 1 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`mastog/satellite-monitoring-system`](https://github.com/mastog/satellite-monitoring-system) | 1 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`minsing-jin/flUId`](https://github.com/minsing-jin/flUId) | 1 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`morten-olsen/editions`](https://github.com/morten-olsen/editions) | 1 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`naitokosuke/blog`](https://github.com/naitokosuke/blog) | 1 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`sunweijieMJ/aix`](https://github.com/sunweijieMJ/aix) | 1 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`SuperiormonLBJ/blog`](https://github.com/SuperiormonLBJ/blog) | 1 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`tornikegomareli/pipecraft.me`](https://github.com/tornikegomareli/pipecraft.me) | 1 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`aashirpersonal/pretextui`](https://github.com/aashirpersonal/pretextui) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Abhishek-701/abhishek701`](https://github.com/Abhishek-701/abhishek701) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Abhishekingle662/pretext-flow-demo`](https://github.com/Abhishekingle662/pretext-flow-demo) | 0 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`ashishmaharana188/cognitiveGraph`](https://github.com/ashishmaharana188/cognitiveGraph) | 0 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`badoomb4/DMY-Agency-public`](https://github.com/badoomb4/DMY-Agency-public) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`binods1313/Sampada-Store`](https://github.com/binods1313/Sampada-Store) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`blackcater/Acme`](https://github.com/blackcater/Acme) | 0 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`bonsng/virtualization-benchmark-pretext`](https://github.com/bonsng/virtualization-benchmark-pretext) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`boutchaz/agritech`](https://github.com/boutchaz/agritech) | 0 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`Cbturtle2/PersonalWebsite`](https://github.com/Cbturtle2/PersonalWebsite) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`CharlieGreenman/demo-text-only`](https://github.com/CharlieGreenman/demo-text-only) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Compassie/Flame-test`](https://github.com/Compassie/Flame-test) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`daniel-raad/web.d`](https://github.com/daniel-raad/web.d) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`dsbissett/dsbissett.github.io`](https://github.com/dsbissett/dsbissett.github.io) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`EARider23/BusinessLauncha`](https://github.com/EARider23/BusinessLauncha) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Fearvox/evermemos-pretext`](https://github.com/Fearvox/evermemos-pretext) | 0 | `adjacent-pretext` | Name or description suggests Pretext ecosystem; no package.json proof via API. |
| [`fengzai6/MyReactDemo`](https://github.com/fengzai6/MyReactDemo) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`FoodTruckNerdz/docs`](https://github.com/FoodTruckNerdz/docs) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`gin-melodic/ginmel-portfolio`](https://github.com/gin-melodic/ginmel-portfolio) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`GizzyUwU/suri`](https://github.com/GizzyUwU/suri) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Gregoryc28/Pretext-Playmaker`](https://github.com/Gregoryc28/Pretext-Playmaker) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Iemontine/portfolio`](https://github.com/Iemontine/portfolio) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`imjustinliao/eye-read`](https://github.com/imjustinliao/eye-read) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Itsnotaka/v7`](https://github.com/Itsnotaka/v7) | 0 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`jayhansim/pretext-gsap`](https://github.com/jayhansim/pretext-gsap) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`ketanvelip/unwritten`](https://github.com/ketanvelip/unwritten) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`lntegrals/atlas`](https://github.com/lntegrals/atlas) | 0 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`Lomuss33/myWebsite`](https://github.com/Lomuss33/myWebsite) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`moghalsaif/moghalsaif`](https://github.com/moghalsaif/moghalsaif) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`nomideusz/yoga`](https://github.com/nomideusz/yoga) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`northpoleforce/demo-260406`](https://github.com/northpoleforce/demo-260406) | 0 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`PavanCodesNY/Pavan`](https://github.com/PavanCodesNY/Pavan) | 0 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Poojan38380/glyphstream`](https://github.com/Poojan38380/glyphstream) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`pritamscodee/habit-tracker`](https://github.com/pritamscodee/habit-tracker) | 0 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`reverb256/reverb256.github.io`](https://github.com/reverb256/reverb256.github.io) | 0 | `unclear-or-noise` | Could not confirm @chenglou/pretext from GitHub API; may still be related — review README after clone. |
| [`siddhantripathi/Personal-Website`](https://github.com/siddhantripathi/Personal-Website) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`SumanthAitham/LeetMotion`](https://github.com/SumanthAitham/LeetMotion) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`sushil-kamble/1cc`](https://github.com/sushil-kamble/1cc) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`swoo1226/stitch-mcp-app`](https://github.com/swoo1226/stitch-mcp-app) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`the-pudding/menu-story`](https://github.com/the-pudding/menu-story) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`TirtheshJani/portfolio`](https://github.com/TirtheshJani/portfolio) | 0 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`Tsegazeab3/linkler`](https://github.com/Tsegazeab3/linkler) | 0 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`vedantlahane/Mnemos`](https://github.com/vedantlahane/Mnemos) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`vivinarya/web-program`](https://github.com/vivinarya/web-program) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`Y4shin/open-caucus`](https://github.com/Y4shin/open-caucus) | 0 | `adjacent-pretext` | Matched public GitHub code search for package.json referencing Pretext; could not load package.json via API — verify loc… |
| [`yeyouyby/grok2api`](https://github.com/yeyouyby/grok2api) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |
| [`zalivo/astro-portfolio`](https://github.com/zalivo/astro-portfolio) | 0 | `core-pretext-ecosystem` | package.json lists @chenglou/pretext (dependency / peer / dev). |

## Repos in this fork’s inventory but not in awesome-pretext README tables

- [`acoyfellow/cloudterm`](https://github.com/acoyfellow/cloudterm) — Web terminal emulator. DOM-rendered. Built on @chenglou/pretext.
- [`darkroomengineering/fitbox`](https://github.com/darkroomengineering/fitbox) — Reflow-free text-to-box fitting for React, built on Pretext.
- [`somnai-dreams/preimage`](https://github.com/somnai-dreams/preimage) — Fast, accurate & comprehensive image measurement & layout, based on @chenglou/pretext
- [`Top-g-hash/nuxt-pretext`](https://github.com/Top-g-hash/nuxt-pretext) — Pretext integration for Nuxt. Fast multiline text measurement without DOM reflow. Components, composables, and canvas rendering included.

