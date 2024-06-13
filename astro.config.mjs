import { defineConfig, passthroughImageService } from 'astro/config';
import svelte from '@astrojs/svelte';
import deno from '@astrojs/deno';
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
// import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: deno(),
  image: {
    service: passthroughImageService()
  },
  integrations: [svelte(), tailwind(), mdx(), sitemap(), icon()]
});