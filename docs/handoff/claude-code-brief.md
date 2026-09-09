# Claude Design → Claude Code Handoff Prompt (Team Store MVP)

Paste everything below the line into Claude Code, from the root of the exported project.
Fill the four bracketed values first. Keep the whole thing in one message — the phase
ordering and the stop-and-report rules only work if Claude Code sees them up front.

---

## Role and context

You are working on the **Team Store MVP** front end for QuickStrike / ProLook.

This project did not start as code. It started as a **Claude Design prototype**, which was
then **exported as a static HTML project** and handed to engineering. Your job is to turn that
export into a maintainable Vue front end **without changing what the prototype looks like or
how it behaves**. You are converting an approved design, not redesigning or re-specifying it.

Everyone downstream — Core Dev, the BA team, the Enterprise Architects — will compare your
output against the deployed prototype. Any visual or behavioural difference you introduce
reads as a defect, not an improvement.

**Inputs**

- Exported Claude Design project: this repository / `[PATH TO EXPORT]`
- Claude Design project (design reference):
  https://claude.ai/design/p/8d19c369-25d4-41a9-b7ff-59bddbe6183d?file=Team+Stores+Workspace.dc.html&via=share
- **The only file in scope: `Team Stores Workspace.dc.html`**
- Figma design (the corresponding Workspace frame):
  https://www.figma.com/design/FJYYXHDwtmF5xlcSRdBypv/Team-Stores?node-id=9293-67700
- Reference deployment (the visual source of truth):
  `[https://team-store-mvp-demo.netlify.app/workspace.html]`
- Target stack: `[Vue 3 + Vite + SCSS]`
- Frontend standards / architecture doc to comply with: `[PATH OR LINK — if none, ask me before inventing one]`

**Work from the export, not from a re-generation.** Earlier attempts to separate styles
directly out of the live Claude Design output lost styles and assets and produced
inconsistencies against the prototype. The exported project is the only valid starting point.

---

## Scope boundary — Workspace only

This engagement covers the **Workspace** page and nothing else.

- The **only** design file you may read, reference or convert is
  **`Team Stores Workspace.dc.html`**.
- The Claude Design project and the export contain other files — Landing, Storefront,
  Documentation, and a separate 3rd-party integrated Workspace variant. **Do not open them, do
  not read them for context, do not convert them, do not modify them, and do not use them to
  infer patterns, tokens, or component structure.** If you have already read one, say so and
  disregard it.
- If the Workspace markup links to those other pages, **leave the links exactly as they are**.
  Unresolved or dead links are expected and acceptable. Do not create stub pages, routes, or
  placeholder components to satisfy them.
- If the Workspace appears to depend on something defined in another file, do not go and look.
  Stop, describe the dependency, and ask me.
- Shared or global-looking styles and assets: extract only what the Workspace actually uses.
  Do not build a project-wide design system on the assumption that other pages will need it.
- The same restriction applies in Figma. Only the linked node — `node-id=9293-67700` — and its
  children are in scope. The `Team-Stores` file contains frames for the other pages and for
  earlier iterations; do not browse the file, do not pull tokens or components from frames
  outside the linked node, and do not treat a neighbouring frame as a newer version of this one
  without asking me.

Anything outside the Workspace is a separate piece of work with its own handoff.

---

## Source-of-truth rules (read before touching anything)

1. **Visual and behavioural truth = the exported prototype.** Not your judgement, not
   convention, not what would be cleaner.
2. **Figma is the design-intent reference, not an implementation target.** Use the linked frame
   to resolve what the export leaves ambiguous — named design tokens, exact spacing and type
   values, component and variant naming, states that aren't reachable in the static export.
   Where the two genuinely disagree on appearance or behaviour, **do not pick a winner and do
   not split the difference**: implement what the prototype does, and log the divergence for
   review. The prototype is what stakeholders have already signed off on, so an unannounced
   correction toward Figma is indistinguishable from a regression.
3. **Requirements truth = the "Team Stores MVP Specs" Confluence folder**, plus the BRD once
   the BA team issues it. Do **not** pull requirements from the "Planning", "Research", or
   "Archive" folders — those are out-of-scope, unvalidated, or outdated. If something you need
   is not in the MVP Specs, say *"this is missing from the MVP specs"* and stop; do not fill
   the gap from another folder or from inference.
4. **The MVP feature list is not final.** Do not add, remove, complete, or "finish" any
   feature. If the prototype shows a dead button, a stubbed screen, or an unhandled state,
   preserve it exactly as-is and list it in your report.
5. **The architecture decision is still provisional.** The current direction is a *standalone*
   Team Store application that consumes reusable packages extracted from the Customizer,
   with SSO between the two — but this is subject to the final MVP scope. Your output must not
   hard-code an assumption either way (see Architecture neutrality below).
6. **Known-outdated documentation.** Existing Team Store documentation may lag the deployed
   prototype. Where they disagree, the prototype wins for appearance/behaviour and the MVP
   Specs win for intent. Log every disagreement you notice — that diff is a deliverable in
   its own right.

---

## Working method: incremental, reviewable, reversible

Do **not** batch these phases. One phase at a time, one concern at a time, each on its own
commit with a message naming what changed and why. This is deliberate: it lets us evaluate
each modification independently, keep a readable change history, and pinpoint regressions
fast.

**At the end of every phase: stop. Report. Wait for my go-ahead.** Do not begin the next
phase on your own initiative.

Each phase report must contain:

- What changed, file by file
- What you deliberately left alone, and why
- Any place you had to make a judgement call, with the alternatives you rejected
- Anything you found that contradicts the prototype, the specs, or the standards doc
- Confirmation that the fidelity checklist below still passes

---

## Phase 0 — Inventory only, no edits

Produce a written map of the **Workspace file only** before changing a single line:

- Every view, panel, tab, modal and overlay within the Workspace, and how the user moves
  between them
- Every outbound link that leaves the Workspace — listed, not followed
- Where styling currently lives: inline `style` attributes, `<style>` blocks, utility classes,
  external stylesheets — with rough volume of each
- Which components repeat within the Workspace, and which appear once
- What is genuinely interactive vs. visually static
- Every asset, and whether it is referenced or orphaned
- Anything belonging to the **Claude Design preview shell** rather than the application
  (see Phase 1)
- Any state that is only reachable through interaction, so we know what needs capturing
  before we start moving code

Flag anything ambiguous. Change nothing yet.

---

## Phase 1 — Remove the Claude Design preview shell

The export carries presentation scaffolding that exists only for previewing designs and is
**not part of the application**:

- The Mobile / Desktop view toggle
- The Restart button
- The device frame / mockup chrome
- Any wrapper element that exists purely to host the above

Remove it, and keep the actual UI untouched. This has been explicitly confirmed as
preview-only by the design side.

Afterwards, verify the remaining UI renders identically to the prototype with the shell
removed — same layout, same responsive behaviour at every breakpoint. Removing the toggle
must not remove responsiveness; the underlying media queries and fluid layout stay.

---

## Phase 2 — Separate styling from everything else

The generated code currently collapses several concerns into single components: component
structure, UI logic, event handling, styling, and visual states all in one place. Pull
**styling** out. Only styling.

- Extract inline styles and embedded style blocks into dedicated SCSS files
- **Preserve the original HTML structure exactly** — do not re-nest, re-order, or "tidy"
  markup in this phase
- Organise SCSS to mirror the component/page structure so a file is findable from the markup
- Promote repeated values (colour, spacing, type scale, radii, shadows, breakpoints) to
  variables/tokens — same computed values, named once
- Keep visual state styling (hover, focus, active, disabled, selected, loading, empty, error)
  in the stylesheet, driven by classes or data attributes rather than inline mutation
- Do not introduce a CSS framework, reset, or normalize that was not already present

Rendering must be pixel-identical when this phase completes. Anything that shifts is a bug in
the extraction, not an acceptable side effect.

---

## Phase 3 — Bring markup up to our frontend standards

Only after styling is cleanly separated, and still without changing appearance:

- Proper semantic elements (`header`, `nav`, `main`, `section`, `article`, `button`, `ul/li`,
  headings in real hierarchy) in place of generic containers
- Consistent, predictable structure and naming across pages
- Sensible component boundaries — one responsibility per component, repeated UI extracted once
- Accessibility where applicable: real focus order and visible focus, labels tied to inputs,
  accessible names on icon-only controls, ARIA only where a native element cannot express it,
  images with meaningful `alt` (empty `alt` for decorative), colour never the sole carrier of
  meaning, keyboard operability for anything clickable
- Compliance with the frontend coding standards and project architecture referenced above

Where a semantic change would alter default appearance (e.g. `div` → `button`), neutralise it
in SCSS rather than avoiding the correct element. Note each such case in the report.

---

## Phase 4 — Convert to Vue

Convert the cleaned HTML/SCSS into Vue, following the agreed direction of Vue as the primary
stack for the core application. Gradually — page by page or component by component, validating
each before moving on.

- Reuse the component boundaries established in Phase 3; don't re-cut them
- Scoped styles per component, importing the shared tokens — no reintroduction of inline styles
- Props down / events up; no cross-component reaching
- Keep the data layer at the edge: mock or fixture data behind a single, clearly-named module,
  so a real API can be substituted later without touching components
- Preserve every interaction exactly: transitions, animation timing and easing, scroll and
  sticky behaviour, focus handling, modal/overlay behaviour, form validation feedback, sort and
  filter behaviour, empty and loading states

Nothing about design, functionality, logic, behaviour, interactions, spacing, sizing,
typography, or overall UI presentation may change. The prototype remains the reference
throughout.

---

## Architecture neutrality (this front end must survive the pending decisions)

The standalone-vs-packaged decision, the MVP feature list, the BRD, and the MRC/Marucci
prototype are all still outstanding. Build so that none of them forces a rewrite:

- **Brand/tenant configuration is runtime, not build-time.** Take it as injected
  configuration or props. Never read brand identity from build-time environment constants and
  never hard-code a brand, and never assume one deployment serves exactly one brand. The first
  brand implementation is expected to be MRC / Marucci, but it will not be the only one.
- **Keep the Workspace separable from the public storefront.** The Workspace is internal,
  authenticated tooling; the storefront is public and will be built separately. Structure the
  Workspace as its own entry point and do not place anything in a shared or global bundle that
  a public shopper page would then inherit — heavy design/renderer libraries, spreadsheet or
  PDF generation, and admin-only code all stay on the Workspace side of that line. A parent
  buying one shirt should not download the uniform designer.
- **No backend coupling.** No assumptions about database shape, ORM, auth session model, or
  which application owns which table. Authentication is expected to involve SSO between the
  Customizer and Team Store — treat auth as an injected boundary, not something you implement.
- **Reusable-package friendly.** Customizer capabilities are expected to be extracted into
  reusable packages and consumed here. Where the prototype embeds designer/picker-like UI,
  isolate it behind a clean boundary and a stable interface rather than weaving it through the
  pages, and assume it may need to mount and unmount repeatedly in the same session rather
  than living on a single dedicated page.
- **Analytics is a separate concern** from transactional data. Do not couple analytics views to
  transactional data shapes.

---

## Ask, don't assume

These are open on the product/US side. If the prototype is silent or ambiguous on any of them,
leave the current behaviour untouched, mark a `TODO` with a pointer to this list, and raise it
in your report. Do not resolve them yourself:

- Whether a rep or store ever spans more than one brand / Customizer
- Whether portfolio and cross-store views span brands or stay within one
- Store lifecycle semantics beyond what the prototype shows, and which fields lock after launch
- Tax calculation (the prototype uses a placeholder approach)
- Payment, fundraising, fee and payout handling — including merchant-of-record questions
- Roster and roster-group structure and how products, orders and freight attach to it
- Store-type differences (league vs individual team) where the prototype doesn't show them

---

## Fidelity checklist — run at the end of every phase

Against the deployed Workspace page, for every view, panel, tab, modal and overlay it contains:

1. Side-by-side at mobile, tablet and desktop widths — layout, spacing, sizing, typography,
   colour all match
2. Every interactive element behaves identically: hover, focus, active, disabled, selected
3. Every flow that starts and ends inside the Workspace still completes end to end
4. No console errors or warnings introduced
5. All assets resolve; no broken images, icons or fonts
6. Keyboard-only navigation reaches everything reachable before
7. No file outside `Team Stores Workspace.dc.html` has been read, created or modified
8. Diff review — every changed line is explainable by the current phase's stated purpose

Report anything that fails rather than silently correcting the prototype to match your
expectation.

---

## Deliverables

1. The converted project, one commit per discrete change, history readable in order
2. A phase-by-phase change log
3. A **divergence report** covering three comparisons: the linked Figma frame vs. the deployed
   Workspace, the existing Team Store documentation vs. the deployed Workspace, and either of
   those vs. the MVP Specs. State what differs, not which one you think is right.
4. A list of everything you flagged rather than decided — the open questions, the `TODO`s, and
   anything missing from the MVP specs
5. A short handover note aimed at Core Dev review: what is production-shaped, what is still
   prototype-shaped, and what needs a decision before integration

Start with Phase 0 and report back before making any change.
