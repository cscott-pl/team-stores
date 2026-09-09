# Architecture

Routes, state, data flow, conventions, and the pinned toolchain versions.

## Contents

- [`responsive-strategy.md`](responsive-strategy.md) — **decided.** Desktop-only, floored at
  1280px, fluid above it, no breakpoints. Closes `REPO-SETUP.md` default decision 6.
- [`toolchain-decisions.md`](toolchain-decisions.md) — **decided/provisional.** Vue 3 provisional
  and why it is *not* inferred from Core's stack; SCSS settled and closed; provenance of the two
  claims that come from outside this repo.
- [`workspace-screen-inventory.md`](workspace-screen-inventory.md) — every screen in navigation
  order, nested tabs and sections, overlays per screen, states implemented vs absent, and the
  five unreachable branches.
- [`component-catalog.md`](component-catalog.md) — 512 components split into primitives and
  feature components by fan-in, dead code, and the design-system name correspondence.
- [`interaction-inventory.md`](interaction-inventory.md) — every interactive element as
  functional / semantically-wrong-but-functional / simulated / dead / preview-shell.
- [`data-inventory.md`](data-inventory.md) — entity shapes, 160 data constants, 10 persistence
  keys, the 22 `window.__*` globals, and the non-deterministic seed data.

## Still to write

Each of these is blocked or waits on work that has not started. Listed so they get filled rather
than invented later.

| Document | Covers | Waiting on |
|---|---|---|
| `routing.md` | Route table, one route per Workspace screen; why there is no central `screen` switch | scaffolding |
| `state.md` | Pinia store boundaries; getters-and-actions rule; store lifecycle transitions as the only sanctioned status change | scaffolding |
| `data-flow.md` | How a screen gets data: component → store → `src/services/` → `src/mock-data/`, and why nothing skips the seam | scaffolding |
| `conventions.md` | Naming, file layout, the sibling-`.scss` pattern, component boundaries | scaffolding |
| `runtime-config.md` | Brand/tenant identity from `src/config/` at runtime, never build-time constants | scaffolding |

## Rules that already govern, from `CLAUDE.md`

Recorded here so they are not re-litigated:

- **Real routes, not a switch.** One route per screen, each rendering a page component under
  `src/features/`. The previous attempt used a single `screen` value and one large switch
  component; it is not to be reproduced.
- **`src/services/` is the seam.** Every service function is async and returns a promise, even
  when resolving from in-memory seed data. **Nothing outside `src/services/` imports from
  `src/mock-data/`** — enforced by an ESLint import-boundary rule, not by memory.
- **Styling is separated, always.** Tokens in `src/styles/_tokens.scss`; one sibling `.scss` per
  component via `<style lang="scss" scoped src="./ComponentName.scss">`. No inline `style`, no
  Tailwind, no CSS-in-JS.
- **The Workspace keeps its own entry point.** Nothing heavy goes in a bundle a future public
  storefront would inherit.
