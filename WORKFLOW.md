# Fork workflow: upstream, GitButler, and issue/PR triage

This fork tracks [chenglou/pretext](https://github.com/chenglou/pretext) while keeping an auditable path for integrating open upstream PRs.

## Remotes

| Remote | URL | Role |
|--------|-----|------|
| `origin` | `https://github.com/aculich/pretext` | Your fork (push PRs here) |
| `upstream` | `https://github.com/chenglou/pretext.git` | Canonical upstream |

```sh
git fetch upstream
git merge upstream/main   # or rebase your branch, per team preference
```

## GitButler and `but` (macOS)

1. Install the app + CLI: `brew install --cask gitbutler` (binary: `but`).
2. From your **toolchain-2026** checkout (this machine: `~/tools/toolchain-2026`), merge AI hooks per `docs/patterns/GITBUTLER_AI_HOOKS.md`:

   ```sh
   cd ~/tools/toolchain-2026
   ./scripts/configure-gitbutler-ai-hooks.sh --dry-run   # optional preview
   ./scripts/configure-gitbutler-ai-hooks.sh
   ```

   This updates `~/.cursor/hooks.json` and merges `hooks` into `~/.claude/settings.json`. If you later run `configure-claude-code-safe-yolo.sh --force`, **re-run** the GitButler script afterward.

3. Do not mix **Graphite** (`gt`) and **GitButler** on the same worktree; pick one stacking model per repo (see `STACKED_PR_IDE_EXTENSIONS.md` in the same toolchain docs tree).

4. **Stacked integration branches** used for wave 1 (tip = `integration/wave1-upstream`, merged into `main`):

   - `integration/wave1-pr125` → `integration/wave1-pr80` → … → `integration/wave1-pr97`
   - Each step is one upstream PR cherry-picked from `upstream pull/<n>/head`.

## Local GitHub archive (issues + PRs + comments)

Scripts live under `scripts/`; data under `research/github/`.

| Command | Output |
|---------|--------|
| `bun run github:export` | Refreshes `research/github/*.jsonl` + `manifest.json` (all issues/PRs, all issue comments, all PR review comments) |
| `bun run github:triage` | Writes `research/github/triage.json` + `triage-summary.md` (heuristic scores; wave-1 shortlist) |
| `bun run github:priissues` | Calls `gh api` once per PR for full diff stats; writes [PRISSUES.md](PRISSUES.md) + `research/github/priissues.json` (full catalog, value/difficulty/recommendation) |

Requirements: `gh` authenticated (`gh auth login`). Run `github:export` before `github:priissues` if the JSONL snapshot is stale.

## Periodic upstream sync & triage

Run this rhythm whenever you want **main** aligned with `chenglou/pretext`, fresh **issue/PR intelligence**, and **fork** drift checks. Cursor agents can follow the project skill [`.cursor/skills/pretext-upstream-rhythm/SKILL.md`](.cursor/skills/pretext-upstream-rhythm/SKILL.md) for a compact checklist.

### 1. Git — merge upstream

```sh
git fetch upstream
git merge --no-ff upstream/main   # resolve conflicts; preserve fork-specific doc pointers
git log --oneline main..upstream/main   # expect empty when caught up
```

### 2. Verify + log

Run **Verification** (below), then append a dated row block to **Verification log**. If you refreshed GitHub data in the same session, note `bun run github:priissues` there too.

### 3. Refresh GitHub export (issues, PRs, all comments)

```sh
bun run github:export
bun run github:triage
bun run github:priissues
```

After export, `research/github/manifest.json` records `exported_at` and counts. If `research/github/` is committed, use `git diff research/github/` to see what changed since the last rhythm.

### 4. Triage: what to look for

| Goal | Where |
|------|--------|
| **New upstream PRs** | [PRISSUES.md](PRISSUES.md) — focus on **open** rows that are not `already_in_fork`. Sort mentally by `updated_at` / title in `research/github/pulls.jsonl`. |
| **New upstream issues** | `research/github/issues.jsonl` — items with no `pull_request` field and `"state": "open"`, newest `created_at` first. |
| **Comments on work we already merged** | Issue + PR threads for upstream numbers we ship in this fork (see table below). Use `rg` on the JSONL after export, or read threads on GitHub. |

**Integrated upstream PRs (watch for ongoing discussion)** — upstream may still show these PRs **open** while commentary continues; our fork already contains the substance ([FEATURES.md](FEATURES.md)):

`#17` `#19` `#21` `#31` `#45` `#46` `#79` `#80` `#81` `#93` `#97` `#113` `#114` `#119` `#125`

Examples (issue-style comments on PR threads live in `issues.comments.jsonl`; line reviews in `pulls.review_comments.jsonl`):

```sh
rg 'chenglou/pretext/pull/(17|19|21|31|45|46|79|80|81|93|97|113|114|119|125)' research/github/issues.comments.jsonl
rg 'api.github.com/repos/chenglou/pretext/pulls/(17|19|21|31|45|46|79|80|81|93|97|113|114|119|125)"' research/github/pulls.review_comments.jsonl
```

(Adjust the alternation if you add new integrated PRs; keep [FEATURES.md](FEATURES.md) and this list in sync.)

### 5. Known forks — check for new commits

Canonical list: [research/forks/README.md](research/forks/README.md) (**Relevant forks registry**).

- **pretext-a11y** (if cloned): `cd research/forks/pretext-a11y && git fetch origin && git log --oneline HEAD..origin/main | head -30`
- **awesome-pretext**: skim the repo for new listed projects (not a `git pull` inside this monorepo).

If a fork gained meaningful commits, update [pretext-a11y-analysis.md](research/github/pretext-a11y-analysis.md) or add a new short analysis file under `research/github/`.

### 6. Discover new forks (optional)

Read-only GitHub search (tweak query if noisy):

```sh
gh search repos "pretext fork:true" --sort updated --limit 15 --json fullName,description,updatedAt,url
```

Compare results to [research/forks/README.md](research/forks/README.md). Add promising repos to the registry after a quick sanity check (real fork vs name collision).

### 7. Push

When checks pass: `git push origin main`.

---

## Relevant forks (summary)

Third-party layout forks and the community list live in [research/forks/README.md](research/forks/README.md) (**Relevant forks registry**). Accessibility fork analysis: [research/github/pretext-a11y-analysis.md](research/github/pretext-a11y-analysis.md).

## Wave 1 upstream PRs integrated (2026-04-12)

Cherry-picked onto `main` (from open PRs on `chenglou/pretext`):

| PR | Summary |
|----|---------|
| [#125](https://github.com/chenglou/pretext/pull/125) | Docs: README typo / parenthesis in `walkLineRanges` description |
| [#80](https://github.com/chenglou/pretext/pull/80) | Docs: link to community [awesome-pretext](https://github.com/ShipItAndPray/awesome-pretext) |
| [#119](https://github.com/chenglou/pretext/pull/119) | Perf: skip no-op merge passes in `src/analysis.ts` |
| [#114](https://github.com/chenglou/pretext/pull/114) | Dev: Windows `start:windows` uses `localhost` instead of `0.0.0.0` |
| [#97](https://github.com/chenglou/pretext/pull/97) | Docs: real-world snippet + best practices + performance table; adds `benchmarks/simple-benchmark.ts` |

**Note:** [#97](https://github.com/chenglou/pretext/pull/97) needed a README merge fix: the upstream first commit omitted a closing ` ``` ` on the TypeScript example; resolution keeps our Demos/awesome-pretext lines and a valid fenced block.

## Verification (after integrating)

See [DEVELOPMENT.md](DEVELOPMENT.md). Minimum bar:

```sh
bun install
bun run check
bun test
bun run site:build
```

Optional smoke: `bun start` → open `/demos/index`.

**Demo sweep checklist** (click every card from `/demos/index`, or hit these paths): `/demos/accordion`, `/demos/bubbles`, `/demos/dynamic-layout`, `/demos/variable-typographic-ascii`, `/demos/editorial-engine`, `/demos/justification-comparison`, `/demos/rich-note`, `/demos/markdown-chat`, `/demos/masonry`, `/demos/virtual-scroll`, `/demos/virtual-chat`, `/demos/cjk-line-breaking`, `/demos/old-man-sea`, `/demos/floating-languages`, `/demos/optimal-line-breaking`.

**Demo performance** — If a demo feels janky, classify the issue using [PERFORMANCE.md](PERFORMANCE.md) (library vs render loop vs compositing) before changing `src/`. Floating Languages supports an optional probe: `/demos/floating-languages?perf=1`.

Results from the last integration run are appended in this file’s **Verification log** section below.

## Verification log

**Session: 2026-04-21 (`pretext-upstream-rhythm` — merge + GitHub refresh)**

| Step | Result |
|------|--------|
| `git merge upstream/main` | 1 commit (`f201433` Better root cause command); `AGENTS.md` auto-merged |
| `bun install` | Pass |
| `bun run check` | Pass (`tsc` + `oxlint --type-aware src`) |
| `bun test` | Pass (164 tests) |
| `bun run site:build` | Pass (`site/` generated) |
| `bun run github:export` | Pass — manifest counts: issues 72, pulls 83, issue comments 182, PR review comments 15 |
| `bun run github:triage` | Pass — wave-1 shortlist includes **#139**, **#132**, **#80**, **#119**, **#38** (see `triage-summary.md`) |
| `bun run github:priissues` | Pass — [PRISSUES.md](PRISSUES.md) + `priissues.json` refreshed |
| Fork `pretext-a11y` | Clone present; `origin/main` had **no** commits ahead of local `HEAD` after `git fetch` |
| `gh search repos "pretext fork:true"` | Many hits are **unrelated** (PreTeXt math notes, social-engineering “pretext”); worth eyeball: **darkroomengineering/fitbox** (React + Pretext), **acoyfellow/cloudterm**, **Top-g-hash/nuxt-pretext**, **somnai-dreams/preimage** |

**Session: 2026-04-18 (merge `upstream/main` — 13 commits behind → caught up)**

| Step | Result |
|------|--------|
| `bun install` | Pass (no lock drift) |
| `bun run check` | Pass (`tsc` + `oxlint --type-aware src`) |
| `bun test` | Pass (164 tests) |
| `bun run site:build` | Pass (`site/` generated) |
| Dev server smoke | `HOST=127.0.0.1 bun start` → `GET` each path in the demo sweep checklist **HTTP 200** at `http://127.0.0.1:3000` |

**Session: 2026-04-12 (wave 2 — demos + capabilities)**

| Step | Result |
|------|--------|
| `bun run check` | Pass (`tsc` + `oxlint --type-aware src`) |
| `bun test` | Pass (160 tests) |
| `bun run site:build` | Pass (`site/` generated) |
| Dev server | `bun start` → `GET /demos` and every path in the demo sweep checklist **HTTP 200** (spot-checked via `curl` to `127.0.0.1:3000`) |
| `bun run github:priissues` | Pass — refreshed [PRISSUES.md](PRISSUES.md) + `research/github/priissues.json` |

**Session: 2026-04-12 (wave 1)**

| Step | Result |
|------|--------|
| `bun run check` | Pass (`tsc` + `oxlint --type-aware src`) |
| `bun test` | Pass (144 tests; includes duplicate suite under `research/forks/pretext-a11y` if cloned) |
| `bun run site:build` | Pass (`site/` generated) |
| Dev server | `bun pages/demos/index.html --host=127.0.0.1:3001` → `GET /demos` **HTTP 200** |
| `bun run benchmarks/simple-benchmark.ts` | **Fails in plain Bun** (no canvas / OffscreenCanvas). Run in a browser or another canvas-capable runtime; see comment in `benchmarks/simple-benchmark.ts`. |
