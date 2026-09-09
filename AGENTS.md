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

Where work has natural phases, **stop at the end of each phase, report, and wait for a go-ahead.**
Do not start the next phase unprompted.

Every report states:

- What changed, file by file
- What you deliberately left alone, and why
- Any judgement call, with the alternatives you rejected
- Anything found that contradicts the design, the specs, or this repo's conventions
- Confirmation that the fidelity checklist below still passes

## Recommended build order

1. **Inventory** — map the Workspace design: every view, panel, tab, modal and overlay; every
   outbound link (listed, not followed); where styling lives; what repeats; what is genuinely
   interactive vs. static; every asset. Change nothing.
2. **Tokens and primitives** — `src/styles/_tokens.scss`, then `components/common/`.
3. **Chrome** — layout, nav, sidebar, routing skeleton.
4. **Screens** — one feature at a time, each to visual completion before starting the next.
5. **Services and seams** — extract data access behind `src/services/`, document each seam.
6. **Standards pass** — semantics and accessibility, without changing appearance.

## Fidelity checklist — run before every report

Against the deployed Workspace, for every view, panel, tab, modal and overlay:

1. Side-by-side at the design's supported widths — layout, spacing, sizing, typography, colour
   and state all match. **Not displayed numbers.** The prototype's seed revenue is
   `Math.random()`-generated (`workspace-app.jsx:27918`) and feeds the Overview KPIs, and dates are
   `Date.now()`-relative, so values differ between two loads of the prototype itself. Compare
   layout and formatting, never the figures. `src/mock-data/` uses fixed fixtures so our own
   comparisons stay stable. See OQ-P17.
   The design's supported widths are **1280px and upward, continuously** — 1280 is a hard floor
   the design sets itself, and there are no named breakpoints to test at. See
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
