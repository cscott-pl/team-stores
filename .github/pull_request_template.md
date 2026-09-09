## What changed, and why

<!-- One concern per PR. Name what changed and the reason — the same shape as the
     commit messages. If this PR does more than one thing, it should be two PRs. -->

## Fidelity checklist

From `AGENTS.md`. **Tick what you actually ran.** If an item does not apply — for example
there is no UI in this PR — mark it `n/a` with a word on why. Report failures rather than
silently correcting the design to match your expectation.

- [ ] **1. Side-by-side against the design** for every view, panel, tab, modal and overlay —
      layout, spacing, sizing, typography, colour and state all match.
      **Not displayed numbers**: the prototype's seed revenue is `Math.random()`-based, so figures
      differ between two loads of the prototype itself. Compare layout and formatting.
      **Widths: 1280px — the floor the design sets itself — plus two or three wider**, enough to
      exercise the `minmax()` grid tracks. Do not sweep continuously; there is no fluid type
      system to test. Below 1280px the only correct behaviour is a horizontal scrollbar.
- [ ] **2.** Every interactive element behaves identically: hover, focus, active, disabled,
      selected.
- [ ] **3.** Every flow that starts and ends inside the Workspace completes end to end.
- [ ] **4.** No console errors or warnings introduced.
- [ ] **5.** All assets resolve — no broken images, icons or fonts.
- [ ] **6.** Keyboard-only navigation reaches everything reachable before.
- [ ] **7.** Nothing outside the Workspace scope has been built, stubbed, or modified.
- [ ] **8.** `reference/` is unmodified.
- [ ] **9.** Nothing outside `src/services/` imports from `src/mock-data/`.
- [ ] **10.** No inline styles introduced anywhere.
- [ ] **11.** Diff review — every changed line is explainable by the stated purpose of the work.

## Divergences and open questions

<!-- Anything found that contradicts the design, the specs, or this repo's conventions.
     A divergence goes in docs/divergences.md; a question goes in docs/open-questions.md.
     "None" is a valid answer — say it explicitly rather than leaving this blank. -->

## Documentation

- [ ] `docs/service-layers/` updated in this PR if a seam was added or changed
- [ ] `docs/features/<name>.md` updated if a business rule was implemented, **with its spec citation**
- [ ] `docs/divergences.md` / `docs/open-questions.md` updated if anything was found
