import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { resolveArticleCover } from '../utils/covers';

export const prerender = true;

export const GET: APIRoute = async () => {
  const articles = await getCollection('articulos');
  const payload = articles
    .filter((article) => !article.data.noindex)
    .map((article) => ({
      title: article.data.title,
      description: article.data.description,
      keywords: article.data.keywords,
      category: article.data.category,
      slug: article.slug,
      url: `/${article.data.category}/${article.slug}/`,
      datePublished: article.data.datePublished.toISOString(),
      coverUrl: resolveArticleCover(article.data.category, article.data.coverImage),
      imageAlt: article.data.imageAlt ?? article.data.title,
    }));

  return new Response(JSON.stringify(payload), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
