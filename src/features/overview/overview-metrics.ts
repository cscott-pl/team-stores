/**
 * Overview derivations — pure functions.
 *
 * Every figure the Overview shows is derived here, reproducing
 * `reference/workspace-app.jsx` OverviewDashboard (:4640-4745) exactly,
 * including the fallbacks and the magic numbers. Where the prototype hard-codes
 * a value it is reproduced and marked, not replaced with something tidier.
 *
 * Spec: KPI Summary Cards (read 2026-06-22 revision, Jun 22 2026) — a 4-up row
 * of Total Revenue, Orders, Active Stores, Avg. Order Value, each with an icon,
 * a large figure and a month-over-month delta.
 */
import type { Store } from "@/types/store";

const DAY_MS = 86_400_000;

/** Currency, as the prototype formats it: `$` + rounded, thousands-separated. */
export function formatMoney(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}

/** Scope: an empty selection means all stores. Prototype `:4649`. */
export function scopeStores(stores: Store[], scope: ReadonlySet<string>): Store[] {
  return scope.size ? stores.filter((s) => scope.has(s.id)) : stores;
}

export interface OverviewKpis {
  totalRevenue: number;
  /** Gross revenue minus COGS, platform fee, sales tax and fundraising. */
  totalProfit: number;
  liveCount: number;
  orders: number;
  aov: number;
}

export function deriveKpis(scoped: Store[]): OverviewKpis {
  // `|| 18420` is the prototype's fallback when scoped revenue sums to zero.
  const totalRevenue = scoped.reduce((sum, s) => sum + (s.revenue || 0), 0) || 18420;

  // Prototype comment: "Modeled here at a blended ~34% net margin."
  const totalProfit = Math.round(totalRevenue * 0.34);

  const liveCount = scoped.filter((s) => s.live || s.status === "active").length || scoped.length;

  // $46 is the prototype's assumed average order value for deriving a count.
  const orders = Math.max(Math.round(totalRevenue / 46), scoped.length * 8);

  return { totalRevenue, totalProfit, liveCount, orders, aov: orders ? totalRevenue / orders : 0 };
}

export interface OrderingWindow {
  id: string;
  name: string;
  color: string;
  mono: string;
  /** Percent of the window elapsed. */
  pct: number;
  daysLeft: number;
  raised: number;
  startDate: Date;
  endDate: Date;
  dayCount: number;
}

/** Soonest-closing first, four shown. Prototype `:4657-4685`. */
export function deriveOrderingWindows(scoped: Store[], today: Date): OrderingWindow[] {
  return scoped
    .map((s) => {
      const start = new Date(s.storeOpenStart);
      const end = new Date(s.storeOpenEnd);
      const total = Math.max((end.getTime() - start.getTime()) / DAY_MS, 1);
      const elapsed = Math.min(Math.max((today.getTime() - start.getTime()) / DAY_MS, 0), total);
      return {
        id: s.id,
        name: s.teamName || s.storeTitle,
        color: s.teamColors[0],
        mono: monogram(s),
        pct: Math.round((elapsed / total) * 100),
        daysLeft: Math.max(Math.round((end.getTime() - today.getTime()) / DAY_MS), 0),
        raised: s.revenue || 0,
        startDate: start,
        endDate: end,
        dayCount: Math.max(Math.round((end.getTime() - start.getTime()) / DAY_MS), 1),
      };
    })
    .sort((a, b) => a.daysLeft - b.daysLeft)
    .slice(0, 4);
}

export interface BankRow {
  id: string;
  name: string;
  color: string;
  mono: string;
  team: string;
  proposed: number;
  captures: number;
}

/**
 * Roster Bank rollup — proposed players waiting per store.
 *
 * Rule: a store's roster profile decides its copy and counts. `teams-only`
 * means teams mapped but no rosters; `unstructured` means no teams at all and
 * team gear locked. Spec: Roster-Optional Architecture, Epic C (Aug 31, 2026).
 * The bulk figures below are the prototype's seeded counts.
 */
export function deriveBankRows(scoped: Store[], liveCaptures = 0): BankRow[] {
  return scoped
    .map((s) => {
      const name = s.teamName || s.storeTitle;
      if (s.rosterProfile === "teams-only") {
        return {
          id: s.id,
          name,
          color: s.teamColors[0],
          mono: monogram(s),
          team: `18 teams mapped · no rosters yet · ${s.sport || "—"}`,
          proposed: 12,
          captures: 19,
        };
      }
      if (s.rosterProfile === "unstructured") {
        return {
          id: s.id,
          name,
          color: s.teamColors[0],
          mono: monogram(s),
          team: "No teams set up · team gear locked",
          proposed: 7,
          captures: 11,
        };
      }
      const label = s.storeType === "league" ? "Lone Peak 8U" : name || "Team Roster";
      return {
        id: s.id,
        name,
        color: s.teamColors[0],
        mono: monogram(s),
        team: `${label} · ${s.sport || "—"}`,
        proposed: 4 + liveCaptures,
        captures: 6 + liveCaptures,
      };
    })
    .sort((a, b) => b.proposed - a.proposed)
    .slice(0, 4);
}

export interface TopStoreRow {
  id: string;
  name: string;
  color: string;
  mono: string;
  sport: string;
  created: string;
  createdTs: number;
  orders: number;
  revenue: number;
  aov: number;
  pctOfTotal: number;
  rosterSize: number;
  rosterOrdered: number;
  completion: number;
  trend: number;
}

export type TopSortKey =
  | "name"
  | "created"
  | "orders"
  | "revenue"
  | "aov"
  | "pctOfTotal"
  | "completion"
  | "trend";

/**
 * Leaderboard — top five by revenue. Prototype `:4707-4736`.
 * Roster sizes, completion percentages and trends are positional seed values in
 * the prototype, reproduced rather than computed, because there is no data
 * behind them.
 */
export function deriveTopStores(scoped: Store[], totalRevenue: number): TopStoreRow[] {
  const rosterSizes = [58, 55, 62, 48, 40];
  const completions = [92, 85, 78, 71, 64];
  const trends = [12.4, 8.1, -3.2, 5.6, 2.1];

  return [...scoped]
    .sort((a, b) => (b.revenue || 0) - (a.revenue || 0))
    .slice(0, 5)
    .map((s, i) => {
      const revenue = s.revenue || 0;
      const orders = Math.round(revenue / 44) + 6;
      const rosterSize = rosterSizes[i] ?? 50;
      const completion = completions[i] ?? 60;
      const createdTs = new Date(s.createdDate).getTime();
      return {
        id: s.id,
        name: s.teamName || s.storeTitle,
        color: s.teamColors[0],
        mono: monogram(s),
        sport: s.sport || "—",
        created: new Date(s.createdDate).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        createdTs,
        orders,
        revenue,
        aov: orders ? revenue / orders : 0,
        pctOfTotal: totalRevenue ? (revenue / totalRevenue) * 100 : 0,
        rosterSize,
        rosterOrdered: Math.round((completion / 100) * rosterSize),
        completion,
        trend: trends[i] ?? 1.0,
      };
    });
}

export function sortTopStores(
  rows: TopStoreRow[],
  key: TopSortKey,
  dir: "asc" | "desc",
): TopStoreRow[] {
  const mul = dir === "asc" ? 1 : -1;
  return [...rows].sort((a, b) => {
    if (key === "name") return a.name.localeCompare(b.name) * mul;
    const ka = key === "created" ? a.createdTs : a[key];
    const kb = key === "created" ? b.createdTs : b[key];
    return ((ka || 0) - (kb || 0)) * mul;
  });
}

/** Two-letter monogram for the store avatar. Prototype uses the same slice. */
export function monogram(store: Pick<Store, "teamName" | "storeTitle">): string {
  return (store.teamName || store.storeTitle || "T").slice(0, 2).toUpperCase();
}

/** Window date label — "May 20", as the prototype renders it. */
export function formatWindowDate(d: Date): string {
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
