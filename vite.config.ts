import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// The Workspace keeps its own entry point (CLAUDE.md, "Runtime configuration and
// architecture neutrality"): nothing here may end up in a bundle a future public
// storefront would inherit.
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // Vite 8 uses the dart-sass modern compiler API by default and no longer
  // accepts an `api` option, so there is nothing to configure here. The @use-only
  // module system is enforced by stylelint and by convention — see
  // docs/architecture/toolchain-decisions.md.
  server: {
    port: 5173,
  },
});
