/* eslint-disable no-undef */
import { dateConverted } from "../../helpers/helpers";

let dataAguilares = {
    E10: 0,
    F10: 0,
    G10: 0,
    J10: 0,
    K10: 0,
    M10: 0,
    N10: 0,
    C43: 0,
    D43: 0,
    F43: 0,
    G43: 0,
    L44: 0,
    O44: 0,
    R44: 0,
  },
  dataCruzAlta = {
    E11: 0,
    F11: 0,
    G11: 0,
    J11: 0,
    K11: 0,
    M11: 0,
    N11: 0,
    C47: 0,
    D47: 0,
    F47: 0,
    G47: 0,
    L47: 0,
    O47: 0,
    R47: 0,
  },
  dataLaFlorida = {
    E12: 0,
    F12: 0,
    G12: 0,
    J12: 0,
    K12: 0,
    M12: 0,
    N12: 0,
    C50: 0,
    D50: 0,
    F50: 0,
    G50: 0,
    L50: 0,
    O50: 0,
    R50: 0,
  },
  dataConcepcion = {
    E14: 0,
    F14: 0,
    G14: 0,
    J14: 0,
    K14: 0,
    M14: 0,
    N14: 0,
    C46: 0,
    D46: 0,
    F46: 0,
    G46: 0,
    L46: 0,
    O46: 0,
    R46: 0,
  },
  dataMarapa = {
    E15: 0,
    F15: 0,
    G15: 0,
    J15: 0,
    K15: 0,
    M15: 0,
    N15: 0,
    C54: 0,
    D54: 0,
    F54: 0,
    G54: 0,
    L54: 0,
    O54: 0,
    R54: 0,
  },
  dataBellaVista = {
    E17: 0,
    F17: 0,
    G17: 0,
    J17: 0,
    K17: 0,
    M17: 0,
    N17: 0,
    C45: 0,
    D45: 0,
    F45: 0,
    G45: 0,
    L45: 0,
    O45: 0,
    R45: 0,
  },
  dataFamailla = {
    E18: 0,
    F18: 0,
    G18: 0,
    J18: 0,
    K18: 0,
    M18: 0,
    N18: 0,
    C48: 0,
    D48: 0,
    F48: 0,
    G48: 0,
    L48: 0,
    O48: 0,
    R48: 0,
  },
  dataLaCorona = {
    E19: 0,
    F19: 0,
    G19: 0,
    J19: 0,
    K19: 0,
    M19: 0,
    N19: 0,
    C49: 0,
    D49: 0,
    F49: 0,
    G49: 0,
    L49: 0,
    O49: 0,
    R49: 0,
  },
  dataLaProvidencia = {
    E20: 0,
    F20: 0,
    G20: 0,
    J20: 0,
    K20: 0,
    M20: 0,
    N20: 0,
    C51: 0,
    D51: 0,
    F51: 0,
    G51: 0,
    L51: 0,
    O51: 0,
    R51: 0,
  },
  dataLaTrinidad = {
    E21: 0,
    F21: 0,
    G21: 0,
    J21: 0,
    K21: 0,
    M21: 0,
    N21: 0,
    C52: 0,
    D52: 0,
    F52: 0,
    G52: 0,
    L52: 0,
    O52: 0,
    R52: 0,
  },
  dataLeales = {
    E22: 0,
    F22: 0,
    G22: 0,
    J22: 0,
    K22: 0,
    M22: 0,
    N22: 0,
    C53: 0,
    D53: 0,
    F53: 0,
    G53: 0,
    L53: 0,
    O53: 0,
    R53: 0,
  },
  dataÑuñorco = {
    E23: 0,
    F23: 0,
    G23: 0,
    J23: 0,
    K23: 0,
    M23: 0,
    N23: 0,
    C55: 0,
    D55: 0,
    F55: 0,
    G55: 0,
    L55: 0,
    O55: 0,
    R55: 0,
  },
  dataStaBarbara = {
    E24: 0,
    F24: 0,
    G24: 0,
    J24: 0,
    K24: 0,
    M24: 0,
    N24: 0,
    C56: 0,
    D56: 0,
    F56: 0,
    G56: 0,
    L56: 0,
    O56: 0,
    R56: 0,
  },
  dataStaRosa = {
    E25: 0,
    F25: 0,
    G25: 0,
    J25: 0,
    K25: 0,
    M25: 0,
    N25: 0,
    C57: 0,
    D57: 0,
    F57: 0,
    G57: 0,
    L57: 0,
    O57: 0,
    R57: 0,
  },
  dataSanJuan = {
    E26: 0,
    F26: 0,
    G26: 0,
    J26: 0,
    K26: 0,
    M26: 0,
    N26: 0,
    C58: 0,
    D58: 0,
    F58: 0,
    G58: 0,
    L58: 0,
    O58: 0,
    R58: 0,
  },
  dataInicioIngenios = {
    Cell10: 0,
    CellE10: 0,
    Cell11: 0,
    CellE11: 0,
    Cell12: 0,
    CellE12: 0,
    Cell14: 0,
    CellE14: 0,
    Cell15: 0,
    CellE15: 0,
    Cell17: 0,
    CellE17: 0,
    Cell18: 0,
    CellE18: 0,
    Cell19: 0,
    CellE19: 0,
    Cell20: 0,
    CellE20: 0,
    Cell21: 0,
    CellE21: 0,
    Cell22: 0,
    CellE22: 0,
    Cell23: 0,
    CellE23: 0,
    Cell24: 0,
    CellE24: 0,
    Cell25: 0,
    CellE25: 0,
    Cell26: 0,
    CellE26: 0,
  },
  /** NORTE **/
  dataInicioIngeniosNorte = {
    Cell44: 0,
    CellE44: 0,
    Cell45: 0,
    CellE45: 0,
    Cell46: 0,
    CellE46: 0,
    Cell47: 0,
    CellE47: 0,
    Cell48: 0,
    CellE48: 0,
  },
  dataInicioDestileriaIngenios = {
    aguilInicio: null,
    aguilFin: null,
    cruzInicio: null,
    cruzFin: null,
    floridaInicio: null,
    floridaFin: null,
    concepInicio: null,
    concepFin: null,
    marapaInicio: null,
    marapaFin: null,
    bellaInicio: null,
    bellaFin: null,
    famaillaInicio: null,
    famaillaFin: null,
    coronaInicio: null,
    coronaFin: null,
    provInicio: null,
    provFin: null,
    trinInicio: null,
    trinFin: null,
    lealesInicio: null,
    lealesFin: null,
    nunorcoInicio: null,
    nunorcoFin: null,
    staBarInicio: null,
    staBarFin: null,
    staRosaInicio: null,
    staRosaFin: null,
    sanJuanInicio: null,
    sanJuanFin: null,
  },
  dataInicioDestileriaIngeniosNorte = {
    sanisidroInicio: null,
    sanisidroFin: null,
    seaboardInicio: null,
    seaboardFin: null,
    ledesmaInicio: null,
    ledesmaFin: null,
    riograndeInicio: null,
    riograndeFin: null,
    esperanzaInicio: null,
    esperanzaFin: null,
  };

export const dataPorTipo = (
  dataImport,
  dataImportDestileria,
  dataEnd,
  dateInicioIngenios,
  zafraParteDiario,
  setD1,
  setD2,
  setD3,
  setD4,
  setD5,
  setD6,
  setD7,
  setD8,
  setD9,
  setD10,
  setD11,
  setD12,
  setD13,
  setD14,
  setD15,
  setFechasInicioIngenios,
  setFechasInicioDestileriaIngenios,
  setFechasInicioIngeniosNorte,
  setFechasInicioDestileriaIngeniosNorte,
  setPanelCMB,
  setPanelAzucar,
  setPanelAzucarEquivalente,
  setPanelAzucarCrudo,
  setPanelAzucarBlancoA,
  setPanelAzucarRefinado,
  setPanelAzucarOrganico,
  setPanelAzucarOtros,
  setPanelAlcohol,
) => {
  let cmbPanel = 0;
  let azucarPanel = 0;
  let azucarPanelEquivalente = 0;
  let azucarPanelCrudo = 0;
  let azucarPanelBlancoA = 0
  let azucarPanelRefinado =0
  let azucarPanelOrganico = 0
  let azucarPanelOtros = 0
  let alcoholPanel = 0;

  /****  FECHAS INICIO  ****/
  const aguil = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Aguilares"
  );

  const cruz = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Cruz Alta"
  );

  const florida = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "La Florida"
  );

  const concep = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Concepción"
  );

  const marapa = dateInicioIngenios?.find((d) => d.nombre_ingenio === "Marapa");

  const bellaVista = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Bella Vista"
  );

  const famail = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Famaillá"
  );

  const corona = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "La Corona"
  );

  const providencia = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "La Providencia"
  );

  const trinidad = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "La Trinidad"
  );

  const leales = dateInicioIngenios?.find((d) => d.nombre_ingenio === "Leales");

  const nunorco = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Ñuñorco"
  );
  const stabarbara = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Santa Bárbara"
  );
  const starosa = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Santa Rosa"
  );
  const sanjuan = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "San Juan"
  );

  /** NORTE **/
  const sanisidro = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "San Isidro"
  );
  const seaboard = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Seaboard"
  );
  const ledesma = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Ledesma"
  );
  const riogrande = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "Río Grande"
  );
  const laesperanza = dateInicioIngenios?.find(
    (d) => d.nombre_ingenio === "La Esperanza"
  );

  dataInicioIngenios = {
    Cell10: aguil?.inicio_zafra,
    CellE10: aguil?.fin_zafra,
    Cell11: cruz?.inicio_zafra,
    CellE11: cruz?.fin_zafra,
    Cell12: florida?.inicio_zafra,
    CellE12: florida?.fin_zafra,
    Cell14: concep?.inicio_zafra,
    CellE14: concep?.fin_zafra,
    Cell15: marapa?.inicio_zafra,
    CellE15: marapa?.fin_zafra,
    Cell17: bellaVista?.inicio_zafra,
    CellE17: bellaVista?.fin_zafra,
    Cell18: famail?.inicio_zafra,
    CellE18: famail?.fin_zafra,
    Cell19: corona?.inicio_zafra,
    CellE19: corona?.fin_zafra,
    Cell20: providencia?.inicio_zafra,
    CellE20: providencia?.fin_zafra,
    Cell21: trinidad?.inicio_zafra,
    CellE21: trinidad?.fin_zafra,
    Cell22: leales?.inicio_zafra,
    CellE22: leales?.fin_zafra,
    Cell23: nunorco?.inicio_zafra,
    CellE23: nunorco?.fin_zafra,
    Cell24: stabarbara?.inicio_zafra,
    CellE24: stabarbara?.fin_zafra,
    Cell25: starosa?.inicio_zafra,
    CellE25: starosa?.fin_zafra,
    Cell26: sanjuan?.inicio_zafra,
    CellE26: sanjuan?.fin_zafra,
  };
  /** NORTE **/
  dataInicioIngeniosNorte = {
    Cell44: laesperanza?.inicio_zafra,
    CellE44: laesperanza?.fin_zafra,
    Cell45: ledesma?.inicio_zafra,
    CellE45: ledesma?.fin_zafra,
    Cell46: riogrande?.inicio_zafra,
    CellE46: riogrande?.fin_zafra,
    Cell47: sanisidro?.inicio_zafra,
    CellE47: sanisidro?.fin_zafra,
    Cell48: seaboard?.inicio_zafra,
    CellE48: seaboard?.fin_zafra,
  };

  dataInicioDestileriaIngenios = {
    aguilInicio: aguil?.inicio_destileria,
    aguilFin: aguil?.fin_destileria,
    cruzInicio: cruz?.inicio_destileria,
    cruzFin: cruz?.fin_destileria,
    floridaInicio: florida?.inicio_destileria,
    floridaFin: florida?.fin_destileria,
    concepInicio: concep?.inicio_destileria,
    concepFin: concep?.fin_destileria,
    marapaInicio: marapa?.inicio_destileria,
    marapaFin: marapa?.fin_destileria,
    bellaInicio: bellaVista?.inicio_destileria,
    bellaFin: bellaVista?.fin_destileria,
    famaillaInicio: famail?.inicio_destileria,
    famaillaFin: famail?.fin_destileria,
    coronaInicio: corona?.inicio_destileria,
    coronaFin: corona?.fin_destileria,
    provInicio: providencia?.inicio_destileria,
    provFin: providencia?.fin_destileria,
    trinInicio: trinidad?.inicio_destileria,
    trinFin: trinidad?.fin_destileria,
    lealesInicio: leales?.inicio_destileria,
    lealesFin: leales?.fin_destileria,
    nunorcoInicio: nunorco?.inicio_destileria,
    nunorcoFin: nunorco?.fin_destileria,
    staBarInicio: stabarbara?.inicio_destileria,
    staBarFin: stabarbara?.fin_destileria,
    staRosaInicio: starosa?.inicio_destileria,
    staRosaFin: starosa?.fin_destileria,
    sanJuanInicio: sanjuan?.inicio_destileria,
    sanJuanFin: sanjuan?.fin_destileria,
  };

  dataInicioDestileriaIngeniosNorte = {
    esperanzaInicio: laesperanza?.inicio_destileria,
    esperanzaFin: laesperanza?.fin_destileria,
    ledesmaInicio: ledesma?.inicio_destileria,
    ledesmaFin: ledesma?.fin_destileria,
    riograndeInicio: riogrande?.inicio_destileria,
    riograndeFin: riogrande?.fin_destileria,
    seaboardInicio: seaboard?.inicio_destileria,
    seaboardFin: seaboard?.fin_destileria,
    sanisidroInicio: sanisidro?.inicio_destileria,
    sanisidroFin: sanisidro?.fin_destileria,
  };

  setFechasInicioIngenios(dataInicioIngenios);
  setFechasInicioDestileriaIngenios(dataInicioDestileriaIngenios);
  setFechasInicioIngeniosNorte(dataInicioIngeniosNorte);
  setFechasInicioDestileriaIngeniosNorte(dataInicioDestileriaIngeniosNorte);
  /************/

  for (let i = 1; i <= 15; i++) {
    let varName1 = "a" + i;
    let varName2 = "b" + i;
    let varName3 = "c" + i;
    let varName4 = "z" + i;
    let varName5 = "e" + i;
    let varName6 = "f" + i;
    let varName7 = "g" + i;
    let varName8 = "h" + i;
    let varName9 = "i" + i;
    let varName10 = "j" + i;
    let varName11 = "k" + i;
    let varName12 = "l" + i;
    let varName13 = "o" + i;
    let varName14 = "r" + i;

    window[varName1] = 0;
    window[varName2] = 0;
    window[varName3] = 0;
    window[varName4] = 0;
    window[varName5] = 0;
    window[varName6] = 0;
    window[varName7] = 0;
    window[varName8] = 0;
    window[varName9] = 0;
    window[varName10] = 0;
    window[varName11] = 0;
    window[varName12] = 0;
    window[varName13] = 0;
    window[varName14] = 0;
  }
  /****************************** DATOS DESTILERIA ALCOHOL ******************************/
  
  dataImportDestileria?.forEach((data) => {
    const newDate = dateConverted(data?.FechaParte);
    const fechaParametro = dataEnd !== null ? new Date(dataEnd) : new Date();
    
    if (
      data.IngenioNombre === "Aguilares" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.aguilInicio)
    ) {
      g1 = g1 + data.AlcoholProducido;
      o1 = o1 + data.AlcoholHidratado || 0;
      r1 = r1 + data.AlcoholAnhidro || 0;
      alcoholPanel = alcoholPanel + data.AlcoholProducido;
      dataAguilares = {
        N10: g1,
        O44: o1,
        R44: r1,
      };
    }

    if (
      data.IngenioNombre === "Cruz Alta" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.cruzInicio)
    ) {
      g2 = g2 + data.AlcoholProducido;
      o2 = o2 + data.AlcoholHidratado || 0;
      r2 = r2 + data.AlcoholAnhidro || 0;
      alcoholPanel = alcoholPanel + data.AlcoholProducido;
      dataCruzAlta = {
        N11: g2,
        O47: o2,
        R47: r2,
      };
    }

    if (
      data.IngenioNombre === "La Florida" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.floridaInicio)
    ) {
      
      g3 = g3 + data.AlcoholProducido;
      o3 = o3 + data.AlcoholHidratado || 0;
      r3 = r3 + data.AlcoholAnhidro || 0;
      alcoholPanel = alcoholPanel + data.AlcoholProducido;
      dataLaFlorida = {
        N12: g3,
        O50: o3,
        R50: r3,
      };
    }

    if (
      data.IngenioNombre === "Concepción" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.concepInicio)
    ) {
      g4 = g4 + data.AlcoholProducido;
      o4 = o4 + data.AlcoholHidratado || 0;
      r4 = r4 + data.AlcoholAnhidro || 0;
      alcoholPanel = alcoholPanel + data.AlcoholProducido;
      dataConcepcion = {
        N14: g4,
        O46: o4,
        R46: r4,
      };
    }

    if (
      data.IngenioNombre === "Marapa" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.marapaInicio)
    ) {
      g5 = g5 + data.AlcoholProducido;
      o5 = o5 + data.AlcoholHidratado || 0;
      r5 = r5 + data.AlcoholAnhidro || 0;
      alcoholPanel = alcoholPanel + data.AlcoholProducido;
      dataMarapa = {
        N15: g5,
        O54: o5,
        R54: r5,
      };
    }

    if (
      data.IngenioNombre === "Bella Vista" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.bellaInicio)
    ) {
      g6 = g6 + data.AlcoholProducido;
      o6 = o6 + data.AlcoholHidratado || 0;
      r6 = r6 + data.AlcoholAnhidro || 0;
      alcoholPanel = alcoholPanel + data.AlcoholProducido;
      dataBellaVista = {
        N17: g6,
        O45: o6,
        R45: r6,
      };
    }

    if (
      data.IngenioNombre === "Famaillá" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.famaillaInicio)
    ) {
      g7 = g7 + data.AlcoholProducido;
      o7 = o7 + data.AlcoholHidratado || 0;
      r7 = r7 + data.AlcoholAnhidro || 0;
      alcoholPanel = alcoholPanel + data.AlcoholProducido;
      dataFamailla = {
        N18: g7,
        O48: o7,
        R48: r7,
      };
    }
    if (
      data.IngenioNombre === "La Corona" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.coronaInicio)
    ) {
      g8 = g8 + data.AlcoholProducido;
      o8 = o8 + data.AlcoholHidratado || 0;
      r8 = r8 + data.AlcoholAnhidro || 0;
      // f8 = f8 + data.MelazaProducida;
      alcoholPanel = alcoholPanel + data.AlcoholProducido;
      dataLaCorona = {
        N19: g8,
        O49: o8,
        R49: r8,
        // M19: f8,
      };
    }

    if (
      data.IngenioNombre === "La Providencia" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.provInicio)
    ) {
      g9 = g9 + data.AlcoholProducido;
      o9 = o9 + data.AlcoholHidratado || 0;
      r9 = r9 + data.AlcoholAnhidro || 0;
      alcoholPanel = alcoholPanel + data.AlcoholProducido;
      dataLaProvidencia = {
        N20: g9,
        O51: o9,
        R51: r9,
      };
    }

    if (
      data.IngenioNombre === "La Trinidad" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.trinInicio)
    ) {
      g10 = g10 + data.AlcoholProducido;
      o10 = o10 + data.AlcoholHidratado || 0;
      r10 = r10 + data.AlcoholAnhidro || 0;
      alcoholPanel = alcoholPanel + data.AlcoholProducido;
      dataLaTrinidad = {
        N21: g10,
        O52: o10,
        R52: r10,
      };
    }

    if (
      data.IngenioNombre === "Leales" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.lealesInicio)
    ) {
      g11 = g11 + data.AlcoholProducido;
      o11 = o11 + data.AlcoholHidratado || 0;
      r11 = r11 + data.AlcoholAnhidro || 0;
      alcoholPanel = alcoholPanel + data.AlcoholProducido;
      dataLeales = {
        N22: g11,
        O53: o11,
        R53: r11,
      };
    }

    if (
      data.IngenioNombre === "Ñuñorco" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.nunorcoInicio)
    ) {
      g12 = g12 + data.AlcoholProducido;
      o12 = o12 + data.AlcoholHidratado || 0;
      r12 = r12 + data.AlcoholAnhidro || 0;
      alcoholPanel = alcoholPanel + data.AlcoholProducido;
      dataÑuñorco = {
        N23: g12,
        O55: o12,
        R55: r12,
      };
    }

    if (
      data.IngenioNombre === "Santa Barbara" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.staBarInicio)
    ) {
      g13 = g13 + data.AlcoholProducido;
      o13 = o13 + data.AlcoholHidratado || 0;
      r13 = r13 + data.AlcoholAnhidro || 0;
      alcoholPanel = alcoholPanel + data.AlcoholProducido;
      dataStaBarbara = {
        N24: g13,
        O56: o13,
        R56: r13,
      };
    }

    if (
      data.IngenioNombre === "Santa Rosa" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.staRosaInicio)
    ) {
      g14 = g14 + data.AlcoholProducido;
      o14 = o14 + data.AlcoholHidratado || 0;
      r14 = r14 + data.AlcoholAnhidro || 0;
      alcoholPanel = alcoholPanel + data.AlcoholProducido;
      dataStaRosa = {
        N25: g14,
        O57: o14,
        R57: r14,
      };
    }

    if (
      data.IngenioNombre === "San Juan" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.sanJuanInicio)
    ) {
      g15 = g15 + data.AlcoholProducido;
      o15 = o15 + data.AlcoholHidratado || 0;
      r15 = r15 + data.AlcoholAnhidro || 0;
      dataSanJuan = {
        N26: g15,
        O58: o15,
        R58: r15,
      };
    }
  });
  /*********************************************************************************/

  /*********************************** DATOS ZAFRA ***********************************/
  dataImport?.forEach((data) => {
    const newDate = dateConverted(data?.FechaParte);
    const fechaParametro = dataEnd !== null ? new Date(dataEnd) : new Date();
    if(newDate <= fechaParametro) {
      cmbPanel = cmbPanel + data.MoliendaCanaBruta;
      azucarPanel =
        azucarPanel +
        data.AzucarBlancoProducido +
        data.AzucarCrudoProducido +
        data.AzucarRefinado +
        data.AzucarOrganico +
        data.OtroAzucar;
      azucarPanelEquivalente = azucarPanelEquivalente + data?.AzucarEquivalente
      azucarPanelCrudo = azucarPanelCrudo + data?.AzucarCrudoProducido
      azucarPanelBlancoA = azucarPanelBlancoA + data?.AzucarBlancoProducido
      azucarPanelRefinado = azucarPanelRefinado + data?.AzucarRefinado
      azucarPanelOrganico = azucarPanelOrganico + data?.AzucarOrganico
      azucarPanelOtros = azucarPanelOtros + data?.OtroAzucar

    }
    /*** Verifica
     * cada ingenio
     * fecha del parte diario del json sea menor o igual a la fecha elegida en el sistema
     * y que el inicio de zafra del ingenio exista ***/
    if (
      data.IngenioNombre === "Aguilares" &&
      newDate <= fechaParametro &&
      dataInicioIngenios.Cell10 !== undefined &&
      dataInicioIngenios.Cell10 !== null
    ) {
      a1 = a1 + data.MoliendaCanaBruta || 0;
      b1 = b1 + data.MoliendaCanaNeta || 0;
      c1 = c1 + data.AzucarEquivalente || 0;
      z1 = z1 + data.AzucarBlancoProducido + data?.AzucarRefinado;
      e1 = e1 +
      (data.AzucarCrudoProducido || 0) +
      (data?.AzucarOrganico || 0) +
      (data?.OtroAzucar || 0);
      f1 = f1 + data.MelazaProducida || 0;
      h1 = h1 + data.AzucarRefinado || 0;
      i1 = i1 + data.AzucarOrganico || 0;
      j1 = j1 + data.OtroAzucar || 0;
      k1 = k1 + data.AzucarBlancoProducido;
      l1 = l1 + data.AzucarCrudoProducido;

      dataAguilares = {
        E10: a1,
        F10: b1,
        G10: c1,
        J10: z1,
        K10: e1,
        M10: f1,
        N10: dataAguilares.N10,
        C43: k1,
        D43: h1,
        F43: i1,
        G43: j1,
        L44: l1,
        O44: dataAguilares.O44,
        R44: dataAguilares.R44,
      };
    }

    if (
      data.IngenioNombre === "Cruz Alta" &&
      newDate <= fechaParametro &&
      dataInicioIngenios.Cell11 !== undefined &&
      dataInicioIngenios.Cell11 !== null
    ) {
      a2 = a2 + data.MoliendaCanaBruta;
      b2 = b2 + data.MoliendaCanaNeta;
      c2 = c2 + data.AzucarEquivalente;
      z2 = z2 + data.AzucarBlancoProducido + data?.AzucarRefinado;
      e2 = e2 +
        (data.AzucarCrudoProducido || 0) +
        (data?.AzucarOrganico || 0) +
        (data?.OtroAzucar || 0);
      f2 = f2 + data.MelazaProducida;
      h2 = h2 + data.AzucarRefinado || 0;
      i2 = i2 + data.AzucarOrganico || 0;
      j2 = j2 + data.OtroAzucar || 0;
      k2 = k2 + data.AzucarBlancoProducido;
      l2 = l2 + data.AzucarCrudoProducido;
      dataCruzAlta = {
        E11: a2,
        F11: b2,
        G11: c2,
        J11: z2,
        K11: e2,
        M11: f2,
        N11: dataCruzAlta.N11,
        C47: k2,
        D47: h2,
        F47: i2,
        G47: j2,
        L47: l2,
        O47: dataCruzAlta.O47,
        R47: dataCruzAlta.R47,
      };
    }

    if (
      data.IngenioNombre === "La Florida" &&
      newDate <= fechaParametro &&
      dataInicioIngenios.Cell12 !== undefined &&
      dataInicioIngenios.Cell12 !== null
    ) {
      a3 = a3 + data.MoliendaCanaBruta;
      b3 = b3 + data.MoliendaCanaNeta;
      c3 = c3 + data.AzucarEquivalente;
      z3 = z3 + data.AzucarBlancoProducido + data?.AzucarRefinado; // + data?.AzucarRefinada
      e3 = e3 +
      (data.AzucarCrudoProducido || 0) +
      (data?.AzucarOrganico || 0) +
      (data?.OtroAzucar || 0);
      f3 = f3 + data.MelazaProducida;
      h3 = h3 + data.AzucarRefinado || 0;
      i3 = i3 + data.AzucarOrganico || 0;
      j3 = j3 + data.OtroAzucar || 0;
      k3 = k3 + data.AzucarBlancoProducido;
      l3 = l3 + data.AzucarCrudoProducido;
      dataLaFlorida = {
        E12: a3,
        F12: b3,
        G12: c3,
        J12: z3,
        K12: e3,
        M12: f3,
        N12: dataLaFlorida.N12,
        C50: k3,
        D50: h3,
        F50: i3,
        G50: j3,
        L50: l3,
        O50: dataLaFlorida.O50,
        R50: dataLaFlorida.R50,
      };
    }

    if (
      data.IngenioNombre === "Concepción" &&
      newDate <= fechaParametro &&
      dataInicioIngenios.Cell14 !== undefined &&
      dataInicioIngenios.Cell14 !== null
    ) {
      a4 = a4 + data.MoliendaCanaBruta;
      b4 = b4 + data.MoliendaCanaNeta;
      c4 = c4 + data.AzucarEquivalente;
      z4 = z4 + data.AzucarBlancoProducido + (data.AzucarRefinado || 0);
      e4 = e4 +
      (data.AzucarCrudoProducido || 0) +
      (data?.AzucarOrganico || 0) +
      (data?.OtroAzucar || 0);
      f4 = f4 + data.MelazaProducida;
      h4 = h4 + data.AzucarRefinado || 0;
      i4 = i4 + data.AzucarOrganico || 0;
      j4 = j4 + data.OtroAzucar || 0;
      k4 = k4 + data.AzucarBlancoProducido;
      l4 = l4 + data.AzucarCrudoProducido;

      dataConcepcion = {
        E14: a4,
        F14: b4,
        G14: c4,
        J14: z4,
        K14: e4,
        M14: f4,
        N14: dataConcepcion.N14,
        C46: k4,
        D46: h4,
        F46: i4,
        G46: j4,
        L46: l4,
        O46: dataConcepcion.O46,
        R46: dataConcepcion.R46,
      };
    }

    if (
      data.IngenioNombre === "Marapa" &&
      newDate <= fechaParametro &&
      dataInicioIngenios.Cell15 !== undefined &&
      dataInicioIngenios.Cell15 !== null
    ) {
      a5 = a5 + data.MoliendaCanaBruta;
      b5 = b5 + data.MoliendaCanaNeta;
      c5 = c5 + data.AzucarEquivalente;
      z5 = z5 + data.AzucarBlancoProducido + data?.AzucarRefinado; // + data?.AzucarRefinada
      e5 = e5 +
      (data.AzucarCrudoProducido || 0) +
      (data?.AzucarOrganico || 0) +
      (data?.OtroAzucar || 0);
      f5 = f5 + data.MelazaProducida;
      h5 = h5 + data.AzucarRefinado || 0;
      i5 = i5 + data.AzucarOrganico || 0;
      j5 = j5 + data.OtroAzucar || 0;
      k5 = k5 + data.AzucarBlancoProducido;
      l5 = l5 + data.AzucarCrudoProducido;
      dataMarapa = {
        E15: a5,
        F15: b5,
        G15: c5,
        J15: z5,
        K15: e5,
        M15: f5,
        N15: dataMarapa.N15,
        C54: k5,
        D54: h5,
        F54: i5,
        G54: j5,
        L54: l5,
        O54: dataMarapa.O54,
        R54: dataMarapa.R54,
      };
    }

    if (
      data.IngenioNombre === "Bella Vista" &&
      newDate <= fechaParametro &&
      dataInicioIngenios.Cell17 !== undefined &&
      dataInicioIngenios.Cell17 !== null
    ) {
      a6 = a6 + data.MoliendaCanaBruta;
      b6 = b6 + data.MoliendaCanaNeta;
      c6 = c6 + data.AzucarEquivalente;
      z6 = z6 + data.AzucarBlancoProducido + data?.AzucarRefinado; // + data?.AzucarRefinada
      e6 = e6 +
      (data.AzucarCrudoProducido || 0) +
      (data?.AzucarOrganico || 0) +
      (data?.OtroAzucar || 0);
      f6 = f6 + data.MelazaProducida;
      h6 = h6 + data.AzucarRefinado || 0;
      i6 = i6 + data.AzucarOrganico || 0;
      j6 = j6 + data.OtroAzucar || 0;
      k6 = k6 + data.AzucarBlancoProducido;
      l6 = l6 + data.AzucarCrudoProducido;

      dataBellaVista = {
        E17: a6,
        F17: b6,
        G17: c6,
        J17: z6,
        K17: e6,
        M17: f6,
        N17: dataBellaVista.N17,
        C45: k6,
        D45: h6,
        F45: i6,
        G45: j6,
        L45: l6,
        O45: dataBellaVista.O45,
        R45: dataBellaVista.R45,
      };
    }
    if (
      data.IngenioNombre === "Famaillá" &&
      newDate <= fechaParametro &&
      dataInicioIngenios.Cell18 !== undefined &&
      dataInicioIngenios.Cell18 !== null
    ) {
      a7 = a7 + data.MoliendaCanaBruta;
      b7 = b7 + data.MoliendaCanaNeta;
      c7 = c7 + data.AzucarEquivalente;
      z7 = z7 + data.AzucarBlancoProducido + (data.AzucarRefinado || 0);
      e7 = e7 +
      (data.AzucarCrudoProducido || 0) +
      (data?.AzucarOrganico || 0) +
      (data?.OtroAzucar || 0);
      f7 = f7 + data.MelazaProducida;
      h7 = h7 + data.AzucarRefinado || 0;
      i7 = i7 + data.AzucarOrganico || 0;
      j7 = j7 + data.OtroAzucar || 0;
      k7 = k7 + data.AzucarBlancoProducido;
      l7 = l7 + data.AzucarCrudoProducido;

      dataFamailla = {
        E18: a7,
        F18: b7,
        G18: c7,
        J18: z7,
        K18: e7,
        M18: f7,
        N18: dataFamailla.N18,
        C48: k7,
        D48: h7,
        F48: i7,
        G48: j7,
        L48: l7,
        O48: dataFamailla.O48,
        R48: dataFamailla.R48,
      };
    }

    if (
      data.IngenioNombre === "La Corona" &&
      newDate <= fechaParametro &&
      dataInicioIngenios.Cell19 !== undefined &&
      dataInicioIngenios.Cell19 !== null
    ) {
      a8 = a8 + data.MoliendaCanaBruta;
      b8 = b8 + data.MoliendaCanaNeta;
      c8 = c8 + data.AzucarEquivalente;
      z8 = z8 + data.AzucarBlancoProducido + data?.AzucarRefinado; // + data?.AzucarRefinada
      e8 = e8 +
      (data.AzucarCrudoProducido || 0) +
      (data?.AzucarOrganico || 0) +
      (data?.OtroAzucar || 0);
      f8 = f8 + data.MelazaProducida;
      h8 = h8 + data.AzucarRefinado || 0;
      i8 = i8 + data.AzucarOrganico || 0;
      j8 = j8 + data.OtroAzucar || 0;
      k8 = k8 + data.AzucarBlancoProducido;
      l8 = l8 + data.AzucarCrudoProducido;
      
      dataLaCorona = {
        E19: a8,
        F19: b8,
        G19: c8,
        J19: z8,
        K19: e8,
        M19: f8,
        N19: dataLaCorona.N19,
        C49: k8,
        D49: h8,
        F49: i8,
        G49: j8,
        L49: l8,
        O49: dataLaCorona.O49,
        R49: dataLaCorona.R49,
      };
    }

    if (
      data.IngenioNombre === "La Providencia" &&
      newDate <= fechaParametro &&
      dataInicioIngenios.Cell20 !== undefined &&
      dataInicioIngenios.Cell20 !== null
    ) {
      a9 = a9 + data.MoliendaCanaBruta;
      b9 = b9 + data.MoliendaCanaNeta;
      c9 = c9 + data.AzucarEquivalente;
      z9 = z9 + data.AzucarBlancoProducido + data?.AzucarRefinado;
      e9 =
        e9 +
        (data.AzucarCrudoProducido || 0) +
        (data?.AzucarOrganico || 0) +
        (data?.OtroAzucar || 0);
      f9 = f9 + data.MelazaProducida;
      h9 = h9 + data.AzucarRefinado || 0;
      i9 = i9 + data.AzucarOrganico || 0;
      j9 = j9 + data.OtroAzucar || 0;
      k9 = k9 + data.AzucarBlancoProducido;
      l9 = l9 + data.AzucarCrudoProducido;


      dataLaProvidencia = {
        E20: a9,
        F20: b9,
        G20: c9,
        J20: z9,
        K20: e9,
        M20: f9,
        N20: dataLaProvidencia.N20,
        C51: k9,
        D51: h9,
        F51: i9,
        G51: j9,
        L51: l9,
        O51: dataLaProvidencia.O51,
        R51: dataLaProvidencia.R51,
      };
    }

    if (
      data.IngenioNombre === "La Trinidad" &&
      newDate <= fechaParametro &&
      dataInicioIngenios.Cell21 !== undefined &&
      dataInicioIngenios.Cell21 !== null
    ) {
      a10 = a10 + data.MoliendaCanaBruta;
      b10 = b10 + data.MoliendaCanaNeta;
      c10 = c10 + data.AzucarEquivalente;
      z10 = z10 + data.AzucarBlancoProducido + data?.AzucarRefinado; // + data?.AzucarRefinada
      e10 = e10 +
      (data.AzucarCrudoProducido || 0) +
      (data?.AzucarOrganico || 0) +
      (data?.OtroAzucar || 0);
      f10 = f10 + data.MelazaProducida;
      h10 = h10 + data.AzucarRefinado || 0;
      i10 = i10 + data.AzucarOrganico || 0;
      j10 = j10 + data.OtroAzucar || 0;
      k10 = k10 + data.AzucarBlancoProducido;
      l10 = l10 + data.AzucarCrudoProducido;
      dataLaTrinidad = {
        E21: a10,
        F21: b10,
        G21: c10,
        J21: z10,
        K21: e10,
        M21: f10,
        N21: dataLaTrinidad.N21,
        C52: k10,
        D52: h10,
        F52: i10,
        G52: j10,
        L52: l10,
        O52: dataLaTrinidad.O52,
        R52: dataLaTrinidad.R52,
      };
    }

    if (
      data.IngenioNombre === "Leales" &&
      newDate <= fechaParametro &&
      dataInicioIngenios.Cell22 !== undefined &&
      dataInicioIngenios.Cell22 !== null
    ) {
      a11 = a11 + data.MoliendaCanaBruta;
      b11 = b11 + data.MoliendaCanaNeta;
      c11 = c11 + data.AzucarEquivalente;
      z11 = z11 + data.AzucarBlancoProducido + (data.AzucarRefinado || 0);
      e11 = e11 +
      (data.AzucarCrudoProducido || 0) +
      (data?.AzucarOrganico || 0) +
      (data?.OtroAzucar || 0);
      f11 = f11 + data.MelazaProducida;
      h11 = h11 + data.AzucarRefinado || 0;
      i11 = i11 + data.AzucarOrganico || 0;
      j11 = j11 + data.OtroAzucar || 0;
      k11 = k11 + data.AzucarBlancoProducido;
      l11 = l11 + data.AzucarCrudoProducido;

      dataLeales = {
        E22: a11,
        F22: b11,
        G22: c11,
        J22: z11,
        K22: e11,
        M22: f11,
        N22: dataLeales.N22,
        C53: k11,
        D53: h11,
        F53: i11,
        G53: j11,
        L53: l11,
        O53: dataLeales.O53,
        R53: dataLeales.R53,
      };
    }

    if (
      data.IngenioNombre === "Ñuñorco" &&
      newDate <= fechaParametro &&
      dataInicioIngenios.Cell23 !== undefined &&
      dataInicioIngenios.Cell23 !== null
    ) {
      a12 = a12 + data?.MoliendaCanaBruta;
      b12 = b12 + data?.MoliendaCanaNeta;
      c12 = c12 + data?.AzucarEquivalente;
      z12 = z12 + data?.AzucarBlancoProducido + data?.AzucarRefinado; // + data?.AzucarRefinada
      e12 = e12 +
      (data.AzucarCrudoProducido || 0) +
      (data?.AzucarOrganico || 0) +
      (data?.OtroAzucar || 0);
      f12 = f12 + data?.MelazaProducida;
      h12 = h12 + data.AzucarRefinado || 0;
      i12 = i12 + data.AzucarOrganico || 0;
      j12 = j12 + data.OtroAzucar || 0;
      k12 = k12 + data.AzucarBlancoProducido;
      l12 = l12 + data.AzucarCrudoProducido;

      dataÑuñorco = {
        E23: a12,
        F23: b12,
        G23: c12,
        J23: z12,
        K23: e12,
        M23: f12,
        N23: dataÑuñorco.N23,
        C55: k12,
        D55: h12,
        F55: i12,
        G55: j12,
        L55: l12,
        O55: dataÑuñorco.O55,
        R55: dataÑuñorco.R55,
      };
    }

    if (
      data.IngenioNombre === "Santa Barbara" &&
      newDate <= fechaParametro &&
      dataInicioIngenios.Cell24 !== undefined &&
      dataInicioIngenios.Cell24 !== null
    ) {
      a13 = a13 + data.MoliendaCanaBruta;
      b13 = b13 + data.MoliendaCanaNeta;
      c13 = c13 + data.AzucarEquivalente;
      z13 = z13 + data.AzucarBlancoProducido + data?.AzucarRefinado; // + data?.AzucarRefinada
      e13 = e13 +
      (data.AzucarCrudoProducido || 0) +
      (data?.AzucarOrganico || 0) +
      (data?.OtroAzucar || 0);
      f13 = f13 + data.MelazaProducida;
      h13 = h13 + data.AzucarRefinado || 0;
      i13 = i13 + data.AzucarOrganico || 0;
      j13 = j13 + data.OtroAzucar || 0;
      k13 = k13 + data.AzucarBlancoProducido;
      l13 = l13 + data.AzucarCrudoProducido;

      dataStaBarbara = {
        E24: a13,
        F24: b13,
        G24: c13,
        J24: z13,
        K24: e13,
        M24: f13,
        N24: dataStaBarbara.N24,
        C56: k13,
        D56: h13,
        F56: i13,
        G56: j13,
        L56: l13,
        O56: dataStaBarbara.O56,
        R56: dataStaBarbara.R56,
      };
    }

    if (
      data.IngenioNombre === "Santa Rosa" &&
      newDate <= fechaParametro &&
      dataInicioIngenios.Cell25 !== undefined &&
      dataInicioIngenios.Cell25 !== null
    ) {
      a14 = a14 + data.MoliendaCanaBruta;
      b14 = b14 + data.MoliendaCanaNeta;
      c14 = c14 + data.AzucarEquivalente;
      z14 = z14 + data.AzucarBlancoProducido + data?.AzucarRefinado; // + data?.AzucarRefinada
      e14 = e14 +
      (data.AzucarCrudoProducido || 0) +
      (data?.AzucarOrganico || 0) +
      (data?.OtroAzucar || 0);
      f14 = f14 + data.MelazaProducida;
      h14 = h14 + data.AzucarRefinado || 0;
      i14 = i14 + data.AzucarOrganico || 0;
      j14 = j14 + data.OtroAzucar || 0;
      k14 = k14 + data.AzucarBlancoProducido;
      l14 = l14 + data.AzucarCrudoProducido;

      dataStaRosa = {
        E25: a14,
        F25: b14,
        G25: c14,
        J25: z14,
        K25: e14,
        M25: f14,
        N25: dataStaRosa.N25,
        C57: k14,
        D57: h14,
        F57: i14,
        G57: j14,
        L57: l14,
        O57: dataStaRosa.O57,
        R57: dataStaRosa.R57,
      };
    }

    if (
      data.IngenioNombre === "San Juan" &&
      newDate <= fechaParametro &&
      dataInicioIngenios.Cell26 !== undefined &&
      dataInicioIngenios.Cell26 !== null
    ) {
      a15 = a15 + data.MoliendaCanaBruta;
      b15 = b15 + data.MoliendaCanaNeta;
      c15 = c15 + data.AzucarEquivalente;
      z15 = z15 + data.AzucarBlancoProducido; // + data?.AzucarRefinada
      e15 = e15 +
      (data.AzucarCrudoProducido || 0) +
      (data?.AzucarOrganico || 0) +
      (data?.OtroAzucar || 0);
      f15 = f15 + data.MelazaProducida;
      h15 = h15 + data.AzucarRefinado || 0;
      i15 = i15 + data.AzucarOrganico || 0;
      j15 = j15 + data.OtroAzucar || 0;
      k15 = k15 + data.AzucarBlancoProducido;
      l15 = l15 + data.AzucarCrudoProducido;

      dataSanJuan = {
        E26: a15,
        F26: b15,
        G26: c15,
        J26: z15,
        K26: e15,
        L26: l15,
        M26: f15,
        N26: dataSanJuan.N26,
        C58: k15,
        D58: h15,
        F58: i15,
        G58: j15,
        O58: dataSanJuan.O58,
        R58: dataSanJuan.R58,
      };
    }
  });
  setPanelAlcohol(alcoholPanel);
  setPanelCMB(cmbPanel);
  setPanelAzucar(azucarPanel);
  setPanelAzucarEquivalente(azucarPanelEquivalente);
  setPanelAzucarCrudo(azucarPanelCrudo);
  setPanelAzucarBlancoA(azucarPanelBlancoA);
  setPanelAzucarRefinado(azucarPanelRefinado);
  setPanelAzucarOrganico(azucarPanelOrganico);
  setPanelAzucarOtros(azucarPanelOtros);


  /*********************************************************************************/
  /*** ALCOHOL ANHIDRO QUE QUEDO DEFASADO ENTRE EL 5/05/2024 y 15/05/2024
   * QUE PERTENECE A LA ZAFRA 2023 ***/
  if (zafraParteDiario === 2024) {
    dataLaFlorida.R50 = dataLaFlorida.R50 - 2526587;
  }
  if (zafraParteDiario === 2023) {
    dataLaFlorida.R50 = dataLaFlorida.R50 + 2526587;
  }
  /****************/

  

  /*** ALCOHOL ANHIDRO ZAFRA 2024 NO DECLARADO POR LO INGENIOS EN LOS PARTES DIARIOS
   * DECLARADO POR EMAIL
   ***/

  /*LEALES
  Junio: 2.194.476
  Julio: 2.052.522
  Agosto: 4.971.944
  Septiembre: 2.963.470
  Octubre: 1.460.000
  Noviembre: 5.347.000
  Diciembre: 235.750
  Enero: 4.770.000
  Febrero: 3.412.785
  Acumulado: 31.541.737
  */
  if (zafraParteDiario === 2024) {
    dataLeales.R53 = dataLeales.R53 + 2194476 + 2052522 + 4133790 + 4971944 + 2963470 + 1460000 + 5347000 + 235750 + 4770000 + 3412785;
  }

  /* CONCEPCION 
  Junio:2.986.603
  Julio: 8.049.602
  Agosto: 6.083.561
  Septiembre: 6.163.307
  Octubre: 5.436.241
  Noviembre:5.290.243
  Diciembre: 5.819.557
  Enero 2025: 6.522.224
  EFebrero: 5.677.674
  Acumulado: 52.029.419
  */
  if (zafraParteDiario === 2024) {
    dataConcepcion.R46 = dataConcepcion.R46 + 52029419;
  }

  /* BELLA VISTA 
  Junio: 880.968
  Julio: 2.099.136
  Agosto:3.135.585
  Septiembre: 253.748
  Octubre: 2.483.843
  Noviembre: 1.098.950
  Diciembre: 2.031.615
  Enero:
  Febrero: 
  Acumulado: 11.983.845
  */
  if (zafraParteDiario === 2024) {
    dataBellaVista.R45 = dataBellaVista.R45 + 880968 + 2099136 + 3135585 + 253748 + 2483843 + 1098950 + 2031615;

  }
  /**********/

  /*** ALCOHOL ANHIDRO ZAFRA 2023 NO DECLARADO POR LO INGENIOS EN LOS PARTES DIARIOS
   * DECLARADO POR EMAIL
   ***/
  if (zafraParteDiario === 2023) {
    dataBellaVista.R45 = dataBellaVista.R45 + 9669715;
  }
  if (zafraParteDiario === 2023) {
    dataConcepcion.R46 = dataConcepcion.R46 + 35668460;
  }
  if (zafraParteDiario === 2023) {
    dataLeales.R53 = dataLeales.R53 + 26464761;
  }
  /**********/

  setD1(dataAguilares);
  setD2(dataCruzAlta);
  setD3(dataLaFlorida);
  setD4(dataConcepcion);
  setD5(dataMarapa);
  setD6(dataBellaVista);
  setD7(dataFamailla);
  setD8(dataLaCorona);
  setD9(dataLaProvidencia);
  setD10(dataLaTrinidad);
  setD11(dataLeales);
  setD12(dataÑuñorco);
  setD13(dataStaBarbara);
  setD14(dataStaRosa);
  setD15(dataSanJuan);
};

// /***************** MEJORAS REGISTROS GLOBALES *********************/
// SELECT Ingenio, Fecha, Origen, Valor
// FROM (
//     SELECT [Ingenio], [Fecha], 'MOL CB Z15' AS Origen, [Mol CB Z15] AS Valor FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'MOL CB Z16' AS Origen, [Mol CB Z16] AS Valor FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'MOL CB Z17' AS Origen, [Mol CB Z17] AS Valor FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'MOL CB Z18' AS Origen, [Mol CB Z18] AS Valor FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'MOL CB Z19' AS Origen, [Mol CB Z19] AS Valor FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'MOL CB Z20' AS Origen, [Mol CB Z20] AS Valor FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'MOL CB Z21' AS Origen, [Mol CB Z21] AS Valor FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'MOL CB Z22' AS Origen, [Mol CB Z22] AS Valor FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'MOL CB Z23' AS Origen, [Mol CB Z23] AS Valor FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'MOL CB Z24' AS Origen, [Mol CB Z24] AS Valor FROM [DB original]
// ) AS Datos
// WHERE Valor IS NOT NULL
// ORDER BY Valor DESC;


// SELECT top 10 [DB original].[Ingenio], [DB original].[Fecha], 'MOL CB Z15' AS Origen, [DB original].[Mol CB Z15] AS Valor FROM [DB original]
// UNION ALL
// SELECT top 10 [DB original].[Ingenio], [DB original].[Fecha], 'MOL CB Z16' AS Origen, [DB original].[Mol CB Z16] AS Valor FROM [DB original]
// UNION ALL
// SELECT top 10 [DB original].[Ingenio], [DB original].[Fecha], 'MOL CB Z17' AS Origen, [DB original].[Mol CB Z17] AS Valor FROM [DB original]
// UNION ALL
// SELECT top 10 [DB original].[Ingenio], [DB original].[Fecha], 'MOL CB Z18' AS Origen, [DB original].[Mol CB Z18] AS Valor FROM [DB original]
// UNION ALL
// SELECT top 10 [DB original].[Ingenio], [DB original].[Fecha], 'MOL CB Z19' AS Origen, [DB original].[Mol CB Z19] AS Valor FROM [DB original]
// UNION ALL
// SELECT top 10 [DB original].[Ingenio], [DB original].[Fecha], 'MOL CB Z20' AS Origen, [DB original].[Mol CB Z20] AS Valor FROM [DB original]
// UNION ALL
// SELECT top 10 [DB original].[Ingenio], [DB original].[Fecha], 'MOL CB Z21' AS Origen, [DB original].[Mol CB Z21] AS Valor FROM [DB original]
// UNION ALL
// SELECT top 10 [DB original].[Ingenio], [DB original].[Fecha], 'MOL CB Z22' AS Origen, [DB original].[Mol CB Z22] AS Valor FROM [DB original]
// UNION ALL
// SELECT top 10 [DB original].[Ingenio], [DB original].[Fecha], 'MOL CB Z23' AS Origen, [DB original].[Mol CB Z23] AS Valor FROM [DB original]
// UNION ALL
// SELECT top 10 [DB original].[Ingenio], [DB original].[Fecha], 'MOL CB Z24' AS Origen, [DB original].[Mol CB Z24] AS Valor FROM [DB original]
// order by Valor desc;




// /********************* 10 mejores registros por CMB ingresando nombre ingenio *****************************/
// SELECT top 10 Ingenio, Fecha, Zafra, CMB, [Az Equivalente]
// FROM (
//     SELECT [Ingenio], [Fecha], 'Zafra 15' AS Zafra, [Mol CB Z15] AS CMB, [Az Eq Z15] AS [Az Equivalente] FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'Zafra 16' AS Zafra, [Mol CB Z16] AS CMB, [Az Eq Z16] AS [Az Equivalente] FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'Zafra 17' AS Zafra, [Mol CB Z17] AS CMB, [Az Eq Z17] AS [Az Equivalente] FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'Zafra 18' AS Zafra, [Mol CB Z18] AS CMB, [Az Eq Z18] AS [Az Equivalente] FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'Zafra 19' AS Zafra, [Mol CB Z19] AS CMB, [Az Eq Z19] AS [Az Equivalente] FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'Zafra 20' AS Zafra, [Mol CB Z20] AS CMB, [Az Eq Z20] AS [Az Equivalente] FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'Zafra 21' AS Zafra, [Mol CB Z21] AS CMB, [Az Eq Z21] AS [Az Equivalente] FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'Zafra 22' AS Zafra, [Mol CB Z22] AS CMB, [Az Eq Z22] AS [Az Equivalente] FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'Zafra 23' AS Zafra, [Mol CB Z23] AS CMB, [Az Eq Z23] AS [Az Equivalente] FROM [DB original]
//     UNION ALL
//     SELECT [Ingenio], [Fecha], 'Zafra 24' AS Zafra, [Mol CB Z24] AS CMB, [Az Eq Z24] AS [Az Equivalente] FROM [DB original]
// ) AS Datos
// WHERE CMB IS NOT NULL and Ingenio = nombreIngenio
// ORDER BY CMB DESC;



// /******************* ZAFRA HISTORICOS ****************************/
// SELECT TOP 10 * FROM (
//   SELECT  'Zafra 15' AS Origen, [DB original].[Mol CB Z15] AS CMB FROM [DB original]
//   UNION ALL
//   SELECT  'Zafra 16' AS Origen, [DB original].[Mol CB Z16] AS CMB FROM [DB original]
//   UNION ALL
//   SELECT  'Zafra 17' AS Origen, [DB original].[Mol CB Z17] AS CMB FROM [DB original]
//   UNION ALL
//   SELECT  'Zafra 18' AS Origen, [DB original].[Mol CB Z18] AS CMB FROM [DB original]
//   UNION ALL
//   SELECT  'Zafra 19' AS Origen, [DB original].[Mol CB Z19] AS CMB FROM [DB original]
//   UNION ALL
//   SELECT  'Zafra 20' AS Origen, [DB original].[Mol CB Z20] AS CMB FROM [DB original]
//   UNION ALL
//   SELECT  'Zafra 21' AS Origen, [DB original].[Mol CB Z21] AS CMB FROM [DB original]
//   UNION ALL
//   SELECT  'Zafra 22' AS Origen, [DB original].[Mol CB Z22] AS CMB FROM [DB original]
//   UNION ALL
//   SELECT  'Zafra 23' AS Origen, [DB original].[Mol CB Z23] AS CMB FROM [DB original]
//   UNION ALL
//   SELECT  'Zafra 24' AS Origen, [DB original].[Mol CB Z24] AS CMB FROM [DB original]
// ) AS Datos
// WHERE CMB IS NOT NULL AND CMB > 0
// ORDER BY Origen DESC;


// SELECT TOP 10  Zafra, CMB
// FROM (
//     SELECT 'Zafra 2015' AS Zafra, [Mol CB Z15] AS CMB FROM [DB original]
//     UNION ALL
//     SELECT 'Zafra 2016', [Mol CB Z16] FROM [DB original]
//     UNION ALL
//     SELECT 'Zafra 2017', [Mol CB Z17] FROM [DB original]
//     UNION ALL
//     SELECT 'Zafra 2018', [Mol CB Z18] FROM [DB original]
//     UNION ALL
//     SELECT 'Zafra 2019', [Mol CB Z19] FROM [DB original]
//     UNION ALL
//     SELECT 'Zafra 2020', [Mol CB Z20] FROM [DB original]
//     UNION ALL
//     SELECT 'Zafra 2021', [Mol CB Z21] FROM [DB original]
//     UNION ALL
//     SELECT 'Zafra 2022', [Mol CB Z22] FROM [DB original]
//     UNION ALL
//     SELECT 'Zafra 2023', [Mol CB Z23] FROM [DB original]
//     UNION ALL
//     SELECT 'Zafra 2024', [Mol CB Z24] FROM [DB original]
// ) AS Datos
// WHERE CMB IS NOT NULL
// ORDER BY CMB DESC;