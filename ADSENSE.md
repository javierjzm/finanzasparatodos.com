# Cómo añadir Google AdSense al sitio

## 1. Requisitos previos para solicitar AdSense

Antes de solicitar la aprobación de AdSense, asegúrate de cumplir estos requisitos:

- **Contenido suficiente:** Google valora sitios con **varias páginas de contenido original y útil**; suele recomendarse **al menos unas 15–20 entradas** de calidad para mejorar las probabilidades de aprobación (el sitio tiene guías extensas; sigue ampliando temas si puedes).
- **Páginas legales completas:** Política de Privacidad, Aviso Legal y Política de Cookies (ya incluidas).
- **Página "Sobre nosotros":** que explique quién está detrás del sitio (ya incluida).
- **Navegación clara:** menú funcional, categorías bien organizadas (ya configurado).
- **Dominio propio:** registrado y funcional con HTTPS.
- **Sin contenido prohibido:** el contenido debe cumplir las [políticas de AdSense](https://support.google.com/adsense/answer/48182).

No necesitas tráfico mínimo, pero sí contenido de calidad suficiente para que el revisor de Google valore el sitio positivamente.

## 2. Solicitar AdSense

1. Ve a [adsense.google.com](https://adsense.google.com) e inicia sesión con tu cuenta de Google.
2. Haz clic en **Empezar** e introduce la URL de tu sitio (`https://finanzasguias.com`).
3. El sitio ya incluye en `src/layouts/Base.astro` el script del cliente (sustituye `ca-pub-…` si AdSense te da otro al verificar):

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
```

4. Haz commit, push y espera a que el hosting despliegue el HTML estático.
5. Vuelve a AdSense y haz clic en **He pegado el código** / **Verificar**.
6. La revisión puede tardar entre 1 día y 2 semanas.

## 3. Anuncios automáticos (sin `.env` ni unidades manuales)

Este blog es **100 % estático**: no hace falta ningún archivo `.env` en producción ni `data-ad-slot` en el HTML.

1. Con el script de `adsbygoogle.js?client=…` publicado (ya está en `Base.astro`), entra en [AdSense](https://adsense.google.com) → **Anuncios** → **Por sitio** → selecciona **finanzasguias.com** (o tu dominio).
2. Activa **Anuncios automáticos** (y, si quieres, otros formatos que ofrezca el asistente: ancla, vignette, etc.). Google decide dónde insertar los creativos.
3. No necesitas pegar `<ins class="adsbygoogle">` ni variables de entorno: el panel controla los formatos.

## 4. Componentes `AdSlot` en las plantillas

`AdSlot.astro` solo deja **contenedores con altura mínima** (menos saltos de diseño si en el futuro quisieras unidades fijas). **No insertan anuncios por sí solos.** Con solo anuncios automáticos puedes:

- dejarlos como están (huecos que Auto ads puede ignorar o que tú retocas después), o
- ir quitando `AdSlot` de `Article.astro`, `index.astro`, etc., si prefieres menos bloques vacíos en el HTML.

## 5. Verificar que no hay CLS

Cuando Auto ads esté activo y veas anuncios en producción:

1. Ve a [PageSpeed Insights](https://pagespeed.web.dev/).
2. Analiza tu URL.
3. Comprueba la métrica **CLS (Cumulative Layout Shift)**. Debería ser < 0.1.
4. Si el CLS es alto, verifica que las clases `.ad-banner`, `.ad-rectangle`, `.ad-sidebar` tienen `min-height` suficiente en `src/styles/global.css`.

Las alturas mínimas actuales son:
- `.ad-banner`: 90px (desktop) / 50px (mobile)
- `.ad-rectangle`: 280px
- `.ad-sidebar`: 600px
- `.ad-anchor`: 50px
