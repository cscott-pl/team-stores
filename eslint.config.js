import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import vueTsConfig from "@vue/eslint-config-typescript";
import configPrettier from "eslint-config-prettier";

export default [
  { ignores: ["dist/**", "node_modules/**", "reference/**", "coverage/**"] },

  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  ...vueTsConfig(),

  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser },
    },
    rules: {
      // ── The backend seam ────────────────────────────────────────────────
      // CLAUDE.md: "Nothing outside src/services/ may import from
      // src/mock-data/." REPO-SETUP.md calls this "the single rule that keeps
      // the seam real instead of aspirational". Overridden for src/services/
      // below — that directory is the one legitimate importer.
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/mock-data", "@/mock-data/*", "**/mock-data", "**/mock-data/*"],
              message:
                "Only src/services/ may import from src/mock-data/. Add or extend a service instead — see docs/service-layers/.",
            },
          ],
        },
      ],

      // ── Styling separation ──────────────────────────────────────────────
      // CLAUDE.md: "No inline style objects or style attributes." The previous
      // attempt used inline styles and that is the main reason it could not be
      // handed off. Styling lives in the sibling .scss file.
      "vue/no-static-inline-styles": ["error", { allowBinding: false }],

      // Component filenames are PascalCase and multi-word, matching the
      // catalog in docs/architecture/component-catalog.md.
      "vue/multi-word-component-names": "error",
      "vue/component-name-in-template-casing": ["error", "PascalCase"],

      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },

  // src/services/ is the only place allowed to reach for seed data.
  {
    files: ["src/services/**/*.{ts,js}"],
    rules: { "no-restricted-imports": "off" },
  },

  // Build config runs in Node, not the browser.
  {
    files: ["*.config.{ts,js}", "vite.config.ts", "eslint.config.js"],
    languageOptions: { globals: { ...globals.node } },
  },

  // Last: switch off every formatting rule that would fight Prettier. Layout is
  // Prettier's job; ESLint keeps the rules that carry meaning — the mock-data
  // import boundary and the no-inline-styles rule above.
  configPrettier,
];
