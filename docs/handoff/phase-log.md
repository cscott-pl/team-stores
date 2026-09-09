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
  `workspace-app.jsx`: **33,939 lines**, ~~514 top-level components~~ → **512 components + 160
  data constants** *(corrected in Phase 2)*, a **22-value** `screen` state machine, **57 modals**,
  5 drawers, 4 overlays, 9 panels, 5 pages, 6 views, 5 tabs.
- **Styling is ~99% inline:** 5,616 `style={{…}}`, 150 `style={expr}`, **31** `className=`,
  15 in-JSX `<style>` blocks (13 of them a single `@keyframes`). **6,116 hex literals / 364
  distinct**, 350 `rgba()`, and `var(--…)` referenced **once**.
- **One `@media` query, and it is `prefers-reduced-motion`.** No layout breakpoints — but the
  design **does** floor the layout at `minWidth: 1280`, which this pass missed *(corrected in
  Phase 2)*. See `docs/architecture/responsive-strategy.md`.
- **579 `useState`, 127 `useEffect`**, 31 `localStorage` and 2 `sessionStorage` writes, and **22
  `window.__*` globals** used for cross-component routing.
- **Persisted first-run state** (`prolook_is_first_store`, `ts_setup_guide_seen_v1`,
  `ts_sso_welcomed`) makes several screens one-shot — clear site data before each fidelity check.
- **Link-isolated:** 18 `href="#"` anchors — described here as "dead", but they carry `onClick`
  handlers and are **functional** *(corrected in Phase 2)* — and 2 `window.open` calls to
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

---

## Phase 2 — Full Workspace design inventory

**Date:** 2026-09-09 · **Branch:** `chore/reference-export` · **Commits:** `2b837d7`, `dd4a7b3`,
and this one

Build-order step 1, done properly. No application code; no `package.json`; no `npm install`.

### ⚠️ Two corrections to Phase 0 findings

Both were in `docs/architecture/responsive-strategy.md`, already committed, and both came from a
first pass that did not separate application code from the Claude Design preview scaffolding.

1. **The design does floor the layout at 1280px.** Both application roots set `minWidth: 1280`
   (`:27476`, and `:27423` for the gate), and the author's comment at `:25764` reads *"Native
   iframe viewport — the App is min-width: 1280"*. Phase 0 said no minimum width existed, and
   therefore that the previous attempt's global `min-width: 1280px` was that attempt's own
   decision. **It was faithful reproduction.** Carried forward.
2. **The 2↔3 column flip at 1500px is preview shell, not application.** It lives only in
   `OverviewGrid` (`:25769–25772`), which renders under the Tweaks panel's "Frame overview"
   toggle. `>= 1500` appears nowhere else. It must not become a token or a breakpoint.

Corrected in `2b837d7`; OQ-P10 closed, since it only existed because of error 1. What survives:
still exactly one `@media` and it is `prefers-reduced-motion`, so still no layout breakpoints.
Re-counted with shell ranges excluded: **19** `clamp()` (2 more in the Tweaks panel), **54**
`minmax()`, **17** `vw`, **17** `@keyframes` (not 16).

Also corrected: **512** components and **160** data constants, not "514 top-level definitions" —
that figure conflated the two and used a regex that missed `<Component` at end-of-line, the
formatting used by every props-heavy mount.

### What changed, file by file

| File | Change |
|---|---|
| `docs/architecture/workspace-screen-inventory.md` | **new** — 22 screens in navigation order, how each is reached, three chrome states, the 6 dashboard tabs + 6 settings sections + 2 order sub-tabs, overlays per screen, states implemented vs absent, interaction-only states with their persistence, 5 unreachable branches, outbound links |
| `docs/architecture/component-catalog.md` | **new** — primitives by fan-in (Tier 1/2), feature components mapped to folders, 71 unmounted split into value-referenced / `window`-exported / genuinely dead, DS name correspondence, re-derivation script |
| `docs/architecture/interaction-inventory.md` | **new** — functional / semantically-wrong-but-functional / simulated / dead / preview-shell, with the 18 `href="#"` anchors listed by line and owner |
| `docs/architecture/data-inventory.md` | **new** — entity shapes, 160 constants, 10 persistence keys, 22 `window.__*` globals classified, non-deterministic seed data |
| `docs/features/README.md` | feature mapping onto `src/features/`, four things that do not fit flagged, uncited business rules listed |
| `docs/architecture/README.md` | index updated |
| `docs/open-questions.md` | OQ-P13…P17 added |

### Findings that change later phases

- **No error state exists anywhere** (`retry`: 0 occurrences) and there is exactly **one** loading
  state. Nothing is async, so nothing can fail. Every `src/services/` seam therefore introduces
  loading and failure UI the design never showed → **OQ-P13**, needs design.
- **The store-template feature is fully built and entirely unreachable** — ~500 lines, plus three
  live buttons wired to a destination that cannot be reached → **OQ-P14**.
- **Seed revenue is `Math.random()`** (`:27918`), feeding the Overview KPIs. Observed $69,589 then
  $69,420 across two loads. No value-level fidelity comparison can pass, and `src/mock-data/` must
  use fixed fixtures → **OQ-P17**.
- **Removing the Tweaks panel is not a deletion** — `App()` reads `tweaks.*` directly, and the
  panel exposes variants that exist nowhere else (4 portal treatments, 2 wizard accents, 3
  checklist accents). Each needs a chosen default → **OQ-P16**.
- **~680 lines of genuinely dead components** — 6 defined and never referenced at all.
- **Zero `TODO`/`FIXME`** in 33,939 lines.
- **The 18 `href="#"` anchors are functional**, not dead — wrong element, right behaviour
  (browser-verified). Plus the three primary nav links expose **no accessible name** while the
  store side-nav buttons do.

### Judgement calls

**Classified primitives by fan-in, not mount count.** `WizardPanel` has 23 mounts but only 5
owners (one feature); `IconChevron` has 28 mounts across 27 owners. Fan-in is what decides
`components/common/`. *Rejected:* ranking by raw mounts, which would have promoted wizard-only
components.

**Flagged four features as not fitting the folder list rather than forcing them in** —
`customizer-bridge`, `store-close-report`, `access`, `team-manager-portal`. *Rejected:* filing
`customizer-bridge` under `products/`, which would bury the boundary `CLAUDE.md` requires.

**Left `GreenButton` alone.** It looks like a `Button` variant, but folding it in is only correct
if pixel-identical, and that is unverified. Recorded, not merged.

**Did not delegate the bulk read to gemini,** as `CLAUDE.md`'s context strategy asks. The MCP tool
loads but its backend CLI (`agy`) is not installed; installing it needs a `curl | bash` and an
interactive sign-in, which was not authorised. Analysis was done directly instead — programmatic
extraction into a scripted catalog plus browser verification. The re-derivation script in
`component-catalog.md` exists so this is reproducible rather than a one-off read.

### Verification

Static extraction cross-checked against the running prototype, served from `reference/` with
`localStorage` and `sessionStorage` cleared first per `reference/README.md`. Confirmed: both
first-run modals appear in order (`WelcomeSSOModal`, then `StoreGuideModal` on first dashboard
visit); the three header tabs navigate; the six side-nav items render as
Home / My Teams / Products / Orders / Reports / Settings, matching `WORKSPACE_NAV`; viewport
reported 1280×720, at the design's floor.

### Fidelity checklist

Items 1–7 and 9–11 **not applicable** — still no application code. **Item 8 passes**: nothing
under `reference/` was modified; this phase only read it. Server stopped after the pass.

### Left alone

All scaffolding. Vue 3 is decided and recorded as provisional (`dd4a7b3`) but nothing is
scaffolded yet. Token extraction (step 3) not started. GSD runtime not extracted; no `.planning/`.
