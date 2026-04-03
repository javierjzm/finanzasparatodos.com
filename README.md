# finanzasguias.com

Sitio web de divulgación fiscal y finanzas personales para particulares y autónomos en España. Contenido informacional optimizado para SEO y monetizado con Google AdSense.

## Stack tecnológico

- **Framework:** [Astro](https://astro.build/) (Static Site Generation)
- **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com/) (free tier)
- **Estilos:** CSS puro con variables (sin frameworks)
- **Fuentes:** Inter (cuerpo) + Playfair Display (títulos) via Google Fonts
- **Analítica:** Google Analytics 4
- **Monetización:** Google AdSense

## Instalación local

```bash
git clone https://github.com/tu-usuario/finanzasguias.com.git
cd finanzasguias.com
npm install
npm run dev
```

El servidor de desarrollo estará disponible en `http://localhost:4321`.

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Genera el sitio estático en `/dist` |
| `npm run preview` | Previsualiza el build de producción |

## Cómo añadir un artículo nuevo

1. Crea un archivo `.md` en `src/content/articulos/` con el slug como nombre (ej: `mi-nuevo-articulo.md`).
2. Rellena el frontmatter completo (ver plantilla en `CONTENIDO.md`).
3. Escribe el contenido del artículo en Markdown.
4. Asegúrate de que la categoría del frontmatter coincide con una de las 5 categorías existentes: `irpf`, `autonomos`, `inversiones`, `deducciones`, `fiscalidad-internacional`.
5. Haz `git add`, `git commit` y `git push`. El deploy en Cloudflare Pages es automático.

## Cómo añadir tu código de AdSense

### 1. Script principal (sitio estático)

El script del cliente ya está en `src/layouts/Base.astro` dentro del `<head>` (`adsbygoogle.js?client=ca-pub-…`). El banner de cookies actualiza **Consent Mode** para analítica y publicidad; no hace falta `.env` ni build con secretos.

### 2. Anuncios automáticos

En el panel de AdSense → **Anuncios** → **Por sitio**, activa **anuncios automáticos** (y otros formatos que quieras, p. ej. ancla). Google inserta los creativos sin pegar `<ins>` ni `data-ad-slot` en el HTML.

Los componentes `AdSlot` son solo **huecos opcionales** con altura mínima; puedes dejarlos o ir quitándolos si prefieres menos contenedores vacíos. Detalle en `ADSENSE.md`.

## Cómo cambiar el dominio placeholder

El dominio `finanzasguias.com` está configurado en:

- `astro.config.mjs` (propiedad `site`)
- `src/layouts/Base.astro` (schemas JSON-LD, URLs)
- `src/config/site.ts` (`SITE_ORIGIN`, URLs en migas)
- `public/robots.txt` (URL del sitemap)

Para cambiarlo, ejecuta un find & replace global:

```bash
# Buscar todas las ocurrencias
grep -r "finanzasguias.com" --include="*.astro" --include="*.mjs" --include="*.ts" --include="*.txt" --include="*.md"
```

## Variables de entorno

No se requieren variables de entorno. Los IDs se configuran en el código y en Google Tag Manager:

- **Google Tag Manager:** contenedor `GTM-WSLWLFNS` en `src/layouts/Base.astro`. Añade la etiqueta GA4 en GTM y enlaza el disparo al **Consent Mode** (o a tu lógica de consentimiento).
- **AdSense:** script del editor en `Base.astro` (`ca-pub-8300766188725023`).
