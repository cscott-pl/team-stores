# Architecture

Routes, state, data flow, conventions, and the pinned toolchain versions.

## Contents

- [`responsive-strategy.md`](responsive-strategy.md) — **decided.** Fluid, not breakpoint-based;
  closes `REPO-SETUP.md` default decision 6.

## Still to write

Each of these is blocked or waits on work that has not started. Listed so they get filled rather
than invented later.

| Document | Covers | Waiting on |
|---|---|---|
| `pinned-versions.md` | Vue, Vite, Node, TypeScript, SCSS compiler, and TS-vs-JS — **with the reason**, per `REPO-SETUP.md` | OQ-B03, owner Jowin |
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
