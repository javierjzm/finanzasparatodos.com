# Cómo añadir Google AdSense al sitio

## 1. Requisitos previos para solicitar AdSense

Antes de solicitar la aprobación de AdSense, asegúrate de cumplir estos requisitos:

- **Contenido suficiente:** al menos 20 artículos originales y completos (actualmente hay 10; publica más antes de solicitar).
- **Páginas legales completas:** Política de Privacidad, Aviso Legal y Política de Cookies (ya incluidas).
- **Página "Sobre nosotros":** que explique quién está detrás del sitio (ya incluida).
- **Navegación clara:** menú funcional, categorías bien organizadas (ya configurado).
- **Dominio propio:** registrado y funcional con HTTPS.
- **Sin contenido prohibido:** el contenido debe cumplir las [políticas de AdSense](https://support.google.com/adsense/answer/48182).

No necesitas tráfico mínimo, pero sí contenido de calidad suficiente para que el revisor de Google valore el sitio positivamente.

## 2. Solicitar AdSense

1. Ve a [adsense.google.com](https://adsense.google.com) e inicia sesión con tu cuenta de Google.
2. Haz clic en **Empezar** e introduce la URL de tu sitio (`https://finanzasparatodos.com`).
3. Google te proporcionará un fragmento de código de verificación. Pégalo en `src/layouts/Base.astro`, dentro del `<head>`, antes del cierre `</head>`:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
```

4. Haz commit, push y espera a que Cloudflare despliegue.
5. Vuelve a AdSense y haz clic en **He pegado el código** / **Verificar**.
6. La revisión puede tardar entre 1 día y 2 semanas.

## 3. Crear unidades de anuncio

Una vez aprobado, crea unidades de anuncio manuales en el panel de AdSense:

1. Ve a **Anuncios** → **Por unidad de anuncio** → **Crear anuncio**.
2. Crea una unidad para cada zona del sitio (ver tabla abajo).
3. Copia el código que te da AdSense para cada unidad.

## 4. Dónde pegar el código de cada unidad

Abre `src/components/AdSlot.astro`. Dentro del `<div>` del componente, pega el código `<ins class="adsbygoogle">` correspondiente. Para cada zona, usa estos formatos:

### Mapa de zonas de anuncio

| Zona (data-ad-slot) | Ubicación | Formato recomendado | Tamaño |
|---------------------|-----------|-------------------|--------|
| `top-banner` | Arriba del título del artículo | Banner horizontal | 728×90 (desktop) / 320×50 (mobile) |
| `in-content` | Dentro del contenido del artículo | Anuncio en el artículo (responsive) | Responsive |
| `below-content` | Después del artículo | Display responsive | Responsive (min 280px alto) |
| `sidebar` | Barra lateral (solo desktop) | Display vertical | 300×600 |
| `anchor-mobile` | Barra fija inferior (solo mobile) | Anuncio de ancla | 320×50 |
| `after-hero` | Home, después del hero | Banner horizontal | 728×90 |
| `after-recent-posts` | Home, después de artículos recientes | Display responsive | Responsive |
| `category-*` | Páginas de categoría, entre artículos | Display responsive | Responsive |

### Ejemplo de implementación

Para implementar el anuncio en cada zona, modifica el componente `AdSlot.astro`. Reemplaza el `<div>` vacío por tu código de AdSense:

```html
<!-- Dentro del div del componente AdSlot -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="1234567890"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

Para gestionar múltiples zonas, puedes añadir lógica condicional en el componente basándote en la prop `slot`.

## 5. Anuncio de ancla (anchor-mobile)

El anuncio de ancla se configura desde el panel de AdSense, no en el código:

1. En AdSense, ve a **Anuncios** → **Por sitio** → **Tu sitio**.
2. Activa **Anuncios de ancla** en la configuración global.
3. No necesitas añadir código adicional; AdSense lo muestra automáticamente en mobile.

Puedes mantener o eliminar el `AdSlot anchor-mobile` del código según prefieras.

## 6. Verificar que no hay CLS

Después de añadir los anuncios:

1. Ve a [PageSpeed Insights](https://pagespeed.web.dev/).
2. Analiza tu URL.
3. Comprueba la métrica **CLS (Cumulative Layout Shift)**. Debería ser < 0.1.
4. Si el CLS es alto, verifica que las clases `.ad-banner`, `.ad-rectangle`, `.ad-sidebar` tienen `min-height` suficiente en `src/styles/global.css`.

Las alturas mínimas actuales son:
- `.ad-banner`: 90px (desktop) / 50px (mobile)
- `.ad-rectangle`: 280px
- `.ad-sidebar`: 600px
- `.ad-anchor`: 50px
