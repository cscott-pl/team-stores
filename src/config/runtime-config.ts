/**
 * Runtime configuration — brand and tenant identity.
 *
 * CLAUDE.md is explicit: brand identity is read at RUNTIME, never from
 * build-time environment constants, never hard-coded, and never assuming one
 * deployment serves exactly one brand. The first brand is expected to be
 * MRC / Marucci, but it will not be the only one.
 *
 * The prototype takes its originating brand from a `?brand=` hand-off parameter
 * and holds a CUSTOMIZER_BRANDS map. That shape is reproduced here as the seam.
 *
 * Whether a rep or store ever spans more than one brand is OQ-P01 — unanswered.
 * Nothing here assumes either way.
 */

export interface BrandConfig {
  /** Stable identifier used in the `?brand=` hand-off parameter. */
  id: string;
  /** Display name shown in the SSO welcome and the account menu. */
  name: string;
  /** Absolute URL of this brand's Customizer. Opened in a new tab. */
  customizerUrl: string;
}

export interface RuntimeConfig {
  /** Every brand this deployment can serve. Never assumed to be one. */
  brands: BrandConfig[];
  /** The brand the session originated from, resolved at startup. */
  primaryBrandId: string;
}

/**
 * Resolved once at startup. Today it returns a default; when the real
 * configuration source exists — an injected global, a fetched document — only
 * this function changes.
 */
export function loadRuntimeConfig(): RuntimeConfig {
  const params = new URLSearchParams(globalThis.location?.search ?? "");
  const requested = params.get("brand");

  const brands: BrandConfig[] = [
    { id: "prolook", name: "PROLOOK", customizerUrl: "https://customizer.prolook.com/" },
  ];

  const primaryBrandId = brands.some((b) => b.id === requested)
    ? (requested as string)
    : brands[0].id;

  return { brands, primaryBrandId };
}
