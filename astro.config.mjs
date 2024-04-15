import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import deno from '@astrojs/deno';
import tailwind from '@astrojs/tailwind';
import partytown from "@astrojs/partytown";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: deno(),
  integrations: [svelte(), tailwind(), partytown(), mdx(), icon(), sitemap()]
});