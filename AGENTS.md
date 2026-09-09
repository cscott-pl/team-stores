# AGENTS.md

Working method for any coding agent in this repository. Imported by `CLAUDE.md`.
`CLAUDE.md` holds the stack and architecture rules; this file holds *how to work*.

## Toolchain caution

The installed toolchain is likely newer than your training data (Vite 8.x, TypeScript 7.x,
vue-router 5.x, Pinia 4.x, ESLint 10.x as of September 2026), and may also be deliberately pinned
to match the core application. Read the installed package's own docs before writing config or
router code, and ask before upgrading anything.

## Incremental, reviewable, reversible

Do not batch unrelated work. **One concern per commit**, with a message naming what changed and
why. This is deliberate: it lets each change be evaluated independently, keeps a readable
history, and makes regressions easy to pinpoint.

### When to stop and wait

**Stop, report, and wait for a go-ahead** before anything **irreversible or scope-affecting**:
what enters git history in a way that is painful to unwind, which dependency versions the dev team
inherits, anything touching `reference/`, and any decision that changes what is in or out of
scope.

**Do not stop between screens.** Screen conversion is reversible, so the gate costs more than it
protects. Work continuously through the screen order and report per screen or per group —
without waiting for permission to continue.

**Still report immediately, mid-flow**, anything that changes scope, contradicts a spec, or needs
a decision that is not yours. Reporting is not the same as pausing: raise it, record it in
`docs/divergences.md` or `docs/open-questions.md`, apply the recorded default, and keep going.

Every report states, and for screens keeps it short — what was built, what had to be decided,
what diverged, and anything needing a decision:

- What changed, file by file
- What you deliberately left alone, and why
- Any judgement call, with the alternatives you rejected
- Anything found that contradicts the design, the specs, or this repo's conventions
- Confirmation that the fidelity checklist below still passes

## Recommended build order

1. ~~**Inventory**~~ — done. `docs/architecture/workspace-screen-inventory.md`.
2. ~~**Tokens**~~ — done. `src/styles/_tokens.scss`, `_typography.scss`, `_focus.scss`.
3. ~~**Chrome and routing skeleton**~~ — done. Real routes in `src/router/`.
4. **Screens** — in fan-in order, not navigation order. Overview first and completely: it drags
   most of the Tier-1 primitives into existence, so it is expected to be slow and disproportionate
   — most of the effort is the shared components, not the screen. Then outward by fan-in (the
   components used in the most places first), then Stores directory, the store dashboard tabs, the
   wizard, and the access screens last, since `hasStoreAccess: true` makes them unreachable by
   default. Primitives and their services are built as the first screen that needs them requires
   them, not speculatively.
5. **Standards pass** — semantics and accessibility are done *as you go*, not deferred. This step
   is only a sweep for anything missed.

**Not converted:** the six dead components (~680 lines, defined and never referenced) and the two
template screens. See `docs/divergences.md` DIV-007 and DIV-014.

## Reading the specs — just-in-time, not up front

Before building a screen, read **the spec page that owns it**, plus any page the divergence
register flags as conflicting on it. Not the whole folder in advance.

The spec is freshest in context exactly when you are implementing against it, and screens that
turn out to be trivial never cost a read. `docs/specs-index.md` is the ownership map and records
what has been read; it and `docs/divergences.md` keep updating as you go.

**Precedence, when they disagree:** the prototype wins on appearance and behaviour; the specs win
on rules and terminology. Conflicts are logged in the register and **built as the prototype has
them**.

## Fidelity checklist — run before every report

Against the deployed Workspace, for every view, panel, tab, modal and overlay:

1. Side-by-side at the design's supported widths — layout, spacing, sizing, typography, colour
   and state all match. **Not displayed numbers.** Seed revenue is `Math.random()`-generated
   (`workspace-app.jsx:27918`) and feeds the Overview KPIs; dates are `Date.now()`-relative. Values
   differ between two loads of the prototype itself, so compare layout and formatting, never the
   figures. `src/mock-data/` uses fixed fixtures so our own comparisons stay stable (OQ-P17).

   **Which widths.** Compare at **1280px — the floor the design sets itself** — plus two or three
   wider widths, enough to exercise the 54 `minmax()` grid tracks that reflow the tables and card
   grids. Do **not** sweep continuously: there is no fluid type system to test. The only CSS
   `clamp()` in the product — 12 expressions — sits in the four pre-authentication screens
   (`FeatureGate`, `AccessApplyForm`, `AccessPending`, `StripeVerifying`), which the default
   `hasStoreAccess: true` never reaches. The Workspace proper is fixed-pixel above the floor.
   The `vw` values are modal overflow guards, not fluid layout, and the fluid tokens in
   `_tokens.scss` are scoped and labelled so they are not applied Workspace-wide.
   Below 1280px the only correct behaviour is a horizontal scrollbar. See
   `docs/architecture/responsive-strategy.md`.
2. Every interactive element behaves identically: hover, focus, active, disabled, selected
3. Every flow that starts and ends inside the Workspace completes end to end
4. No console errors or warnings introduced
5. All assets resolve — no broken images, icons or fonts
6. Keyboard-only navigation reaches everything reachable before
7. Nothing outside the Workspace scope has been built, stubbed, or modified
8. `reference/` is unmodified
9. Nothing outside `src/services/` imports from `src/mock-data/`
10. No inline styles introduced anywhere
11. Diff review — every changed line is explainable by the stated purpose of the work

Report failures rather than silently correcting the design to match your expectation.

## Ask, don't assume

These are open on the product side. If the design is silent or ambiguous, leave current
behaviour untouched, add a `TODO` pointing at `docs/open-questions.md`, and raise it. Do not
resolve them yourself:

- Whether a rep or store ever spans more than one brand / Customizer
- Whether portfolio and cross-store views span brands or stay within one
- Store lifecycle states and transitions, and which fields lock after launch
- Whether a closed store stages edits until reopened, rather than publishing live
- Tax calculation (the design uses a placeholder approach)
- Payment, fundraising, fee and payout handling, including merchant-of-record
- Roster and roster-group structure, and how products, orders and freight attach to it
- Store-type differences (league vs individual team) where the design does not show them
- Expected launch-day traffic and concurrency

## Never do without asking

- Add, remove, or "finish" a feature. A dead button in the design stays a dead button.
- Redesign, re-space, or "improve" anything visual.
- Upgrade, add, or remove a dependency.
- Build anything outside the Workspace scope.
- Introduce inline styles, a utility-CSS framework, or CSS-in-JS.
- Introduce a central navigation switch statement.
- Import seed data outside `src/services/`.
- Take a requirement from the "Planning", "Research", or "Archive" Confluence folders.
- Edit anything under `reference/`.
