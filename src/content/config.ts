import { defineCollection, z } from 'astro:content';

const articulos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    category: z.enum([
      'irpf',
      'autonomos',
      'inversiones',
      'cripto',
      'deducciones',
      'fiscalidad-internacional',
    ]),
    keywords: z.array(z.string()).default([]),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
    author: z.string().default('Equipo editorial de Finanzas Guías'),
    canonical: z.string().url().optional(),
    noindex: z.boolean().default(false),
    adSlots: z.boolean().default(true),
    pillar: z.boolean().default(false),
    relatedPosts: z.array(z.string()).default([]),
    /** `article`: evita doble registro en el glob-loader de Astro con `faq`. El FAQ en JSON-LD usa `faqs` en el frontmatter. */
    schema: z.enum(['article', 'faq', 'howto']).default('article'),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { articulos };
