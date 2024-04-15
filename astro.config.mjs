import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import deno from '@astrojs/deno';
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: deno(),
  integrations: [svelte(), tailwind(), mdx(), sitemap()]
});