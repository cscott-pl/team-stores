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
  css: {
    preprocessorOptions: {
      scss: {
        // dart-sass modern module system only — @use, never @import.
        // Established from the dev side's own conversion; see
        // docs/architecture/toolchain-decisions.md.
        api: "modern-compiler",
      },
    },
  },
  server: {
    port: 5173,
  },
});
