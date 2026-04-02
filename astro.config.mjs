import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://finanzasguias.com',
  trailingSlash: 'always',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/draft/') &&
        !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
