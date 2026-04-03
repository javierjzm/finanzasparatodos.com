/** Portadas por categoría en `public/images/covers/` (JPG desde Unsplash; inversiones y cripto son PNG generados). */
export const CATEGORY_COVER: Record<string, string> = {
  irpf: '/images/covers/irpf.jpg',
  autonomos: '/images/covers/autonomos.jpg',
  inversiones: '/images/covers/inversiones.png',
  cripto: '/images/covers/cripto.png',
  deducciones: '/images/covers/deducciones.jpg',
  'fiscalidad-internacional': '/images/covers/fiscalidad-internacional.jpg',
};

const DEFAULT_COVER = '/images/covers/default.jpg';

/**
 * Resuelve la imagen de portada de un artículo.
 * `coverImage` en frontmatter: ruta desde la raíz del sitio, p. ej. `/images/mi-foto.webp`.
 */
export function resolveArticleCover(category: string, coverImage?: string | null): string {
  if (coverImage && String(coverImage).trim()) {
    const s = String(coverImage).trim();
    return s.startsWith('/') ? s : `/${s}`;
  }
  return CATEGORY_COVER[category] ?? DEFAULT_COVER;
}

/** `siteHref` puede ser `https://dominio.com/` o cualquier URL válida del sitio. */
export function absoluteCoverUrl(siteHref: string, path: string): string {
  const origin = new URL(siteHref).origin;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${origin}${p}`;
}
