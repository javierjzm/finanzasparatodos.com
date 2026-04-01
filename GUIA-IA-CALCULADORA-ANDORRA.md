# Guía para modelo de IA: calculadora España / otros países vs Andorra

Usa este archivo como **punto de entrada** si te piden implementar la calculadora en el repo **finanzasparatodos.com** (Astro 5).

## Orden de lectura recomendado

1. **`ESPECIFICACION-CALCULADORA-FISCAL-ANDORRA.md`** — Reglas de negocio, fórmulas, IDs de formulario, casos de prueba y notas Astro.
2. **`referencia-calculadora-andorra/README.md`** — Qué contiene cada archivo copiado y orden de scripts.
3. **`referencia-calculadora-andorra/calculadora.js`** — Comportamiento canónico (copia literal del sitio de referencia).
4. **`referencia-calculadora-andorra/fragmento-calculadora-y-tabla.html`** — HTML que debe cuadrar con ese JS.
5. **`referencia-calculadora-andorra/i18n.js`** — Solo si necesitas multidioma o evitar claves sueltas en la UI.

## Objetivo del encargo

- Incorporar en **finanzasparatodos.com** una calculadora equivalente a la de **fiscalandorra.ad**: comparar neto anual (y carga fiscal) en país de origen vs Andorra, con ahorro estimado.
- **Respetar** la lógica numérica del JS de referencia salvo que el usuario pida explícitamente actualizar normativa.

## Decisiones de implementación típicas

| Enfoque | Notas |
|---------|--------|
| **Port casi directo** | Copiar HTML de referencia a un `.astro`, poner JS en `public/` o import estático, añadir CSS (el original está en el otro repo; hay que reescribir estilos al diseño de finanzasparatodos). |
| **Refactor limpio** | Extraer funciones puras (`calcES`, `calcAD`, `calcPais`, tramos) a un módulo TypeScript y dejar un componente delgado para la UI. Validar contra la tabla y casos de la especificación. |

## Trampas conocidas

- `calculadora.js` llama a `document.getElementById('accept-cookies')`, `cookie-banner`, etc. Si no existen, **fallará**. Solución: incluir elementos ocultos dummy o editar el `init()` para hacer optional chaining / comprobaciones.
- Sin `i18n.js`, los textos que pasan por `_t('c_espana')` mostrarán la clave. Carga `i18n.js` primero o sustituye por strings en español.
- No mezcles IDs del formulario: el script está acoplado a los listados en la especificación.

## Verificación antes de dar por hecho

- Ejecutar `npm run build` en finanzasparatodos.com sin errores.
- Comprobar al menos: bruto 50.000 €, España, Madrid, soltero, asalariado, patrimonio 0 → números alineados con la tabla de la especificación / fila 50k de `#comparativa`.

## Aviso al usuario final

Incluir disclaimer de carácter **orientativo** y remisión a asesor fiscal (texto sugerido en la especificación).
