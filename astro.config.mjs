import { defineConfig, passthroughImageService } from 'astro/config';
import svelte from '@astrojs/svelte';
import deno from '@astrojs/deno';
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
// import partytown from "@astrojs/partytown";

// const viteConfig = vite.defineConfig(({ command, mode }) => {
//   // Load env file based on `mode` in the current working directory.
//   // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
//   const env = vite.loadEnv(mode, process.cwd(), '')
//   return {
//     // vite config
//     define: {
//       __APP_ENV__: JSON.stringify(env.APP_ENV),
//     },
//   }
// })

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: deno(),
  image: {
    service: passthroughImageService()
  },
  integrations: [svelte(), tailwind(), mdx(), sitemap(), icon()],
  vite: {
    define: {
      SUPABASE_URL: JSON.stringify(process.env.APP_ENV),
    }
  }
});