# Especificación: calculadora fiscal España (u otros países) vs Andorra

Documento para **reimplementar** en [finanzasparatodos.com](https://finanzasparatodos.com) la calculadora de [fiscalandorra.ad](https://fiscalandorra.ad), manteniendo el mismo comportamiento numérico y de interfaz.

**Empieza por:** `GUIA-IA-CALCULADORA-ANDORRA.md` (índice y trampas de integración).

## Origen del código de referencia (copia en este repo)

| Recurso | Ruta local |
|--------|------------|
| Lógica fiscal + UI | `referencia-calculadora-andorra/calculadora.js` |
| Marcado UI + IDs | `referencia-calculadora-andorra/fragmento-calculadora-y-tabla.html` |
| Traducciones (ca/es/en/fr) | `referencia-calculadora-andorra/i18n.js` |

*Copias tomadas del proyecto `fiscalandorra.ad`; si allí se actualiza la lógica, conviene volver a sincronizar estos archivos.*

**Stack destino conocido:** Astro 5 (`package.json` del proyecto actual). La calculadora es **100 % cliente**: sin API; basta un `<script>` o un componente con `client:load` / isla React/Vue si se prefiere, pero la referencia es **vanilla JS**.

**Aviso legal (copiar en UI):** texto orientativo, normativa 2026, consultar asesor. Ver `data-i18n="foot_disclaimer"` en el HTML de referencia.

---

## Objetivo funcional

1. El usuario introduce **salario bruto anual** (€), opcionalmente **patrimonio neto** (€), el **país de origen**, y si es España la **CCAA**, la **situación familiar** y el **tipo de renta**.
2. La app calcula el **neto anual estimado** en el país de origen y en **Andorra**, desglosando cotizaciones / IRPF / (solo España) impuesto de patrimonio cuando aplique.
3. Muestra el **ahorro anual** si el neto en Andorra es mayor: `max(0, netoAndorra - netoOrigen)`, y derivados mensual, 5 años y 10 años.
4. Opcional SEO: tabla estática de ejemplo “asalariado soltero Madrid” (valores ya calculados en el HTML de referencia).

---

## Entradas (UI)

### IDs y controles (mantener o mapear 1:1)

- `salary-input` — `number`, min 0, max **500000**, step 500 (sincronizar con slider).
- `salary-slider` — `range` interno: min 0, max **1000** (no es euros; ver sección “Slider logarítmico”).
- `patrimony-input` / `patrimony-slider` — patrimonio 0–**5.000.000**, step 10.000; el bloque puede ir en `<details>` (plegable).
- `pais` — valor oculto: `espana` | `francia` | `portugal` | `italia` | `alemania` | `uk` | `rusia`.
- `comunidad` — `<select>` solo visible si `pais === 'espana'`. Valores `value` exactos:

  `madrid`, `cataluna`, `andalucia`, `valencia`, `galicia`, `castilla-leon`, `pais-vasco`, `canarias`, `castilla-mancha`, `murcia`, `aragon`, `extremadura`, `baleares`, `asturias`, `navarra`, `cantabria`, `rioja`

- `situacion` — `soltero` | `casado-0` | `casado-1` | `casado-2` (2+ hijos).
- `tipo-renta` — radios `asalariado` | `autonomo` | `dividendos` (en el código: `dividendos` = rentas de capital).

### Comportamiento UI

- Cualquier cambio dispara recálculo.
- Fila “I. Patrimonio” en la tarjeta de origen: mostrar solo si `pais === 'espana'` **y** `patrimonio > 0`.
- País distinto de España: ocultar selector CCAA; usar motor `PAISES[pais].calc`.
- Animación opcional: la referencia interpola números hacia el valor final (~500 ms, easing cúbico out). No es obligatoria para paridad funcional.

---

## Salidas (UI)

### Tarjeta origen

- Neto anual (`origin-neto`).
- Barra de tipo efectivo: ancho `min(tm, 60)%` (`origin-bar`).
- Filas: cotización (etiqueta dinámica en extranjero), IRPF (etiqueta dinámica), I. Patrimonio si aplica, **Tipo efectivo** `tm` = `(ss + irpf + ip) / bruto * 100` (0 si bruto 0).

### Tarjeta Andorra

- Neto (`ad-neto`), CASS (`ad-cass`), IRPF (`ad-irpf`), I. Patrimonio siempre 0 €, tipo efectivo `(cass + irpf) / bruto`.

### Banner ahorro

- `ahorro-anual` = `max(0, ad.neto - origin.neto)`.
- `ahorro-mensual` = ahorro / 12.
- `ahorro-5` = ahorro * 5, `ahorro-10` = ahorro * 10.

---

## Núcleo matemático compartido

### Función `aplicarTramos(base, tramos)`

Tramos con `{ hasta: number, tipo: number }` (tipo = tipo marginal). Para cada tramo, grava el tramo `[anterior, min(base, hasta)]` al tipo indicado. Suma impuesto. Orden creciente de `hasta`.

### Helpers situación

- `casado(sit)` → `sit.indexOf('casado') === 0`.
- `numHijos(sit)` → `casado-1` → 1, `casado-2` → 2, resto 0.

---

## Andorra — `calcAD(bruto, sit, tipo)`

- **CASS:**  
  - `autonomo` → `bruto * 0.16`  
  - `dividendos` → `0`  
  - `asalariado` → `bruto * 0.06`
- **Deducciones mínimas (antes de base IRPF):**  
  - `ded = (casado ? 1800 : 0) + 750 * numHijos(sit)`
- **Base IRPF:** `max(0, bruto - cass - ded)`
- **Tramos `TRAMOS_ANDORRA`:**

  | Hasta (€) | Tipo |
  |-----------|------|
  | 24.000 | 0% |
  | 40.000 | 5% |
  | ∞ | 10% |

- **IRPF:** `aplicarTramos(base, TRAMOS_ANDORRA)`
- **Neto:** `bruto - cass - irpf`

---

## España — constantes globales

```text
SS_MAX_BASE = 56646
SS_TIPO = 0.0647          // solo asalariado
GASTOS_TRABAJO = 2000     // resta a base IRPF si asalariado
MINIMO_PERSONAL = 5550
MINIMO_HIJOS = [0, 2400, 2700, 4000]  // uso en bucle según código fuente (replicar tal cual)
```

### Seguridad Social España — `calcSSES(bruto, tipo)`

- `dividendos` → 0.
- `autonomo` → cuota mensual según tramos `CUOTAS_AUTONOMOS` (ingreso mensual `m = bruto/12`), luego **× 12**. Tabla en código: de 200 €/mes a 590 €/mes según tramos hasta mensual.
- `asalariado` → `min(bruto, SS_MAX_BASE) * SS_TIPO`.

### IRPF España — `calcIRPFES(bruto, ccaa, sit, tipo, ss)`

1. `base = bruto - ss`
2. Si `asalariado`: `base -= GASTOS_TRABAJO`  
   Si `autonomo`: `base -= min(bruto * 0.07, 2000)`
3. `base = max(0, base)`
4. Mínimo personal: `minimo = MINIMO_PERSONAL + suma según bucle con MINIMO_HIJOS y nh` (igual que en archivo fuente).
5. **Navarra:** `max(0, aplicarTramos(base, TRAMOS_NAVARRA) - aplicarTramos(minimo, TRAMOS_NAVARRA))`
6. **País Vasco:** idem con `TRAMOS_PAIS_VASCO`
7. **Resto:** tramo estatal `TRAMOS_ESTATAL` + tramo autonómico `TRAMOS_AUTONOMICOS[ccaa]` (fallback `castilla-mancha` si falta clave). IRPF =  
   `max(0, estatal(base) - estatal(minimo)) + max(0, autonomico(base) - autonomico(minimo))`

Los arrays `TRAMOS_ESTATAL`, `TRAMOS_AUTONOMICOS` (por CCAA), `TRAMOS_NAVARRA`, `TRAMOS_PAIS_VASCO` están **completos** en `calculadora.js` líneas ~8–176; deben copiarse sin alterar tipos ni umbrales si se busca paridad exacta.

### Patrimonio España — `calcIPES(pat, ccaa)`

- Si `pat <= 0` o `ccaa` está en `CCAA_SIN_PATRIMONIO` (`['madrid']`) → **0**.
- `base = max(0, pat - 1000000)` (modelo simplificado: exención conjunta 700k + 300k vivienda habitual = 1M).
- Si `base > 0`: `aplicarTramos(base, TRAMOS_PATRIMONIO)` con tramos:

  Umbrales aproximados (€): 167129, 334252, 668499, 1336999, 2673999, 5347998, ∞  
  Tipos: 0,2%, 0,3%, 0,5%, 0,9%, 1,3%, 1,7%, 2,5% (valores exactos en fuente).

### España total — `calcES`

- `ss = calcSSES(...)`, `irpf = calcIRPFES(...)`, `ip = calcIPES(pat, ccaa)`
- `neto = bruto - ss - irpf - ip`
- `tm = bruto > 0 ? (ss + irpf + ip) / bruto * 100 : 0`

---

## Otros países (objeto `PAISES`)

Cada país tiene `calc(bruto, sit, tipo, pat)` devolviendo `{ irpf, ss, ip: 0, neto, tm }`.

Resumen para implementación:

| País | Ideas clave |
|------|-------------|
| **Francia** | SS: 22% asalariado, 24,5% autónomo, 0 dividendos. IRPF por tramos sobre `base/bruto` con **quotient familial** (2 partes casado + 0,5 por hijo). |
| **Portugal** | SS 11% (0 dividendos). IRPF tramos progresivos sobre base. |
| **Italia** | SS 9,19% asalariado, 25,72% autónomo, 0 dividendos. IRPEF tramos 23/35/43%; si asalariado y bruto ≤ 50k, restar 1955 € al IRPF (mínimo 0). |
| **Alemania** | SS ~19,6% con tope base 69600 (0 dividendos). Fórmulas zona ESt (tramos con polinomios); Solidaritätszuschlag 5,5% si IRPF > 18130; casados: calcular por mitades y duplicar. |
| **UK** | Tipo cambio 1 EUR = 1/0,855 GBP. NI semanal con umbrales 242/967 £, 8% y 2%. Income tax con personal allowance 12570 y reducción si bruto GBP > 100k. Bandas 20/40/45%. |
| **Rusia** | SS 0. NDFL 13% hasta ~50k EUR, 15% exceso; dividendos 13% flat. |

Detalle numérico: copiar bloque `PAISES` del JS de referencia.

---

## Slider logarítmico del salario

`STEPS = 1000` (posición slider 0…1000).

- `sliderToVal(pos)`: si `pos <= 0` → 0. Sea `r = pos/1000`. Si `r <= 0.7` → redondeo de `r/0.7 * 100000`; si no → `100000 + (r-0.7)/0.3 * 400000`. Rango efectivo **0–500.000 €** (el input numérico clamp a 500000 en `input`).
- `valToSlider(v)`: inversa (ver implementación en fuente).

El slider de patrimonio es **lineal** 0–5.000.000.

---

## Tabla comparativa SEO (referencia)

Subtítulo: asalariado soltero, Madrid, sin coste de vida. Filas (bruto → neto ES, neto AD, ahorro/año, ahorro 10a):

| 30.000 | 24.050 | 27.990 | 3.940 | 39.400 |
| 50.000 | 37.805 | 45.500 | 7.695 | 76.950 |
| 80.000 | 57.100 | 70.880 | 13.780 | 137.800 |
| 120.000 | 81.550 | 104.720 | 23.170 | 231.700 |
| 200.000 | 130.350 | 172.400 | 42.050 | 420.500 |

Útil como test de regresión si se reimplementa el motor español+Andorra igual.

---

## Casos de prueba rápidos

1. **Default HTML:** bruto 50.000, España, Madrid, soltero, asalariado, patrimonio 0 → neto España y Andorra deben coincidir con los valores iniciales del HTML (~37.805 € y ~45.500 €; pequeñas diferencias por redondeo animación vs estado final).
2. **Patrimonio 2.000.000, CCAA cataluna:** IP > 0 en origen, Andorra IP 0.
3. **Madrid + patrimonio alto:** IP siempre 0 (bonificación modelo).
4. **dividendos España:** SS 0, base IRPF sin gastos de trabajo de asalariado (solo ajuste autónomo si fuera autónomo; dividendos no entra en rama autónomo).
5. **Cambio a Francia + casado-2:** verifica quotient familial (partes > 2).

---

## Integración en Astro (sugerencia mínima)

1. Extraer la IIFE de `calculadora.js` a un módulo o archivo servido estático (`public/js/` o import con bundler).
2. Montar el fragmento HTML necesario en una página o layout; cargar script con `defer` o isla con `client:load`.
3. **No** copiar bloques AdSense/cookies si el sitio destino no los usa; la lógica fiscal no depende de ello (el `init` puede omitir `initCookies` / `loadAds`).
4. Estilos: la referencia usa CSS propio del sitio; en finanzasparatodos habrá que **rehacer estilos** manteniendo estructura de clases o adaptar a Tailwind/componentes existentes.

---

## Archivos a no duplicar sin necesidad

- Banderas SVG inline: se pueden sustituir por emojis o un sprite; solo afectan a la tarjeta de país.
- `i18n.js`: si el nuevo sitio es solo castellano, sustituir `data-i18n` por texto fijo o un sistema i18n del proyecto.

---

*Generado como especificación de portabilidad entre proyectos locales; los tipos y leyes reales pueden cambiar: validar siempre con asesoría fiscal antes de publicar cifras como asesoramiento.*
