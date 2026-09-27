// @lovable.dev/vite-tanstack-config already includes the core plugins — do NOT add them manually.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Pre-render pages to static HTML so the site can be hosted on Netlify (dist/client).
    prerender: { enabled: true, crawlLinks: true },
  },
});
