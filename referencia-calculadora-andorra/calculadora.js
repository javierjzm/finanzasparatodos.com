(function () {
  'use strict';

  /* ================================================================
     SPAIN TAX DATA
     ================================================================ */

  var TRAMOS_ESTATAL = [
    { hasta: 12450,    tipo: 0.095 },
    { hasta: 20200,    tipo: 0.12  },
    { hasta: 35200,    tipo: 0.15  },
    { hasta: 60000,    tipo: 0.185 },
    { hasta: 300000,   tipo: 0.225 },
    { hasta: Infinity, tipo: 0.245 }
  ];

  var TRAMOS_AUTONOMICOS = {
    madrid: [
      { hasta: 12450,    tipo: 0.085 },
      { hasta: 17707.20, tipo: 0.107 },
      { hasta: 33007.20, tipo: 0.128 },
      { hasta: 53407.20, tipo: 0.174 },
      { hasta: Infinity,  tipo: 0.205 }
    ],
    cataluna: [
      { hasta: 12450,  tipo: 0.105 },
      { hasta: 17707,  tipo: 0.12  },
      { hasta: 33007,  tipo: 0.15  },
      { hasta: 53407,  tipo: 0.188 },
      { hasta: 90000,  tipo: 0.215 },
      { hasta: 120000, tipo: 0.235 },
      { hasta: 175000, tipo: 0.245 },
      { hasta: Infinity, tipo: 0.255 }
    ],
    andalucia: [
      { hasta: 12450,  tipo: 0.095 },
      { hasta: 20200,  tipo: 0.12  },
      { hasta: 28000,  tipo: 0.15  },
      { hasta: 35200,  tipo: 0.155 },
      { hasta: 50000,  tipo: 0.19  },
      { hasta: 60000,  tipo: 0.195 },
      { hasta: 120000, tipo: 0.235 },
      { hasta: Infinity, tipo: 0.245 }
    ],
    valencia: [
      { hasta: 12450,  tipo: 0.10  },
      { hasta: 17000,  tipo: 0.12  },
      { hasta: 30000,  tipo: 0.14  },
      { hasta: 50000,  tipo: 0.175 },
      { hasta: 65000,  tipo: 0.20  },
      { hasta: 80000,  tipo: 0.225 },
      { hasta: 120000, tipo: 0.245 },
      { hasta: Infinity, tipo: 0.255 }
    ],
    galicia: [
      { hasta: 12450,  tipo: 0.095 },
      { hasta: 20200,  tipo: 0.1175 },
      { hasta: 35200,  tipo: 0.1475 },
      { hasta: 60000,  tipo: 0.185 },
      { hasta: Infinity, tipo: 0.225 }
    ],
    'castilla-leon': [
      { hasta: 12450,  tipo: 0.095 },
      { hasta: 20200,  tipo: 0.12  },
      { hasta: 35200,  tipo: 0.14  },
      { hasta: 53407,  tipo: 0.185 },
      { hasta: Infinity, tipo: 0.215 }
    ],
    'pais-vasco': null,
    canarias: [
      { hasta: 12450,  tipo: 0.09  },
      { hasta: 17707,  tipo: 0.115 },
      { hasta: 33007,  tipo: 0.14  },
      { hasta: 53407,  tipo: 0.185 },
      { hasta: 90000,  tipo: 0.235 },
      { hasta: Infinity, tipo: 0.24 }
    ],
    'castilla-mancha': [
      { hasta: 12450,  tipo: 0.095 },
      { hasta: 20200,  tipo: 0.12  },
      { hasta: 35200,  tipo: 0.15  },
      { hasta: 60000,  tipo: 0.185 },
      { hasta: Infinity, tipo: 0.225 }
    ],
    murcia: [
      { hasta: 12450,  tipo: 0.095 },
      { hasta: 20200,  tipo: 0.12  },
      { hasta: 35200,  tipo: 0.15  },
      { hasta: 60000,  tipo: 0.185 },
      { hasta: 120000, tipo: 0.225 },
      { hasta: Infinity, tipo: 0.245 }
    ],
    aragon: [
      { hasta: 12450,  tipo: 0.10  },
      { hasta: 20200,  tipo: 0.125 },
      { hasta: 35200,  tipo: 0.155 },
      { hasta: 50000,  tipo: 0.19  },
      { hasta: 60000,  tipo: 0.21  },
      { hasta: 70000,  tipo: 0.219 },
      { hasta: 150000, tipo: 0.229 },
      { hasta: Infinity, tipo: 0.255 }
    ],
    extremadura: [
      { hasta: 12450,  tipo: 0.095 },
      { hasta: 20200,  tipo: 0.12  },
      { hasta: 35200,  tipo: 0.15  },
      { hasta: 60000,  tipo: 0.185 },
      { hasta: 80200,  tipo: 0.225 },
      { hasta: 99200,  tipo: 0.235 },
      { hasta: 120200, tipo: 0.245 },
      { hasta: Infinity, tipo: 0.25 }
    ],
    baleares: [
      { hasta: 10000,  tipo: 0.095 },
      { hasta: 18000,  tipo: 0.1175 },
      { hasta: 30000,  tipo: 0.1475 },
      { hasta: 48000,  tipo: 0.175 },
      { hasta: 70000,  tipo: 0.195 },
      { hasta: 90000,  tipo: 0.22  },
      { hasta: 120000, tipo: 0.235 },
      { hasta: 175000, tipo: 0.245 },
      { hasta: Infinity, tipo: 0.25 }
    ],
    asturias: [
      { hasta: 12450,  tipo: 0.10  },
      { hasta: 17707,  tipo: 0.12  },
      { hasta: 33007,  tipo: 0.14  },
      { hasta: 53407,  tipo: 0.185 },
      { hasta: 70000,  tipo: 0.215 },
      { hasta: 90000,  tipo: 0.225 },
      { hasta: 175000, tipo: 0.245 },
      { hasta: Infinity, tipo: 0.255 }
    ],
    navarra: null,
    cantabria: [
      { hasta: 12450,  tipo: 0.095 },
      { hasta: 20200,  tipo: 0.12  },
      { hasta: 35200,  tipo: 0.15  },
      { hasta: 46000,  tipo: 0.185 },
      { hasta: 60000,  tipo: 0.195 },
      { hasta: 90000,  tipo: 0.245 },
      { hasta: Infinity, tipo: 0.255 }
    ],
    rioja: [
      { hasta: 12450,  tipo: 0.095 },
      { hasta: 20200,  tipo: 0.116 },
      { hasta: 35200,  tipo: 0.146 },
      { hasta: 50000,  tipo: 0.188 },
      { hasta: 65000,  tipo: 0.219 },
      { hasta: 80000,  tipo: 0.249 },
      { hasta: Infinity, tipo: 0.279 }
    ]
  };

  var TRAMOS_NAVARRA = [
    { hasta: 4215,   tipo: 0.13   },
    { hasta: 11162,  tipo: 0.2206 },
    { hasta: 18777,  tipo: 0.25   },
    { hasta: 29355,  tipo: 0.28   },
    { hasta: 44880,  tipo: 0.3572 },
    { hasta: 65280,  tipo: 0.4002 },
    { hasta: 88680,  tipo: 0.4502 },
    { hasta: 162480, tipo: 0.4702 },
    { hasta: 306480, tipo: 0.4902 },
    { hasta: Infinity, tipo: 0.5202 }
  ];

  var TRAMOS_PAIS_VASCO = [
    { hasta: 16030,  tipo: 0.23 },
    { hasta: 32060,  tipo: 0.28 },
    { hasta: 48090,  tipo: 0.35 },
    { hasta: 68990,  tipo: 0.40 },
    { hasta: 99060,  tipo: 0.45 },
    { hasta: 174690, tipo: 0.46 },
    { hasta: Infinity, tipo: 0.49 }
  ];

  var TRAMOS_PATRIMONIO = [
    { hasta: 167129,  tipo: 0.002 },
    { hasta: 334252,  tipo: 0.003 },
    { hasta: 668499,  tipo: 0.005 },
    { hasta: 1336999, tipo: 0.009 },
    { hasta: 2673999, tipo: 0.013 },
    { hasta: 5347998, tipo: 0.017 },
    { hasta: Infinity, tipo: 0.025 }
  ];

  var CCAA_SIN_PATRIMONIO = ['madrid'];

  var CUOTAS_AUTONOMOS = [
    { hasta: 670,      cuota: 200 },
    { hasta: 900,      cuota: 270 },
    { hasta: 1166.70,  cuota: 294 },
    { hasta: 1300,     cuota: 294 },
    { hasta: 1500,     cuota: 294 },
    { hasta: 1700,     cuota: 294 },
    { hasta: 1850,     cuota: 310 },
    { hasta: 2030,     cuota: 315 },
    { hasta: 2330,     cuota: 320 },
    { hasta: 2760,     cuota: 330 },
    { hasta: 3190,     cuota: 340 },
    { hasta: 3620,     cuota: 350 },
    { hasta: 4050,     cuota: 370 },
    { hasta: 6000,     cuota: 420 },
    { hasta: Infinity, cuota: 590 }
  ];

  var TRAMOS_ANDORRA = [
    { hasta: 24000,    tipo: 0.00 },
    { hasta: 40000,    tipo: 0.05 },
    { hasta: Infinity, tipo: 0.10 }
  ];

  var SS_MAX_BASE = 56646;
  var SS_TIPO = 0.0647;
  var GASTOS_TRABAJO = 2000;
  var MINIMO_PERSONAL = 5550;
  var MINIMO_HIJOS = [0, 2400, 2700, 4000];

  /* ================================================================
     MULTI-COUNTRY TAX DATA
     ================================================================ */

  var PAISES = {
    francia: {
      nombre: 'Francia',
      bandera: '<svg viewBox="0 0 30 20"><rect x="0" width="10" height="20" fill="#002395"/><rect x="10" width="10" height="20" fill="#fff"/><rect x="20" width="10" height="20" fill="#ED2939"/></svg>',
      ssLabel: 'Cotisations',
      irpfLabel: 'Imp\u00f4t sur le revenu',
      barColor: '#002395',
      tramos: [
        { hasta: 11294,    tipo: 0 },
        { hasta: 28797,    tipo: 0.11 },
        { hasta: 82341,    tipo: 0.30 },
        { hasta: 177106,   tipo: 0.41 },
        { hasta: Infinity, tipo: 0.45 }
      ],
      calc: function (bruto, sit, tipo, pat) {
        var ssPct = tipo === 'autonomo' ? 0.245 : tipo === 'dividendos' ? 0 : 0.22;
        var ss = bruto * ssPct;
        var base = Math.max(0, bruto - ss);
        // Quotient familial: parts
        var parts = 1;
        if (casado(sit)) parts = 2;
        parts += numHijos(sit) * 0.5;
        var baseParPart = base / parts;
        var irpfPart = aplicarTramos(baseParPart, this.tramos);
        var irpf = irpfPart * parts;
        var neto = bruto - ss - irpf;
        var tm = bruto > 0 ? (ss + irpf) / bruto * 100 : 0;
        return { irpf: irpf, ss: ss, ip: 0, neto: neto, tm: tm };
      }
    },

    portugal: {
      nombre: 'Portugal',
      bandera: '<svg viewBox="0 0 30 20"><rect x="0" width="12" height="20" fill="#006600"/><rect x="12" width="18" height="20" fill="#FF0000"/><circle cx="12" cy="10" r="4" fill="#FFCC00"/></svg>',
      ssLabel: 'Seg. Social',
      irpfLabel: 'IRS',
      barColor: '#FF0000',
      tramos: [
        { hasta: 7703,     tipo: 0.145 },
        { hasta: 11623,    tipo: 0.21  },
        { hasta: 16472,    tipo: 0.265 },
        { hasta: 21321,    tipo: 0.285 },
        { hasta: 27146,    tipo: 0.35  },
        { hasta: 39791,    tipo: 0.37  },
        { hasta: 51997,    tipo: 0.435 },
        { hasta: 81199,    tipo: 0.45  },
        { hasta: Infinity, tipo: 0.48  }
      ],
      calc: function (bruto, sit, tipo, pat) {
        var ss = tipo === 'dividendos' ? 0 : bruto * 0.11;
        var base = Math.max(0, bruto - ss);
        var irpf = aplicarTramos(base, this.tramos);
        var neto = bruto - ss - irpf;
        var tm = bruto > 0 ? (ss + irpf) / bruto * 100 : 0;
        return { irpf: irpf, ss: ss, ip: 0, neto: neto, tm: tm };
      }
    },

    italia: {
      nombre: 'Italia',
      bandera: '<svg viewBox="0 0 30 20"><rect x="0" width="10" height="20" fill="#009246"/><rect x="10" width="10" height="20" fill="#fff"/><rect x="20" width="10" height="20" fill="#CE2B37"/></svg>',
      ssLabel: 'Contributi INPS',
      irpfLabel: 'IRPEF',
      barColor: '#009246',
      tramos: [
        { hasta: 28000,    tipo: 0.23 },
        { hasta: 50000,    tipo: 0.35 },
        { hasta: Infinity, tipo: 0.43 }
      ],
      calc: function (bruto, sit, tipo, pat) {
        var ssPct = tipo === 'autonomo' ? 0.2572 : tipo === 'dividendos' ? 0 : 0.0919;
        var ss = bruto * ssPct;
        var base = Math.max(0, bruto - ss);
        var irpf = aplicarTramos(base, this.tramos);
        // Detrazioni per lavoro dipendente (simplified)
        if (tipo === 'asalariado' && bruto <= 50000) {
          irpf = Math.max(0, irpf - 1955);
        }
        var neto = bruto - ss - irpf;
        var tm = bruto > 0 ? (ss + irpf) / bruto * 100 : 0;
        return { irpf: irpf, ss: ss, ip: 0, neto: neto, tm: tm };
      }
    },

    alemania: {
      nombre: 'Alemania',
      bandera: '<svg viewBox="0 0 30 20"><rect y="0" width="30" height="6.67" fill="#000"/><rect y="6.67" width="30" height="6.67" fill="#DD0000"/><rect y="13.33" width="30" height="6.67" fill="#FFCC00"/></svg>',
      ssLabel: 'Sozialabgaben',
      irpfLabel: 'Einkommensteuer',
      barColor: '#DD0000',
      calc: function (bruto, sit, tipo, pat) {
        // SS employee: health 7.3%, pension 9.3%, unemployment 1.3%, care 1.7% ≈ 19.6% (capped)
        var ssCap = 69600; // approximate max contribution base
        var ssPct = tipo === 'autonomo' ? 0.196 : tipo === 'dividendos' ? 0 : 0.196;
        var ss = Math.min(bruto, ssCap) * ssPct;
        if (tipo === 'dividendos') ss = 0;

        // Progressive formula (simplified zone model)
        var base = Math.max(0, bruto - ss);
        var irpf = 0;
        if (base <= 11604) {
          irpf = 0;
        } else if (base <= 17005) {
          var y = (base - 11604) / 10000;
          irpf = (922.98 * y + 1400) * y;
        } else if (base <= 66760) {
          var y2 = (base - 17005) / 10000;
          irpf = (181.19 * y2 + 2397) * y2 + 1025.38;
        } else if (base <= 277825) {
          irpf = 0.42 * base - 10602.13;
        } else {
          irpf = 0.45 * base - 18936.88;
        }
        irpf = Math.max(0, irpf);
        // Solidaritätszuschlag 5.5% of IRPF (only if IRPF > 18130)
        var soli = irpf > 18130 ? irpf * 0.055 : 0;
        irpf += soli;

        // Joint filing for married
        if (casado(sit)) {
          var halfBase = base / 2;
          var halfIrpf = 0;
          if (halfBase <= 11604) halfIrpf = 0;
          else if (halfBase <= 17005) { var y3 = (halfBase - 11604) / 10000; halfIrpf = (922.98 * y3 + 1400) * y3; }
          else if (halfBase <= 66760) { var y4 = (halfBase - 17005) / 10000; halfIrpf = (181.19 * y4 + 2397) * y4 + 1025.38; }
          else if (halfBase <= 277825) halfIrpf = 0.42 * halfBase - 10602.13;
          else halfIrpf = 0.45 * halfBase - 18936.88;
          halfIrpf = Math.max(0, halfIrpf);
          var halfSoli = halfIrpf > 18130 ? halfIrpf * 0.055 : 0;
          irpf = (halfIrpf + halfSoli) * 2;
        }

        var neto = bruto - ss - irpf;
        var tm = bruto > 0 ? (ss + irpf) / bruto * 100 : 0;
        return { irpf: irpf, ss: ss, ip: 0, neto: neto, tm: tm };
      }
    },

    uk: {
      nombre: 'Reino Unido',
      bandera: '<svg viewBox="0 0 30 20"><rect width="30" height="20" fill="#012169"/><path d="M0,0 L30,20 M30,0 L0,20" stroke="#fff" stroke-width="3"/><path d="M0,0 L30,20 M30,0 L0,20" stroke="#C8102E" stroke-width="1.5"/><path d="M15,0 V20 M0,10 H30" stroke="#fff" stroke-width="5"/><path d="M15,0 V20 M0,10 H30" stroke="#C8102E" stroke-width="3"/></svg>',
      ssLabel: 'National Insurance',
      irpfLabel: 'Income Tax',
      barColor: '#012169',
      calc: function (bruto, sit, tipo, pat) {
        var GBP = 0.855; // 1 EUR → GBP
        var brutoGBP = bruto * GBP;

        // National Insurance (employee)
        var ni = 0;
        if (tipo !== 'dividendos') {
          var weekly = brutoGBP / 52;
          var threshold = 242; // per week
          var upperLimit = 967; // per week
          if (weekly > threshold) {
            ni = Math.min(weekly, upperLimit) - threshold;
            ni *= 0.08;
            if (weekly > upperLimit) ni += (weekly - upperLimit) * 0.02;
            ni *= 52;
          }
        }

        // Income Tax
        var personalAllowance = 12570;
        if (brutoGBP > 100000) personalAllowance = Math.max(0, 12570 - (brutoGBP - 100000) / 2);
        var taxable = Math.max(0, brutoGBP - personalAllowance);
        var irpfGBP = 0;
        if (taxable <= 37700) {
          irpfGBP = taxable * 0.20;
        } else if (taxable <= 125140 - personalAllowance) {
          irpfGBP = 37700 * 0.20 + (taxable - 37700) * 0.40;
        } else {
          var band1 = 37700 * 0.20;
          var topStart = 125140 - personalAllowance;
          var band2 = Math.max(0, Math.min(taxable, topStart) - 37700) * 0.40;
          var band3 = Math.max(0, taxable - topStart) * 0.45;
          irpfGBP = band1 + band2 + band3;
        }

        var ssEUR = ni / GBP;
        var irpfEUR = irpfGBP / GBP;
        var neto = bruto - ssEUR - irpfEUR;
        var tm = bruto > 0 ? (ssEUR + irpfEUR) / bruto * 100 : 0;
        return { irpf: irpfEUR, ss: ssEUR, ip: 0, neto: neto, tm: tm };
      }
    },

    rusia: {
      nombre: 'Rusia',
      bandera: '<svg viewBox="0 0 30 20"><rect y="0" width="30" height="6.67" fill="#fff"/><rect y="6.67" width="30" height="6.67" fill="#0039A6"/><rect y="13.33" width="30" height="6.67" fill="#D52B1E"/></svg>',
      ssLabel: 'Cotizaciones',
      irpfLabel: 'NDFL',
      barColor: '#0039A6',
      calc: function (bruto, sit, tipo, pat) {
        // SS is employer-side in Russia, not deducted from employee
        var ss = 0;
        // NDFL: 13% up to 5M RUB (~50k EUR), 15% above
        var threshold = 50000; // ~5M RUB in EUR
        var irpf;
        if (bruto <= threshold) {
          irpf = bruto * 0.13;
        } else {
          irpf = threshold * 0.13 + (bruto - threshold) * 0.15;
        }
        if (tipo === 'dividendos') irpf = bruto * 0.13;
        var neto = bruto - ss - irpf;
        var tm = bruto > 0 ? (ss + irpf) / bruto * 100 : 0;
        return { irpf: irpf, ss: ss, ip: 0, neto: neto, tm: tm };
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
  function pct(n) { return n.toFixed(1).replace('.', ',') + '%'; }

  /* ================================================================
     ANDORRA
     ================================================================ */

  function calcAD(bruto, sit, tipo) {
    var cass = tipo === 'autonomo' ? bruto * 0.16 : tipo === 'dividendos' ? 0 : bruto * 0.06;
    var ded = casado(sit) ? 1800 : 0;
    ded += 750 * numHijos(sit);
    var base = Math.max(0, bruto - cass - ded);
    var irpf = aplicarTramos(base, TRAMOS_ANDORRA);
    var neto = bruto - cass - irpf;
    var tm = bruto > 0 ? (cass + irpf) / bruto * 100 : 0;
    return { irpf: irpf, cass: cass, neto: neto, tm: tm };
  }

  /* ================================================================
     SPAIN
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
    var tm = bruto > 0 ? (ss + irpf + ip) / bruto * 100 : 0;
    return { irpf: irpf, ss: ss, ip: ip, neto: neto, tm: tm };
  }

  /* ================================================================
     GENERIC COUNTRY CALC
     ================================================================ */

  function calcPais(pais, bruto, sit, tipo, pat) {
    var p = PAISES[pais];
    if (!p) return { irpf: 0, ss: 0, ip: 0, neto: bruto, tm: 0 };
    return p.calc(bruto, sit, tipo, pat);
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
     ANIMATION
     ================================================================ */

  var anims = {};

  function anim(el, end, pre, suf, dur) {
    if (!el) return;
    var id = el.id;
    if (anims[id]) cancelAnimationFrame(anims[id]);
    var start = parseFloat(el.dataset.v) || 0;
    var t0 = performance.now();
    function step(now) {
      var p = Math.min((now - t0) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      var cur = start + (end - start) * e;
      el.textContent = pre + Math.round(cur).toLocaleString('es-ES') + suf;
      el.dataset.v = cur;
      if (p < 1) anims[id] = requestAnimationFrame(step);
      else { el.textContent = pre + Math.round(end).toLocaleString('es-ES') + suf; el.dataset.v = end; delete anims[id]; }
    }
    anims[id] = requestAnimationFrame(step);
  }

  /* ================================================================
     UI
     ================================================================ */

  var $ = function (id) { return document.getElementById(id); };

  var ESPANA_BANDERA = '<svg viewBox="0 0 30 20"><rect width="30" height="20" fill="#c60b1e"/><rect y="5" width="30" height="10" fill="#ffc400"/></svg>';

  var COUNTRY_I18N_MAP = {
    espana: 'c_espana', francia: 'c_francia', portugal: 'c_portugal',
    italia: 'c_italia', alemania: 'c_alemania', uk: 'c_uk', rusia: 'c_rusia'
  };

  function _t(key) {
    return (window._i18n && window._i18n.t) ? window._i18n.t(key) : key;
  }

  function updateCountryCard(pais) {
    var cardEl = document.querySelector('.card-origin');
    var nameEl = $('origin-name');
    var flagEl = $('origin-flag');
    var ssLabel = $('origin-ss-label');
    var irpfLabel = $('origin-irpf-label');
    var ccaaW = $('ccaa-wrapper');
    var barFill = $('origin-bar');

    if (pais === 'espana') {
      nameEl.textContent = _t('c_espana');
      flagEl.innerHTML = ESPANA_BANDERA;
      ssLabel.textContent = _t('card_ss');
      irpfLabel.textContent = _t('card_irpf');
      ccaaW.classList.remove('hidden');
      barFill.className = 'tax-bar-fill';
      barFill.style.background = '#E63946';
      cardEl.style.borderColor = 'rgba(230,57,70,.35)';
    } else {
      var p = PAISES[pais];
      nameEl.textContent = _t(COUNTRY_I18N_MAP[pais] || p.nombre);
      flagEl.innerHTML = p.bandera;
      ssLabel.textContent = p.ssLabel;
      irpfLabel.textContent = p.irpfLabel;
      ccaaW.classList.add('hidden');
      barFill.className = 'tax-bar-fill';
      barFill.style.background = p.barColor;
      cardEl.style.borderColor = p.barColor.replace(')', ',.35)').replace('rgb', 'rgba');
      if (cardEl.style.borderColor.indexOf('rgba') < 0) {
        cardEl.style.borderColor = 'rgba(150,150,150,.35)';
      }
    }
  }

  function update() {
    var bruto = parseInt($('salary-input').value) || 0;
    var pat   = parseInt($('patrimony-input').value) || 0;
    var pais  = $('pais').value;
    var ccaa  = $('comunidad').value;
    var sit   = $('situacion').value;
    var tipo  = (document.querySelector('input[name="tipo-renta"]:checked') || {}).value || 'asalariado';

    // Calculate origin country
    var origin;
    if (pais === 'espana') {
      origin = calcES(bruto, ccaa, sit, tipo, pat);
    } else {
      origin = calcPais(pais, bruto, sit, tipo, pat);
    }

    var ad = calcAD(bruto, sit, tipo);
    var ahorro = Math.max(0, ad.neto - origin.neto);
    var D = 500;

    // Origin card
    anim($('origin-neto'), origin.neto, '', ' €', D);
    anim($('origin-ss'), origin.ss, '-', ' €', D);
    anim($('origin-irpf'), origin.irpf, '-', ' €', D);
    anim($('origin-ip'), origin.ip, origin.ip > 0 ? '-' : '', ' €', D);
    $('origin-tipo').textContent = pct(origin.tm);
    $('origin-bar').style.width = Math.min(origin.tm, 60) + '%';

    var ipRow = $('origin-ip-row');
    if (ipRow) ipRow.style.display = (pais === 'espana' && pat > 0) ? '' : 'none';

    // Andorra card
    anim($('ad-neto'), ad.neto, '', ' €', D);
    anim($('ad-cass'), ad.cass, '-', ' €', D);
    anim($('ad-irpf'), ad.irpf, '-', ' €', D);
    $('ad-tipo').textContent = pct(ad.tm);
    $('ad-bar').style.width = Math.min(ad.tm, 60) + '%';

    // Savings
    anim($('ahorro-anual'), ahorro, '', ' €', D);
    anim($('ahorro-mensual'), ahorro / 12, '', ' €', D);
    anim($('ahorro-5'), ahorro * 5, '', ' €', D);
    anim($('ahorro-10'), ahorro * 10, '', ' €', D);
  }

  /* ================================================================
     SLIDER SYNC
     ================================================================ */

  function fillTrack(slider) {
    var p = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.background = 'linear-gradient(to right, #F0A500 0%, #F0A500 ' + p + '%, #30363D ' + p + '%, #30363D 100%)';
  }

  function initSliders() {
    var ss = $('salary-slider'), si = $('salary-input');
    var ps = $('patrimony-slider'), pi = $('patrimony-input');

    ss.min = 0; ss.max = STEPS;
    ss.value = valToSlider(parseInt(si.value) || 50000);
    fillTrack(ss);

    ss.addEventListener('input', function () { si.value = sliderToVal(parseInt(this.value)); fillTrack(this); update(); });
    si.addEventListener('input', function () { var v = Math.max(0, Math.min(500000, parseInt(this.value) || 0)); ss.value = valToSlider(v); fillTrack(ss); update(); });

    fillTrack(ps);
    ps.addEventListener('input', function () { pi.value = parseInt(this.value); fillTrack(this); update(); });
    pi.addEventListener('input', function () { var v = Math.max(0, Math.min(5000000, parseInt(this.value) || 0)); ps.value = v; fillTrack(ps); update(); });
  }

  /* ================================================================
     COOKIES
     ================================================================ */

  function initCookies() {
    var c = localStorage.getItem('cookie_consent');
    if (!c) setTimeout(function () { $('cookie-banner').classList.add('visible'); }, 800);
    if (c === 'accepted') loadAds();
  }

  function pushAdsenseSlots() {
    document.querySelectorAll('ins.adsbygoogle').forEach(function () {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
    });
  }

  function loadAds() {
    if (document.documentElement.getAttribute('data-adsense-pushed') === '1') return;
    document.documentElement.setAttribute('data-adsense-pushed', '1');
    var headScript = document.querySelector('script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]');
    if (headScript) {
      if (window.adsbygoogle && window.adsbygoogle.loaded) pushAdsenseSlots();
      else headScript.addEventListener('load', pushAdsenseSlots);
      return;
    }
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8300766188725023';
    s.crossOrigin = 'anonymous';
    s.onload = pushAdsenseSlots;
    document.head.appendChild(s);
  }

  /* ================================================================
     FAQ
     ================================================================ */

  function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = this.closest('.faq-item');
        var open = item.classList.contains('active');
        document.querySelectorAll('.faq-item.active').forEach(function (el) {
          el.classList.remove('active');
          el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });
        if (!open) { item.classList.add('active'); this.setAttribute('aria-expanded', 'true'); }
      });
    });
  }

  /* ================================================================
     CUSTOM COUNTRY DROPDOWN
     ================================================================ */

  function initCountryDropdown() {
    var dropdown = document.getElementById('pais-dropdown');
    if (!dropdown) return;
    var trigger = dropdown.querySelector('.custom-select-trigger');
    var optionsList = dropdown.querySelector('.custom-select-options');
    var hiddenInput = document.getElementById('pais');
    var flagInTrigger = trigger.querySelector('.flag-icon');
    var textInTrigger = trigger.querySelector('.custom-select-text');

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = dropdown.classList.contains('open');
      closeAllDropdowns();
      if (!isOpen) {
        dropdown.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });

    optionsList.querySelectorAll('li').forEach(function (li) {
      li.addEventListener('click', function (e) {
        e.stopPropagation();
        var val = this.getAttribute('data-value');
        var flag = this.querySelector('.flag-icon');

        hiddenInput.value = val;
        textInTrigger.textContent = this.textContent.trim();
        if (flag) flagInTrigger.outerHTML = flag.outerHTML;
        flagInTrigger = trigger.querySelector('.flag-icon');

        optionsList.querySelectorAll('li').forEach(function (l) { l.classList.remove('selected'); });
        this.classList.add('selected');

        dropdown.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');

        updateCountryCard(val);
        update();
      });
    });

    document.addEventListener('click', function () { closeAllDropdowns(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeAllDropdowns();
    });
  }

  function closeAllDropdowns() {
    document.querySelectorAll('.custom-select.open').forEach(function (d) {
      d.classList.remove('open');
      d.querySelector('.custom-select-trigger').setAttribute('aria-expanded', 'false');
    });
  }

  /* ================================================================
     INIT
     ================================================================ */

  function init() {
    initSliders();
    initFAQ();
    initCookies();

    $('accept-cookies').addEventListener('click', function () {
      localStorage.setItem('cookie_consent', 'accepted');
      $('cookie-banner').classList.remove('visible');
      loadAds();
    });
    $('reject-cookies').addEventListener('click', function () {
      localStorage.setItem('cookie_consent', 'essential');
      $('cookie-banner').classList.remove('visible');
    });

    initCountryDropdown();
    $('comunidad').addEventListener('change', update);
    $('situacion').addEventListener('change', update);
    document.querySelectorAll('input[name="tipo-renta"]').forEach(function (r) {
      r.addEventListener('change', update);
    });

    updateCountryCard('espana');
    update();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
