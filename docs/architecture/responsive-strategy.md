# Responsive strategy — fluid, not breakpoint-based

**Status:** decided, from evidence in the export.
**Closes:** `REPO-SETUP.md` §"Decisions I made as defaults" item 6 ("Desktop-only layout"), which
asked that this be checked against what the design actually specifies before being locked in.

## What the design actually specifies

Measured against `reference/workspace-app.jsx` (33,939 lines), the whole of the in-scope
Workspace implementation:

| Mechanism | Count |
|---|---|
| `@media` queries | **1** — and it is `(prefers-reduced-motion: reduce)` |
| `clamp()` | 21 |
| `minmax()` | 54 |
| `vw` units | 17 |
| JS width checks | 3 |

**There is not a single layout breakpoint in the design.** The one media query governs motion, not
layout. The three JS width checks are: a 2↔3 column flip in `FrameCard` at `innerWidth >= 1500`,
and two popover edge-clamps that keep a floating panel inside the viewport. Nothing else responds
to width by branching.

Layout adapts continuously instead, through `clamp()` on type and spacing, `minmax()` in grid
track definitions, and `vw`-relative sizing.

## Two consequences that govern how we build and how we check

**1. The build is fluid, not breakpoint-based.** Do not introduce `@media` breakpoints to
reproduce this design. Reach for `clamp()`, `minmax()` and intrinsic grid sizing, matching the
mechanism the design already uses. A breakpoint added here is a design change, not a conversion —
it creates a discontinuity in layout at a width where the design has none. If a screen appears to
need one, that is a finding to report, not a decision to make.

**2. Fidelity checks sweep continuously through widths; they do not test named breakpoints.**
There are no named breakpoints to test. Comparing at three fixed widths would pass while missing
everything between them, which is exactly where a fluid layout breaks. Drag the viewport through
the range and watch for discontinuity, overlap, clipping and reflow — and check `1500px`
specifically, since that is the one real threshold in the design (`FrameCard`'s column count).

`AGENTS.md` fidelity checklist item 1 says "at the design's supported widths." For the Workspace
that means the continuous range, not a set of stops.

## What is not carried forward

The previous attempt enforced a global `min-width: 1280px`. **That was a decision made in that
attempt, not something the design specifies**, and it is not carried forward. Nothing in
`workspace-app.jsx` sets a minimum width or otherwise floors the layout.

This is deliberately *not* the same as declaring the Workspace responsive down to phone widths.
The design has no small-width treatment, so there is nothing to reproduce below the range it was
authored at, and inventing one would be a design change. The position is narrower and more
honest: **build fluid, reproduce the design's own behaviour, add no breakpoints, and impose no
floor the design does not have.** If a minimum width is wanted as a product decision, that is a
question for the design side — see `docs/open-questions.md`.

## Provenance

All counts above are from `reference/workspace-app.jsx` at the export dated 2026-09-08, the file
imported in commit `8453bf8`. Re-derive with:

```bash
grep -c '@media' "reference/workspace-app.jsx"
grep -o 'clamp(' "reference/workspace-app.jsx" | wc -l
grep -o 'minmax(' "reference/workspace-app.jsx" | wc -l
grep -oE '[0-9]+vw' "reference/workspace-app.jsx" | wc -l
grep -nE 'innerWidth|matchMedia' "reference/workspace-app.jsx"
```
