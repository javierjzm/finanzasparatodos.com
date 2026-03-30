import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = await getCollection('articulos');

  const sortedArticles = articles
    .filter((a) => !a.data.noindex)
    .sort((a, b) => b.data.datePublished.getTime() - a.data.datePublished.getTime())
    .slice(0, 20);

  return rss({
    title: 'Finanzas Guías',
    description:
      'Guías claras y actualizadas sobre IRPF, fiscalidad para autónomos, inversiones y deducciones fiscales en España.',
    site: context.site!.toString(),
    items: sortedArticles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.datePublished,
      description: article.data.description,
      link: `/${article.data.category}/${article.slug}/`,
    })),
    customData: '<language>es-ES</language>',
  });
}
