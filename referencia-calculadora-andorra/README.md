# Referencia: calculadora fiscal (origen fiscalandorra.ad)

Copia de trabajo **solo para portar** la calculadora a finanzasparatodos.com. No es un paquete npm.

| Archivo | Uso |
|---------|-----|
| `calculadora.js` | Lógica fiscal + UI (sliders, país, animaciones). Depende de los IDs del HTML. |
| `i18n.js` | Traducciones (ca, es, en, fr) y `window._i18n.t`. **Sin este script**, `calculadora.js` muestra claves como `c_espana` en textos dinámicos: o bien cargas `i18n.js` antes, o refactorizas etiquetas a español fijo. |
| `fragmento-calculadora-y-tabla.html` | Marcado mínimo de `#calculadora` + `#comparativa` (sin publicidad). |

## Orden de scripts (integración mínima)

```html
<script src="/ruta/a/i18n.js"></script>
<script src="/ruta/a/calculadora.js" defer></script>
```

`calculadora.js` registra listeners en `DOMContentLoaded` y espera elementos con IDs fijos (`salary-input`, `pais`, `cookie-banner`, etc.). Si eliminas el banner de cookies, añade comprobaciones nulas o stubs de IDs en el HTML/JS para no romper `init()`.

## Documentación de alto nivel

En la raíz del proyecto: `ESPECIFICACION-CALCULADORA-FISCAL-ANDORRA.md` y `GUIA-IA-CALCULADORA-ANDORRA.md`.
