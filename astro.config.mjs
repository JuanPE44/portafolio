// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  adapter: netlify(),
  output: "server",
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
