// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // GitHub Pages serves this repo at https://andrewghahn.github.io/portfolio/.
  // If you later use a custom domain (or rename the repo to andrewghahn.github.io),
  // update `site` and remove `base`.
  site: 'https://andrewghahn.github.io',
  base: '/portfolio',
  integrations: [mdx(), react()],
});
