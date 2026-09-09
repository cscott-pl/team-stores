import type { Store } from "@/types/store";

/**
 * Frozen store fixture.
 *
 * ⚠️ ONE CAPTURED SAMPLE, NOT A GENERATOR.
 *
 * The prototype seeds store revenue with `Math.random()`
 * (`reference/workspace-app.jsx:27918`), so its dashboard totals differ between
 * two loads of the prototype itself. These values are one observed load, frozen
 * so our own comparisons are stable. See OQ-P17.
 *
 * The captured load produced: Total Revenue $69,589 · Orders 1,513 ·
 * Active Stores 4 · Avg. Order Value $46 — reproduced exactly by these figures
 * through the derivations in `@/features/overview/overview-metrics`.
 *
 * Identity fields (names, cities, colours, ownership, sports, windows) are the
 * prototype's own seed data, not invented.
 */
export const storesFixture: readonly Store[] = Object.freeze([
  {
    id: "seed-0",
    storeTitle: "Jazz Bantum Boys Basketball",
    teamName: "Jazz Bantum Boys Basketball",
    storeType: "league",
    status: "active",
    live: true,
    archived: false,
    ownership: "mine",
    createdByName: "Hingle McCringleberry",
    sport: "Basketball",
    teamColors: ["#7c1d2b", "#0e0e10", "#ffffff"],
    rosterProfile: undefined,
    storeOpenStart: "2026-05-20",
    storeOpenEnd: "2026-06-19",
    createdDate: "2026-01-14",
    revenue: 1284.5,
  },
  {
    id: "seed-1",
    storeTitle: "Rams",
    teamName: "Rams",
    storeType: "single",
    status: "active",
    live: true,
    archived: false,
    ownership: "mine",
    createdByName: "George Harrison",
    sport: "Football",
    teamColors: ["#ec6c2a", "#0e0e10", "#ffffff"],
    rosterProfile: undefined,
    storeOpenStart: "2026-05-01",
    storeOpenEnd: "2026-06-30",
    createdDate: "2026-02-03",
    revenue: 902.75,
  },
  {
    id: "seed-2",
    storeTitle: "Gators",
    teamName: "Gators",
    storeType: "single",
    status: "draft",
    live: false,
    archived: false,
    ownership: "joined",
    createdByName: "Dwayne Hoover",
    sport: "Football",
    teamColors: ["#1f9d55", "#0e0e10", "#ffffff"],
    rosterProfile: undefined,
    storeOpenStart: "2026-04-10",
    storeOpenEnd: "2026-07-09",
    createdDate: "2026-02-27",
    revenue: 1417.2,
  },
  {
    id: "seed-3",
    storeTitle: "Honey Badgers",
    teamName: "Honey Badgers",
    storeType: "single",
    status: "draft",
    live: false,
    archived: false,
    ownership: "joined",
    createdByName: "Marcy Feldman",
    sport: "Football",
    teamColors: ["#f5b400", "#0e0e10", "#ffffff"],
    rosterProfile: undefined,
    storeOpenStart: "2026-05-25",
    storeOpenEnd: "2026-07-24",
    createdDate: "2026-03-19",
    revenue: 874.05,
  },
  {
    id: "seed-4",
    storeTitle: "Wasatch Elite Lacrosse",
    teamName: "Wasatch Elite Lacrosse",
    storeType: "league",
    status: "active",
    live: true,
    archived: false,
    ownership: "mine",
    createdByName: "Hingle McCringleberry",
    sport: "Lacrosse",
    teamColors: ["#1e3a6e", "#0e0e10", "#ffffff"],
    // Teams mapped, no rosters yet — fills from checkout captures.
    rosterProfile: "teams-only",
    storeOpenStart: "2026-05-20",
    storeOpenEnd: "2026-06-19",
    createdDate: "2026-04-08",
    revenue: 18240.5,
  },
  {
    id: "seed-5",
    storeTitle: "Bayshore Summer Classic",
    teamName: "Bayshore Summer Classic",
    storeType: "league",
    status: "active",
    live: true,
    archived: false,
    ownership: "mine",
    createdByName: "Hingle McCringleberry",
    sport: "Volleyball",
    // No teams at all — fan gear only; team gear locked until teams exist.
    rosterProfile: "unstructured",
    teamColors: ["#0f766e", "#0e0e10", "#ffffff"],
    storeOpenStart: "2026-05-01",
    storeOpenEnd: "2026-06-30",
    createdDate: "2026-01-14",
    revenue: 46870.25,
  },
]);

/**
 * The prototype pins "today" to a fixed date so the seeded ordering windows
 * always render the same days-left figures (`workspace-app.jsx:4658`).
 * Reproduced, otherwise the window countdowns drift every day.
 */
export const FIXTURE_TODAY = "2026-06-04";
