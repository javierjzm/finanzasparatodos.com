# Cómo publicar artículos nuevos

## Plantilla de frontmatter

Copia esta plantilla al crear un nuevo archivo `.md` en `src/content/articulos/`:

```yaml
---
title: "Título del artículo (incluye keyword principal)"
description: "Descripción de máximo 155 caracteres con keyword. Aparecerá en Google."
category: "irpf"  # irpf | autonomos | inversiones | deducciones | fiscalidad-internacional
keywords: ["keyword principal", "keyword secundaria", "keyword larga"]
datePublished: 2025-01-15
dateModified: 2025-01-15
author: "Equipo editorial de Finanzas Guías"
pillar: false        # true si es un artículo pilar de la categoría
relatedPosts: ["slug-articulo-1", "slug-articulo-2"]
schema: "article"    # article | faq | howto
noindex: false       # true para no indexar en Google
adSlots: true        # false para desactivar anuncios en este artículo
---
```

## Estructura recomendada del artículo

```markdown
Párrafo introductorio de 2-3 líneas explicando qué va a aprender el lector.

## Sección principal 1

Contenido...

## Sección principal 2

Contenido con tablas, listas, ejemplos numéricos...

## Ejemplo práctico

Un caso real con números concretos.

## Preguntas frecuentes

### ¿Pregunta 1?

Respuesta concisa.

### ¿Pregunta 2?

Respuesta concisa.
```

## Checklist antes de publicar

1. [ ] El título incluye la keyword principal y el año si aplica
2. [ ] La description tiene menos de 155 caracteres
3. [ ] La categoría es una de las 5 existentes
4. [ ] `datePublished` y `dateModified` están en formato `YYYY-MM-DD`
5. [ ] El contenido tiene al menos 1.500 palabras
6. [ ] Se incluyen al menos 2 tablas o listas estructuradas
7. [ ] Hay un ejemplo práctico con números reales
8. [ ] La sección de FAQ tiene al menos 6 preguntas
9. [ ] Los datos fiscales (tramos, porcentajes, plazos) se han verificado con fuentes oficiales
10. [ ] Se cita o referencia la fuente oficial cuando se mencionan datos normativos
11. [ ] El artículo incluye un disclaimer YMYL (se añade automáticamente en el layout)
12. [ ] Los `relatedPosts` apuntan a slugs que existen en el sitio
13. [ ] El nombre del archivo coincide con el slug deseado para la URL
14. [ ] Se ha ejecutado `npm run build` sin errores
15. [ ] Se ha revisado la vista previa en `npm run dev`

## Fuentes oficiales obligatorias

Consulta siempre estas fuentes antes de publicar datos fiscales:

| Fuente | URL | Qué consultar |
|--------|-----|---------------|
| Agencia Tributaria (AEAT) | [aeat.es](https://www.agenciatributaria.es/) | Tramos IRPF, modelos, plazos, normativa estatal |
| Boletín Oficial del Estado (BOE) | [boe.es](https://www.boe.es/) | Leyes, reales decretos, presupuestos generales |
| Seguridad Social | [seg-social.es](https://www.seg-social.es/) | Cuotas de autónomos, bases de cotización, prestaciones |
| Instituto Nacional de Estadística | [ine.es](https://www.ine.es/) | IPC, salario medio, datos macroeconómicos |

### Portales autonómicos (para deducciones autonómicas)

| Comunidad | Portal tributario |
|-----------|------------------|
| Andalucía | [juntadeandalucia.es/agenciatributaria](https://www.juntadeandalucia.es/agenciatributaria) |
| Cataluña | [atc.gencat.cat](https://atc.gencat.cat) |
| Madrid | [comunidad.madrid/servicios/hacienda](https://www.comunidad.madrid/servicios/hacienda) |
| Com. Valenciana | [gva.es/tributos](https://www.gva.es/es/inicio/atencion_ciudadano/buscadores/tributos) |
| País Vasco | [ogasun.ejgv.euskadi.eus](https://www.ogasun.ejgv.euskadi.eus) |
| Galicia | [atriga.gal](https://www.atriga.gal) |

## Enlaces a fuentes externas

En artículos YMYL (fiscalidad, inversión), enlaza siempre que puedas a **fuentes oficiales** (AEAT, BOE, CNMV, Banco de España, FGD, ESMA, reguladores del producto). Al final del artículo conviene una sección o tabla de **“Enlaces útiles”** con URLs estables. Comprueba periódicamente que no den 404.

## Imágenes (SEO y AdSense)

- **SEO:** Las imágenes **relevantes** (gráficos, tablas exportadas como PNG, esquemas) pueden mejorar la **experiencia de lectura** y el tiempo en página; usa **`alt` descriptivo** en HTML (en Markdown Astro suele ser `![descripción clara del contenido](ruta)`). No sustituyen un buen texto ni enlaces a fuentes oficiales.
- **AdSense:** Google **no exige** imágenes para aprobar o mostrar anuncios. Imágenes propias o con **licencia clara** evitan problemas de copyright; las genéricas de bancos de fotos muy repetidas aportan poco.
- **Rendimiento:** Peso contenido (`public/` o optimizadas), formatos modernos (WebP/AVIF si tu flujo lo permite) y no saturar la página con archivos enormes (Core Web Vitals).

Si no aportan valor real al artículo, **mejor ninguna imagen** que relleno decorativo.

## Regla de oro

**Nunca publiques un tramo, porcentaje o plazo fiscal sin verificar la fuente oficial donde se puede comprobar.** Cuando sea posible, enlaza directamente a la página de la AEAT o el BOE donde aparece el dato.
