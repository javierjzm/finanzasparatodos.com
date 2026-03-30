# Guía de despliegue en Cloudflare Pages

## 1. Crear cuenta en Cloudflare

Si aún no tienes cuenta, regístrate gratis en [dash.cloudflare.com](https://dash.cloudflare.com). El tier gratuito de Cloudflare Pages es suficiente para este proyecto.

## 2. Subir el proyecto a GitHub

```bash
cd finanzasparatodos.com
git init
git add .
git commit -m "Initial commit: sitio completo con 10 artículos"
git branch -M main
git remote add origin https://github.com/tu-usuario/finanzasparatodos.com.git
git push -u origin main
```

## 3. Conectar GitHub con Cloudflare Pages

1. Ve a [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Selecciona tu repositorio `finanzasparatodos.com`.
3. Configura el build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** 18 (o superior)
4. Haz clic en **Save and Deploy**.

El primer build tardará 1-2 minutos. Cloudflare te asignará un dominio temporal tipo `finanzasparatodos-com.pages.dev`.

## 4. Añadir dominio personalizado

1. En el dashboard de tu proyecto en Pages, ve a **Custom domains** → **Set up a custom domain**.
2. Escribe `finanzasparatodos.com` y haz clic en **Continue**.
3. Cloudflare te indicará los registros DNS necesarios.

## 5. Configurar DNS

### Si el dominio YA está en Cloudflare (recomendado)

Cloudflare configurará los registros automáticamente. Solo confirma.

### Si el dominio está en otro registrador

Añade estos registros DNS en tu registrador:

| Tipo | Nombre | Contenido |
|------|--------|-----------|
| CNAME | `@` | `finanzasparatodos-com.pages.dev` |
| CNAME | `www` | `finanzasparatodos-com.pages.dev` |

La propagación DNS puede tardar hasta 24 horas (normalmente menos de 1 hora).

## 6. Verificar los headers de seguridad

Una vez desplegado, verifica que los headers del archivo `_headers` se aplican correctamente:

```bash
curl -I https://finanzasparatodos.com
```

Deberías ver:
```
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: ...
```

## 7. Conectar Google Search Console

1. Ve a [search.google.com/search-console](https://search.google.com/search-console).
2. Añade la propiedad `https://finanzasparatodos.com`.
3. Método de verificación recomendado: **archivo HTML**.
   - Descarga el archivo HTML que te proporciona Google.
   - Colócalo en la carpeta `public/` de tu proyecto.
   - Haz commit y push. Cloudflare lo desplegará automáticamente.
4. Vuelve a Search Console y haz clic en **Verificar**.
5. Envía el sitemap: `https://finanzasparatodos.com/sitemap-index.xml`.

## 8. Conectar Google Analytics 4

1. Crea una propiedad en [analytics.google.com](https://analytics.google.com).
2. Copia tu Measurement ID (formato `G-XXXXXXXXXX`).
3. Abre `src/components/CookieBanner.astro`.
4. Busca `G-XXXXXXXXXX` (aparece 2 veces) y reemplázalo por tu ID real.
5. Commit y push.

## Despliegue automático

A partir de ahora, cada `git push` a la rama `main` disparará un nuevo build automático en Cloudflare Pages. No necesitas hacer nada más para desplegar cambios.
