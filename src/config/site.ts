/** Origen canónico del sitio (SEO, JSON-LD). Debe coincidir con `site` en astro.config. */
export const SITE_ORIGIN = 'https://finanzasguias.com';

export function absoluteUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  try {
    return new URL(p, `${SITE_ORIGIN}/`).href;
  } catch {
    return `${SITE_ORIGIN}${p}`;
  }
}
