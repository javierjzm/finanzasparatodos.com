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
      serialize: (item) => {
        const u = item.url.replace('https://finanzasguias.com', '');
        if (u === '/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (u.includes('/calculadora-fiscal')) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        } else if (/^\/(irpf|autonomos|inversiones|deducciones|fiscalidad-internacional)\/$/.test(u)) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else if (/^\/(irpf|autonomos|inversiones|deducciones|fiscalidad-internacional)\/[^/]+\/$/.test(u)) {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        } else if (['/buscar/', '/contacto/', '/sobre-nosotros/'].includes(u)) {
          item.priority = 0.4;
          item.changefreq = 'monthly';
        } else if (['/politica-privacidad/', '/aviso-legal/', '/politica-cookies/'].includes(u)) {
          item.priority = 0.2;
          item.changefreq = 'yearly';
        } else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
