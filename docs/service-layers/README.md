# Service layers — the backend contract

**This is the primary handoff artifact.** It is what the Core Dev team actually consumes: the list
of seams where this prototype's in-memory data is replaced by real endpoints.

Empty for now — filled as services are written. `CLAUDE.md` requires it be updated **in the same
commit** as the seam it describes.

## What a seam document records

One file per service module, mirroring `src/services/`.

- **The function signature** — name, parameters, return shape
- **What it resolves today** — which `src/mock-data/` fixture, and how it is shaped
- **What it should resolve eventually** — the real operation, described without assuming a
  backend. **No assumptions about database shape, ORM, auth session model, or which application
  owns which table.**
- **Callers** — which stores and features depend on it
- **Failure behaviour** — what the UI does on rejection, since the prototype's loading and error
  states are part of the fidelity target
- **Open questions** — cross-referenced to [`../open-questions.md`](../open-questions.md)

## Rules that make the seam real rather than aspirational

- **Every service function is async and returns a promise**, even when resolving from in-memory
  seed data. A synchronous read is a seam that will not survive substitution.
- **Components and stores import from `src/services/` only.**
- **Nothing outside `src/services/` may import from `src/mock-data/`.** Reaching for seed data in
  a component means adding or extending a service instead. Enforced by an ESLint import-boundary
  rule — `REPO-SETUP.md` is explicit that this single rule is what keeps the seam honest.
- **Auth is an injected boundary, not something implemented here.** SSO with the Customizer is
  expected; treat it as a boundary and do not implement it.
- **Analytics is a separate concern from transactional data.** Do not couple analytics views to
  transactional data shapes.
- **Brand/tenant identity comes from `src/config/` at runtime**, never from build-time constants,
  and never assuming one build serves exactly one brand.

## ⚠️ Every seam here will need loading and failure treatment — the design specifies none

**A note to the dev team, and a question for design later. Not UI for this prototype to invent.**

The design has **no error state anywhere** (`retry` appears 0 times; the 30 `error` and 22
`invalid` hits are all form-field validation) and exactly **one** loading state — a single
`LoadingOverlay` during store creation. Nothing in the prototype is asynchronous, so nothing can
fail.

Service functions here are async because that is the contract the backend will fulfil. **A promise
that resolves immediately renders no loading state, so nothing new appears on screen** — there is
no tension between the async contract and fidelity.

**Therefore, in this prototype:**

- Do **not** build spinners, skeletons, retry buttons or error banners the design never showed.
- Keep the single existing `LoadingOverlay` exactly where the design has it.
- Each seam document below records that its loading and failure treatment is **unspecified**.

Once these seams are real, each needs both. That is design work, and it has not happened. Tracked
as **OQ-P13** — which blocks nothing in this prototype.

## Note on the prototype's current data access

The design has no service layer at all. `reference/workspace-app.jsx` seeds from in-file factories
(`makeSeededStores()`, `makeSampleLeagues()`, `ACCOUNT_PROFILE`, …), persists user-created stores
and templates to `localStorage`, and routes across components through **22 `window.__*` globals**.

Those globals are the cross-component reaching that `CLAUDE.md` forbids. Each is a real refactor
decision rather than a mechanical translation, so each will be logged as it is unwound rather than
silently rewired.
