# PROLOOK Team Store — Workspace Prototype

A **frontend-only prototype** of the Team Store **Workspace** — the internal, rep-facing tooling
for creating and managing custom-uniform storefronts for sports teams.

This repository has one purpose: reproduce the approved Workspace design as a **near 1:1 visual
match**, in a form the Core Dev team can pick up and integrate. It is a handoff artifact, not a
product. Every structural decision here is made in service of that handoff.

## What changed from the previous attempt

An earlier version of this prototype was built as **Next.js 16 + React 19 + TypeScript with
inline `style` objects**. It was built before the development constraints were known, and it
conflicts with them in three ways that could not be patched:

| Previous attempt | This repository | Why |
| --- | --- | --- |
| Next.js + React | **Vue 3 + Vite** | Vue is the agreed primary stack for the core application |
| Inline `style` objects on components | **Separate SCSS files per component** | Styling must be separated from structure, UI logic, event handling and visual states |
| Single page + `screen` union + one large switch | **Real routes via vue-router** | Page-level components map onto how Core resolves pages; a switch statement is prototype-shaped and would be unwound during integration |

Everything worth keeping from the previous attempt — spec-cited pure business-rule functions,
the mock→real service seams, feature-colocated structure, design tokens in one place — has been
carried over.

## Scope

**The Workspace only.** Nothing else.

- Design source: `Team Stores Workspace.dc.html` in the [Claude Design project](https://claude.ai/design/p/8d19c369-25d4-41a9-b7ff-59bddbe6183d?file=Team+Stores+Workspace.dc.html&via=share)
- Figma frame: [`node-id=9293-67700`](https://www.figma.com/design/FJYYXHDwtmF5xlcSRdBypv/Team-Stores?node-id=9293-67700)
- Deployed reference: the Workspace page of the review deployment

Explicitly **out of scope**, each its own separate piece of work: the Landing page, the public
Storefront, the Documentation page, and the 3rd-party integrated Workspace variant.

## Tech stack

- **Vue 3** (SFCs, Composition API) + **Vite**
- **TypeScript**
- **vue-router** for routing, **Pinia** for state
- **SCSS** — design tokens in `src/styles/`, one stylesheet per component, no inline styles
- No Tailwind, no CSS-in-JS, no utility-class framework

> ⚠️ **Pin to Core's versions, not to latest.** As of September 2026 the latest published
> versions are Vite 8.2, TypeScript 7.0, vue-router 5.3, Pinia 4.0, ESLint 10.10 — several major
> versions beyond what most documentation and most model training data describes. The core
> application is pinned to an older toolchain. **Confirm Core's pinned versions before
> installing, and match them**, otherwise this prototype hands off with an upgrade project
> attached. See `CLAUDE.md` for the reading rule that follows from this.

There is **no backend, database, or API layer.** All data is seeded in memory and served through
`src/services/` — see below.

## Getting started

```bash
npm install
npm run dev        # dev server
npm run build      # production build
npm run preview    # serve the production build
npm run lint       # eslint
npm run lint:css   # stylelint
npm run typecheck  # vue-tsc
```

## Architecture

### Routing

Real routes, one route per Workspace screen, defined in `src/router/`. Each route renders a page
component under `src/features/`. Adding a screen means adding a route and a page component —
there is no central switch statement to edit.

### State

Pinia stores under `src/stores/`. Store lifecycle transitions are the **only** sanctioned way to
change a store's status, and each fires its corresponding toast. Components read state through
store getters and dispatch actions; they do not mutate state directly.

### Service seams (the backend contract)

`src/services/` is the seam between this prototype and the eventual backend. Every service
function is **async and returns a promise**, even though it currently resolves from in-memory
seed data. This is deliberate: swapping a mock for a real API must be a change inside
`src/services/` and nowhere else. Components never import from `src/mock-data/`.

`docs/service-layers/` documents each seam as a contract. **This is the most valuable artifact in
the repository for the Core Dev team** — it is the list of what the backend has to provide.

### Domain model & business rules

Core types live in `src/types/`. Business logic is written as **pure functions with a comment
citing the originating spec**, colocated with the feature it serves under `src/features/`.

All business rules must trace to a document in the **"Team Stores MVP Specs"** Confluence folder.
Requirements are not taken from the "Planning", "Research", or "Archive" folders. Where the specs
are silent, the behaviour is left as the prototype shows it and recorded in
`docs/open-questions.md` — not invented.

> The previous attempt encoded a four-state store lifecycle
> (`draft → open → closed → archived`). Do not carry that forward on trust: confirm the state
> list, the transitions, and the publishing behaviour of a closed store against the current MVP
> Specs before implementing.

### Styling

Design tokens live in `src/styles/_tokens.scss` and are exposed as CSS custom properties. Each
component has a sibling `.scss` file, attached via the SFC style block's `src` attribute:

```vue
<style lang="scss" scoped src="./StoreCard.scss"></style>
```

Component files therefore contain structure, logic and events — never styling. Reuse tokens
rather than hard-coding colours, spacing, radii, or type values.

### Runtime configuration

Brand and tenant identity arrive as **runtime configuration**, read at startup from
`src/config/`. They are never read from build-time environment constants and never hard-coded.
One build must be able to serve more than one brand. The first brand implementation is expected
to be MRC / Marucci; it will not be the only one.

## Project structure

```
├── src/
│   ├── main.ts              # app entry
│   ├── App.vue              # router outlet + global chrome
│   ├── router/              # route definitions
│   ├── stores/              # Pinia stores
│   ├── services/            # ← the mock→real seam; async, promise-returning
│   ├── mock-data/           # seed data (imported ONLY by services/)
│   ├── config/              # runtime brand/tenant config
│   ├── features/            # domain features: components + colocated logic + .scss
│   ├── components/
│   │   ├── common/          # primitives (Button, Modal, Input, Badge, Dropdown…)
│   │   ├── feedback/        # Toast, Placeholder
│   │   └── layout/          # workspace chrome (nav, sidebar, shell)
│   ├── styles/              # _tokens.scss, _mixins.scss, global.scss
│   └── types/               # Store, Product, Player, Order
├── reference/               # UNTOUCHED Claude Design export — read-only, for diffing
└── docs/
    ├── handoff/             # the Claude Code brief; phase change log
    ├── architecture/        # routes, state, data flow, conventions
    ├── features/            # one per feature: business rules with cited specs
    ├── service-layers/      # the backend contract
    ├── divergences.md       # Figma vs prototype vs docs vs specs
    └── open-questions.md    # anything flagged rather than decided
```

## Fidelity is the acceptance criterion

This prototype is reviewed by comparing it against the design, not by reading its code. A visual
or behavioural difference from the approved design reads as a defect, not an improvement.

- The **deployed prototype** is the truth for appearance and behaviour.
- **Figma** is the truth for design intent — token names, exact spacing and type values, variant
  naming, and states the static export cannot show.
- Where the two disagree, implement the prototype and record it in `docs/divergences.md`. Do not
  pick a winner.

The Claude Design **preview shell** — the Mobile/Desktop toggle, the Restart button, the device
frame — is not part of the application and is not reproduced here. It was confirmed as
preview-only by the design side.

## Status

Prototype with seeded in-memory data and no persistence. State resets on reload. The
standalone-vs-packaged architecture decision, the final MVP feature list, and the BRD are all
still outstanding — see `docs/open-questions.md`.
