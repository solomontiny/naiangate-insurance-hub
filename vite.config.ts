import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Keep Lovable/TanStack managed server entry
  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});