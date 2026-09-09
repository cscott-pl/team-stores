/**
 * Icon path data.
 *
 * Geometry copied verbatim from `reference/workspace-app.jsx` — the prototype
 * defines a base `Icon` plus ~70 thin wrappers that pass a path or array of
 * paths. We keep the single component and move the geometry into a registry,
 * which is also how the PROLOOK design system does it (its `Icon` takes a name
 * and drops the `Icon` prefix). See docs/architecture/component-catalog.md
 * §"Design-system name correspondence".
 *
 * Add an icon here the first time a screen needs it, not speculatively.
 */
export const ICON_PATHS = {
  dollar: ["M12 1v22", "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"],
  receipt: [
    "M6 3h12a1 1 0 0 1 1 1v17l-3-2-2 2-2-2-2 2-2-2-3 2V4a1 1 0 0 1 1-1z",
    "M9 8h6",
    "M9 12h6",
  ],
  store: ["M3 9l1.5-5h15L21 9", "M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9", "M9 20v-5h6v5", "M3 9h18"],
  wallet: [
    "M3 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v0H5a2 2 0 0 0-2 2z",
    "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z",
    "M16 13h.01",
  ],
  plus: ["M12 5v14", "M5 12h14"],
  search: ["M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14z", "M16 16l4 4"],
  chevron: ["M6 9l6 6 6-6"],
  "chevron-right": ["M9 6l6 6-6 6"],
  "trend-up": ["M3 17l6-6 4 4 8-8", "M15 7h6v6"],
  "trend-down": ["M3 7l6 6 4-4 8 8", "M15 17h6v-6"],
  clock: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M12 7v5l3 2"],
  // Drawn at strokeWidth 1.8 in the prototype rather than the 1.6 default.
  "bank-inbox": [
    "M22 12h-6l-2 3h-4l-2-3H2",
    "M5.4 5.1 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.4-6.9A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.8 1.1Z",
  ],
  user: ["M20 21a8 8 0 1 0-16 0", "M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"],
  bag: ["M6 7a6 6 0 1 1 12 0", "M4 7h16l-1.4 12.2a2 2 0 0 1-2 1.8H7.4a2 2 0 0 1-2-1.8L4 7z"],
  settings: [
    "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
  ],
  logout: ["M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", "M16 17l5-5-5-5", "M21 12H9"],
  "sort-none": ["M8 9l4-4 4 4", "M8 15l4 4 4-4"],
  "sort-desc": ["M12 5v14", "M6 13l6 6 6-6"],
  "sort-asc": ["M12 19V5", "M6 11l6-6 6 6"],
} as const;

export type IconName = keyof typeof ICON_PATHS;
