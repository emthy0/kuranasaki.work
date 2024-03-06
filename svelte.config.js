import adapter from "@sveltejs/adapter-cloudflare"
import autoPreprocess from "svelte-preprocess"
import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [autoPreprocess({}), vitePreprocess({})],
  kit: {
    alias: {
      components: "./src/components",
      assets: "./static",
    },
    adapter: adapter({
      // See below for an explanation of these options
      routes: {
        include: ["/*"],
        exclude: ["<all>"],
      },
    }),
    // ... truncated ...
  },
}

export default config
