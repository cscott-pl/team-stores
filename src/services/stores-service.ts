import type { Store } from "@/types/store";
import { storesFixture, FIXTURE_TODAY } from "@/mock-data/stores";

/**
 * Store read seam.
 *
 * Async because that is the contract the backend will fulfil. A promise that
 * resolves immediately renders no loading state, so nothing new appears on
 * screen — see OQ-P13 and docs/service-layers/.
 *
 * Loading and failure treatment: UNSPECIFIED. The design shows neither, so none
 * is invented here.
 */
export async function listStores(): Promise<Store[]> {
  return Promise.resolve(storesFixture.map((s) => ({ ...s })));
}

/**
 * The reference "today" the ordering-window countdowns are measured against.
 * A fixed date in the prototype; a real clock once this is live.
 */
export async function getToday(): Promise<Date> {
  return Promise.resolve(new Date(FIXTURE_TODAY));
}
