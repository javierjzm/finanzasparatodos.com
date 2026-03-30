# PROMPT DE EJECUCIÓN TOTAL — Sitio de nicho AdSense en Finanzas/Fiscalidad

> **Cómo usar este documento:**
> Abre un chat nuevo con Claude Opus, GPT-4o o el modelo más potente disponible.
> Pega primero el **BLOQUE 0**. Espera confirmación. Luego pega los bloques en orden.
> El modelo generará los archivos reales listos para copiar, pegar y desplegar.
> Tu único trabajo: subir los archivos al hosting y añadir tu código de AdSense.

---

## ═══════════════════════════════════════════
## BLOQUE 0 — CONTEXTO Y ROL (pegar primero, siempre)
## ═══════════════════════════════════════════

```
ROL: Eres un desarrollador web senior + estratega SEO + experto en monetización
AdSense. Tu trabajo en esta sesión NO es darme un plan ni consejos: es CONSTRUIR
el sitio web completo y entregármelo en código listo para desplegar.

REGLA ABSOLUTA: No describas lo que harías. Hazlo. Entrega código real,
contenido real, archivos reales. Si algo requiere una decisión, tómala tú
justificándola en un comentario de una línea y continúa.

════════════════════════════════════════════
CONTEXTO DEL PROYECTO
════════════════════════════════════════════

• Tipo de sitio: blog de contenido informacional en finanzas personales
  y fiscalidad para público hispanohablante (España + LATAM).
• Idioma: español (es-ES como base, términos LATAM donde aplique).
• Monetización: Google AdSense. Las zonas de anuncio se marcan con
  comentarios <!-- AD_SLOT --> en el código. Yo añadiré mi código de
  AdSense después — tú solo reserva el espacio con CSS correcto (sin CLS).
• Stack: Astro (SSG). Output HTML estático. Deploy en Cloudflare Pages.
  Sin frameworks JS en cliente salvo lo estrictamente necesario.
• Yo me encargo de: registrar el dominio, conectar Cloudflare Pages,
  crear la cuenta AdSense y pegar el código de anuncios.
• Tú te encargas de: TODO LO DEMÁS. Código, contenido, SEO, estructura,
  archivos de configuración, páginas legales, artículos, sitemap, todo.
• Presupuesto de infraestructura: ≤ 10 €/mes (Cloudflare Pages free tier).
• NO quiero: WordPress, plugins, CMS externo, compra de enlaces, black-hat.
• SÍ quiero: código limpio, semántico, performance > 95 en PageSpeed,
  E-E-A-T real, contenido que pase la revisión manual de AdSense.

════════════════════════════════════════════
NOMBRE DEL SITIO (placeholder hasta que yo elija dominio)
════════════════════════════════════════════

Usa "fiscalbase.com" como placeholder en todo el código.
Cuando yo tenga el dominio real, solo necesito hacer un find & replace.

════════════════════════════════════════════
CONFIRMACIÓN REQUERIDA
════════════════════════════════════════════

Responde ÚNICAMENTE con:
"LISTO. Esperando BLOQUE 1."

No escribas nada más. No hagas preguntas. No propongas alternativas todavía.
```

---

## ═══════════════════════════════════════════
## BLOQUE 1 — ESTRUCTURA DEL PROYECTO ASTRO
## ═══════════════════════════════════════════

```
ENTREGA EL BLOQUE 1: ESTRUCTURA COMPLETA DEL PROYECTO ASTRO

Genera los siguientes archivos con código real y completo.
No uses placeholders como "// resto del código aquí". Escribe todo.

────────────────────────────────────────
1.1  package.json
────────────────────────────────────────
Con dependencias reales: astro, @astrojs/sitemap, @astrojs/rss.
Scripts: dev, build, preview. Nombre del proyecto: fiscalbase.

────────────────────────────────────────
1.2  astro.config.mjs
────────────────────────────────────────
Configuración para:
• site: "https://fiscalbase.com"
• integraciones: @astrojs/sitemap
• output: "static"
• build: assets en /assets/, HTML comprimido

────────────────────────────────────────
1.3  public/robots.txt
────────────────────────────────────────
Completo. Allow todo. Disallow /draft/ (para borradores).
Sitemap: https://fiscalbase.com/sitemap-index.xml

────────────────────────────────────────
1.4  public/_headers  (Cloudflare Pages / Netlify)
────────────────────────────────────────
Security headers completos y compatibles con AdSense:
X-Frame-Options, X-Content-Type-Options, Referrer-Policy,
Permissions-Policy, Content-Security-Policy con los dominios
de Google AdSense en la allowlist (googlesyndication.com,
doubleclick.net, googletagservices.com, etc).

────────────────────────────────────────
1.5  src/content/config.ts
────────────────────────────────────────
Schema Zod para la colección "articulos" con todos los campos:
title, description, slug, category, keywords, datePublished,
dateModified, author, canonical, noindex, adSlots, pillar,
relatedPosts, schema (union: 'article' | 'faq' | 'howto').
Todos con tipos correctos y valores por defecto donde aplique.

────────────────────────────────────────
1.6  src/layouts/Base.astro
────────────────────────────────────────
Layout base con:
• <html lang="es">
• <head> completo: charset, viewport, title (con prop), description,
  canonical, og:title, og:description, og:type, og:url, og:locale,
  og:image (placeholder), twitter:card, preconnect Google Fonts,
  2 fuentes: Inter (cuerpo) + Playfair Display (títulos) con
  font-display:swap, CSS crítico inline para above-the-fold,
  <link rel="stylesheet" media="print" onload> para el resto del CSS,
  schema WebSite + Organization en JSON-LD.
• <body> con <header>, <main slot />, <footer>.
• Header: logo texto "fiscal<strong>base</strong>", nav con links
  a las categorías principales + buscador (placeholder input).
• Footer: links legales, copyright, "Contenido informativo,
  no asesoramiento profesional."
• Google Analytics 4 script (placeholder ID: G-XXXXXXXXXX) con
  defer y sin bloquear rendering.

────────────────────────────────────────
1.7  src/layouts/Article.astro
────────────────────────────────────────
Layout de artículo. Extiende Base.astro. Incluye:
• Breadcrumb con schema BreadcrumbList JSON-LD.
• Zona AD_SLOT arriba del H1 (banner 728×90 desktop / 320×50 mobile).
  CSS: min-height:90px en desktop, min-height:50px en mobile.
  Marcado con comentario: <!-- AD_SLOT: top-banner -->
• H1 con la prop title.
• Meta de fecha publicación + última actualización si dateModified ≠ datePublished.
• Disclaimer editorial inline (box con icono ⚠️).
• Contenido del artículo (<slot />).
• Zona AD_SLOT in-content (después del segundo párrafo — instrucciones
  en comentario para que yo sepa dónde se renderiza).
  CSS: min-height:280px.
• Zona AD_SLOT below-content (tras el cierre del artículo).
  CSS: min-height:280px.
• Sidebar (desktop only, sticky): zona AD_SLOT sidebar 300×600.
  CSS: min-height:600px. En mobile: display:none.
• Schema Article en JSON-LD usando los props del frontmatter.
• Sección "Artículos relacionados" (cards simples con título + enlace).
• Ancla móvil AD_SLOT bottom (fixed bottom, 320×50). Solo en mobile.

────────────────────────────────────────
1.8  src/layouts/Category.astro
────────────────────────────────────────
Layout de página de categoría con:
• H1 con nombre de la categoría.
• Descripción de la categoría (prop).
• Grid de cards de artículos (título, descripción, fecha, enlace).
• Zona AD_SLOT entre el 4º y 5º artículo de la lista.
• Schema BreadcrumbList.

────────────────────────────────────────
1.9  src/styles/global.css
────────────────────────────────────────
CSS completo del sitio. Diseño limpio, profesional, orientado a
lectura larga y AdSense. Incluye:
• Variables CSS: colores (fondo blanco, texto #1a1a1a, acento azul
  oscuro para finanzas), tipografía, espaciado.
• Reset mínimo. Box-sizing border-box.
• Tipografía: Inter para cuerpo, Playfair Display para h1/h2.
• Estilos de artículo: línea de texto máx 68ch, párrafos con gap 1.4em,
  h2/h3 con margin-top generoso, tablas con borde y alternancia de filas,
  blockquote estilizado para citas de normativa.
• Estilos de .ad-slot: fondo #f5f5f5 con borde discontinuo gris claro
  (visual de "aquí irá un anuncio") que desaparece cuando el anuncio carga.
• Responsive: breakpoints 768px y 1024px. En mobile: sidebar oculto,
  tipografía fluida, padding lateral 16px.
• Clases de utilidad: .disclaimer-box, .data-table, .highlight-box,
  .related-posts-grid, .breadcrumb.
• Dark mode: prefers-color-scheme:dark con variables alternativas.
```

---

## ═══════════════════════════════════════════
## BLOQUE 2 — PÁGINAS PRINCIPALES DEL SITIO
## ═══════════════════════════════════════════

```
ENTREGA EL BLOQUE 2: TODAS LAS PÁGINAS PRINCIPALES

Genera cada archivo con código/contenido REAL. No pongas lorem ipsum
ni "aquí va el contenido". Escribe contenido real en español correcto.

────────────────────────────────────────
2.1  src/pages/index.astro  (Home)
────────────────────────────────────────
• Hero simple: H1 con keyword principal ("Fiscalidad y finanzas personales
  explicadas con claridad"), subtítulo de 2 líneas, sin imagen de fondo
  (velocidad > estética).
• Sección de categorías: grid de 5-6 cards con icono SVG simple,
  nombre de categoría y descripción de 20 palabras.
• Sección "Artículos recientes": últimos 6 artículos del sitio.
• Zona AD_SLOT after-hero. min-height: 90px.
• Zona AD_SLOT after-recent-posts. min-height: 250px.
• Schema WebSite con SearchAction (sitelinks search box).
• Meta title: "Fiscalidad para particulares y autónomos | FiscalBase"
• Meta description: 155 chars máximo, con keyword.

────────────────────────────────────────
2.2  src/pages/sobre-nosotros.astro
────────────────────────────────────────
Contenido real de 400 palabras. Incluye:
• Qué es el sitio y para qué sirve.
• Metodología editorial: cómo se investiga, redacta y actualiza el contenido.
• Declaración de transparencia sobre AdSense: "Este sitio se financia
  mediante publicidad de Google AdSense. Los anuncios son gestionados
  por Google y no influyen en el contenido editorial."
• Aviso YMYL: "El contenido es informativo. No constituye asesoramiento
  fiscal, legal ni financiero personalizado."
• Sin autor inventado. Usa "el equipo editorial de FiscalBase".

────────────────────────────────────────
2.3  src/pages/politica-privacidad.astro
────────────────────────────────────────
Política de privacidad real y completa conforme al RGPD. Incluye:
• Responsable del tratamiento (placeholder: [TU NOMBRE/EMPRESA]).
• Datos que se recogen: cookies de analítica (GA4) y publicidad (AdSense).
• Base legal del tratamiento: consentimiento.
• Derechos del usuario: acceso, rectificación, supresión, portabilidad.
• Cookies de Google AdSense: listado real de las cookies que puede
  depositar AdSense (IDE, DSID, NID, etc.) con finalidad.
• Contacto: hola@fiscalbase.com (placeholder).
• Fecha: "Última actualización: enero 2025".

────────────────────────────────────────
2.4  src/pages/aviso-legal.astro
────────────────────────────────────────
Aviso legal real conforme a LSSI española. Incluye:
• Titular del sitio (placeholder).
• Domicilio (placeholder).
• Exención de responsabilidad por exactitud de la información.
• Propiedad intelectual del contenido.
• Ley aplicable: derecho español.

────────────────────────────────────────
2.5  src/pages/politica-cookies.astro
────────────────────────────────────────
Política de cookies completa con tabla:
| Nombre | Proveedor | Finalidad | Duración | Tipo |
Para cookies propias (GA4: _ga, _ga_XXXX) y de terceros
(AdSense: IDE, DSID, NID, 1P_JAR, etc.).
Banner de consentimiento: implementa un banner CSS puro (sin JS externo)
con botones "Aceptar" y "Solo esenciales". Al aceptar, carga GA4 y AdSense.
Al rechazar, carga AdSense en modo non-personalized (npa=1).
Implementa el Consent Mode v2 de Google (gtag consent update).

────────────────────────────────────────
2.6  src/pages/contacto.astro
────────────────────────────────────────
Página simple con:
• Email de contacto (placeholder: hola@fiscalbase.com).
• Formulario HTML básico (nombre, email, mensaje) que envía a Netlify Forms
  (o Cloudflare Pages Functions si el deploy es en CF). Sin JS externo.
• Aviso: "No respondemos consultas de asesoramiento fiscal personalizado."
```

---

## ═══════════════════════════════════════════
## BLOQUE 3 — CATEGORÍAS Y PRIMEROS 10 ARTÍCULOS
## ═══════════════════════════════════════════

```
ENTREGA EL BLOQUE 3: CATEGORÍAS + 10 ARTÍCULOS COMPLETOS

────────────────────────────────────────
3.1  Páginas de las 5 categorías principales
────────────────────────────────────────
Crea src/pages/[categoria].astro o equivalente con páginas para:
  /irpf/           → "Todo sobre el IRPF"
  /autonomos/      → "Fiscalidad para autónomos"
  /inversiones/    → "Impuestos sobre inversiones y ahorro"
  /deducciones/    → "Deducciones y beneficios fiscales"
  /fiscalidad-internacional/  → "Vivir y trabajar fuera de España"

Para cada categoría: H1 real, descripción de 150 palabras real
(no placeholder), lista de artículos relacionados dinámica.

────────────────────────────────────────
3.2  Los 10 primeros artículos completos
────────────────────────────────────────
Para CADA artículo genera:
  a) El archivo Markdown en src/content/articulos/[slug].md
     con frontmatter completo (todos los campos del schema).
  b) El contenido completo del artículo: 1.500-2.000 palabras
     de contenido REAL, útil y verificable. No rellenes con texto
     genérico. Escribe como lo haría un experto fiscal divulgativo.

ARTÍCULOS A GENERAR (en orden de prioridad):

  1. /irpf/tramos-irpf-2025
     Título: "Tramos del IRPF 2025: tabla actualizada y cómo calcular
     lo que pagas"
     Incluir: tabla de tramos estatal + comparativa de las 17 CCAA
     más representativas, ejemplos con números reales (30k, 50k, 80k,
     120k), FAQ (mínimo 8 preguntas), disclaimer.

  2. /irpf/como-calcular-irpf
     Título: "Cómo calcular el IRPF paso a paso (con ejemplos 2025)"
     Incluir: fórmula paso a paso, base imponible general vs ahorro,
     mínimo personal y familiar, ejemplo completo para asalariado
     soltero con 45.000 € brutos.

  3. /autonomos/cuota-autonomos-2025
     Título: "Cuota de autónomos 2025: tabla por ingresos reales"
     Incluir: tabla completa del sistema de cotización por ingresos
     reales (vigente desde 2023), tramos, bases mínimas y máximas,
     ejemplos, cómo cambiar de tramo.

  4. /autonomos/gastos-deducibles-autonomos
     Título: "Gastos deducibles para autónomos en 2025: lista completa"
     Incluir: listado exhaustivo de gastos deducibles con condiciones
     de cada uno, gastos parcialmente deducibles (vehículo, móvil,
     suministros hogar), errores frecuentes, ejemplos numéricos.

  5. /inversiones/impuesto-plusvalias
     Título: "Impuesto sobre las plusvalías en España 2025: tipos y
     cómo tributar las ganancias"
     Incluir: distinción ganancias corto vs largo plazo, tipos de
     gravamen de la base del ahorro, compensación de pérdidas, ejemplos.

  6. /deducciones/deduccion-vivienda-habitual
     Título: "Deducción por vivienda habitual: quién puede aplicarla
     y cuánto"
     Incluir: régimen transitorio (compras antes de 2013), condiciones,
     importe máximo, cómo declararla, quién ya no puede aplicarla.

  7. /irpf/declaracion-renta-plazo
     Título: "Plazos de la declaración de la renta 2025: cuándo empieza
     y cuándo termina"
     Incluir: fechas exactas, cómo pedir cita previa, domiciliación,
     fraccionamiento del pago, consecuencias de presentar fuera de plazo.

  8. /autonomos/modelo-130
     Título: "Modelo 130: qué es, quién debe presentarlo y cómo
     rellenarlo"
     Incluir: qué es el pago fraccionado, quién está obligado, cómo
     calcularlo, plazo de presentación trimestral, ejemplo de cálculo.

  9. /inversiones/fondos-inversion-fiscalidad
     Título: "Fiscalidad de los fondos de inversión en España 2025"
     Incluir: ventaja del traspaso entre fondos sin tributar, cuándo
     sí se tributa, diferencia con ETFs, ejemplos de ahorro fiscal.

  10. /fiscalidad-internacional/residencia-fiscal-espana
      Título: "Cuándo eres residente fiscal en España y qué significa
      para tus impuestos"
      Incluir: criterios de residencia (183 días, núcleo de intereses),
      cómo afecta a rentas del extranjero, convenios de doble imposición,
      qué pasa si tienes ingresos en dos países.

Para cada artículo incluye al final del contenido Markdown:
  ## Preguntas frecuentes
  Con mínimo 6 preguntas reales y respuestas concisas (para FAQPage schema).
```

---

## ═══════════════════════════════════════════
## BLOQUE 4 — COMPONENTES, SEO Y SITEMAP
## ═══════════════════════════════════════════

```
ENTREGA EL BLOQUE 4: COMPONENTES REUTILIZABLES Y SEO TÉCNICO

────────────────────────────────────────
4.1  src/components/AdSlot.astro
────────────────────────────────────────
Componente reutilizable para las zonas de anuncio. Props:
  - slot: string (nombre único: 'top-banner', 'in-content', etc.)
  - size: 'banner' | 'rectangle' | 'sidebar' | 'anchor'
  - mobileOnly: boolean
  - desktopOnly: boolean

Renderiza un <div> con:
  - data-ad-slot={slot}
  - class="ad-slot ad-{size}"
  - CSS min-height según el size (sin CLS)
  - Comentario HTML <!-- AD_SLOT: {slot} --> para que yo sepa dónde pegar mi código
  - En producción: espacio vacío con fondo gris suave
  - Atributo aria-hidden="true" y role="none"

────────────────────────────────────────
4.2  src/components/Breadcrumb.astro
────────────────────────────────────────
Breadcrumb con schema BreadcrumbList JSON-LD.
Props: items = [{label, href}].
Renderiza <nav aria-label="breadcrumb"> con microdatos.

────────────────────────────────────────
4.3  src/components/RelatedPosts.astro
────────────────────────────────────────
Grid de 3 artículos relacionados. Props: posts[].
Cards simples: título, descripción truncada a 100 chars, enlace.

────────────────────────────────────────
4.4  src/components/TableOfContents.astro
────────────────────────────────────────
Índice de contenidos generado automáticamente desde los H2 del artículo.
Sticky en desktop (top: 80px). Oculto en mobile.
Links ancla con smooth scroll. Highlight del item activo con
IntersectionObserver (JS mínimo, <30 líneas).

────────────────────────────────────────
4.5  src/components/CookieBanner.astro
────────────────────────────────────────
Banner RGPD sin dependencias externas. CSS + JS puro inline.
• Aparece en primera visita (sin cookie fa_consent en localStorage).
• Botones: "Aceptar todas" / "Solo esenciales".
• Al aceptar: guarda fa_consent=true, carga GA4 y habilita AdSense
  personalizado.
• Al rechazar: guarda fa_consent=false, AdSense carga en modo
  non-personalized (parámetro npa=1 en el script de AdSense).
• Implementa Consent Mode v2 de Google:
    gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      wait_for_update: 500
    });
  Y el update correspondiente al aceptar/rechazar.
• CSS: barra fija en bottom, fondo oscuro semitransparente, diseño
  limpio sin modal agresivo.

────────────────────────────────────────
4.6  src/pages/sitemap.xml.ts  (o generado por @astrojs/sitemap)
────────────────────────────────────────
Si @astrojs/sitemap no genera el XML exactamente como se necesita,
crea un endpoint manual que genere:
• <urlset> con todas las URLs públicas.
• <lastmod> desde el frontmatter dateModified.
• <changefreq>: weekly para artículos, monthly para páginas estáticas.
• <priority>: 1.0 home, 0.8 páginas de categoría, 0.7 artículos pilares,
  0.6 artículos satélite, 0.3 páginas legales.
• Excluir: /draft/, /404, páginas con noindex: true en frontmatter.

────────────────────────────────────────
4.7  src/pages/rss.xml.ts
────────────────────────────────────────
Feed RSS completo con @astrojs/rss. Los 20 artículos más recientes.
Title, description, pubDate, link. Útil para indexación y distribución.
```

---

## ═══════════════════════════════════════════
## BLOQUE 5 — ENTREGA FINAL Y GUÍA DE DEPLOY
## ═══════════════════════════════════════════

```
ENTREGA EL BLOQUE 5: INSTRUCCIONES PARA EL DUEÑO DEL SITIO

Este bloque es para mí (el dueño del sitio). Escríbelo en forma de
guía paso a paso, clara y sin tecnicismos innecesarios.

────────────────────────────────────────
5.1  README.md del proyecto
────────────────────────────────────────
Genera el README.md completo con:
• Descripción del proyecto.
• Stack tecnológico (Astro + Cloudflare Pages).
• Instrucciones de instalación local:
    git clone [repo]
    npm install
    npm run dev
• Cómo añadir un artículo nuevo (pasos: crear .md, rellenar frontmatter,
  escribir contenido, git push, deploy automático).
• Cómo añadir mi código de AdSense (dónde exactamente pegar los scripts
  en el código generado — fichero y línea).
• Cómo cambiar el dominio placeholder "fiscalbase.com" por el real
  (find & replace en astro.config.mjs y un grep del proyecto).
• Variables de entorno necesarias (si hay alguna).

────────────────────────────────────────
5.2  DEPLOY.md — Guía de despliegue en Cloudflare Pages
────────────────────────────────────────
Paso a paso:
  1. Crear cuenta en Cloudflare (si no existe).
  2. Subir el proyecto a GitHub (comandos exactos).
  3. Conectar GitHub con Cloudflare Pages (Build command: npm run build,
     Output directory: dist).
  4. Añadir dominio personalizado en Cloudflare Pages.
  5. Configurar los DNS (si el dominio no está en Cloudflare):
     tipo de registros DNS que hay que añadir.
  6. Verificar que el _headers funciona (curl -I para comprobar headers).
  7. Conectar a Google Search Console: método de verificación con
     el fichero HTML en /public/.
  8. Conectar GA4: dónde pegar el Measurement ID (G-XXXXXXXXXX)
     en el código ya generado.

────────────────────────────────────────
5.3  ADSENSE.md — Cómo añadir AdSense al sitio
────────────────────────────────────────
  1. Cómo solicitar AdSense: requisitos previos (20+ artículos reales,
     páginas legales completas, tráfico no necesario pero sí contenido).
  2. Dónde pegar el script principal de AdSense en el proyecto
     (señala el archivo y la línea exacta del código ya generado).
  3. Cómo crear unidades de anuncio manuales en el panel de AdSense
     y dónde pegar el código de cada unidad en el proyecto
     (para cada AD_SLOT marcado en el código).
  4. Qué formato de anuncio usar en cada zona:
     - top-banner → Anuncio de banner horizontal
     - in-content → Anuncio en el artículo (responsive)
     - sidebar → Anuncio de display vertical
     - below-content → Anuncio responsive
     - anchor-mobile → Anuncio de ancla (se activa desde el panel)
  5. Cómo verificar que los anuncios no rompen el CLS
     (PageSpeed Insights antes y después de añadir AdSense).

────────────────────────────────────────
5.4  CONTENIDO.md — Cómo publicar artículos nuevos
────────────────────────────────────────
Plantilla de frontmatter lista para copiar con todos los campos.
Checklist de 15 puntos antes de hacer git push de un artículo nuevo.
Fuentes oficiales a consultar siempre para datos fiscales:
  - AEAT: aeat.es
  - BOE: boe.es
  - Seguridad Social: seg-social.es
  - Normativa autonómica: enlace al portal de cada comunidad
Regla de oro: nunca publicar un tramo o porcentaje sin enlazar
la fuente oficial donde se verifica.
```

---

## Resumen: lo que hace el modelo, lo que haces tú

| Tarea | Quién lo hace |
|-------|--------------|
| Código Astro completo (layouts, components, pages) | El modelo |
| CSS del sitio | El modelo |
| Configuración Cloudflare / _headers / robots.txt | El modelo |
| 10 artículos completos de 1.500-2.000 palabras | El modelo |
| Páginas legales (privacidad, cookies, aviso legal) | El modelo |
| Sitemap, RSS, schema JSON-LD | El modelo |
| Cookie banner con Consent Mode v2 | El modelo |
| README, guía de deploy, guía AdSense | El modelo |
| **Registrar el dominio** | **Tú** |
| **Conectar GitHub → Cloudflare Pages** | **Tú** |
| **Crear cuenta AdSense y pegar códigos** | **Tú** |
| **Sustituir "fiscalbase.com" por tu dominio real** | **Tú (find & replace)** |
| **Añadir tu GA4 Measurement ID** | **Tú (1 línea)** |
