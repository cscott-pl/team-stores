/**
 * Store domain types.
 *
 * Shapes are taken from the prototype's in-memory store objects
 * (docs/architecture/data-inventory.md). CLAUDE.md forbids assuming they match
 * the eventual backend — these describe what the UI needs, not a schema.
 */

/** Prototype `storeType`. Both are in the MVP with a specified fork. */
export type StoreType = "league" | "single";

/**
 * Prototype status values. NOTE the vocabulary diverges from the specs — the
 * Aug 31 spec says Draft / Open / Closed / Archived, the Aug 3 spec says
 * Draft / Active / On Hold, and the prototype carries five values plus two
 * booleans. We follow the prototype. See docs/divergences.md DIV-012.
 */
export type StoreStatus = "draft" | "active" | "live" | "closed" | "archived";

/** Roster profile, driving the Roster Bank rollup on the Overview. */
export type RosterProfile = "teams-only" | "unstructured" | undefined;

export interface Store {
  id: string;
  storeTitle: string;
  teamName: string;
  storeType: StoreType;
  status: StoreStatus;
  live: boolean;
  archived: boolean;
  ownership: "mine" | "joined";
  createdByName: string;
  sport: string;
  /** [primary, secondary, tertiary]. Primary drives the avatar background. */
  teamColors: string[];
  rosterProfile: RosterProfile;
  /** ISO date. Ordering window open. */
  storeOpenStart: string;
  /** ISO date. Ordering window close. */
  storeOpenEnd: string;
  /** ISO date the store record was created. */
  createdDate: string;
  revenue: number;
}
