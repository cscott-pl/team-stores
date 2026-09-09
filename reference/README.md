# reference/ — the exported Claude Design project

**Read-only. Never edit anything in this directory.** It exists so fidelity diffs are possible
and so anyone can verify the prototype against what was approved.

## Where it came from

Exported from the Claude Design project
[Team Store MVP](https://claude.ai/design/p/8d19c369-25d4-41a9-b7ff-59bddbe6183d?file=Team+Stores+Workspace.dc.html&via=share),
export dated 2026-09-08. Committed as-is, before any application code.

Corresponding Figma frame (design intent, not an implementation target):
`node-id=9293-67700` in the `Team-Stores` file.

## What is in scope

**`Team Stores Workspace.dc.html` only** — and note that this file is a 46-line *loader*, not the
UI. It contributes a `:root` token block, a short reset, the Google Fonts link, and the Claude
Design preview scaffolding. Everything visible lives in the file it imports:

```
Team Stores Workspace.dc.html
├── support.js          # Claude Design runtime (dc-runtime): parses <x-dc>,
│                       # resolves <x-import>, Babel-transforms JSX in-browser
└── workspace-app.jsx   # the Workspace itself — 33,939 lines, 514 components
    └── assets/         # products/ and sport-cards/ are referenced via
                        # runtime-built paths, so do not prune by static analysis
```

## What is out of scope

Present in the export, but **not** to be read, converted, or used to infer patterns:

- `Team Stores Landing.dc.html`, `Team Store Storefront.dc.html`, `Design Exploration.dc.html`
- `Team Stores Workspace - Third Party Integration.dc.html` + `workspace-app-integrated.jsx`
- `Team Stores Workspace - Zero State.dc.html` + `workspace-app-zero.jsx`
- `storefront-app.jsx`, `storefront-assets/`, `store-customization-shell.jsx`
- `_ds/` — a PROLOOK design system (styles, bundle, 18 Gotham faces). The Workspace does **not**
  link it; it loads Inter/Archivo from Google Fonts instead. Logged in `docs/divergences.md`.
- `uploads/` — 562 files, referenced zero times by `workspace-app.jsx`. **Not committed:** at
  213 MB it is gitignored (see the root `.gitignore`), so it is present in the original export
  but absent from a fresh clone. Everything else here is committed as-is.
- `handoff/` — an earlier, partial HTML/SCSS conversion attempt (`pages/workspace.html` is 211
  lines and covers the Overview only). Not a baseline; do not build on it.
- `scratch/`, `screenshots/`, `.thumbnail`, root `screenshot-*.png`

## ⚠️ The export's own CLAUDE.md is renamed, deliberately

The export carries a `CLAUDE.md` at this level. It says any Workspace change must be applied to
*both* the Workspace and the Third-Party Integration variant — which **contradicts** the
Workspace-only scope in the repo root `CLAUDE.md`.

It has been renamed to **`CLAUDE.md.original`**. Content is unchanged (sha256 `57e2d64b…`); only
the filename differs. This is the single intentional deviation from committing the export as-is,
and it is a safety measure, not an edit: a subdirectory `CLAUDE.md` is loaded on demand when files
in its subtree are read, so a future session doing fidelity work inside `reference/` would have
silently picked up the out-of-scope instruction. A note in this README cannot prevent that,
because the failing session is precisely the one that never reads the README.

**Do not rename it back, and do not add any `CLAUDE.md`, `AGENTS.md`, or `.claude/` directory
under `reference/`.** Verified at import: `CLAUDE.md.original` is the only such file anywhere in
the export, including under `uploads/`.

The repo root `CLAUDE.md` and `AGENTS.md` govern.

## Archival of the full export — ⚠️ ACTION REQUIRED

What is committed here is the export **minus `uploads/`** — 360 files, 96 MB of the original 309 MB.
The complete export therefore exists **in one place only: the machine it was downloaded to.**

That makes "verifiable against what was approved" temporary. The first time that laptop is
replaced, reimaged or lost, the 213 MB and 562 files excluded from git are gone, and this
directory can no longer be checked against the full original.

**The full 309 MB export, `uploads/` included, must be archived somewhere durable and shared** —
not a personal laptop, not a personal cloud folder.

| | |
|---|---|
| **Archive location** | `TODO — to be filled in by Connor` |
| **Date archived** | `TODO — to be filled in by Connor` |
| **Archived by** | `TODO` |
| **Contents** | full export as downloaded, 309 MB / 921 files, including `uploads/` |
| **Source export date** | 2026-09-08 |

Tracked as OQ-P12 in `../docs/open-questions.md`. The matching requirement is recorded in
`../REPO-SETUP.md` §1.

## Viewing it

`support.js` fetches React 18.3.1, ReactDOM and `@babel/standalone` 7.29.0 from unpkg, so
rendering needs network access, and the 2 MB of JSX is transformed in the browser on every load
(expect several seconds, and a Babel "exceeds the max of 500KB" console warning — that is
pre-existing, not a defect).

Serve it over HTTP rather than opening from the filesystem:

```bash
cd reference && python3 -m http.server 8765
# http://127.0.0.1:8765/Team%20Stores%20Workspace.dc.html
```

First load shows the SSO welcome modal, then the Overview screen. Several first-run states are
one-shot and persisted (`localStorage`: `prolook_is_first_store`, `ts_setup_guide_seen_v1`;
`sessionStorage`: `ts_sso_welcomed`), so **clear site data before each fidelity comparison** or
screens will silently not appear.
