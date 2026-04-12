# Performance: how to think about it, measure it, and debug it

This document is the **conceptual** layer: why performance matters for Pretext, a shared **vocabulary** for kinds of cost, and what different **evidence** can prove. For commands, snapshot paths, and Chrome setup, see [DEVELOPMENT.md](DEVELOPMENT.md).

---

## Why Pretext exists (performance-related story)

Browsers expose text size through APIs that are easy to misuse. Patterns like `getBoundingClientRect`, `offsetHeight`, or measuring many DOM nodes in a loop force **synchronous layout** (reflow). When reads and writes interleave across components, the engine cannot batch work; cost scales with the document, not with the text you care about. That shows up as **jank**, **scroll jank**, and **layout thrash**.

Pretext’s bet is different:

1. **`prepare()` once** when text, font, or whitespace mode changes — segment, analyze, and cache widths (using the canvas font engine as ground truth where needed).
2. **`layout()` many times** when width or line height changes — mostly **pure arithmetic** over cached numbers, without touching the DOM.

That split is how you reserve height for chat rows, virtualize long lists, or animate reflow **without** paying a full document layout per measurement. Correctness work (i18n, bidi, parity with browser line breaking) adds cost mainly to **`prepare`**, not necessarily to every resize.

This README line is the product promise in performance terms: *side-step DOM measurements that trigger reflow*.

---

## Ontology — categories of “performance” (shared language)

Use these labels in issues, PRs, and demo bugs so everyone knows **which subsystem** is in play. They are **orthogonal**: a single user-visible hitch can involve more than one class.

| Class | What it is | Typical signals |
|-------|------------|-----------------|
| **A. Library hot path** | CPU in `prepare` / `layout` / `walkLineRanges` / line-break internals | High time in profiler **inside** Pretext; regressions on `/benchmark` workloads |
| **B. Measurement / canvas** | Font loading, `measureText`, emoji correction, cold caches | First-frame spikes; differences before vs after `document.fonts.ready` |
| **C. rAF / render loop** | Per-frame work: physics, O(n²) geometry, allocations inside `requestAnimationFrame` | FPS drops as entity count grows; **long tasks** in Performance panel |
| **D. DOM / CSS compositing** | `transform`, `filter`, `backdrop-filter`, large paint regions | Paint flashing in DevTools; GPU row hot; “flicker” with no Pretext in the stack |
| **E. Layout thrash** | Interleaved DOM reads/writes, frequent `textContent` / width changes | Jank tied to interaction; “Recalculate style / Layout” bursts |

**Important distinction:** microseconds in **`layout()`** (A), milliseconds in **paint/composite** (D), and **dropped frames** (C) are all “performance”; they are not interchangeable metrics.

**Textual demos** (pages under `/demos/`) are **integration surfaces**: they combine Pretext (often A) with whatever the author did for UI (C–E). **Flicker or stutter in a demo is often C or D until a trace shows otherwise.**

---

## Epistemology — what each kind of evidence can prove

| Evidence | Strong for | Weak for |
|----------|------------|----------|
| **Synthetic benchmarks** — [pages/benchmark.ts](pages/benchmark.ts), `bun run benchmark-check`, checked-in `benchmarks/*.json` | **Regressions in A**; comparing `prepare` vs `layout` throughput | Scroll smoothness, demo “feel”, GPU-bound jank |
| **Chrome Performance / Profiler** | **Attribution** (A vs C vs E), **long tasks**, main-thread stacks | Definitive proof of correctness |
| **Accuracy / corpus tooling** — see [DEVELOPMENT.md](DEVELOPMENT.md) | **Correctness** and worst-case linguistic behavior; indirect effect on **prepare** cost (A) | FPS |
| **Demos + `?perf=1`** (where supported) | **Frame-time stats** and long-task counts for **integration** (C + D) | Isolating a single function in `src/` |

Do **not** infer UI smoothness from benchmark numbers alone, or infer library regression from demo flicker alone — **classify first** (A–E), then pick the instrument.

---

## Lifecycle — develop, debug, measure, benchmark

1. **Develop** — Prefer reusing `PreparedText`; avoid calling `prepare()` in hot loops; keep demo rAF bodies allocation-light when possible.
2. **Debug** — Name the class (A–E) before optimizing; wrong layer fixes waste time.
3. **Measure** — Match the claim: library throughput → benchmark page; jank → Performance trace + long tasks; correctness drift → accuracy/corpus.
4. **Benchmark** — For **A**, use the repo’s benchmark harness and snapshots. For **C/D** on heavy demos, use DevTools and optional demo probes (see below).

---

## Operational playbook (where to click and what to run)

All concrete steps live in [DEVELOPMENT.md](DEVELOPMENT.md):

- **Day-to-day:** `bun start`, `/benchmark`, `/accuracy`, corpus commands.
- **Deep profiling:** isolated Chrome, CPU profiler, allocation sampling, heap diffs.

---

## Case study: Floating Languages (`/demos/floating-languages`)

### Profiling classification (structural / code review)

Review of [pages/demos/floating-languages.ts](pages/demos/floating-languages.ts) and its markup/CSS shows cost is **dominated by C and D**, with **A** spiking when the width animation runs (`layout` + `walkLineRanges` on the active bubble):

- **C:** Full-screen `clearRect` every frame, per-frame canvas work, O(n²) pairwise edge segments over nearby bubbles, `requestAnimationFrame` loop driving physics and DOM `transform` updates.
- **D:** Bubbles use **`backdrop-filter`** and layered effects; combined with a full-screen canvas background, compositing can be expensive and sensitive to frame drops.
- **A:** Noticeable mainly during **`tickWidthAnimation`** (animated width), not during passive float.

**Recommended Chrome steps** (confirm in your environment):

1. Open `/demos/floating-languages`, **Performance** → record 5–10 s idle + hover + one click to activate a bubble.
2. Inspect **Main** thread: look for `drawBackground`, painting, style recalc vs `layout` / `walkLineRanges`.
3. Enable **long tasks** (or `?perf=1` — see below) to see hitches > 50 ms.
4. **Rendering → Paint flashing** / layer borders to see large invalidations.

The demo applies **optimizations** aimed at C: cached radial gradients (avoid per-frame `createRadialGradient` allocation), cheaper distance checks for edges, throttled meta label updates during animation, and an optional **`?perf=1`** probe for rolling frame-time logs.

---

## Optional demo probe: `?perf=1`

On **Floating Languages**, append **`?perf=1`** to the URL (e.g. `http://localhost:3000/demos/floating-languages?perf=1`). Every ~120 frames the page logs a **`console.table`** with rolling **average / max time per `requestAnimationFrame` callback** (main-thread work for physics, DOM transforms, and canvas) and **`longTasksOver50ms`** from a `PerformanceObserver` when the browser supports `longtask` (not all engines do). Use it for before/after comparisons when changing the demo or the browser. For flame charts and `performance.measure` spans, use Chrome **Performance** manually while this flag is on.

---

## Environment and upstream

- **`bun start` vs static `site/`** — Different bundling and no HMR in static output; compare flicker or FPS in **both** if you ship the demo site.
- **Upstream engine perf** — Large PRs (see [PRISSUES.md](PRISSUES.md)) may target **A**; they do not replace profiling **C/D** in demos.

---

## Closing the loop

**README** (why Pretext) → **this document** (how to talk about performance and evidence) → **DEVELOPMENT.md** (how to run checks and profilers) → **demos** (where users feel jank). Keep the taxonomy in one place (here) and link to it from workflow docs rather than duplicating long explanations.
