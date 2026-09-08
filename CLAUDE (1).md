# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when working in this repository.
This file imports `AGENTS.md`, which carries the working method and scope rules.

## ⚠️ Read this before writing any code

**1. The toolchain is almost certainly newer than your training data.** As of September 2026 the
latest published versions are **Vite 8.2, TypeScript 7.0, vue-router 5.3, Pinia 4.0, ESLint
10.10** — each several major versions past what most documentation describes. Before writing
router config, build config, or lint config, **read the installed version's own docs** under
`node_modules/<pkg>/` (or the package's README and CHANGELOG) and heed deprecation notices. Do
not write from memory of an earlier major version.

**2. Check what is actually installed before assuming an API exists.**

```bash
node -p "require('./package.json').dependencies"
node -p "require('./package.json').devDependencies"
```

**3. This project may be pinned deliberately.** The core application it hands off to runs an
older toolchain. If a version looks outdated, that is likely intentional — ask before upgrading
anything.

## What this repository is

A **frontend-only prototype of the Team Store Workspace**, built to be a near 1:1 visual match
to an approved design and then handed to the Core Dev team for integration.

Two consequences that govern every decision:

- **Fidelity beats cleanliness.** The prototype is reviewed by comparison against the design. An
  unrequested improvement is indistinguishable from a regression.
- **It is read by other developers, not just run.** Structure, naming, and the service seams
  matter as much as the rendered output.

## Scope — Workspace only

In scope: the Workspace, as defined by `Team Stores Workspace.dc.html` in the Claude Design
project and Figma frame `node-id=9293-67700`.

Out of scope, and not to be built, stubbed, or inferred from: the Landing page, the public
Storefront, the Documentation page, and the 3rd-party integrated Workspace variant. In Figma,
only the linked node and its children are in scope — do not browse the wider `Team-Stores` file
or treat a neighbouring frame as a newer version without asking.

If the Workspace links somewhere out of scope, leave the link as-is. Dead links are expected.

## Commands

```bash
npm run dev        # dev server
npm run build      # production build
npm run preview    # serve the production build
npm run lint       # eslint
npm run lint:css   # stylelint
npm run typecheck  # vue-tsc
```

Confirm against `package.json` before use — do not assume a script exists. In particular, verify
whether a test runner is configured before referencing `npm test`.

## Architecture

### Routing — real routes, not a switch statement

Routes are defined in `src/router/`, one per Workspace screen, each rendering a page component
under `src/features/`. To add a screen: add a route and a page component. There is no central
switch to edit, and none should be introduced.

> A previous attempt at this prototype drove navigation from a single `screen` state value and
> one large switch component. Do not reproduce that pattern. Page-level components map onto how
> the core application resolves pages; a switch does not, and would be unwound during
> integration.

### State — Pinia

Stores under `src/stores/`. Components read through getters and dispatch actions; they never
mutate store state directly. Store lifecycle transitions are the **only** sanctioned way to
change a store's status, and each fires its corresponding toast.

### Services — the seam that must not be bypassed

`src/services/` is the boundary between this prototype and the eventual backend. Every service
function is **async and returns a promise**, even when resolving from in-memory seed data.

- Components and stores import from `src/services/` only.
- **Nothing outside `src/services/` may import from `src/mock-data/`.** If you find yourself
  reaching for seed data in a component, add or extend a service instead.
- When you add or change a seam, update `docs/service-layers/` in the same commit. That directory
  is the backend contract and the primary handoff artifact.

### Business rules

Pure functions, colocated with their feature under `src/features/`, each carrying a comment
citing the spec it comes from.

**Requirements come only from the "Team Stores MVP Specs" Confluence folder**, plus the BRD once
the BA team issues it. Do not take requirements from the "Planning", "Research", or "Archive"
folders — they are out-of-scope, unvalidated, or outdated respectively. If something you need is
not in the MVP Specs, say *"this is missing from the MVP specs"*, record it in
`docs/open-questions.md`, and stop. Do not fill the gap by inference.

Do not carry business rules over from the previous prototype attempt on trust — including the
store lifecycle state list. Verify against the current specs first.

### Styling — separated, always

- Design tokens in `src/styles/_tokens.scss`, exposed as CSS custom properties. Reuse them; do
  not hard-code colours, spacing, radii, or type values.
- One sibling `.scss` file per component, attached via the SFC style block:
  `<style lang="scss" scoped src="./ComponentName.scss"></style>`
- **No inline `style` objects or `style` attributes. No Tailwind. No CSS-in-JS.** A component
  file holds structure, logic and events — never styling.
- Visual states (hover, focus, active, disabled, selected, loading, empty, error) are expressed
  through classes or data attributes and styled in SCSS — never by mutating style at runtime.

This separation is a hard requirement from the development team, not a preference. The previous
attempt used inline style objects and that is the main reason it could not be handed off.

### Markup quality

Semantic elements (`header`, `nav`, `main`, `section`, `button`, `ul`/`li`, real heading
hierarchy) rather than generic containers. Accessibility as you go: labels tied to inputs,
accessible names on icon-only controls, visible focus, keyboard operability for anything
clickable, `alt` on meaningful images and empty `alt` on decorative ones, and never colour alone
to carry meaning. Where a correct semantic element changes default appearance, neutralise it in
SCSS rather than avoiding the element.

### Runtime configuration and architecture neutrality

The standalone-vs-packaged architecture decision is still open. Do not encode an assumption
either way.

- Brand/tenant identity comes from **runtime** configuration in `src/config/` — never from
  build-time environment constants, never hard-coded, and never assuming one build serves exactly
  one brand.
- No assumptions about database shape, ORM, auth session model, or table ownership.
  Authentication is expected to involve SSO with the Customizer — treat auth as an injected
  boundary, not something to implement.
- Keep the Workspace's own entry point. Do not place anything in a shared or global bundle that a
  future public storefront would inherit — heavy renderer libraries, spreadsheet or PDF
  generation, and admin-only code stay on the Workspace side.
- Where the design embeds designer/picker-like UI, isolate it behind a clean interface. Assume it
  may need to mount and unmount repeatedly within one session rather than living on a dedicated
  page.
- Analytics is a separate concern from transactional data. Do not couple analytics views to
  transactional data shapes.

## Fidelity rules

- **Appearance and behaviour: the deployed prototype wins.** Not your judgement, not convention,
  not what would be cleaner.
- **Figma is design intent, not an implementation target.** Use the linked frame for token names,
  exact spacing and type values, variant naming, and states the static export cannot show.
- **Where they disagree, implement the prototype and log it** in `docs/divergences.md`. Do not
  pick a winner and do not split the difference.
- The Claude Design **preview shell** — Mobile/Desktop toggle, Restart button, device frame — is
  preview-only and is not reproduced.
- `reference/` holds the untouched export. It is read-only; use it for diffing, never edit it.

## Documentation is part of the change

`docs/` is maintained, not decorative. Keep it in sync in the same commit as the code it
describes:

- `docs/architecture/` — routes, state, data flow, conventions
- `docs/features/<name>.md` — business rules with cited specs, plus the service seams touched
- `docs/service-layers/` — the backend contract
- `docs/divergences.md` — Figma vs prototype vs docs vs specs
- `docs/open-questions.md` — everything flagged rather than decided

## Context strategy

For tasks requiring broad codebase understanding (planning, architecture review, multi-file
analysis), delegate reading to gemini-mcp-tool: call `ask-gemini` with @-file references and
request a structured summary including file paths, so follow-up work does not require re-reading.
Work from that summary. Read files directly only when you need exact code for an edit. Use
`changeMode` for structured edit suggestions. Keep precise multi-step edits and project-context
reasoning in Claude.
