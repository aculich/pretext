---
name: pretext-upstream-rhythm
description: Runs the aculich/pretext periodic upstream workflow—**version alignment** vs upstream tags/releases and fork `package.json`, **git sync** to chenglou/pretext with zero-behind checks, verification, GitHub export/triage/PRISSUES refresh, **ecosystem refresh** (intake, collection markdown, optional `site:build` / clone / Lighthouse), **dependent-repo discovery** merged from `gh search code` alongside fork freshness and optional fork discovery, then push. Use when syncing the fork with upstream, refreshing upstream issues and pull requests, triaging new PRs, reviewing comments on already-merged upstream PRs, checking known pretext forks for new commits, scanning for new interesting forks or package consumers, or the user asks for the routinized upstream update rhythm.
---

# Pretext upstream rhythm (aculich fork)

Canonical narrative lives in [WORKFLOW.md](../../../WORKFLOW.md) (sections **Remotes**, **Local GitHub archive**, **Relevant forks registry**, **Periodic upstream sync & triage**). This skill is the **short execution checklist** for agents.

## Preconditions

- Repo root: this project (`pretext__aculich` / `aculich/pretext`).
- `gh auth login` completed for GitHub API scripts.
- Use **bun** for all `bun run …` commands ([DEVELOPMENT.md](../../../DEVELOPMENT.md)).

## 0. Version alignment (read-only first)

Compare what upstream has shipped to what this fork tracks in [`package.json`](../../../package.json) `version` and the latest dated section in [`CHANGELOG.md`](../../../CHANGELOG.md).

```sh
gh release list -R chenglou/pretext --limit 8
# optional: gh api repos/chenglou/pretext/tags --jq '.[].name' | head -10
```

Web: [upstream tags](https://github.com/chenglou/pretext/tags), [releases](https://github.com/chenglou/pretext/releases).

**Rule of thumb:** after a clean merge to `upstream/main`, if upstream has shipped a **new semver tag** you intend to track, bump `package.json` to that version and add a dated `CHANGELOG` section when you are **releasing** fork bits as the published library. If the fork only adds docs/scripts/research, either **keep** the same semver as the latest upstream tag you merged through, or use an explicit **pre-release** suffix (e.g. `0.0.6-dev.0` or `0.0.6+aculich.1`). Pick one convention per release line and stick to it.

## 1. Git — catch up to upstream

```sh
git fetch upstream
git status
git merge --no-ff upstream/main
# resolve conflicts if any; prefer combining doc guidance rather than dropping fork-specific WORKFLOW/FEATURES pointers
```

Compare ahead/behind — expect **0 commits behind** `upstream/main` before you push:

```sh
git log --oneline main..upstream/main
git log --oneline upstream/main..main
```

If `main..upstream/main` is non-empty, you are still behind; merge or rebase until it is empty.

## 2. Verification (after any merge from upstream)

From [WORKFLOW.md](../../../WORKFLOW.md) **Verification**:

```sh
bun install
bun run check
bun run test
bun run site:build
```

Optional: `HOST=127.0.0.1 bun start` → HTTP 200 on every path in the **Demo sweep checklist** (`WORKFLOW.md` demo sweep), or spot-check `/demos`.

Append a row block to **Verification log** in `WORKFLOW.md` when this rhythm completes.

## 3. GitHub — refresh local intelligence

Order matters (`github:priissues` wants a fresh export):

```sh
bun run github:export
bun run github:triage
bun run github:priissues
```

If `research/github/` is tracked, inspect churn:

```sh
git diff --stat research/github/
```

**What to surface for the human**

- **New PRs:** read [PRISSUES.md](../../../PRISSUES.md) (open, not `already_in_fork` / not low-signal) and **`research/github/pulls.jsonl`** filtered by `state === "open"` and recency of `created_at` / `updated_at`.
- **New issues:** same export; **`issues.jsonl`** where `pull_request` is null and issue is `open`, sorted by `created_at`.
- **Commentary on work we already shipped:** filter **`issues.comments.jsonl`** and **`pulls.review_comments.jsonl`** for issue/PR numbers listed under **Integrated upstream PRs (watch for ongoing discussion)** in `WORKFLOW.md` (and [FEATURES.md](../../../FEATURES.md) for the fuller source list).

## 4. Ecosystem pass (expanded)

Run in order as needed (full detail: [research/forks/README.md](../../../research/forks/README.md), [ECOSYSTEM-COLLECTION.md](../../../research/forks/ECOSYSTEM-COLLECTION.md)):

- [ ] `bun run ecosystem:intake` — refreshes `research/forks/ecosystem-inventory.json`, `pages/assets/ecosystem-inventory.json`, **ECOSYSTEM-COLLECTION.md** (awesome `app.js`, community list, discovery extras, **deduped `gh search code` dependents** on `package.json`), stars/forks via `gh repo view`, README link warnings.
- [ ] Optional: `bun run ecosystem:clone-upstream` — shallow mirrors under `upstream/`.
- [ ] **`bun run site:build`** when the static `site/` must pick up new `pages/assets/ecosystem-inventory.json` (e.g. publishing `/demos/ecosystem-catalog`).
- [ ] Optional: `bun run ecosystem:lighthouse` when comparing catalog perf vs awesome-pretext.

## 5. Third-party forks — freshness and discovery

See [research/forks/README.md](../../../research/forks/README.md) (**Relevant forks registry**).

For each **clone-based** fork (e.g. `pretext-a11y` under `research/forks/`):

```sh
cd research/forks/pretext-a11y && git fetch origin && git log --oneline HEAD..origin/main | head -20
```

If there are new commits, summarize themes; offer to refresh [pretext-a11y-analysis.md](../../../research/github/pretext-a11y-analysis.md) after a diff review.

**awesome-pretext** is a **community list**, not a layout fork—periodically open the repo for new links, not `git pull` inside this repo.

**Discover new forks (optional)** — read-only repo search:

```sh
gh search repos "pretext fork:true" --sort updated --limit 15 --json fullName,description,updatedAt,url
```

Compare hits to [research/forks/README.md](../../../research/forks/README.md). If a fork looks substantial and is missing there, note it for the human and propose adding a row to the registry (and optionally a short analysis doc under `research/github/`).

**Dependent repos (spot-check without full intake)** — same queries `ecosystem:intake` merges (throttled; small limits):

```sh
gh search code '"@chenglou/pretext"' --filename package.json --json repository --limit 20
gh search code '"chenglou/pretext"' --filename package.json --json repository --limit 15
```

## 6. Push

After verification passes and you are **not behind** upstream:

```sh
git push origin main
```

## Handoff template

Summarize:

- Upstream merge result (commits / conflicts) and **ahead/behind vs `upstream/main`** (expect zero behind before push).
- **Version / release alignment:** upstream latest tag or release vs [`package.json`](../../../package.json) `version` / `CHANGELOG` — any bump or pre-release suffix applied or deferred.
- Test counts and `site:build` outcome.
- **New** open PRs/issues worth eyeballing; **comment activity** on integrated PR numbers.
- Fork fetch results.
- **Ecosystem:** `ecosystem:intake` run or skipped; **count of new dependent-repo rows** (`pretext-dependent-search` in inventory) if intake ran; **README link warnings** from intake (repos in awesome README not in inventory); **`site:build`** done or skipped with reason.
- Any **new search hits** from fork discovery (step 5) not yet in the registry.
