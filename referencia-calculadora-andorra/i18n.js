(function () {
  'use strict';

  var T = {
    ca: {
      // Meta & SEO
      meta_title: "Calculadora d'impostos Andorra 2026 — simulador IRPF | .ad (català i castellà)",
      meta_desc: "Calculadora fiscal i simulador d'impostos gratuït (.ad): calcular impostos, simular IRPF i veure l'estalvi fiscal a Andorra vs el teu país (Espanya, França, Portugal, Itàlia, Alemanya, Regne Unit o Rússia). Interfície en català i castellà. 2026.",
      og_title: "Calculadora d'impostos Andorra — simulador fiscal (català i castellà)",
      og_desc: "Web del Principat: calcular impostos i estalvi fiscal amb simulador IRPF. CA / ES + EN / FR.",

      // Nav
      nav_comp: "Comparativa",
      nav_faq: "FAQ",
      nav_guides: "Guies",
      logo_aria: "Inici — calculadora fiscal Andorra (fiscalandorra.ad)",

      // H1
      h1: "Calculadora d'impostos Andorra 2026 — simulador IRPF i estalvi fiscal: comparativa amb Espanya, França, Portugal, Itàlia, Alemanya, UK i Rússia (català i castellà)",

      // Inputs
      lbl_salary: "Sou brut anual",
      lbl_country: "El teu país",
      lbl_ccaa: "Comunitat",
      lbl_situation: "Situació",
      lbl_income: "Tipus de renda",
      lbl_patrimony: "Patrimoni net",
      opt_single: "Solter/a",
      opt_married0: "Casat/da sense fills",
      opt_married1: "Casat/da 1 fill",
      opt_married2: "Casat/da 2+ fills",
      pill_employee: "Assalariat",
      pill_self: "Autònom",
      pill_capital: "Capital",

      // Country names
      c_espana: "Espanya",
      c_francia: "França",
      c_portugal: "Portugal",
      c_italia: "Itàlia",
      c_alemania: "Alemanya",
      c_uk: "Regne Unit",
      c_rusia: "Rússia",

      // Savings
      savings_label: "Estalviaries a Andorra",
      savings_year: "/any",
      savings_month: "/mes",
      savings_5y: "en 5 anys",
      savings_10y: "en 10 anys",

      // Cards
      card_ss: "Seg. Social",
      card_irpf: "IRPF",
      card_ip: "I. Patrimoni",
      card_effective: "Tipus efectiu",
      card_cass: "CASS",

      // Table
      tbl_title: "Comparativa ràpida: Espanya vs Andorra",
      tbl_subtitle: "Estimació per a assalariat solter, residència a Madrid. No inclou cost de vida.",
      tbl_gross: "Brut",
      tbl_net_es: "Net Espanya",
      tbl_net_ad: "Net Andorra",
      tbl_saving_yr: "Estalvi/any",
      tbl_saving_10: "Estalvi 10a",

      // Info fiscal
      info_title: "Com funciona el sistema fiscal a Andorra?",
      info_p1: "Andorra compta amb un dels sistemes fiscals més atractius d'Europa. El seu Impost sobre la Renda de les Persones Físiques (IRPF) va entrar en vigor el 2015 i es caracteritza per una estructura de tipus molt reduïts en comparació amb la majoria de països europeus. Els primers <strong>24.000 € de renda anual estan completament exempts de tributació</strong>, cosa que significa que un resident fiscal andorrà amb ingressos moderats pot no pagar res d'IRPF.",
      info_p2: "Per a rendes entre 24.001 € i 40.000 €, s'aplica un tipus del <strong>5%</strong>. A partir de 40.000 €, el tipus marginal màxim és del <strong>10%</strong> — una xifra que contrasta enormement amb el tipus marginal màxim espanyol, que pot arribar al 47% a nivell estatal o fins i tot superar el 50% en comunitats autònomes com Catalunya o València.",
      info_p3: "Quant a la <strong>Seguretat Social andorrana (CASS)</strong>, la cotització del treballador assalariat és del 6% sobre el salari brut, lleugerament inferior al 6,47% que s'aplica a Espanya. Els treballadors autònoms (compte propi) cotitzen aproximadament un 16% sobre la seva base reguladora, una xifra comparable amb el sistema espanyol de quotes per ingressos reals vigent des del 2023.",
      info_p4: "Un dels punts més rellevants per a contribuents amb patrimoni elevat és l'<strong>absència total d'impost sobre el patrimoni a Andorra</strong>. A Espanya, a partir de 700.000 € de patrimoni net (més 300.000 € d'exempció per habitatge habitual), s'apliquen tipus progressius que van del 0,2% al 2,5%. Només la Comunitat de Madrid bonifica el 100% d'aquest impost. Andorra, en canvi, no grava en absolut la riquesa acumulada, cosa que suposa un estalvi fiscal molt significatiu per a perfils d'alta renda i patrimoni.",
      info_p5: "A més, Andorra no aplica impost sobre successions i donacions, i el tipus general de l'Impost General Indirecte (IGI, equivalent a l'IVA) és de només un 4,5%, davant el 21% de l'IVA general a Espanya. En resum, el sistema fiscal andorrà està dissenyat per atreure residents amb activitat econòmica real, oferint una càrrega tributària substancialment menor dins d'un marc legal plenament compatible amb els estàndards internacionals de transparència.",

      // Requisitos
      req_title: "Quins requisits hi ha per a la residència fiscal a Andorra?",
      req_intro: "Traslladar la residència fiscal a Andorra és un procés legal i regulat. Aquests són els requisits principals que has de complir:",
      req_1: "<strong>Permanència mínima de 183 dies l'any</strong> en territori andorrà, o demostrar que el nucli principal d'activitats o interessos econòmics es troba a Andorra.",
      req_2: "<strong>Obtenir un permís de residència activa</strong> — requereix constituir o participar en una societat andorrana, o exercir una activitat professional per compte aliè o propi.",
      req_3: "<strong>Dipòsit a l'AFA</strong> (Autoritat Financera Andorrana) de 50.000 € com a garantia, més 10.000 € per cada dependent.",
      req_4: "<strong>Assegurança mèdica</strong> privada o pública (CASS) que cobreixi l'estada a Andorra.",
      req_5: "<strong>Lloguer o compra d'habitatge</strong> al Principat d'Andorra.",
      req_6: "<strong>Comunicació a l'Agència Tributària espanyola</strong> mitjançant el model 030 per informar del canvi de domicili fiscal i baixa censal.",
      req_7: "<strong>Conveni de doble imposició</strong> Espanya-Andorra (en vigor des del 2015) que evita la doble tributació sobre els mateixos ingressos.",
      req_note: "<strong>Nota sobre la clàusula anti-abús:</strong> L'article 8.2 de la Llei de l'IRPF espanyola estableix que els contribuents que traslladin la seva residència a un paradís fiscal o territori de baixa tributació segueixen tributant a Espanya durant els 4 anys fiscals següents. No obstant, <strong>Andorra va deixar d'estar a la llista de paradisos fiscals d'Espanya el 2010</strong> i, des de la signatura del conveni de doble imposició el 2015, aquesta clàusula no s'aplica al trasllat a Andorra, sempre que s'acrediti la residència real i efectiva al Principat.",

      // FAQ
      faq_title: "Preguntes freqüents sobre fiscalitat a Andorra",
      faq_q1: "Quant es paga d'IRPF a Andorra?",
      faq_a1: "A Andorra, els primers 24.000 € de renda estan exempts d'IRPF (tipus 0%). De 24.001 € a 40.000 € s'aplica un 5%, i a partir de 40.000 € el tipus és del 10%. El tipus màxim de l'IRPF andorrà és del 10%, davant el 47% que pot arribar a Espanya.",
      faq_q2: "Quants dies cal viure a Andorra per tributar-hi?",
      faq_a2: "Per ser resident fiscal a Andorra cal romandre almenys 183 dies l'any al país. També es pot acreditar la residència demostrant que el nucli principal d'activitats o interessos econòmics és a Andorra.",
      faq_q3: "És legal traslladar la residència fiscal a Andorra?",
      faq_a3: "Sí, és completament legal. Andorra té conveni de doble imposició amb Espanya des del 2015. Perquè el trasllat sigui efectiu cal complir els requisits de residència real (183 dies) i comunicar-ho correctament a l'Agència Tributària espanyola mitjançant el model 030.",
      faq_q4: "Andorra té impost sobre el patrimoni?",
      faq_a4: "No. Andorra no té impost sobre el patrimoni. Espanya sí que l'aplica a patrimonis superiors a 700.000 €, amb tipus d'entre el 0,2% i el 2,5%. Per a contribuents amb patrimoni elevat, aquest és un dels majors incentius del trasllat fiscal a Andorra.",
      faq_q5: "Quin és el tipus màxim d'IRPF a Andorra?",
      faq_a5: "El tipus màxim de l'IRPF andorrà és del 10%. En comparació, el tipus marginal màxim a Espanya pot arribar al 47% (estatal + autonòmic), o fins i tot al 54% en algunes comunitats autònomes.",
      faq_q6: "Què és la CASS a Andorra?",
      faq_a6: "La CASS (Caixa Andorrana de Seguretat Social) és l'equivalent a la Seguretat Social a Andorra. La cotització del treballador és del 6% sobre el salari brut, davant el 6,47% a Espanya per a assalariats. Els autònoms cotitzen aproximadament un 16%.",

      // Cómo usar
      how_title: "Com calcular impostos amb aquesta calculadora fiscal?",
      how_p: "Amb aquest <strong>simulador d'impostos</strong> i <strong>simulador IRPF</strong> per al Principat és molt senzill estimar la teva càrrega tributària. Introdueix el teu <strong>sou brut anual</strong> mitjançant el lliscador o escrivint la xifra directament. Si tens un patrimoni superior a 700.000 €, indica'l perquè el càlcul inclogui l'Impost sobre el Patrimoni que pagaries a Espanya i que no existeix a Andorra. Selecciona la teva <strong>comunitat autònoma</strong> actual, la teva situació familiar i si ets assalariat, autònom o percebs rendes del capital. Els resultats mostren una estimació de l'<strong>estalvi d'impostos</strong> si tributessis a Andorra. Per contactar <strong>gestories o assessors del país</strong>, el <strong>català</strong> sol ser molt valorat en el primer contacte; també pots fer-ho en castellà. Recorda: dades orientatives; qualsevol trasllat de residència fiscal requereix assessorament professional.",

      // CTA
      cta_title: "Ets una gestoria especialitzada en residència andorrana?",
      cta_p: "Apareix aquí davant persones que estudien el trasllat fiscal al Principat. Les gestories locals reben sovint consultes en català i castellà. Places limitades.",
      cta_btn: "Sol·licitar informació",

      // Footer
      foot_home: "Inici",
      foot_guides: "Guies",
      foot_about: "Sobre el lloc",
      foot_legal: "Avís Legal",
      foot_privacy: "Privacitat",
      foot_cookies: "Cookies",
      foot_disclaimer: "Calculadora orientativa. Estimacions basades en normativa fiscal 2026. Consulta amb un assessor fiscal per al teu cas concret.",

      guides_teaser_title: "Guies fiscals",
      guides_teaser_text: "Articles en castellà (SEO) sobre IRPF, residència, patrimoni i CASS; la calculadora és en català i castellà.",
      guides_teaser_link: "Veure totes les guies",

      // Cookies
      cookie_text: "Fem servir cookies de tercers (AdSense) per mostrar publicitat.",
      cookie_more: "Política de cookies: més informació",
      cookie_accept: "Acceptar",
      cookie_reject: "Només essencials"
    },

    es: {
      meta_title: "Calcular impuestos Andorra 2026 — simulador IRPF | .ad catalán y español",
      meta_desc: "Calculadora fiscal gratuita del Principado (.ad): calcular impuestos, simular IRPF y ver el ahorro fiscal frente a España, Francia, Portugal, Italia, Alemania, Reino Unido o Rusia. Interfaz en catalán y español (también EN/FR). 2026.",
      og_title: "Calcular impuestos Andorra — catalán y español (.ad)",
      og_desc: "Simulador IRPF y calculadora fiscal del Principado: ahorro tributario vs tu país. Interfaz en catalán y castellano.",

      nav_comp: "Comparativa",
      nav_faq: "FAQ",
      nav_guides: "Guías",
      logo_aria: "Inicio — calculadora fiscal Andorra (fiscalandorra.ad)",

      h1: "Calcular impuestos en Andorra (2026) — simulador IRPF y ahorro fiscal vs España, Francia, Portugal, Italia, Alemania, UK y Rusia (catalán y español)",

      lbl_salary: "Sueldo bruto anual",
      lbl_country: "Tu país",
      lbl_ccaa: "Comunidad",
      lbl_situation: "Situación",
      lbl_income: "Tipo de renta",
      lbl_patrimony: "Patrimonio neto",
      opt_single: "Soltero/a",
      opt_married0: "Casado/a sin hijos",
      opt_married1: "Casado/a 1 hijo",
      opt_married2: "Casado/a 2+ hijos",
      pill_employee: "Asalariado",
      pill_self: "Autónomo",
      pill_capital: "Capital",

      c_espana: "España",
      c_francia: "Francia",
      c_portugal: "Portugal",
      c_italia: "Italia",
      c_alemania: "Alemania",
      c_uk: "Reino Unido",
      c_rusia: "Rusia",

      savings_label: "Ahorrarías en Andorra",
      savings_year: "/año",
      savings_month: "/mes",
      savings_5y: "en 5 años",
      savings_10y: "en 10 años",

      card_ss: "Seg. Social",
      card_irpf: "IRPF",
      card_ip: "I. Patrimonio",
      card_effective: "Tipo efectivo",
      card_cass: "CASS",

      tbl_title: "Comparativa rápida: España vs Andorra",
      tbl_subtitle: "Estimación para asalariado soltero, residencia en Madrid. No incluye coste de vida.",
      tbl_gross: "Bruto",
      tbl_net_es: "Neto España",
      tbl_net_ad: "Neto Andorra",
      tbl_saving_yr: "Ahorro/año",
      tbl_saving_10: "Ahorro 10a",

      info_title: "¿Cómo funciona el sistema fiscal en Andorra?",
      info_p1: "Andorra cuenta con uno de los sistemas fiscales más atractivos de Europa. Su Impuesto sobre la Renta de las Personas Físicas (IRPF) entró en vigor en 2015 y se caracteriza por una estructura de tipos muy reducidos en comparación con la mayoría de países europeos. Los primeros <strong>24.000 € de renta anual están completamente exentos de tributación</strong>, lo que significa que un residente fiscal andorrano con ingresos moderados puede no pagar nada de IRPF.",
      info_p2: "Para rentas entre 24.001 € y 40.000 €, se aplica un tipo del <strong>5%</strong>. A partir de 40.000 €, el tipo marginal máximo es del <strong>10%</strong> — una cifra que contrasta enormemente con el tipo marginal máximo español, que puede alcanzar el 47% a nivel estatal o incluso superar el 50% en comunidades autónomas como Cataluña o Valencia.",
      info_p3: "En cuanto a la <strong>Seguridad Social andorrana (CASS)</strong>, la cotización del trabajador asalariado es del 6% sobre el salario bruto, ligeramente inferior al 6,47% que se aplica en España. Los trabajadores autónomos (compte propi) cotizan aproximadamente un 16% sobre su base reguladora, una cifra comparable con el sistema español de cuotas por ingresos reales vigente desde 2023.",
      info_p4: "Uno de los puntos más relevantes para contribuyentes con patrimonio elevado es la <strong>ausencia total de impuesto sobre el patrimonio en Andorra</strong>. En España, a partir de 700.000 € de patrimonio neto (más 300.000 € de exención por vivienda habitual), se aplican tipos progresivos que van del 0,2% al 2,5%. Solo la Comunidad de Madrid bonifica el 100% de este impuesto. Andorra, por el contrario, no grava en absoluto la riqueza acumulada, lo que supone un ahorro fiscal muy significativo para perfiles de alta renta y patrimonio.",
      info_p5: "Además, Andorra no aplica impuesto sobre sucesiones y donaciones, y el tipo general del Impuesto General Indirecto (IGI, equivalente al IVA) es de solo un 4,5%, frente al 21% del IVA general en España. En resumen, el sistema fiscal andorrano está diseñado para atraer residentes con actividad económica real, ofreciendo una carga tributaria sustancialmente menor dentro de un marco legal plenamente compatible con los estándares internacionales de transparencia.",

      req_title: "¿Qué requisitos hay para la residencia fiscal en Andorra?",
      req_intro: "Trasladar la residencia fiscal a Andorra es un proceso legal y regulado. Estos son los requisitos principales que debes cumplir:",
      req_1: "<strong>Permanencia mínima de 183 días al año</strong> en territorio andorrano, o demostrar que el núcleo principal de actividades o intereses económicos se encuentra en Andorra.",
      req_2: "<strong>Obtener un permiso de residencia activa</strong> — requiere constituir o participar en una sociedad andorrana, o ejercer una actividad profesional por cuenta ajena o propia.",
      req_3: "<strong>Depósito en la AFA</strong> (Autoritat Financera Andorrana) de 50.000 € como garantía, más 10.000 € por cada dependiente.",
      req_4: "<strong>Seguro médico</strong> privado o público (CASS) que cubra la estancia en Andorra.",
      req_5: "<strong>Alquiler o compra de vivienda</strong> en el Principado de Andorra.",
      req_6: "<strong>Comunicación a la Agencia Tributaria española</strong> mediante el modelo 030 para informar del cambio de domicilio fiscal y baja censal.",
      req_7: "<strong>Convenio de doble imposición</strong> España-Andorra (en vigor desde 2015) que evita la doble tributación sobre los mismos ingresos.",
      req_note: "<strong>Nota sobre la cláusula anti-abuso:</strong> El artículo 8.2 de la Ley del IRPF española establece que los contribuyentes que trasladen su residencia a un paraíso fiscal o territorio de baja tributación siguen tributando en España durante los 4 años fiscales siguientes. Sin embargo, <strong>Andorra dejó de estar en la lista de paraísos fiscales de España en 2010</strong> y, desde la firma del convenio de doble imposición en 2015, esta cláusula no aplica al traslado a Andorra, siempre que se acredite la residencia real y efectiva en el Principado.",

      faq_title: "Preguntas frecuentes sobre fiscalidad en Andorra",
      faq_q1: "¿Cuánto se paga de IRPF en Andorra?",
      faq_a1: "En Andorra, los primeros 24.000 € de renta están exentos de IRPF (tipo 0%). De 24.001 € a 40.000 € se aplica un 5%, y a partir de 40.000 € el tipo es del 10%. El tipo máximo del IRPF andorrano es del 10%, frente al 47% que puede alcanzar en España.",
      faq_q2: "¿Cuántos días hay que vivir en Andorra para tributar allí?",
      faq_a2: "Para ser residente fiscal en Andorra es necesario permanecer al menos 183 días al año en el país. También se puede acreditar la residencia demostrando que el núcleo principal de actividades o intereses económicos está en Andorra.",
      faq_q3: "¿Es legal trasladar la residencia fiscal a Andorra?",
      faq_a3: "Sí, es completamente legal. Andorra tiene convenio de doble imposición con España desde 2015. Para que el traslado sea efectivo hay que cumplir los requisitos de residencia real (183 días) y comunicarlo correctamente a la Agencia Tributaria española mediante el modelo 030.",
      faq_q4: "¿Andorra tiene impuesto sobre el patrimonio?",
      faq_a4: "No. Andorra no tiene impuesto sobre el patrimonio. España sí lo aplica a patrimonios superiores a 700.000 €, con tipos de entre el 0,2% y el 2,5%. Para contribuyentes con patrimonio elevado, este es uno de los mayores incentivos del traslado fiscal a Andorra.",
      faq_q5: "¿Cuál es el tipo máximo de IRPF en Andorra?",
      faq_a5: "El tipo máximo del IRPF andorrano es del 10%. En comparación, el tipo marginal máximo en España puede llegar al 47% (estatal + autonómico), o incluso al 54% en algunas comunidades autónomas.",
      faq_q6: "¿Qué es la CASS en Andorra?",
      faq_a6: "La CASS (Caixa Andorrana de Seguretat Social) es el equivalente a la Seguridad Social en Andorra. La cotización del trabajador es del 6% sobre el salario bruto, frente al 6,47% en España para asalariados. Los autónomos cotizan aproximadamente un 16%.",

      how_title: "¿Cómo calcular impuestos con esta calculadora fiscal?",
      how_p: "Con este <strong>simulador de impuestos</strong> y <strong>simulador IRPF</strong> para el Principado puedes estimar tu carga tributaria en pocos pasos. Introduce tu <strong>sueldo bruto anual</strong> mediante el deslizador o escribiendo la cifra directamente. Si tienes un patrimonio superior a 700.000 €, indícalo para que el cálculo incluya el Impuesto sobre el Patrimonio que pagarías en España y que no existe en Andorra. Selecciona tu <strong>comunidad autónoma</strong> actual, tu situación familiar y si eres asalariado, autónomo o percibes rentas del capital. Los resultados muestran una estimación del <strong>ahorro de impuestos</strong> al tributar en Andorra. Para hablar con <strong>gestorías o asesores locales</strong>, el <strong>catalán</strong> suele valorarse mucho en el primer contacto; el <strong>castellano</strong> también es habitual. Datos orientativos; cualquier traslado de residencia fiscal requiere asesoramiento profesional.",

      cta_title: "¿Eres gestoría especializada en residencia andorrana?",
      cta_p: "Aparece ante personas que estudian el traslado fiscal al Principado. Las gestorías del país reciben consultas en catalán y en castellano. Plazas limitadas.",
      cta_btn: "Solicitar información",

      foot_home: "Inicio",
      foot_guides: "Guías",
      foot_about: "Sobre el sitio",
      foot_legal: "Aviso Legal",
      foot_privacy: "Privacidad",
      foot_cookies: "Cookies",
      foot_disclaimer: "Calculadora orientativa. Estimaciones basadas en normativa fiscal 2026. Consulta con un asesor fiscal para tu caso concreto.",

      guides_teaser_title: "Guías fiscales",
      guides_teaser_text: "Artículos en español sobre IRPF, residencia, patrimonio y CASS; la calculadora está en catalán y español.",
      guides_teaser_link: "Ver todas las guías",

      cookie_text: "Usamos cookies de terceros (AdSense) para mostrar publicidad.",
      cookie_more: "Política de cookies: más información",
      cookie_accept: "Aceptar",
      cookie_reject: "Solo esenciales"
    },

    en: {
      meta_title: "Andorra Tax Calculator 2026 — Compare income tax vs Spain, France, UK & more",
      meta_desc: "Free tax calculator for Andorra: compare how much you'd pay in Andorra vs Spain, France, Portugal, Italy, Germany, the UK or Russia. Income tax simulator. Updated 2026.",
      og_title: "Andorra tax calculator 2026 — multi-country comparison",
      og_desc: "Free tax calculator: compare your tax burden in Andorra with Spain, France, Portugal, Italy, Germany, the UK or Russia.",

      nav_comp: "Comparison",
      nav_faq: "FAQ",
      nav_guides: "Guides",
      logo_aria: "Home — Andorra tax calculator (fiscalandorra.ad)",

      h1: "Andorra tax calculator 2026 — compare taxes with Spain, France, Portugal, Italy, Germany, UK & Russia",

      lbl_salary: "Gross annual salary",
      lbl_country: "Your country",
      lbl_ccaa: "Region",
      lbl_situation: "Status",
      lbl_income: "Income type",
      lbl_patrimony: "Net wealth",
      opt_single: "Single",
      opt_married0: "Married, no children",
      opt_married1: "Married, 1 child",
      opt_married2: "Married, 2+ children",
      pill_employee: "Employee",
      pill_self: "Self-employed",
      pill_capital: "Capital",

      c_espana: "Spain",
      c_francia: "France",
      c_portugal: "Portugal",
      c_italia: "Italy",
      c_alemania: "Germany",
      c_uk: "United Kingdom",
      c_rusia: "Russia",

      savings_label: "You'd save in Andorra",
      savings_year: "/year",
      savings_month: "/month",
      savings_5y: "over 5 years",
      savings_10y: "over 10 years",

      card_ss: "Social Security",
      card_irpf: "Income Tax",
      card_ip: "Wealth Tax",
      card_effective: "Effective rate",
      card_cass: "CASS",

      tbl_title: "Quick comparison: Spain vs Andorra",
      tbl_subtitle: "Estimate for single employee, residing in Madrid. Cost of living not included.",
      tbl_gross: "Gross",
      tbl_net_es: "Net Spain",
      tbl_net_ad: "Net Andorra",
      tbl_saving_yr: "Saving/year",
      tbl_saving_10: "Saving 10yr",

      info_title: "How does the Andorran tax system work?",
      info_p1: "Andorra boasts one of the most attractive tax systems in Europe. Its Personal Income Tax (IRPF) came into force in 2015 and features remarkably low rates compared to most European countries. The first <strong>€24,000 of annual income is completely tax-exempt</strong>, meaning an Andorran tax resident with moderate earnings may pay zero income tax.",
      info_p2: "For income between €24,001 and €40,000, a rate of <strong>5%</strong> applies. Above €40,000, the maximum marginal rate is <strong>10%</strong> — a figure that contrasts sharply with Spain's top marginal rate, which can reach 47% at the state level or even exceed 50% in certain autonomous communities like Catalonia or Valencia.",
      info_p3: "Regarding <strong>Andorran Social Security (CASS)</strong>, the employee contribution is 6% of gross salary, slightly below Spain's 6.47% for salaried workers. Self-employed workers (compte propi) contribute roughly 16% on their regulatory base, comparable to Spain's income-based contribution system in place since 2023.",
      info_p4: "One of the most significant points for high-net-worth individuals is the <strong>complete absence of wealth tax in Andorra</strong>. In Spain, net wealth above €700,000 (plus a €300,000 exemption for the primary residence) is taxed at progressive rates from 0.2% to 2.5%. Only the Community of Madrid offers a 100% rebate. Andorra, by contrast, does not tax accumulated wealth at all, resulting in very significant tax savings for high-income and high-wealth profiles.",
      info_p5: "Furthermore, Andorra does not levy inheritance or gift tax, and the general rate of its Indirect General Tax (IGI, equivalent to VAT) is just 4.5%, compared to Spain's 21% standard VAT. In summary, Andorra's tax system is designed to attract residents with real economic activity, offering a substantially lower tax burden within a legal framework fully compatible with international transparency standards.",

      req_title: "What are the requirements for tax residency in Andorra?",
      req_intro: "Moving your tax residence to Andorra is a legal and regulated process. These are the main requirements you must meet:",
      req_1: "<strong>Minimum stay of 183 days per year</strong> in Andorran territory, or proof that your main center of activities or economic interests is in Andorra.",
      req_2: "<strong>Obtain an active residence permit</strong> — requires setting up or participating in an Andorran company, or practicing a professional activity as an employee or self-employed.",
      req_3: "<strong>Deposit at the AFA</strong> (Andorran Financial Authority) of €50,000 as a guarantee, plus €10,000 per dependent.",
      req_4: "<strong>Health insurance</strong> — private or public (CASS) covering your stay in Andorra.",
      req_5: "<strong>Rent or purchase housing</strong> in the Principality of Andorra.",
      req_6: "<strong>Notify the Spanish Tax Agency</strong> via form 030 to report the change of tax domicile and census deregistration.",
      req_7: "<strong>Double taxation agreement</strong> Spain-Andorra (in force since 2015) that prevents double taxation on the same income.",
      req_note: "<strong>Note on the anti-abuse clause:</strong> Article 8.2 of the Spanish Income Tax Act states that taxpayers who move their residence to a tax haven or low-tax territory continue to be taxed in Spain for the following 4 fiscal years. However, <strong>Andorra was removed from Spain's tax haven list in 2010</strong> and, since the signing of the double taxation agreement in 2015, this clause does not apply to relocation to Andorra, provided real and effective residence in the Principality is proven.",

      faq_title: "Frequently asked questions about taxation in Andorra",
      faq_q1: "How much income tax do you pay in Andorra?",
      faq_a1: "In Andorra, the first €24,000 of income is exempt from income tax (0% rate). From €24,001 to €40,000 a 5% rate applies, and above €40,000 the rate is 10%. The maximum Andorran income tax rate is 10%, compared to up to 47% in Spain.",
      faq_q2: "How many days do you need to live in Andorra to be taxed there?",
      faq_a2: "To be a tax resident of Andorra you must stay at least 183 days per year in the country. Residency can also be proven by showing that your main center of activities or economic interests is in Andorra.",
      faq_q3: "Is it legal to move your tax residence to Andorra?",
      faq_a3: "Yes, it is completely legal. Andorra has had a double taxation agreement with Spain since 2015. For the move to be effective you must meet real residency requirements (183 days) and properly notify the Spanish Tax Agency via form 030.",
      faq_q4: "Does Andorra have a wealth tax?",
      faq_a4: "No. Andorra has no wealth tax. Spain does apply one on net wealth above €700,000, with rates between 0.2% and 2.5%. For high-net-worth taxpayers, this is one of the biggest incentives to relocate to Andorra.",
      faq_q5: "What is the maximum income tax rate in Andorra?",
      faq_a5: "The maximum Andorran income tax rate is 10%. By comparison, Spain's top marginal rate can reach 47% (state + regional), or even 54% in some autonomous communities.",
      faq_q6: "What is CASS in Andorra?",
      faq_a6: "CASS (Caixa Andorrana de Seguretat Social) is Andorra's equivalent of Social Security. The employee contribution is 6% of gross salary, versus 6.47% in Spain for salaried workers. Self-employed workers contribute approximately 16%.",

      how_title: "How to use this tax calculator?",
      how_p: "Using our Andorra tax simulator is very easy. Enter your <strong>gross annual salary</strong> using the slider or by typing the amount directly. If your net wealth exceeds €700,000, enter it in the corresponding field so the calculation includes the Wealth Tax you'd pay in Spain (which doesn't exist in Andorra). Select your current <strong>region</strong>, family status, and whether you're an employee, self-employed, or receive capital income. Results update automatically and show you an estimate of annual savings from being taxed in Andorra instead of your country. Remember these figures are indicative and any tax residence move requires professional advice.",

      cta_title: "Are you an advisory firm specializing in Andorran residency?",
      cta_p: "Appear here in front of thousands of people considering a tax relocation. Limited spots.",
      cta_btn: "Request information",

      foot_home: "Home",
      foot_guides: "Guides",
      foot_about: "About",
      foot_legal: "Legal Notice",
      foot_privacy: "Privacy",
      foot_cookies: "Cookies",
      foot_disclaimer: "Indicative calculator. Estimates based on 2026 tax regulations. Consult a tax advisor for your specific case.",

      guides_teaser_title: "Fiscal guides",
      guides_teaser_text: "Articles in Spanish; the calculator UI is in Catalan and Spanish (plus EN/FR).",
      guides_teaser_link: "Browse guides",

      cookie_text: "We use third-party cookies (AdSense) to show advertising.",
      cookie_more: "Cookie policy — full details",
      cookie_accept: "Accept",
      cookie_reject: "Essential only"
    },

    fr: {
      meta_title: "Calculatrice d'impôts Andorre 2026 — simulateur fiscal | Espagne, France, UK…",
      meta_desc: "Calculatrice d'impôts gratuite : comparez ce que vous paieriez en Andorre par rapport à l'Espagne, la France, le Portugal, l'Italie, l'Allemagne, le Royaume-Uni ou la Russie. Mis à jour 2026.",
      og_title: "Calculatrice d'impôts Andorre 2026 — simulateur multi-pays",
      og_desc: "Calculatrice d'impôts gratuite : comparez votre charge fiscale en Andorre avec l'Espagne, la France, le Portugal, l'Italie, l'Allemagne, le UK ou la Russie.",

      nav_comp: "Comparatif",
      nav_faq: "FAQ",
      nav_guides: "Guides",
      logo_aria: "Accueil — simulateur fiscal Andorre (fiscalandorra.ad)",

      h1: "Calculatrice d'impôts Andorre 2026 — simulateur fiscal : comparez avec l'Espagne, la France, le Portugal, l'Italie, l'Allemagne, le UK et la Russie",

      lbl_salary: "Salaire brut annuel",
      lbl_country: "Votre pays",
      lbl_ccaa: "Communauté",
      lbl_situation: "Situation",
      lbl_income: "Type de revenu",
      lbl_patrimony: "Patrimoine net",
      opt_single: "Célibataire",
      opt_married0: "Marié(e) sans enfants",
      opt_married1: "Marié(e) 1 enfant",
      opt_married2: "Marié(e) 2+ enfants",
      pill_employee: "Salarié",
      pill_self: "Indépendant",
      pill_capital: "Capital",

      c_espana: "Espagne",
      c_francia: "France",
      c_portugal: "Portugal",
      c_italia: "Italie",
      c_alemania: "Allemagne",
      c_uk: "Royaume-Uni",
      c_rusia: "Russie",

      savings_label: "Vous économiseriez en Andorre",
      savings_year: "/an",
      savings_month: "/mois",
      savings_5y: "sur 5 ans",
      savings_10y: "sur 10 ans",

      card_ss: "Sécurité Sociale",
      card_irpf: "Impôt sur le revenu",
      card_ip: "Impôt patrimoine",
      card_effective: "Taux effectif",
      card_cass: "CASS",

      tbl_title: "Comparaison rapide : Espagne vs Andorre",
      tbl_subtitle: "Estimation pour salarié célibataire, résidence à Madrid. Coût de la vie non inclus.",
      tbl_gross: "Brut",
      tbl_net_es: "Net Espagne",
      tbl_net_ad: "Net Andorre",
      tbl_saving_yr: "Économie/an",
      tbl_saving_10: "Économie 10a",

      info_title: "Comment fonctionne le système fiscal en Andorre ?",
      info_p1: "L'Andorre dispose de l'un des systèmes fiscaux les plus attractifs d'Europe. Son Impôt sur le Revenu des Personnes Physiques (IRPF) est entré en vigueur en 2015 et se caractérise par des taux très réduits par rapport à la plupart des pays européens. Les premiers <strong>24 000 € de revenu annuel sont totalement exonérés d'impôt</strong>, ce qui signifie qu'un résident fiscal andorran aux revenus modérés peut ne payer aucun impôt sur le revenu.",
      info_p2: "Pour les revenus entre 24 001 € et 40 000 €, un taux de <strong>5%</strong> s'applique. Au-delà de 40 000 €, le taux marginal maximal est de <strong>10%</strong> — un chiffre qui contraste fortement avec le taux marginal maximal espagnol, qui peut atteindre 47% au niveau étatique ou même dépasser 50% dans certaines communautés autonomes comme la Catalogne ou Valence.",
      info_p3: "Concernant la <strong>Sécurité Sociale andorrane (CASS)</strong>, la cotisation salariale est de 6% du salaire brut, légèrement inférieure aux 6,47% appliqués en Espagne. Les travailleurs indépendants cotisent environ 16% sur leur base réglementaire.",
      info_p4: "L'un des points les plus importants pour les contribuables fortunés est l'<strong>absence totale d'impôt sur la fortune en Andorre</strong>. En Espagne, à partir de 700 000 € de patrimoine net, des taux progressifs de 0,2% à 2,5% s'appliquent. L'Andorre, en revanche, ne taxe pas du tout la richesse accumulée.",
      info_p5: "De plus, l'Andorre n'applique pas d'impôt sur les successions et donations, et le taux général de la Taxe Générale Indirecte (IGI, équivalent de la TVA) n'est que de 4,5%, contre 21% de TVA en Espagne. En résumé, le système fiscal andorran est conçu pour attirer les résidents avec une activité économique réelle, offrant une charge fiscale substantiellement moindre.",

      req_title: "Quelles sont les conditions pour la résidence fiscale en Andorre ?",
      req_intro: "Transférer sa résidence fiscale en Andorre est un processus légal et réglementé. Voici les principales conditions à remplir :",
      req_1: "<strong>Séjour minimum de 183 jours par an</strong> sur le territoire andorran, ou preuve que le centre principal d'activités ou d'intérêts économiques se trouve en Andorre.",
      req_2: "<strong>Obtenir un permis de résidence active</strong> — nécessite de créer ou participer à une société andorrane, ou d'exercer une activité professionnelle.",
      req_3: "<strong>Dépôt à l'AFA</strong> (Autorité Financière Andorrane) de 50 000 € en garantie, plus 10 000 € par personne à charge.",
      req_4: "<strong>Assurance maladie</strong> privée ou publique (CASS) couvrant le séjour en Andorre.",
      req_5: "<strong>Location ou achat de logement</strong> dans la Principauté d'Andorre.",
      req_6: "<strong>Notification à l'administration fiscale espagnole</strong> via le formulaire 030 pour signaler le changement de domicile fiscal.",
      req_7: "<strong>Convention de double imposition</strong> Espagne-Andorre (en vigueur depuis 2015) évitant la double imposition sur les mêmes revenus.",
      req_note: "<strong>Note sur la clause anti-abus :</strong> L'article 8.2 de la loi espagnole de l'IRPF prévoit que les contribuables transférant leur résidence vers un paradis fiscal continuent d'être imposés en Espagne pendant les 4 années fiscales suivantes. Cependant, <strong>l'Andorre a été retirée de la liste des paradis fiscaux de l'Espagne en 2010</strong> et, depuis la signature de la convention de double imposition en 2015, cette clause ne s'applique pas au transfert en Andorre.",

      faq_title: "Questions fréquentes sur la fiscalité en Andorre",
      faq_q1: "Combien paie-t-on d'impôt sur le revenu en Andorre ?",
      faq_a1: "En Andorre, les premiers 24 000 € de revenu sont exonérés d'impôt (taux 0%). De 24 001 € à 40 000 € un taux de 5% s'applique, et au-delà de 40 000 € le taux est de 10%. Le taux maximal de l'IRPF andorran est de 10%, contre jusqu'à 47% en Espagne.",
      faq_q2: "Combien de jours faut-il vivre en Andorre pour y être imposé ?",
      faq_a2: "Pour être résident fiscal en Andorre, il faut séjourner au moins 183 jours par an dans le pays. La résidence peut aussi être prouvée en démontrant que le centre principal d'activités ou d'intérêts économiques se trouve en Andorre.",
      faq_q3: "Est-il légal de transférer sa résidence fiscale en Andorre ?",
      faq_a3: "Oui, c'est parfaitement légal. L'Andorre a une convention de double imposition avec l'Espagne depuis 2015. Pour que le transfert soit effectif, il faut remplir les conditions de résidence réelle (183 jours) et le notifier correctement à l'administration fiscale.",
      faq_q4: "L'Andorre a-t-elle un impôt sur la fortune ?",
      faq_a4: "Non. L'Andorre n'a pas d'impôt sur la fortune. L'Espagne l'applique aux patrimoines supérieurs à 700 000 €, avec des taux entre 0,2% et 2,5%. Pour les contribuables fortunés, c'est l'un des plus grands avantages de la relocalisation fiscale en Andorre.",
      faq_q5: "Quel est le taux maximal d'impôt sur le revenu en Andorre ?",
      faq_a5: "Le taux maximal de l'IRPF andorran est de 10%. En comparaison, le taux marginal maximal en Espagne peut atteindre 47% (étatique + régional), voire 54% dans certaines communautés autonomes.",
      faq_q6: "Qu'est-ce que la CASS en Andorre ?",
      faq_a6: "La CASS (Caixa Andorrana de Seguretat Social) est l'équivalent de la Sécurité Sociale en Andorre. La cotisation salariale est de 6% du salaire brut, contre 6,47% en Espagne. Les indépendants cotisent environ 16%.",

      how_title: "Comment utiliser ce simulateur fiscal ?",
      how_p: "Utiliser notre simulateur fiscal d'Andorre est très simple. Entrez votre <strong>salaire brut annuel</strong> à l'aide du curseur ou en tapant le montant directement. Si votre patrimoine dépasse 700 000 €, indiquez-le pour que le calcul inclue l'impôt sur la fortune. Sélectionnez votre <strong>région</strong>, votre situation familiale et votre type de revenu. Les résultats se mettent à jour automatiquement et vous montrent une estimation de l'économie annuelle en étant imposé en Andorre plutôt que dans votre pays. N'oubliez pas que ces chiffres sont indicatifs et que tout transfert de résidence fiscale nécessite un conseil professionnel.",

      cta_title: "Êtes-vous un cabinet spécialisé en résidence andorrane ?",
      cta_p: "Apparaissez ici devant des milliers de personnes envisageant une relocalisation fiscale. Places limitées.",
      cta_btn: "Demander des informations",

      foot_home: "Accueil",
      foot_guides: "Guides",
      foot_about: "À propos",
      foot_legal: "Mentions légales",
      foot_privacy: "Confidentialité",
      foot_cookies: "Cookies",
      foot_disclaimer: "Calculatrice indicative. Estimations basées sur la réglementation fiscale 2026. Consultez un conseiller fiscal pour votre cas particulier.",

      guides_teaser_title: "Guides fiscaux",
      guides_teaser_text: "Articles en espagnol ; l'outil est en catalan et espagnol (aussi EN/FR).",
      guides_teaser_link: "Voir les guides",

      cookie_text: "Nous utilisons des cookies tiers (AdSense) pour afficher de la publicité.",
      cookie_more: "Politique de cookies — détails",
      cookie_accept: "Accepter",
      cookie_reject: "Essentiels uniquement"
    }
  };

  var COUNTRY_KEYS = ['espana', 'francia', 'portugal', 'italia', 'alemania', 'uk', 'rusia'];
  var COUNTRY_I18N = ['c_espana', 'c_francia', 'c_portugal', 'c_italia', 'c_alemania', 'c_uk', 'c_rusia'];

  var currentLang = 'ca';

  function t(key) {
    return (T[currentLang] && T[currentLang][key]) || (T.ca[key]) || key;
  }

  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('fa_lang', lang);

    document.title = t('meta_title');
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta_desc'));
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t('og_title'));
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t('og_desc'));
    var ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', lang === 'ca' ? 'ca_AD' : lang === 'es' ? 'es_ES' : lang === 'fr' ? 'fr_FR' : 'en_GB');

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var ak = el.getAttribute('data-i18n-aria');
      if (ak) el.setAttribute('aria-label', t(ak));
    });

    // Country dropdown options
    var countryDropdown = document.getElementById('pais-dropdown');
    if (countryDropdown) {
      var lis = countryDropdown.querySelectorAll('.custom-select-options li');
      lis.forEach(function (li, idx) {
        var flag = li.querySelector('.flag-icon');
        if (flag) {
          li.textContent = '';
          li.appendChild(flag);
          li.appendChild(document.createTextNode(' ' + t(COUNTRY_I18N[idx])));
        }
      });
      var selectedVal = document.getElementById('pais').value;
      var selIdx = COUNTRY_KEYS.indexOf(selectedVal);
      if (selIdx >= 0) {
        countryDropdown.querySelector('.custom-select-text').textContent = t(COUNTRY_I18N[selIdx]);
      }
    }

    // Situacion options
    var sitSel = document.getElementById('situacion');
    if (sitSel) {
      var sitKeys = ['opt_single', 'opt_married0', 'opt_married1', 'opt_married2'];
      for (var i = 0; i < sitSel.options.length; i++) {
        sitSel.options[i].textContent = t(sitKeys[i]);
      }
    }

    // Active lang button
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  function detectLang() {
    var params = new URLSearchParams(window.location.search);
    var urlLang = params.get('lang');
    if (urlLang && T[urlLang]) return urlLang;

    var saved = localStorage.getItem('fa_lang');
    if (saved && T[saved]) return saved;

    var nav = (navigator.language || navigator.userLanguage || 'ca').toLowerCase();
    if (nav.indexOf('fr') === 0) return 'fr';
    if (nav.indexOf('en') === 0) return 'en';
    if (nav.indexOf('es') === 0) return 'es';
    if (nav.indexOf('pt') === 0) return 'es';
    return 'ca';
  }

  function initI18n() {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        applyLang(this.getAttribute('data-lang'));
      });
    });

    var lang = detectLang();
    applyLang(lang);
  }

  window._i18n = { init: initI18n, t: t, getLang: function () { return currentLang; } };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initI18n);
  else initI18n();
})();
