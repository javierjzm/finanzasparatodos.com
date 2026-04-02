(function () {
  'use strict';

  /* ================================================================
     SPAIN TAX DATA
  ================================================================ */

  var TRAMOS_ESTATAL = [
    { hasta: 12450, tipo: 0.095 }, { hasta: 20200, tipo: 0.12 },
    { hasta: 35200, tipo: 0.15 }, { hasta: 60000, tipo: 0.185 },
    { hasta: 300000, tipo: 0.225 }, { hasta: Infinity, tipo: 0.245 }
  ];

  var TRAMOS_AUTONOMICOS = {
    madrid: [
      { hasta: 12450, tipo: 0.085 }, { hasta: 17707.20, tipo: 0.107 },
      { hasta: 33007.20, tipo: 0.128 }, { hasta: 53407.20, tipo: 0.174 },
      { hasta: Infinity, tipo: 0.205 }
    ],
    cataluna: [
      { hasta: 12450, tipo: 0.105 }, { hasta: 17707, tipo: 0.12 },
      { hasta: 33007, tipo: 0.15 }, { hasta: 53407, tipo: 0.188 },
      { hasta: 90000, tipo: 0.215 }, { hasta: 120000, tipo: 0.235 },
      { hasta: 175000, tipo: 0.245 }, { hasta: Infinity, tipo: 0.255 }
    ],
    andalucia: [
      { hasta: 12450, tipo: 0.095 }, { hasta: 20200, tipo: 0.12 },
      { hasta: 28000, tipo: 0.15 }, { hasta: 35200, tipo: 0.155 },
      { hasta: 50000, tipo: 0.19 }, { hasta: 60000, tipo: 0.195 },
      { hasta: 120000, tipo: 0.235 }, { hasta: Infinity, tipo: 0.245 }
    ],
    valencia: [
      { hasta: 12450, tipo: 0.10 }, { hasta: 17000, tipo: 0.12 },
      { hasta: 30000, tipo: 0.14 }, { hasta: 50000, tipo: 0.175 },
      { hasta: 65000, tipo: 0.20 }, { hasta: 80000, tipo: 0.225 },
      { hasta: 120000, tipo: 0.245 }, { hasta: Infinity, tipo: 0.255 }
    ],
    galicia: [
      { hasta: 12450, tipo: 0.095 }, { hasta: 20200, tipo: 0.1175 },
      { hasta: 35200, tipo: 0.1475 }, { hasta: 60000, tipo: 0.185 },
      { hasta: Infinity, tipo: 0.225 }
    ],
    'castilla-leon': [
      { hasta: 12450, tipo: 0.095 }, { hasta: 20200, tipo: 0.12 },
      { hasta: 35200, tipo: 0.14 }, { hasta: 53407, tipo: 0.185 },
      { hasta: Infinity, tipo: 0.215 }
    ],
    'pais-vasco': null,
    canarias: [
      { hasta: 12450, tipo: 0.09 }, { hasta: 17707, tipo: 0.115 },
      { hasta: 33007, tipo: 0.14 }, { hasta: 53407, tipo: 0.185 },
      { hasta: 90000, tipo: 0.235 }, { hasta: Infinity, tipo: 0.24 }
    ],
    'castilla-mancha': [
      { hasta: 12450, tipo: 0.095 }, { hasta: 20200, tipo: 0.12 },
      { hasta: 35200, tipo: 0.15 }, { hasta: 60000, tipo: 0.185 },
      { hasta: Infinity, tipo: 0.225 }
    ],
    murcia: [
      { hasta: 12450, tipo: 0.095 }, { hasta: 20200, tipo: 0.12 },
      { hasta: 35200, tipo: 0.15 }, { hasta: 60000, tipo: 0.185 },
      { hasta: 120000, tipo: 0.225 }, { hasta: Infinity, tipo: 0.245 }
    ],
    aragon: [
      { hasta: 12450, tipo: 0.10 }, { hasta: 20200, tipo: 0.125 },
      { hasta: 35200, tipo: 0.155 }, { hasta: 50000, tipo: 0.19 },
      { hasta: 60000, tipo: 0.21 }, { hasta: 70000, tipo: 0.219 },
      { hasta: 150000, tipo: 0.229 }, { hasta: Infinity, tipo: 0.255 }
    ],
    extremadura: [
      { hasta: 12450, tipo: 0.095 }, { hasta: 20200, tipo: 0.12 },
      { hasta: 35200, tipo: 0.15 }, { hasta: 60000, tipo: 0.185 },
      { hasta: 80200, tipo: 0.225 }, { hasta: 99200, tipo: 0.235 },
      { hasta: 120200, tipo: 0.245 }, { hasta: Infinity, tipo: 0.25 }
    ],
    baleares: [
      { hasta: 10000, tipo: 0.095 }, { hasta: 18000, tipo: 0.1175 },
      { hasta: 30000, tipo: 0.1475 }, { hasta: 48000, tipo: 0.175 },
      { hasta: 70000, tipo: 0.195 }, { hasta: 90000, tipo: 0.22 },
      { hasta: 120000, tipo: 0.235 }, { hasta: 175000, tipo: 0.245 },
      { hasta: Infinity, tipo: 0.25 }
    ],
    asturias: [
      { hasta: 12450, tipo: 0.10 }, { hasta: 17707, tipo: 0.12 },
      { hasta: 33007, tipo: 0.14 }, { hasta: 53407, tipo: 0.185 },
      { hasta: 70000, tipo: 0.215 }, { hasta: 90000, tipo: 0.225 },
      { hasta: 175000, tipo: 0.245 }, { hasta: Infinity, tipo: 0.255 }
    ],
    navarra: null,
    cantabria: [
      { hasta: 12450, tipo: 0.095 }, { hasta: 20200, tipo: 0.12 },
      { hasta: 35200, tipo: 0.15 }, { hasta: 46000, tipo: 0.185 },
      { hasta: 60000, tipo: 0.195 }, { hasta: 90000, tipo: 0.245 },
      { hasta: Infinity, tipo: 0.255 }
    ],
    rioja: [
      { hasta: 12450, tipo: 0.095 }, { hasta: 20200, tipo: 0.116 },
      { hasta: 35200, tipo: 0.146 }, { hasta: 50000, tipo: 0.188 },
      { hasta: 65000, tipo: 0.219 }, { hasta: 80000, tipo: 0.249 },
      { hasta: Infinity, tipo: 0.279 }
    ]
  };

  var TRAMOS_NAVARRA = [
    { hasta: 4215, tipo: 0.13 }, { hasta: 11162, tipo: 0.2206 },
    { hasta: 18777, tipo: 0.25 }, { hasta: 29355, tipo: 0.28 },
    { hasta: 44880, tipo: 0.3572 }, { hasta: 65280, tipo: 0.4002 },
    { hasta: 88680, tipo: 0.4502 }, { hasta: 162480, tipo: 0.4702 },
    { hasta: 306480, tipo: 0.4902 }, { hasta: Infinity, tipo: 0.5202 }
  ];

  var TRAMOS_PAIS_VASCO = [
    { hasta: 16030, tipo: 0.23 }, { hasta: 32060, tipo: 0.28 },
    { hasta: 48090, tipo: 0.35 }, { hasta: 68990, tipo: 0.40 },
    { hasta: 99060, tipo: 0.45 }, { hasta: 174690, tipo: 0.46 },
    { hasta: Infinity, tipo: 0.49 }
  ];

  var TRAMOS_PATRIMONIO = [
    { hasta: 167129, tipo: 0.002 }, { hasta: 334252, tipo: 0.003 },
    { hasta: 668499, tipo: 0.005 }, { hasta: 1336999, tipo: 0.009 },
    { hasta: 2673999, tipo: 0.013 }, { hasta: 5347998, tipo: 0.017 },
    { hasta: Infinity, tipo: 0.025 }
  ];

  var CCAA_SIN_PATRIMONIO = ['madrid'];

  var CUOTAS_AUTONOMOS = [
    { hasta: 670, cuota: 200 }, { hasta: 900, cuota: 270 },
    { hasta: 1166.70, cuota: 294 }, { hasta: 1300, cuota: 294 },
    { hasta: 1500, cuota: 294 }, { hasta: 1700, cuota: 294 },
    { hasta: 1850, cuota: 310 }, { hasta: 2030, cuota: 315 },
    { hasta: 2330, cuota: 320 }, { hasta: 2760, cuota: 330 },
    { hasta: 3190, cuota: 340 }, { hasta: 3620, cuota: 350 },
    { hasta: 4050, cuota: 370 }, { hasta: 6000, cuota: 420 },
    { hasta: Infinity, cuota: 590 }
  ];

  var TRAMOS_ANDORRA = [
    { hasta: 24000, tipo: 0.00 },
    { hasta: 40000, tipo: 0.05 },
    { hasta: Infinity, tipo: 0.10 }
  ];

  var SS_MAX_BASE = 56646;
  var SS_TIPO = 0.0647;
  var GASTOS_TRABAJO = 2000;
  var MINIMO_PERSONAL = 5550;
  var MINIMO_HIJOS = [0, 2400, 2700, 4000];

  /* ================================================================
     ORIGIN COUNTRIES (compared against Spain)
  ================================================================ */

  var PAISES = {
    francia: {
      nombre: 'Francia', flag: '🇫🇷', ssLabel: 'Cotisations sociales', irpfLabel: 'Impôt sur le revenu',
      tramos: [
        { hasta: 11294, tipo: 0 }, { hasta: 28797, tipo: 0.11 },
        { hasta: 82341, tipo: 0.30 }, { hasta: 177106, tipo: 0.41 },
        { hasta: Infinity, tipo: 0.45 }
      ],
      calc: function (bruto, sit, tipo) {
        var ssPct = tipo === 'autonomo' ? 0.245 : tipo === 'dividendos' ? 0 : 0.22;
        var ss = bruto * ssPct;
        var base = Math.max(0, bruto - ss);
        var parts = casado(sit) ? 2 : 1;
        parts += numHijos(sit) * 0.5;
        var irpf = aplicarTramos(base / parts, this.tramos) * parts;
        var neto = bruto - ss - irpf;
        return { irpf: irpf, ss: ss, ip: 0, neto: neto, tm: bruto > 0 ? (ss + irpf) / bruto * 100 : 0 };
      }
    },
    portugal: {
      nombre: 'Portugal', flag: '🇵🇹', ssLabel: 'Segurança Social', irpfLabel: 'IRS',
      tramos: [
        { hasta: 7703, tipo: 0.145 }, { hasta: 11623, tipo: 0.21 },
        { hasta: 16472, tipo: 0.265 }, { hasta: 21321, tipo: 0.285 },
        { hasta: 27146, tipo: 0.35 }, { hasta: 39791, tipo: 0.37 },
        { hasta: 51997, tipo: 0.435 }, { hasta: 81199, tipo: 0.45 },
        { hasta: Infinity, tipo: 0.48 }
      ],
      calc: function (bruto, sit, tipo) {
        var ss = tipo === 'dividendos' ? 0 : bruto * 0.11;
        var base = Math.max(0, bruto - ss);
        var irpf = aplicarTramos(base, this.tramos);
        var neto = bruto - ss - irpf;
        return { irpf: irpf, ss: ss, ip: 0, neto: neto, tm: bruto > 0 ? (ss + irpf) / bruto * 100 : 0 };
      }
    },
    italia: {
      nombre: 'Italia', flag: '🇮🇹', ssLabel: 'Contributi INPS', irpfLabel: 'IRPEF',
      tramos: [
        { hasta: 28000, tipo: 0.23 }, { hasta: 50000, tipo: 0.35 },
        { hasta: Infinity, tipo: 0.43 }
      ],
      calc: function (bruto, sit, tipo) {
        var ssPct = tipo === 'autonomo' ? 0.2572 : tipo === 'dividendos' ? 0 : 0.0919;
        var ss = bruto * ssPct;
        var base = Math.max(0, bruto - ss);
        var irpf = aplicarTramos(base, this.tramos);
        if (tipo === 'asalariado' && bruto <= 50000) irpf = Math.max(0, irpf - 1955);
        var neto = bruto - ss - irpf;
        return { irpf: irpf, ss: ss, ip: 0, neto: neto, tm: bruto > 0 ? (ss + irpf) / bruto * 100 : 0 };
      }
    },
    alemania: {
      nombre: 'Alemania', flag: '🇩🇪', ssLabel: 'Sozialabgaben', irpfLabel: 'Einkommensteuer',
      calc: function (bruto, sit, tipo) {
        var ss = tipo === 'dividendos' ? 0 : Math.min(bruto, 69600) * 0.196;
        var base = Math.max(0, bruto - ss);
        function irpfBase(b) {
          if (b <= 11604) return 0;
          if (b <= 17005) { var y = (b - 11604) / 10000; return (922.98 * y + 1400) * y; }
          if (b <= 66760) { var y2 = (b - 17005) / 10000; return (181.19 * y2 + 2397) * y2 + 1025.38; }
          if (b <= 277825) return 0.42 * b - 10602.13;
          return 0.45 * b - 18936.88;
        }
        var irpf;
        if (casado(sit)) {
          var h = Math.max(0, irpfBase(base / 2));
          irpf = (h + (h > 18130 ? h * 0.055 : 0)) * 2;
        } else {
          irpf = Math.max(0, irpfBase(base));
          irpf += irpf > 18130 ? irpf * 0.055 : 0;
        }
        var neto = bruto - ss - irpf;
        return { irpf: irpf, ss: ss, ip: 0, neto: neto, tm: bruto > 0 ? (ss + irpf) / bruto * 100 : 0 };
      }
    },
    uk: {
      nombre: 'Reino Unido', flag: '🇬🇧', ssLabel: 'National Insurance', irpfLabel: 'Income Tax',
      calc: function (bruto, sit, tipo) {
        var GBP = 0.855;
        var brutoGBP = bruto * GBP;
        var ni = 0;
        if (tipo !== 'dividendos') {
          var wk = brutoGBP / 52;
          if (wk > 242) {
            ni = (Math.min(wk, 967) - 242) * 0.08 + (wk > 967 ? (wk - 967) * 0.02 : 0);
            ni *= 52;
          }
        }
        var pa = brutoGBP > 100000 ? Math.max(0, 12570 - (brutoGBP - 100000) / 2) : 12570;
        var tax = Math.max(0, brutoGBP - pa);
        var irpfGBP;
        if (tax <= 37700) irpfGBP = tax * 0.20;
        else if (tax <= 125140 - pa) irpfGBP = 37700 * 0.20 + (tax - 37700) * 0.40;
        else {
          var top = 125140 - pa;
          irpfGBP = 37700 * 0.20 + Math.max(0, Math.min(tax, top) - 37700) * 0.40 + Math.max(0, tax - top) * 0.45;
        }
        var ssEUR = ni / GBP, irpfEUR = irpfGBP / GBP;
        var neto = bruto - ssEUR - irpfEUR;
        return { irpf: irpfEUR, ss: ssEUR, ip: 0, neto: neto, tm: bruto > 0 ? (ssEUR + irpfEUR) / bruto * 100 : 0 };
      }
    },
    rusia: {
      nombre: 'Rusia', flag: '🇷🇺', ssLabel: 'Cotizaciones', irpfLabel: 'NDFL',
      calc: function (bruto, sit, tipo) {
        var irpf = tipo === 'dividendos' ? bruto * 0.13 : (bruto <= 50000 ? bruto * 0.13 : 50000 * 0.13 + (bruto - 50000) * 0.15);
        var neto = bruto - irpf;
        return { irpf: irpf, ss: 0, ip: 0, neto: neto, tm: bruto > 0 ? irpf / bruto * 100 : 0 };
      }
    },
    andorra: {
      nombre: 'Andorra', flag: '🇦🇩', ssLabel: 'CASS', irpfLabel: 'IRPF',
      calc: function (bruto, sit, tipo) {
        var r = calcAD(bruto, sit, tipo);
        return { irpf: r.irpf, ss: r.cass, ip: 0, neto: r.neto, tm: r.tm };
      }
    }
  };

  /* ================================================================
     HELPERS
  ================================================================ */

  function aplicarTramos(base, tramos) {
    var imp = 0, ant = 0;
    for (var i = 0; i < tramos.length; i++) {
      if (base <= ant) break;
      imp += (Math.min(base, tramos[i].hasta) - ant) * tramos[i].tipo;
      ant = tramos[i].hasta;
    }
    return imp;
  }

  function numHijos(sit) { return sit === 'casado-1' ? 1 : sit === 'casado-2' ? 2 : 0; }
  function casado(sit) { return sit.indexOf('casado') === 0; }
  function pct(n) { return n.toFixed(1).replace('.', ',') + ' %'; }
  function fmt(n) { return Math.round(n).toLocaleString('es-ES') + ' €'; }

  /* ================================================================
     ANDORRA CALC
  ================================================================ */

  function calcAD(bruto, sit, tipo) {
    var cass = tipo === 'autonomo' ? bruto * 0.16 : tipo === 'dividendos' ? 0 : bruto * 0.06;
    var ded = (casado(sit) ? 1800 : 0) + 750 * numHijos(sit);
    var base = Math.max(0, bruto - cass - ded);
    var irpf = aplicarTramos(base, TRAMOS_ANDORRA);
    var neto = bruto - cass - irpf;
    return { irpf: irpf, cass: cass, neto: neto, tm: bruto > 0 ? (cass + irpf) / bruto * 100 : 0 };
  }

  /* ================================================================
     SPAIN CALC
  ================================================================ */

  function calcSSES(bruto, tipo) {
    if (tipo === 'dividendos') return 0;
    if (tipo === 'autonomo') {
      var m = bruto / 12;
      for (var i = 0; i < CUOTAS_AUTONOMOS.length; i++) {
        if (m <= CUOTAS_AUTONOMOS[i].hasta) return CUOTAS_AUTONOMOS[i].cuota * 12;
      }
      return 590 * 12;
    }
    return Math.min(bruto, SS_MAX_BASE) * SS_TIPO;
  }

  function calcIRPFES(bruto, ccaa, sit, tipo, ss) {
    var base = bruto - ss;
    if (tipo === 'asalariado') base -= GASTOS_TRABAJO;
    else if (tipo === 'autonomo') base -= Math.min(bruto * 0.07, 2000);
    base = Math.max(0, base);
    var nh = numHijos(sit);
    var minimo = MINIMO_PERSONAL;
    for (var i = 0; i < nh; i++) minimo += MINIMO_HIJOS[Math.min(i, MINIMO_HIJOS.length - 1)];
    if (ccaa === 'navarra') return Math.max(0, aplicarTramos(base, TRAMOS_NAVARRA) - aplicarTramos(minimo, TRAMOS_NAVARRA));
    if (ccaa === 'pais-vasco') return Math.max(0, aplicarTramos(base, TRAMOS_PAIS_VASCO) - aplicarTramos(minimo, TRAMOS_PAIS_VASCO));
    var tAut = TRAMOS_AUTONOMICOS[ccaa] || TRAMOS_AUTONOMICOS['castilla-mancha'];
    return Math.max(0, aplicarTramos(base, TRAMOS_ESTATAL) - aplicarTramos(minimo, TRAMOS_ESTATAL))
         + Math.max(0, aplicarTramos(base, tAut) - aplicarTramos(minimo, tAut));
  }

  function calcIPES(pat, ccaa) {
    if (pat <= 0 || CCAA_SIN_PATRIMONIO.indexOf(ccaa) >= 0) return 0;
    var base = Math.max(0, pat - 1000000);
    return base > 0 ? aplicarTramos(base, TRAMOS_PATRIMONIO) : 0;
  }

  function calcES(bruto, ccaa, sit, tipo, pat) {
    var ss = calcSSES(bruto, tipo);
    var irpf = calcIRPFES(bruto, ccaa, sit, tipo, ss);
    var ip = calcIPES(pat, ccaa);
    var neto = bruto - ss - irpf - ip;
    return { irpf: irpf, ss: ss, ip: ip, neto: neto, tm: bruto > 0 ? (ss + irpf + ip) / bruto * 100 : 0 };
  }

  /* ================================================================
     LOGARITHMIC SLIDER
  ================================================================ */

  var STEPS = 1000;
  function sliderToVal(pos) {
    if (pos <= 0) return 0;
    var r = pos / STEPS;
    return r <= 0.7 ? Math.round(r / 0.7 * 100000) : Math.round(100000 + (r - 0.7) / 0.3 * 400000);
  }
  function valToSlider(v) {
    if (v <= 0) return 0;
    return v <= 100000 ? Math.round(v / 100000 * 0.7 * STEPS) : Math.round((0.7 + (v - 100000) / 400000 * 0.3) * STEPS);
  }

  /* ================================================================
     UI
  ================================================================ */

  var $ = function (id) { return document.getElementById(id); };

  function fillTrack(slider) {
    var p = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.background = 'linear-gradient(to right, var(--color-accent-light) 0%, var(--color-accent-light) ' + p + '%, var(--color-border) ' + p + '%, var(--color-border) 100%)';
  }

  function updateOriginCard(pais) {
    var p = PAISES[pais];
    if (!p) return;
    $('origin-name').textContent = p.nombre;
    $('origin-ss-label').textContent = p.ssLabel;
    $('origin-irpf-label').textContent = p.irpfLabel;
  }

  function update() {
    var bruto = parseInt($('salary-input').value) || 0;
    var pat = parseInt($('patrimony-input').value) || 0;
    var pais = $('pais').value;
    var ccaa = $('comunidad').value;
    var sit = $('situacion').value;
    var tipo = (document.querySelector('input[name="tipo-renta"]:checked') || {}).value || 'asalariado';

    // Origin: any country from PAISES
    var p = PAISES[pais];
    var origin = p ? p.calc(bruto, sit, tipo) : { irpf: 0, ss: 0, ip: 0, neto: bruto, tm: 0 };

    // Destination: always Spain
    var spain = calcES(bruto, ccaa, sit, tipo, pat);

    // Difference: positive = Spain is cheaper (user saves by moving to Spain)
    var diff = spain.neto - origin.neto;
    var absDiff = Math.abs(diff);

    // Origin card
    $('origin-neto').textContent = fmt(origin.neto);
    $('origin-ss').textContent = '-' + fmt(origin.ss);
    $('origin-irpf').textContent = '-' + fmt(origin.irpf);
    $('origin-tipo').textContent = pct(origin.tm);
    $('origin-bar').style.width = Math.min(origin.tm, 60) + '%';

    // Spain card
    $('spain-neto').textContent = fmt(spain.neto);
    $('spain-ss').textContent = '-' + fmt(spain.ss);
    $('spain-irpf').textContent = '-' + fmt(spain.irpf);
    $('spain-ip').textContent = (spain.ip > 0 ? '-' : '') + fmt(spain.ip);
    $('spain-tipo').textContent = pct(spain.tm);
    $('spain-bar').style.width = Math.min(spain.tm, 60) + '%';

    var ipRow = $('spain-ip-row');
    if (ipRow) ipRow.style.display = (pat > 0 && CCAA_SIN_PATRIMONIO.indexOf(ccaa) < 0) ? '' : 'none';

    // Savings
    $('ahorro-anual').textContent = fmt(absDiff);
    $('ahorro-mensual').textContent = fmt(absDiff / 12);
    $('ahorro-5').textContent = fmt(absDiff * 5);
    $('ahorro-10').textContent = fmt(absDiff * 10);

    // Banner: green if Spain cheaper, red if Spain more expensive
    var labelEl = $('savings-label-text');
    var banner = document.querySelector('.calc-savings-banner');
    if (diff >= 0) {
      if (labelEl) labelEl.textContent = 'Ahorrarías en España frente a tu país';
      if (banner) { banner.classList.remove('calc-savings-negative'); banner.classList.add('calc-savings-positive'); }
    } else {
      if (labelEl) labelEl.textContent = 'Pagarías más en España que en tu país actual';
      if (banner) { banner.classList.remove('calc-savings-positive'); banner.classList.add('calc-savings-negative'); }
    }
  }

  function init() {
    var ss = $('salary-slider'), si = $('salary-input');
    var ps = $('patrimony-slider'), pi = $('patrimony-input');

    ss.min = 0; ss.max = STEPS;
    ss.value = valToSlider(parseInt(si.value) || 50000);
    fillTrack(ss);
    fillTrack(ps);

    ss.addEventListener('input', function () { si.value = sliderToVal(parseInt(this.value)); fillTrack(this); update(); });
    si.addEventListener('input', function () { var v = Math.max(0, Math.min(500000, parseInt(this.value) || 0)); ss.value = valToSlider(v); fillTrack(ss); update(); });
    ps.addEventListener('input', function () { pi.value = parseInt(this.value); fillTrack(this); update(); });
    pi.addEventListener('input', function () { var v = Math.max(0, Math.min(5000000, parseInt(this.value) || 0)); ps.value = v; fillTrack(ps); update(); });

    $('pais').addEventListener('change', function () { updateOriginCard(this.value); update(); });
    $('comunidad').addEventListener('change', update);
    $('situacion').addEventListener('change', update);
    document.querySelectorAll('input[name="tipo-renta"]').forEach(function (r) {
      r.addEventListener('change', update);
    });

    updateOriginCard('francia');
    update();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
