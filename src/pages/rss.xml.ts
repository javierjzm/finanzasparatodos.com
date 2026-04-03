import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = await getCollection('articulos');

  const sortedArticles = articles
    .filter((a) => !a.data.noindex)
    .sort((a, b) => b.data.datePublished.getTime() - a.data.datePublished.getTime())
    .slice(0, 20);

  const site = context.site!.href;

  return rss({
    title: 'Finanzas Guías',
    description:
      'Guías fiscales claras sobre IRPF, autónomos, inversiones, criptomonedas, deducciones y fiscalidad internacional en España.',
    site,
    items: sortedArticles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.datePublished,
      description: article.data.description,
      link: new URL(`/${article.data.category}/${article.slug}/`, site).href,
    })),
    customData: '<language>es-ES</language>',
  });
}
