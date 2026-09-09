# Phase log

What changed, phase by phase. Each entry follows the report format in `AGENTS.md`: what changed
file by file, what was deliberately left alone, judgement calls with rejected alternatives,
contradictions found, and the fidelity checklist result.

Newest last.

---

## Phase 0 — Inventory

**Date:** 2026-09-08 · **Commits:** none (inventory only, no edits)

Mapped the in-scope design before touching anything.

**Findings that shaped later work:**

- `Team Stores Workspace.dc.html` is a **46-line loader**, not the UI. All of it lives in
  `workspace-app.jsx`: **33,939 lines, 514 top-level components**, a **22-value** `screen` state
  machine, **57 modals**, 5 drawers, 4 overlays, 9 panels, 5 pages, 6 views, 5 tabs.
- **Styling is ~99% inline:** 5,616 `style={{…}}`, 150 `style={expr}`, **31** `className=`,
  15 in-JSX `<style>` blocks (13 of them a single `@keyframes`). **6,116 hex literals / 364
  distinct**, 350 `rgba()`, and `var(--…)` referenced **once**.
- **One `@media` query, and it is `prefers-reduced-motion`.** No layout breakpoints. See
  `docs/architecture/responsive-strategy.md`.
- **579 `useState`, 127 `useEffect`**, 31 `localStorage` and 2 `sessionStorage` writes, and **22
  `window.__*` globals** used for cross-component routing.
- **Persisted first-run state** (`prolook_is_first_store`, `ts_setup_guide_seen_v1`,
  `ts_sso_welcomed`) makes several screens one-shot — clear site data before each fidelity check.
- **Link-isolated:** 18 dead `href="#"` anchors and 2 `window.open` calls to
  `customizer.prolook.com`. **No links to Landing, Storefront, Documentation or the Third-Party
  variant**, so the scope boundary costs nothing.
- **Assets:** `assets/` holds 262 files; `products/` (228) and `sport-cards/` (22) are reached via
  runtime-built paths, so they cannot be pruned by static analysis. `uploads/` (562 files) is
  referenced **zero** times.
- **Preview shell is smaller than the brief assumed.** The Mobile/Desktop toggle, Restart button
  and device frame are Claude Design's editor chrome and **are not in the export**. What is
  present: `support.js`, the `<x-dc>`/`<x-import>` wrapper, `__bundler_thumbnail`, the
  `--dc-inv-zoom` variable, `#frame=` hash routing, and the **Tweaks panel** (~350 lines) — which
  is *not* inert, since `App()` reads `tweaks.ssoWelcome` and `tweaks.ssoOriginBrand`.

**Left alone:** everything. No edits.

---

## Phase 1 — Reference import

**Date:** 2026-09-08 · **Branch:** `chore/reference-export` · **Commits:** `9f86d85`, `8453bf8`,
`dca1094`, `12d4e58`

### What changed, file by file

| File | Change | Commit |
|---|---|---|
| `.gitignore` | **new** — deps, build output, `.env*`, editor dirs, `.DS_Store`, caches. Env section notes brand/tenant identity is runtime config, not build-time constants. | `9f86d85` |
| `reference/` | **+360 files, 96 MB** — `support.js`, `workspace-app.jsx`, `assets/`, `_ds/`, `handoff/`, `scratch/`, `screenshots/`, sibling `.dc.html` pages, other `workspace-app-*.jsx` variants. `rsync -a`, no transformation. | `8453bf8` |
| `reference/README.md` | **new** — provenance, in-scope dependency chain, out-of-scope list with reasons, how to serve it, persisted first-run state to clear. | `8453bf8` |
| `.gitignore` | `reference/uploads/` exclusion appended, reason inline. | `8453bf8` |
| `reference/CLAUDE.md` → `reference/CLAUDE.md.original` | renamed so it is not auto-loaded. Content unchanged. | `dca1094` |
| `CLAUDE (1).md` → `CLAUDE.md`, `README (1).md` → `README.md` | pure rename of GitHub-upload duplicates. | `12d4e58` |

### Verified, not assumed

- **In-scope file byte-identical:** sha256 `52b89cc7…` before the import, after the import, and
  after the rename.
- **It renders.** Before this phase it could not — `reference/` held two `.dc.html` files and
  neither `support.js` nor `workspace-app.jsx`, so the in-scope file was a loader pointing at two
  absent targets. After: SSO welcome modal → "Continue to Workspace" → Overview, with header,
  Frequently Visited cards and the KPI row (Total Revenue $69,589 · Orders 1,513 · Active Stores 4
  · Avg Order Value $46).
- **Console clean** apart from one pre-existing warning: `[BABEL] … deoptimised the styling of
  /workspace-app.jsx as it exceeds the max of 500KB` — the in-browser transform of 2 MB of JSX,
  not a defect.
- **Staged exactly 362 files**, zero from `uploads/`, zero `.DS_Store`.
- **Nothing over 50 MB** (`find reference -type f -size +50M` empty). Largest tracked file 3.6 MB;
  largest on disk 10.9 MB, in gitignored `uploads/`. GitHub warns above 50 MB and rejects above
  100 MB.
- **Auto-load scan:** `CLAUDE.md.original` is the only such file anywhere under `reference/`,
  including `uploads/`. No `AGENTS.md`, no `.claude/`, no `.mcp.json`, no `settings.json`.

### Judgement calls

**Imported the export as-is rather than curating it.** *Rejected:* staging only the Workspace
subset (~82 MB). `REPO-SETUP.md` §1 wants the export verifiable against what was approved, and
dropping the sibling pages makes cross-page diffing impossible without re-fetching. Out-of-scope
files are committed but stay unread.

**Excluded `reference/uploads/`** — 213 MB, 562 files, referenced zero times by the in-scope file.
*Rejected:* the full 309 MB (every clone and CI run pays for it) and Git LFS (Core Dev and CI both
need `git-lfs` to get a working reference). Consequence recorded as an archival requirement.

**Renamed the export's `CLAUDE.md` — the one intentional deviation from "as-is."** A subdirectory
`CLAUDE.md` is loaded on demand when files in its subtree are read, so a session doing fidelity
work inside `reference/` would silently pick up the instruction to mirror changes into the
Third-Party variant. *Rejected:* documenting it in `reference/README.md` alone — the failing
session is precisely the one that never reads the README. Content is untouched; only the filename
changed.

**`.gitignore` in its own commit, before the import.** Without it `.DS_Store` would have been
swept into a 362-file commit.

**Pushed over SSH without altering the remote.** `origin` is HTTPS with no stored credential and
`gh` is not installed; the SSH key authenticates. *Rejected:* switching `origin` to SSH — a config
change that was not asked for.

### Contradictions found

All three logged in `docs/divergences.md`: `_ds/` is a design system the Workspace does not use
(DIV-001); the export's own `CLAUDE.md` scoped changes to both Workspace variants (DIV-002);
`handoff/` is a third partial conversion attempt (DIV-003). Blocking questions arising are
OQ-B01–B03 in `docs/open-questions.md`.

`REPO-SETUP.md` default decision 6 is closed by evidence — see
`docs/architecture/responsive-strategy.md`.

### Fidelity checklist

Items 1–7 and 9–11 **not applicable** — no application code exists. **Item 8 passes**:
`reference/` export content is unmodified, confirmed by hash. Two files were added inside
`reference/` (`README.md`, which `REPO-SETUP.md` §1 asks for) and one renamed without content
change; no export content was altered.

### Left alone

`package.json`, `npm install`, any application code — all blocked on OQ-B03 (Core's pinned
versions, owner Jowin). GSD runtime not extracted and neither `new-project` nor `import` run: no
`.planning/` exists and the roadmap currently lives in `REPO-SETUP.md`.
