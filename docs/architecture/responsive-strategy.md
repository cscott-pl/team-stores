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
| `clamp()` — **CSS** | 12 | 12 | 0 |
| `clamp(` — JS helper calls | 7 | 7 | 0 |
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

### The only fluid type in the product is on screens the default user never reaches

All **12** CSS `clamp()` expressions live in the four pre-authentication screens — `FeatureGate`
(9), `AccessApplyForm`, `AccessPending`, `StripeVerifying` (1 each). They are `vh`-based because
those are full-viewport standalone pages.

Two things follow, and neither is a footnote:

1. **The Workspace proper contains no fluid type at all.** It is fixed-pixel above the 1280px
   floor. There is no responsive type system to reproduce, and none should be introduced.
2. **Those four screens are unreachable in the default state.** `TWEAK_DEFAULTS` sets
   `hasStoreAccess: true` (see `tweaks-defaults.md`), so the gate and its flow never render. Their
   scope is separately in question — OQ-P15.

So the design's only fluid behaviour is confined to screens that are both out of the main flow and
possibly out of scope. The 12 expressions are tokenised in `_tokens.scss` §10, scoped and labelled
`gate-*`, precisely so nobody applies them Workspace-wide.

Note also that 7 of the 19 `clamp(` occurrences are **not CSS** — they are calls to a local
JS `clamp(value, lo, hi)` helper in drag/resize logic.

## Three consequences that govern how we build and how we check

**1. Floor the layout at 1280px, matching the design.** Not as a decision of ours — as
reproduction.

**2. Above the floor, reproduce what is there — which is mostly fixed pixels.** The design's own
mechanisms are `minmax()` grid tracks and a handful of `vw` modal guards; fluid type exists only
on the four access screens. Do not add breakpoints: one creates a discontinuity at a width where
the design has none. Do not add fluid type either. If a screen appears to need either, that is a
finding to report, not a decision to make.

**3. Check at 1280 plus two or three wider widths — do not sweep.** An earlier revision of this
document said to sweep continuously. That was wrong, and it followed from over-reading the fluid
mechanisms: there is no fluid type system in the Workspace to sweep for.

What actually reflows above the floor is the **54 `minmax()` grid tracks** — table columns and
card grids. Two or three wider widths exercise those. Below 1280px, the only correct behaviour is
a horizontal scrollbar.

`AGENTS.md` fidelity checklist item 1 carries the same guidance.

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
