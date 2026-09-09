# `src/services/` — the backend seam

**The only directory permitted to import from `src/mock-data/`.** Enforced by the
`no-restricted-imports` rule in `eslint.config.js`, not by memory.

Every function here is **async and returns a promise**, even while resolving from in-memory seed
data. A synchronous read is a seam that will not survive substitution.

Each seam gets a contract document in `docs/service-layers/` **in the same commit** as the code.

Note: the design specifies **no loading and no error treatment** — see OQ-P13. A promise that
resolves immediately renders no loading state, so nothing new appears on screen. Do not invent
spinners or error banners; record the gap against the seam instead.
