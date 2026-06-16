import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // TanStack Start SSR entry (required by Lovable template)
  tanstackStart: {
    server: {
      entry: "server",
    },
  },

  // Optional: extra vite overrides (safe place for customization)
  vite: {
    build: {
      // Keep default behavior from Lovable/TanStack
      sourcemap: false,
    },
  },
});