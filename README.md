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

### 1. Script principal de AdSense

Abre `src/components/CookieBanner.astro`. En la función `grantConsent()`, el script de AdSense se cargará automáticamente cuando el usuario acepte cookies. Para añadir tu script de AdSense:

Añade el script de AdSense en `src/layouts/Base.astro`, dentro del `<head>`, justo después del comentario de Schema:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
```

### 2. Unidades de anuncio

Busca los comentarios `<!-- AD_SLOT: nombre -->` en el código. Cada uno marca una zona donde pegar tu código de unidad de AdSense. Los encontrarás en:

- `src/components/AdSlot.astro` — componente que renderiza todas las zonas
- Las zonas activas son: `top-banner`, `in-content`, `below-content`, `sidebar`, `anchor-mobile`, `after-hero`, `after-recent-posts`

Para cada zona, crea una unidad de anuncio en tu panel de AdSense y pega el código `<ins class="adsbygoogle" ...>` dentro del `<div>` correspondiente en `AdSlot.astro`.

## Cómo cambiar el dominio placeholder

El dominio `finanzasguias.com` está configurado en:

- `astro.config.mjs` (propiedad `site`)
- `src/layouts/Base.astro` (schemas JSON-LD, URLs)
- `src/components/Breadcrumb.astro` (URLs en JSON-LD)
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
