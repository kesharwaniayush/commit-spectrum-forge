// @lovable.dev/vite-tanstack-config already includes the core plugins — do NOT add them manually.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Pre-render pages to static HTML so the site can be hosted on Netlify (dist/client).
    prerender: { enabled: true, crawlLinks: true },
  },
  // Pin the server build target and output folders. Without this, Nitro
  // auto-detects Netlify's CI and switches to its Netlify preset, which writes
  // the server bundle elsewhere, so prerendering can't find dist/server.
  nitro: {
    preset: "cloudflare-module",
    output: {
      dir: "dist",
      serverDir: "dist/server",
      publicDir: "dist/client",
    },
  },
});
