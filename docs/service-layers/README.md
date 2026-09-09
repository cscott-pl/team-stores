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

## Note on the prototype's current data access

The design has no service layer at all. `reference/workspace-app.jsx` seeds from in-file factories
(`makeSeededStores()`, `makeSampleLeagues()`, `ACCOUNT_PROFILE`, …), persists user-created stores
and templates to `localStorage`, and routes across components through **22 `window.__*` globals**.

Those globals are the cross-component reaching that `CLAUDE.md` forbids. Each is a real refactor
decision rather than a mechanical translation, so each will be logged as it is unwound rather than
silently rewired.
