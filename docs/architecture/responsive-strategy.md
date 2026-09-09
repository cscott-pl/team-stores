# Responsive strategy — desktop-only, floored at 1280px, fluid above it

**Status:** decided, from evidence in the export.
**Closes:** `REPO-SETUP.md` §"Decisions I made as defaults" item 6 ("Desktop-only layout").

> **Corrected 2026-09-09.** An earlier revision of this document stated that the design specifies
> no minimum width, and that a 2↔3 column flip at 1500px was application behaviour. **Both were
> wrong.** They were derived from a first pass that did not separate application code from the
> Claude Design preview scaffolding. The corrections are marked below and the reasoning that
> followed from the errors has been withdrawn. Details in `docs/handoff/phase-log.md`, Phase 2.

## What the design actually specifies

Measured against `reference/workspace-app.jsx`, with the preview-shell line ranges excluded
(the Tweaks system, lines 189–537, and `OverviewGrid`, lines 25768–25834):

| Mechanism | Occurrences | Application | Preview shell |
|---|---|---|---|
| `@media` queries | 1 | 1 | 0 |
| `clamp()` | 21 | 19 | 2 |
| `minmax()` | 54 | 54 | 0 |
| `vw` units | 17 | 17 | 0 |
| `@keyframes` | 17 | 17 | 0 |

**There is no layout breakpoint in the design.** The single `@media` query is
`(prefers-reduced-motion: reduce)` — it governs motion, not layout.

### There *is* a hard minimum width — 1280px

Both application roots set it:

- `workspace-app.jsx:27476` — the main app root: `minWidth: 1280`
- `workspace-app.jsx:27423` — the no-access gate root: `minWidth: 1280`

And the design's own author states it in a comment at `workspace-app.jsx:25764`:

```js
// Native iframe viewport — the App is min-width: 1280
const FRAME_W = 1280;
```

**Consequence for `REPO-SETUP.md` decision 6:** the previous attempt's global
`min-width: 1280px` was **faithful to the design**, not an invention of that attempt. It is
carried forward. Below 1280px the design's intent is to scroll horizontally, not to reflow.

### The 1500px column flip is preview scaffolding, not the application

`workspace-app.jsx:25769–25772`, inside `OverviewGrid`:

```js
// Responsive: pick a thumb width based on viewport (3 per row at >= 1500, 2 below)
const [cols, setCols] = React.useState(() => (window.innerWidth >= 1500 ? 3 : 2));
```

`OverviewGrid` renders only when `tweaks.overviewMode` is on — the Tweaks panel's "Frame
overview" toggle, which lays out 12 labelled design frames on a grid for review. It is part of
the Claude Design preview shell, alongside `TweaksPanel`. `>= 1500` appears nowhere else in the
file (the only other `1500`s are two `setTimeout` durations).

**Do not reproduce it.** It is not application behaviour, and it must not become a token or a
breakpoint.

## Three consequences that govern how we build and how we check

**1. Floor the layout at 1280px, matching the design.** Not as a decision of ours — as
reproduction.

**2. Build fluid above the floor, not breakpoint-based.** Reach for `clamp()`, `minmax()` and
intrinsic grid sizing, matching the mechanism the design already uses. A breakpoint added here is
a design change: it creates a discontinuity at a width where the design has none. If a screen
appears to need one, that is a finding to report, not a decision to make.

**3. Fidelity checks sweep continuously from 1280px upward.** There are no named breakpoints to
test, so comparing at three fixed widths would pass while missing everything between them —
exactly where a fluid layout breaks. Drag the viewport through the range and watch for
discontinuity, overlap, clipping and reflow. Below 1280px, the only correct behaviour is a
horizontal scrollbar.

`AGENTS.md` fidelity checklist item 1 says "at the design's supported widths." For the Workspace
that means **1280px and upward, continuously** — with 1280 as a hard edge to check explicitly.

## Provenance

Counts and line numbers are from `reference/workspace-app.jsx` at the export dated 2026-09-08,
imported in commit `8453bf8`. Re-derive the application-vs-shell split with the script in
`docs/architecture/component-catalog.md` §"Re-deriving these numbers", or spot-check:

```bash
grep -n 'minWidth: 1280' "reference/workspace-app.jsx"     # 27423, 27476
grep -n 'min-width: 1280' "reference/workspace-app.jsx"    # 25764 (author comment)
grep -n '>= *1500'        "reference/workspace-app.jsx"     # 25769-25772, OverviewGrid only
grep -c '@media'          "reference/workspace-app.jsx"     # 1
```
