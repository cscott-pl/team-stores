# `src/mock-data/`

Seed fixtures. **Nothing outside `src/services/` may import from here** — enforced by ESLint.

**Fixtures are fixed, never generated.** The prototype's seed revenue is `Math.random()`-based
(`workspace-app.jsx:27918`), so its dashboard totals differ between two loads of the prototype
itself. Capture one observed load, record the values, freeze them, and note in the file that the
source was randomised and the values are one frozen sample. See OQ-P17.
