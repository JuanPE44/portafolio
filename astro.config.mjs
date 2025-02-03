// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  adapter: vercel(),
  vite: {
    resolve: {
      alias: {
        "@components": "/src/components",
        "@styles": "/src/styles",
        "@utils": "/src/utils",
        "@assets": "/src/assets",
      },
    },
  },
});
