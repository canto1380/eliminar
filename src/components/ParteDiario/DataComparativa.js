/* eslint-disable no-undef */
import { dateConverted } from "../../helpers/helpers";

let dataAguilares = {
  R10: 0,
  S10: 0,
  T10: 0,
  W10: 0,
  X10: 0,
  Z10: 0,
  AA10: 0,
  AB10: 0,
  AC10: 0,
  AD10: 0,
  AE10: 0,
  AF10: 0,
  AG10: 0,
  AH10: 0,
},
  dataCruzAlta = {
    R11: 0,
    S11: 0,
    T11: 0,
    W11: 0,
    X11: 0,
    Z11: 0,
    AA11: 0,
    AB11: 0,
    AC11: 0,
    AD11: 0,
    AE11: 0,
    AF11: 0,
    AG11: 0,
    AH11: 0,
  },
  dataLaFlorida = {
    R12: 0,
    S12: 0,
    T12: 0,
    W12: 0,
    X12: 0,
    Z12: 0,
    AA12: 0,
    AB12: 0,
    AC12: 0,
    AD12: 0,
    AE12: 0,
    AF12: 0,
    AG12: 0,
    AH12: 0,
  },
  dataConcepcion = {
    R14: 0,
    S14: 0,
    T14: 0,
    W14: 0,
    X14: 0,
    Z14: 0,
    AA14: 0,
    AB14: 0,
    AC14: 0,
    AD14: 0,
    AE14: 0,
    AF14: 0,
    AG14: 0,
    AH14: 0,
  },
  dataMarapa = {
    R15: 0,
    S15: 0,
    T15: 0,
    W15: 0,
    X15: 0,
    Z15: 0,
    AA15: 0,
    AB15: 0,
    AC15: 0,
    AD15: 0,
    AE15: 0,
    AF15: 0,
    AG15: 0,
    AH15: 0,
  },
  dataBellaVista = {
    R17: 0,
    S17: 0,
    T17: 0,
    W17: 0,
    X17: 0,
    Z17: 0,
    AA17: 0,
    AB17: 0,
    AC17: 0,
    AD17: 0,
    AE17: 0,
    AF17: 0,
    AG17: 0,
    AH17: 0,
  },
  dataFamailla = {
    R18: 0,
    S18: 0,
    T18: 0,
    W18: 0,
    X18: 0,
    Z18: 0,
    AA18: 0,
    AB18: 0,
    AC18: 0,
    AD18: 0,
    AE18: 0,
    AF18: 0,
    AG18: 0,
    AH18: 0,
  },
  dataLaCorona = {
    R19: 0,
    S19: 0,
    T19: 0,
    W19: 0,
    X19: 0,
    Z19: 0,
    AA19: 0,
    AB19: 0,
    AC19: 0,
    AD19: 0,
    AE19: 0,
    AF19: 0,
    AG19: 0,
    AH19: 0,
  },
  dataLaProvidencia = {
    R20: 0,
    S20: 0,
    T20: 0,
    W20: 0,
    X20: 0,
    Z20: 0,
    AA20: 0,
    AB20: 0,
    AC20: 0,
    AD20: 0,
    AE20: 0,
    AF20: 0,
    AG20: 0,
    AH20: 0,
  },
  dataLaTrinidad = {
    R21: 0,
    S21: 0,
    T21: 0,
    W21: 0,
    X21: 0,
    Z21: 0,
    AA21: 0,
    AB21: 0,
    AC21: 0,
    AD21: 0,
    AE21: 0,
    AF21: 0,
    AG21: 0,
    AH21: 0,
  },
  dataLeales = {
    R22: 0,
    S22: 0,
    T22: 0,
    W22: 0,
    X22: 0,
    Z22: 0,
    AA22: 0,
    AB22: 0,
    AC22: 0,
    AD22: 0,
    AE22: 0,
    AF22: 0,
    AG22: 0,
    AH22: 0,
  },
  dataÑuñorco = {
    R23: 0,
    S23: 0,
    T23: 0,
    W23: 0,
    X23: 0,
    Z23: 0,
    AA23: 0,
    AB23: 0,
    AC23: 0,
    AD23: 0,
    AE23: 0,
    AF23: 0,
    AG23: 0,
    AH23: 0,
  },
  dataStaBarbara = {
    R24: 0,
    S24: 0,
    T24: 0,
    W24: 0,
    X24: 0,
    Z24: 0,
    AA24: 0,
    AB24: 0,
    AC24: 0,
    AD24: 0,
    AE24: 0,
    AF24: 0,
    AG24: 0,
    AH24: 0,
  },
  dataStaRosa = {
    R25: 0,
    S25: 0,
    T25: 0,
    W25: 0,
    X25: 0,
    Z25: 0,
    AA25: 0,
    AB25: 0,
    AC25: 0,
    AD25: 0,
    AE25: 0,
    AF25: 0,
    AG25: 0,
    AH25: 0,
  },
  dataSanJuan = {
    R26: 0,
    S26: 0,
    T26: 0,
    W26: 0,
    X26: 0,
    Z26: 0,
    AA26: 0,
    AB26: 0,
    AC26: 0,
    AD26: 0,
    AE26: 0,
    AF26: 0,
    AG26: 0,
    AH26: 0,
  },

  /** NORTE **/
  dataLaEsperanza = {
    E44: 0, //CMB
    F44: 0, //CMN
    G44: 0, //EQUIVALENTE
    J44: 0, //BLANCO = SUMA DE REFINADO Y BLANCO
    K44: 0, //CRUDO = SUMA DE CRUDO, ORGANICO Y OTROS
    M44: 0, //MELAZA
    N44: 0, //AZ P/ALCOHOL
    O44: 0, //HIDRATADO
    P44: 0, //ANHIDRO
    V44: 0, //BLANCO
    W44: 0, //REFINADO
    X44: 0, //ORGANICO
    Y44: 0, //OTROS
    Z44: 0, //CRUDO
  },
  dataLedesma = {
    E45: 0, //CMB
    F45: 0, //CMN
    G45: 0, //EQUIVALENTE
    J45: 0, //BLANCO = SUMA DE REFINADO Y BLANCO
    K45: 0, //CRUDO = SUMA DE CRUDO, ORGANICO Y OTROS
    M45: 0, //MELAZA
    N45: 0, //AZ P/ALCOHOL
    O45: 0, //HIDRATADO
    P45: 0, //ANHIDRO
    V45: 0, //BLANCO
    W45: 0, //REFINADO
    X45: 0, //ORGANICO
    Y45: 0, //OTROS
    Z45: 0, //CRUDO
  },
  dataRioGrande = {
    E46: 0, //CMB
    F46: 0, //CMN
    G46: 0, //EQUIVALENTE
    J46: 0, //BLANCO = SUMA DE REFINADO Y BLANCO
    K46: 0, //CRUDO = SUMA DE CRUDO, ORGANICO Y OTROS
    M46: 0, //MELAZA
    N46: 0, //AZ P/ALCOHOL
    O46: 0, //HIDRATADO
    P46: 0, //ANHIDRO
    V46: 0, //BLANCO
    W46: 0, //REFINADO
    X46: 0, //ORGANICO
    Y46: 0, //OTROS
    Z46: 0, //CRUDO
  },
  dataSanIsidro = {
    E47: 0, //CMB
    F47: 0, //CMN
    G47: 0, //EQUIVALENTE
    J47: 0, //BLANCO = SUMA DE REFINADO Y BLANCO
    K47: 0, //CRUDO = SUMA DE CRUDO, ORGANICO Y OTROS
    M47: 0, //MELAZA
    N47: 0, //AZ P/ALCOHOL
    O47: 0, //HIDRATADO
    P47: 0, //ANHIDRO
    V47: 0, //BLANCO
    W47: 0, //REFINADO
    X47: 0, //ORGANICO
    Y47: 0, //OTROS
    Z47: 0, //CRUDO
  },
  dataSeaboard = {
    E48: 0, //CMB
    F48: 0, //CMN
    G48: 0, //EQUIVALENTE
    J48: 0, //BLANCO = SUMA DE REFINADO Y BLANCO
    K48: 0, //CRUDO = SUMA DE CRUDO, ORGANICO Y OTROS
    M48: 0, //MELAZA
    N48: 0, //AZ P/ALCOHOL
    O48: 0, //HIDRATADO
    P48: 0, //ANHIDRO
    V48: 0, //BLANCO
    W48: 0, //REFINADO
    X48: 0, //ORGANICO
    Y48: 0, //OTROS
    Z48: 0, //CRUDO
  },

  dataInicioIngenios = {
    Cell10: 0,
    CellR10: 0,
    Cell11: 0,
    CellR11: 0,
    Cell12: 0,
    CellR12: 0,
    Cell14: 0,
    CellR14: 0,
    Cell15: 0,
    CellR15: 0,
    Cell17: 0,
    CellR17: 0,
    Cell18: 0,
    CellR18: 0,
    Cell19: 0,
    CellR19: 0,
    Cell20: 0,
    CellR20: 0,
    Cell21: 0,
    CellR21: 0,
    Cell22: 0,
    CellR22: 0,
    Cell23: 0,
    CellR23: 0,
    Cell24: 0,
    CellR24: 0,
    Cell25: 0,
    CellR25: 0,
    Cell26: 0,
    CellR26: 0,
  },
  /** NORTE **/
  dataInicioIngeniosNorte = {
    Cell44: 0,
    CellR44: 0,
    Cell45: 0,
    CellR45: 0,
    Cell46: 0,
    CellR46: 0,
    Cell47: 0,
    CellR47: 0,
    Cell48: 0,
    CellR48: 0,
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
  },
  dataInicioAnhidroIngenios = {
    aguilInicioAnhidro: null,
    aguilFinAnhidro: null,
    cruzInicioAnhidro: null,
    cruzFinAnhidro: null,
    floridaInicioAnhidro: null,
    floridaFinAnhidro: null,
    concepInicioAnhidro: null,
    concepFinAnhidro: null,
    marapaInicioAnhidro: null,
    marapaFinAnhidro: null,
    bellaInicioAnhidro: null,
    bellaFinAnhidro: null,
    famaillaInicioAnhidro: null,
    famaillaFinAnhidro: null,
    coronaInicioAnhidro: null,
    coronaFinAnhidro: null,
    provInicioAnhidro: null,
    provFinAnhidro: null,
    trinInicioAnhidro: null,
    trinFinAnhidro: null,
    lealesInicioAnhidro: null,
    lealesFinAnhidro: null,
    nunorcoInicioAnhidro: null,
    nunorcoFinAnhidro: null,
    staBarInicioAnhidro: null,
    staBarFinAnhidro: null,
    staRosaInicioAnhidro: null,
    staRosaFinAnhidro: null,
    sanJuanInicioAnhidro: null,
    sanJuanFinAnhidro: null,
  },
  dataInicioAnhidroIngeniosNorte = {
    sanisidroInicioAnhidro: null,
    sanisidroFinAnhidro: null,
    seaboardInicioAnhidro: null,
    seaboardFinAnhidro: null,
    ledesmaInicioAnhidro: null,
    ledesmaFinAnhidro: null,
    riograndeInicioAnhidro: null,
    riograndeFinAnhidro: null,
    esperanzaInicioAnhidro: null,
    esperanzaFinAnhidro: null,
  };

export const dataComparativaPorTipo = (
  dataImportComparativa,
  dataImportDestileriaComparativa,
  dataImportAnhidroComparativa,
  dataImportComparativaNorte,
  dataImportDestileriaComparativaNorte,
  dataImportAnhidroComparativaNorte,
  dataEnd,
  dateFinIngenios,
  zafraParteDiario,
  setDc1,
  setDc2,
  setDc3,
  setDc4,
  setDc5,
  setDc6,
  setDc7,
  setDc8,
  setDc9,
  setDc10,
  setDc11,
  setDc12,
  setDc13,
  setDc14,
  setDc15,
  setNc1,
  setNc2,
  setNc3,
  setNc4,
  setNc5,
  setFechasInicioIngeniosComparativa,
  setFechasInicioDestileriaIngeniosComparativa,
  setFechasInicioAnhidroIngeniosComparativa,
  setFechasInicioIngeniosNorteComparativa,
  setFechasInicioDestileriaIngeniosNorteComparativa,
  setFechasInicioAnhidroIngeniosNorteComparativa
) => {
  const date = dataEnd !== null ? new Date(dataEnd) : new Date();
  const anioDataComparativa = date.getFullYear() - 1;
  const dateComparativa = new Date(date);
  dateComparativa.setFullYear(anioDataComparativa);

  /** FECHAS INICIOS DE ZAFRA **/
  const aguil = dateFinIngenios?.find((d) => d.nombre_ingenio === "Aguilares");

  const cruz = dateFinIngenios?.find((d) => d.nombre_ingenio === "Cruz Alta");

  const florida = dateFinIngenios?.find(
    (d) => d.nombre_ingenio === "La Florida"
  );

  const concep = dateFinIngenios?.find(
    (d) => d.nombre_ingenio === "Concepción"
  );

  const marapa = dateFinIngenios?.find((d) => d.nombre_ingenio === "Marapa");

  const bellaVista = dateFinIngenios?.find(
    (d) => d.nombre_ingenio === "Bella Vista"
  );

  const famail = dateFinIngenios?.find((d) => d.nombre_ingenio === "Famaillá");

  const corona = dateFinIngenios?.find((d) => d.nombre_ingenio === "La Corona");

  const providencia = dateFinIngenios?.find(
    (d) => d.nombre_ingenio === "La Providencia"
  );

  const trinidad = dateFinIngenios?.find(
    (d) => d.nombre_ingenio === "La Trinidad"
  );

  const leales = dateFinIngenios?.find((d) => d.nombre_ingenio === "Leales");

  const nunorco = dateFinIngenios?.find((d) => d.nombre_ingenio === "Ñuñorco");
  const stabarbara = dateFinIngenios?.find(
    (d) => d.nombre_ingenio === "Santa Bárbara"
  );
  const starosa = dateFinIngenios?.find(
    (d) => d.nombre_ingenio === "Santa Rosa"
  );
  const sanjuan = dateFinIngenios?.find((d) => d.nombre_ingenio === "San Juan");

  /** NORTE **/
  const sanisidro = dateFinIngenios?.find(
    (d) => d.nombre_ingenio === "San Isidro"
  );
  const seaboard = dateFinIngenios?.find(
    (d) => d.nombre_ingenio === "Seaboard"
  );
  const ledesma = dateFinIngenios?.find((d) => d.nombre_ingenio === "Ledesma");
  const riogrande = dateFinIngenios?.find(
    (d) => d.nombre_ingenio === "Río Grande"
  );
  const laesperanza = dateFinIngenios?.find(
    (d) => d.nombre_ingenio === "La Esperanza"
  );

  dataInicioIngenios = {
    Cell10: aguil?.inicio_zafra,
    CellR10: aguil?.fin_zafra,
    Cell11: cruz?.inicio_zafra,
    CellR11: cruz?.fin_zafra,
    Cell12: florida?.inicio_zafra,
    CellR12: florida?.fin_zafra,
    Cell14: concep?.inicio_zafra,
    CellR14: concep?.fin_zafra,
    Cell15: marapa?.inicio_zafra,
    CellR15: marapa?.fin_zafra,
    Cell17: bellaVista?.inicio_zafra,
    CellR17: bellaVista?.fin_zafra,
    Cell18: famail?.inicio_zafra,
    CellR18: famail?.fin_zafra,
    Cell19: corona?.inicio_zafra,
    CellR19: corona?.fin_zafra,
    Cell20: providencia?.inicio_zafra,
    CellR20: providencia?.fin_zafra,
    Cell21: trinidad?.inicio_zafra,
    CellR21: trinidad?.fin_zafra,
    Cell22: leales?.inicio_zafra,
    CellR22: leales?.fin_zafra,
    Cell23: nunorco?.inicio_zafra,
    CellR23: nunorco?.fin_zafra,
    Cell24: stabarbara?.inicio_zafra,
    CellR24: stabarbara?.fin_zafra,
    Cell25: starosa?.inicio_zafra,
    CellR25: starosa?.fin_zafra,
    Cell26: sanjuan?.inicio_zafra,
    CellR26: sanjuan?.fin_zafra,
  };

  /** NORTE **/
  dataInicioIngeniosNorte = {
    Cell44: laesperanza?.inicio_zafra,
    CellR44: laesperanza?.fin_zafra,
    Cell45: ledesma?.inicio_zafra,
    CellR45: ledesma?.fin_zafra,
    Cell46: riogrande?.inicio_zafra,
    CellR46: riogrande?.fin_zafra,
    Cell47: seaboard?.inicio_zafra,
    CellR47: seaboard?.fin_zafra,
    Cell48: sanisidro?.inicio_zafra,
    CellR48: sanisidro?.fin_zafra,
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
  dataInicioAnhidroIngenios = {
    aguilInicioAnhidro: aguil?.inicio_anhidro,
    aguilFinAnhidro: aguil?.fin_anhidro,
    cruzInicioAnhidro: cruz?.inicio_anhidro,
    cruzFinAnhidro: cruz?.fin_anhidro,
    floridaInicioAnhidro: florida?.inicio_anhidro,
    floridaFinAnhidro: florida?.fin_anhidro,
    concepInicioAnhidro: concep?.inicio_anhidro,
    concepFinAnhidro: concep?.fin_anhidro,
    marapaInicioAnhidro: marapa?.inicio_anhidro,
    marapaFinAnhidro: marapa?.fin_anhidro,
    bellaInicioAnhidro: bellaVista?.inicio_anhidro,
    bellaFinAnhidro: bellaVista?.fin_anhidro,
    famaillaInicioAnhidro: famail?.inicio_anhidro,
    famaillaFinAnhidro: famail?.fin_anhidro,
    coronaInicioAnhidro: corona?.inicio_anhidro,
    coronaFinAnhidro: corona?.fin_anhidro,
    provInicioAnhidro: providencia?.inicio_anhidro,
    provFinAnhidro: providencia?.fin_anhidro,
    trinInicioAnhidro: trinidad?.inicio_anhidro,
    trinFinAnhidro: trinidad?.fin_anhidro,
    lealesInicioAnhidro: leales?.inicio_anhidro,
    lealesFinAnhidro: leales?.fin_anhidro,
    nunorcoInicioAnhidro: nunorco?.inicio_anhidro,
    nunorcoFinAnhidro: nunorco?.fin_anhidro,
    staBarInicioAnhidro: stabarbara?.inicio_anhidro,
    staBarFinAnhidro: stabarbara?.fin_anhidro,
    staRosaInicioAnhidro: starosa?.inicio_anhidro,
    staRosaFinAnhidro: starosa?.fin_anhidro,
    sanJuanInicioAnhidro: sanjuan?.inicio_anhidro,
    sanJuanFinAnhidro: sanjuan?.fin_anhidro,
  };

  dataInicioAnhidroIngeniosNorte = {
    esperanzaInicioAnhidro: laesperanza?.inicio_anhidro,
    esperanzaFinAnhidro: laesperanza?.fin_anhidro,
    ledesmaInicioAnhidro: ledesma?.inicio_anhidro,
    ledesmaFinAnhidro: ledesma?.fin_anhidro,
    riograndeInicioAnhidro: riogrande?.inicio_anhidro,
    riograndeFinAnhidro: riogrande?.fin_anhidro,
    seaboardInicioAnhidro: seaboard?.inicio_anhidro,
    seaboardFinAnhidro: seaboard?.fin_anhidro,
    sanisidroInicioAnhidro: sanisidro?.inicio_anhidro,
    sanisidroFinAnhidro: sanisidro?.fin_anhidro,
  };

  setFechasInicioIngeniosComparativa(dataInicioIngenios);
  setFechasInicioDestileriaIngeniosComparativa(dataInicioDestileriaIngenios);
  setFechasInicioAnhidroIngeniosComparativa(dataInicioAnhidroIngenios);
  setFechasInicioIngeniosNorteComparativa(dataInicioIngeniosNorte);
  setFechasInicioDestileriaIngeniosNorteComparativa(
    dataInicioDestileriaIngeniosNorte
  );
  setFechasInicioAnhidroIngeniosNorteComparativa(
    dataInicioAnhidroIngeniosNorte
  );

  for (let i = 1; i <= 20; i++) {
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
    let varName13 = "m" + i;
    let varName14 = "n" + i;

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
  /** TUCUMAN **/
  dataImportDestileriaComparativa?.forEach((data) => {
    const newDate = new Date(data.fechaParte);
    const fechaParametro = dataEnd !== null ? new Date(dataEnd) : new Date();
    const anioData = fechaParametro.getFullYear() - 1;
    const diaData = fechaParametro.getDate() ;
    fechaParametro.setDate(diaData);
    fechaParametro.setFullYear(anioData);
    if (
      data.ingenioNombre === "Aguilares" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.aguilInicio)
    ) {
      g1 = g1 + data.alcoholProducido;
      i1 = i1 + data.alcoholHidratado;
      dataAguilares = {
        AA10: g1,
        AC10: i1,
      };
    }

    if (
      data.ingenioNombre === "Cruz Alta" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.cruzInicio)
    ) {
      g2 = g2 + data.alcoholProducido;
      i2 = i2 + data.alcoholHidratado;
      dataCruzAlta = {
        AA11: g2,
        AC11: i2,
      };
    }
    if (
      data.ingenioNombre === "La Florida" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.floridaInicio)
    ) {
      g3 = g3 + data.alcoholProducido;
      i3 = i3 + data.alcoholHidratado;
      dataLaFlorida = {
        AA12: g3,
        AC12: i3,
      };
    }
    if (
      data.ingenioNombre === "Concepción" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.concepInicio)
    ) {
      g4 = g4 + data.alcoholProducido;
      i4 = i4 + data.alcoholHidratado;
      dataConcepcion = {
        AA14: g4,
        AC14: i4,
      };
    }

    if (
      data.ingenioNombre === "Marapa" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.marapaInicio)
    ) {
      g5 = g5 + data.alcoholProducido;
      i5 = i5 + data.alcoholHidratado;
      dataMarapa = {
        AA15: g5,
        AC15: i5,
      };
    }

    if (
      data.ingenioNombre === "Bella Vista" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.bellaInicio)
    ) {
      g6 = g6 + data.alcoholProducido;
      i6 = i6 + data.alcoholHidratado;
      dataBellaVista = {
        AA17: g6,
        AC17: i6,
      };
    }

    if (
      data.ingenioNombre === "Famaillá" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.famaillaInicio)
    ) {
      g7 = g7 + data.alcoholProducido;
      i7 = i7 + data.alcoholHidratado;
      dataFamailla = {
        AA18: g7,
        AC18: i7,
      };
    }

    if (
      data.ingenioNombre === "La Corona" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.coronaInicio)
    ) {
      g8 = g8 + data.alcoholProducido;
      i8 = i8 + data.alcoholHidratado;
      dataLaCorona = {
        AA19: g8,
        AC19: i8,
      };
    }

    if (
      data.ingenioNombre === "La Providencia" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.provInicio)
    ) {
      g9 = g9 + data.alcoholProducido;
      i9 = i9 + data.alcoholHidratado;
      dataLaProvidencia = {
        AA20: g9,
        AC20: i9,
      };
    }

    if (
      data.ingenioNombre === "La Trinidad" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.trinInicio)
    ) {
      g10 = g10 + data.alcoholProducido;
      i10 = i10 + data.alcoholHidratado;
      dataLaTrinidad = {
        AA21: g10,
        AC21: i10,
      };
    }

    if (
      data.ingenioNombre === "Leales" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.lealesInicio)
    ) {
      g11 = g11 + data.alcoholProducido;
      i11 = i11 + data.alcoholHidratado;
      dataLeales = {
        AA22: g11,
        AC22: i11,
      };
    }

    if (
      data.ingenioNombre === "Ñuñorco" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.nunorcoInicio)
    ) {
      g12 = g12 + data.alcoholProducido;
      i12 = i12 + data.alcoholHidratado;
      dataÑuñorco = {
        AA23: g12,
        AC23: i12,
      };
    }

    if (
      data.ingenioNombre === "Santa Barbara" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.staBarInicio)
    ) {
      g13 = g13 + data.alcoholProducido;
      i13 = i13 + data.alcoholHidratado;
      dataStaBarbara = {
        AA24: g13,
        AC24: i13,
      };
    }

    if (
      data.ingenioNombre === "Santa Rosa" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.staRosaInicio)
    ) {
      g14 = g14 + data.alcoholProducido;
      i14 = i14 + data.alcoholHidratado;
      dataStaRosa = {
        AA25: g14,
        AC25: i14,
      };
    }

    if (
      data.ingenioNombre === "San Juan" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.sanJuanInicio)
    ) {
      g15 = g15 + data.alcoholProducido;
      i15 = i15 + data.alcoholHidratado;
      dataSanJuan = {
        AA26: g15,
        AC26: i15,
      };
    }
  });

  /** NORTE **/
  dataImportDestileriaComparativaNorte?.forEach((data) => {
    const newDate = new Date(data.fechaParte)
    const fechaParametro = dataEnd !== null ? new Date(dataEnd) : new Date();
    const anioData = fechaParametro.getFullYear() - 1;
    const diaData = fechaParametro.getDate();
    fechaParametro.setDate(diaData);
    fechaParametro.setFullYear(anioData);

    if (
      data.ingenioNombre === "La Esperanza" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngeniosNorte.esperanzaInicio)
    ) {
      g16 = g16 + data.alcoholProducido;
      i16 = i16 + data.alcoholHidratado || 0;
      dataLaEsperanza = {
        N44: g16,
        O44: i16,
      };
    }
    if (
      data.ingenioNombre === "Ledesma" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngeniosNorte.ledesmaInicio)
    ) {
      g17 = g17 + data.alcoholProducido;
      i17 = i17 + data.alcoholHidratado || 0;
      dataLedesma = {
        N45: g17,
        O45: i17,
      };
    }
    if (
      data.ingenioNombre === "Río Grande" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngeniosNorte.riograndeInicio)
    ) {
      g18 = g18 + data.alcoholProducido;
      i18 = i18 + data.alcoholHidratado || 0;
      dataRioGrande = {
        N46: g18,
        O46: i18,
      };
    }
    if (
      data.ingenioNombre === "San Isidro" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngeniosNorte.sanisidroInicio)
    ) {
      g19 = g19 + data.alcoholProducido;
      i19 = i19 + data.alcoholHidratado || 0;
      dataSanIsidro = {
        N47: g19,
        O47: i19,
      };
    }
    if (
      data.ingenioNombre === "Seaboard" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngeniosNorte.seaboardInicio)
    ) {
      g20 = g20 + data.alcoholProducido;
      i20 = i20 + data.alcoholHidratado || 0;
      dataSeaboard = {
        N48: g20,
        O48: i20,
      };
    }
  });
  /**************************************************************************************/
  /****************************** DATOS ANHIDRO ALCOHOL ******************************/
  /** TUCUMAN **/
  
  // Datos de anhidro por documento para años 2024 y 2023
  const anhidroLeales = [
    { zafra: 2024, anio: 2024, mesNumero: 6, mesNombre: 'junio', valor: 2194476 },
    { zafra: 2024, anio: 2024, mesNumero: 7, mesNombre: 'julio', valor: 2052522 },
    { zafra: 2024, anio: 2024, mesNumero: 8, mesNombre: 'agosto', valor: 4971944 },
    { zafra: 2024, anio: 2024, mesNumero: 9, mesNombre: 'septiembre', valor: 2963470 },
    { zafra: 2024, anio: 2024, mesNumero: 10, mesNombre: 'octubre', valor: 1460000 },
    { zafra: 2024, anio: 2024, mesNumero: 11, mesNombre: 'noviembre', valor: 5347000 },
    { zafra: 2024, anio: 2024, mesNumero: 12, mesNombre: 'diciembre', valor: 235750 },
    { zafra: 2024, anio: 2025, mesNumero: 1, mesNombre: 'enero', valor: 4770000 },
    { zafra: 2024, anio: 2025, mesNumero: 2, mesNombre: 'febrero', valor: 3412785 },
  ];

  const anhidroConcepcion = [
    { zafra: 2024, anio: 2024, mesNumero: 6, mesNombre: 'junio', valor: 2986603 },
    { zafra: 2024, anio: 2024, mesNumero: 7, mesNombre: 'julio', valor: 8049602 },
    { zafra: 2024, anio: 2024, mesNumero: 8, mesNombre: 'agosto', valor: 6083561 },
    { zafra: 2024, anio: 2024, mesNumero: 9, mesNombre: 'septiembre', valor: 6163307 },
    { zafra: 2024, anio: 2024, mesNumero: 10, mesNombre: 'octubre', valor: 5436241 },
    { zafra: 2024, anio: 2024, mesNumero: 11, mesNombre: 'noviembre', valor: 5290243 },
    { zafra: 2024, anio: 2024, mesNumero: 12, mesNombre: 'diciembre', valor: 5819557 },
    { zafra: 2024, anio: 2025, mesNumero: 1, mesNombre: 'enero', valor: 6522224 },
    { zafra: 2024, anio: 2025, mesNumero: 2, mesNombre: 'febrero', valor: 5677674 },
    { zafra: 2024, anio: 2025, mesNumero: 3, mesNombre: 'marzo', valor: 5928463 },
    { zafra: 2024, anio: 2025, mesNumero: 4, mesNombre: 'abril', valor: 5551377 },
  ];

  const anhidroBellaVista = [
    { zafra: 2024, anio: 2024, mesNumero: 6, mesNombre: 'junio', valor: 880968 },
    { zafra: 2024, anio: 2024, mesNumero: 7, mesNombre: 'julio', valor: 2099136 },
    { zafra: 2024, anio: 2024, mesNumero: 8, mesNombre: 'agosto', valor: 3135585 },
    { zafra: 2024, anio: 2024, mesNumero: 9, mesNombre: 'septiembre', valor: 253748 },
    { zafra: 2024, anio: 2024, mesNumero: 10, mesNombre: 'octubre', valor: 2483843 },
    { zafra: 2024, anio: 2024, mesNumero: 11, mesNombre: 'noviembre', valor: 1098950 },
    { zafra: 2024, anio: 2024, mesNumero: 12, mesNombre: 'diciembre', valor: 2031615 },
    { zafra: 2024, anio: 2025, mesNumero: 2, mesNombre: 'febrero', valor: 2269182 },
    { zafra: 2024, mesNumero: 3, mesNombre: 'marzo', valor: 543734 },
  ];

  // Datos de anhidro 2023 (valores acumulados)
  const anhidroLeales2023 = 26464761;
  const anhidroConcepcion2023 = 35668460;
  const anhidroBellaVista2023 = 9669715;

  dataImportAnhidroComparativa?.forEach((data) => {
    const newDate = new Date(data.fechaParte);
    const fechaParametro = dataEnd !== null ? new Date(dataEnd) : new Date();
    const anioData = fechaParametro.getFullYear() - 1;
    const diaData = fechaParametro.getDate();
    fechaParametro.setDate(diaData);
    fechaParametro.setFullYear(anioData);
    if (
      data.ingenioNombre === "Aguilares" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioAnhidroIngenios.aguilInicioAnhidro)
    ) {
      h1 = h1 + data.alcoholAnhidro || 0;
      dataAguilares = {
        AB10: h1,
        AA10: dataAguilares.AA10,
        AC10: dataAguilares.AC10,
      };
    }

    if (
      data.ingenioNombre === "Cruz Alta" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioAnhidroIngenios.cruzInicioAnhidro)
    ) {
      h2 = h2 + data.alcoholAnhidro || 0;
      dataCruzAlta = {
        AB11: h2,
        AA11: dataCruzAlta.AA11,
        AC11: dataCruzAlta.AC11,
      };
    }
    if (
      data.ingenioNombre === "La Florida" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioAnhidroIngenios.floridaInicioAnhidro)
    ) {
      h3 = h3 + data.alcoholAnhidro || 0;
      dataLaFlorida = {
        AB12: h3,
        AA12: dataLaFlorida.AA12,
        AC12: dataLaFlorida.AC12,
      };
    }
    if (
      data.ingenioNombre === "Concepción" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioAnhidroIngenios.concepInicioAnhidro)
    ) {
      h4 = h4 + data.alcoholAnhidro || 0;
      dataConcepcion = {
        AB14: h4,
        AA14: dataConcepcion.AA14,
        AC14: dataConcepcion.AC14,
      };
    }

    if (
      data.ingenioNombre === "Marapa" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioAnhidroIngenios.marapaInicioAnhidro)
    ) {
      h5 = h5 + data.alcoholAnhidro || 0;
      dataMarapa = {
        AB15: h5,
        AA15: dataMarapa.AA15,
        AC15: dataMarapa.AC15,
      };
    }

    if (
      data.ingenioNombre === "Bella Vista" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioAnhidroIngenios.bellaInicioAnhidro)
    ) {
      h6 = h6 + data.alcoholAnhidro || 0;
      dataBellaVista = {
        AB17: h6,
        AA17: dataBellaVista.AA17,
        AC17: dataBellaVista.AC17,
      };
    }

    if (
      data.ingenioNombre === "Famaillá" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioAnhidroIngenios.famaillaInicioAnhidro)
    ) {
      h7 = h7 + data.alcoholAnhidro || 0;
      dataFamailla = {
        AB18: h7,
        AA18: dataFamailla.AA18,
        AC18: dataFamailla.AC18,
      };
    }

    if (
      data.ingenioNombre === "La Corona" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioAnhidroIngenios.coronaInicioAnhidro)
    ) {
      h8 = h8 + data.alcoholAnhidro || 0;
      dataLaCorona = {
        AB19: h8,
        AA19: dataLaCorona.AA19,
        AC19: dataLaCorona.AC19,
      };
    }

    if (
      data.ingenioNombre === "La Providencia" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioAnhidroIngenios.provInicioAnhidro)
    ) {
      h9 = h9 + data.alcoholAnhidro || 0;
      dataLaProvidencia = {
        AB20: h9,
        AA20: dataLaProvidencia.AA20,
        AC20: dataLaProvidencia.AC20,
      };
    }

    if (
      data.ingenioNombre === "La Trinidad" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioAnhidroIngenios.trinInicioAnhidro)
    ) {
      h10 = h10 + data.alcoholAnhidro || 0;
      dataLaTrinidad = {
        AB21: h10,
        AA21: dataLaTrinidad.AA21,
        AC21: dataLaTrinidad.AC21,
      };
    }

    if (
      data.ingenioNombre === "Leales" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioAnhidroIngenios.lealesInicioAnhidro)
    ) {
      h11 = h11 + data.alcoholAnhidro || 0;
      dataLeales = {
        AB22: h11,
        AA22: dataLeales.AA22,
        AC22: dataLeales.AC22,
      };
    }

    if (
      data.ingenioNombre === "Ñuñorco" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioAnhidroIngenios.nunorcoInicioAnhidro)
    ) {
      h12 = h12 + data.alcoholAnhidro || 0;
      dataÑuñorco = {
        AB23: h12,
        AA23: dataÑuñorco.AA23,
        AC23: dataÑuñorco.AC23,
      };
    }

    if (
      data.ingenioNombre === "Santa Barbara" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioAnhidroIngenios.staBarInicioAnhidro)
    ) {
      h13 = h13 + data.alcoholAnhidro || 0;
      dataStaBarbara = {
        AB24: h13,
        AA24: dataStaBarbara.AA24,
        AC24: dataStaBarbara.AC24,
      };
    }

    if (
      data.ingenioNombre === "Santa Rosa" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioAnhidroIngenios.staRosaInicioAnhidro)
    ) {
      h14 = h14 + data.alcoholAnhidro || 0;
      dataStaRosa = {
        AB25: h14,
        AA25: dataStaRosa.AA25,
        AC25: dataStaRosa.AC25,
      };
    }

    if (
      data.ingenioNombre === "San Juan" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioAnhidroIngenios.sanJuanInicioAnhidro)
    ) {
      h15 = h15 + data.alcoholAnhidro || 0;
      dataSanJuan = {
        AB26: h15,
        AA26: dataSanJuan.AA26,
        AC26: dataSanJuan.AC26,
      };
    }
  });

  // Agregar anhidro por documento para años 2024 y 2023
  if (zafraParteDiario - 1 === 2024 && dataEnd !== null) {
    const currentDate = dataEnd !== null ? new Date(dataEnd) : new Date();  // Muestra fecha actual
    const anioData = currentDate.getFullYear() - 1;             // Muestra el año comparativo
    const diaData = currentDate.getDate();
    currentDate.setDate(diaData);
    currentDate.setFullYear(anioData);                // Muestra la fecha completa de comparativa
    const currentMonth = currentDate.getMonth() + 1; // getMonth() devuelve 0-11 ----- Mes de comparativa
    const currentDay = currentDate.getDate();
    


    // Leales - Zafra 2024
    anhidroLeales.forEach((mes) => {
      if ((dataEnd.getFullYear() - 1 === 2024 ) && mes.anio === 2024 && mes.mesNumero < currentMonth) {
        let valorPorDia = mes.valor
        h11 = h11 + valorPorDia
        dataLeales = {
          AB22: h11,
          AA22: dataLeales.AA22,
          AC22: dataLeales.AC22
        };
      }
      if ((dataEnd.getFullYear() - 1 === 2024 ) && mes.anio === 2024 && mes.mesNumero === currentMonth) {
        // Si es el mes actual, solo hasta el día actual
        let valorPorDia
        valorPorDia = (mes.valor / 30) * currentDay;
        h11 = h11 + valorPorDia;
        dataLeales = {
          AB22: h11,
          AA22: dataLeales.AA22,
          AC22: dataLeales.AC22
        };
      }
      if ((dataEnd.getFullYear() - 1 === 2025 ) && mes.anio === 2025 && mes.mesNumero < currentMonth) {
        let valorPorDia = mes.valor
        h11 = h11 + valorPorDia
        dataLeales = {
          AB22: h11,
          AA22: dataLeales.AA22,
          AC22: dataLeales.AC22
        };
      }
      if ((dataEnd.getFullYear() - 1 === 2025 ) && mes.anio === 2025 && mes.mesNumero === currentMonth) {
        // Si es el mes actual, solo hasta el día actual
        valorPorDia = valorPorDia + (mes.valor / 30) * currentDay;
        h11 = h11 + valorPorDia;
        dataLeales = {
          AB22: h11,
          AA22: dataLeales.AA22,
          AC22: dataLeales.AC22
        };
      }
    });


     // Concepción - Zafra 2024
     anhidroConcepcion.forEach((mes) => {
      if ((dataEnd.getFullYear() - 1 === 2024 ) && mes.anio === 2024 && mes.mesNumero < currentMonth) {
        let valorPorDia = mes.valor
        h4 = h4 + valorPorDia
        dataConcepcion = {
          AB14: h4,
          AA14: dataConcepcion.AA14,
          AC14: dataConcepcion.AC14
        };
      }
      if ((dataEnd.getFullYear() - 1 === 2024 ) && mes.anio === 2024 && mes.mesNumero === currentMonth) {
        // Si es el mes actual, solo hasta el día actual
        let valorPorDia
        valorPorDia = (mes.valor / 30) * currentDay;
        h4 = h4 + valorPorDia;
        dataConcepcion = {
          AB14: h4,
          AA14: dataConcepcion.AA14,
          AC14: dataConcepcion.AC14
        };
      }
      if ((dataEnd.getFullYear() - 1 === 2025 ) && mes.anio === 2025 && mes.mesNumero < currentMonth) {
        let valorPorDia = mes.valor
        h4 = h4 + valorPorDia
        dataConcepcion = {
          AB14: h4,
          AA14: dataConcepcion.AA14,
          AC14: dataConcepcion.AC14
        };
      }
      if ((dataEnd.getFullYear() - 1 === 2025 ) && mes.anio === 2025 && mes.mesNumero === currentMonth) {
        // Si es el mes actual, solo hasta el día actual
        valorPorDia = valorPorDia + (mes.valor / 30) * currentDay;
        h4 = h4 + valorPorDia;
        dataConcepcion = {
          AB14: h4,
          AA14: dataConcepcion.AA14,
          AC14: dataConcepcion.AC14
        };
      }
    });

     // Bella Vista - Zafra 2024
     anhidroBellaVista.forEach((mes) => {
      if ((dataEnd.getFullYear() - 1 === 2024 ) && mes.anio === 2024 && mes.mesNumero < currentMonth) {
        let valorPorDia = mes.valor
        h6 = h6 + valorPorDia
        dataBellaVista = {
          AB17: h6,
          AA17: dataBellaVista.AA17,
          AC17: dataBellaVista.AC17
        };
      }
      if ((dataEnd.getFullYear() - 1 === 2024 ) && mes.anio === 2024 && mes.mesNumero === currentMonth) {
        // Si es el mes actual, solo hasta el día actual
        let valorPorDia
        valorPorDia = (mes.valor / 30) * currentDay;
        h6 = h6 + valorPorDia;
        dataBellaVista = {
          AB17: h6,
          AA17: dataBellaVista.AA17,
          AC17: dataBellaVista.AC17
        };
      }
      if ((dataEnd.getFullYear() - 1 === 2025 ) && mes.anio === 2025 && mes.mesNumero < currentMonth) {
        let valorPorDia = mes.valor
        h6 = h6 + valorPorDia
        dataBellaVista = {
          AB17: h6,
          AA17: dataBellaVista.AA17,
          AC17: dataBellaVista.AC17
        };
      }
      if ((dataEnd.getFullYear() - 1 === 2025 ) && mes.anio === 2025 && mes.mesNumero === currentMonth) {
        // Si es el mes actual, solo hasta el día actual
        valorPorDia = valorPorDia + (mes.valor / 30) * currentDay;
        h6 = h6 + valorPorDia;
        dataBellaVista = {
          AB17: h6,
          AA17: dataBellaVista.AA17,
          AC17: dataBellaVista.AC17
        };
      }
    });

  }
  if (zafraParteDiario - 1 === 2023) {
    const currentDate = dataEnd !== null ? new Date(dataEnd) : new Date();
    const anioData = currentDate.getFullYear() - 1;
    const diaData = currentDate.getDate();
    currentDate.setDate(diaData);
    currentDate.setFullYear(anioData);
    
    // Para 2023 usamos valores acumulados distribuidos proporcionalmente
    const diasEnAno = 365;
    const diasTranscurridos = Math.min(
      (currentDate.getTime() - new Date(currentDate.getFullYear(), 0, 1).getTime()) / (1000 * 60 * 60 * 24),
      diasEnAno
    );
    
    // Leales - Zafra 2023
    const valorLeales2023 = (anhidroLeales2023 / diasEnAno) * diasTranscurridos;
    h11 = h11 + valorLeales2023;
    dataLeales = {
      AB22: h11,
      AA22: dataLeales.AA22,
      AC22: dataLeales.AC22
    };

    // Concepción - Zafra 2023
    const valorConcepcion2023 = (anhidroConcepcion2023 / diasEnAno) * diasTranscurridos;
    h4 = h4 + valorConcepcion2023;
    dataConcepcion = {
      AB14: h4,
      AA14: dataConcepcion.AA14,
      AC14: dataConcepcion.AC14
    };

    // Bella Vista - Zafra 2023
    const valorBellaVista2023 = (anhidroBellaVista2023 / diasEnAno) * diasTranscurridos;
    h6 = h6 + valorBellaVista2023;
    dataBellaVista = {
      AB17: h6,
      AA17: dataBellaVista.AA17,
      AC17: dataBellaVista.AC17
    };
  }

  /** NORTE **/
  dataImportAnhidroComparativaNorte?.forEach((data) => {
    const newDate = new Date(data.fechaParte)
    const fechaParametro = dataEnd !== null ? new Date(dataEnd) : new Date();
    const anioData = fechaParametro.getFullYear() - 1;
    const diaData = fechaParametro.getDate()
    fechaParametro.setDate(diaData)
    fechaParametro.setFullYear(anioData)
    if (
      data.ingenioNombre === "La Esperanza" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioAnhidroIngeniosNorte.esperanzaInicioAnhidro)
    ) {
      h16 = h16 + data.alcoholAnhidro || 0;
      dataLaEsperanza = {
        P44: h16,
        N44: dataLaEsperanza.N44,
        O44: dataLaEsperanza.O44,
      };
    }

    if (
      data.ingenioNombre === "Ledesma" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioAnhidroIngeniosNorte.ledesmaInicioAnhidro)
    ) {
      
      h17 = h17 + data.alcoholAnhidro || 0;
      dataLedesma = {
        P45: h17,
        N45: dataLedesma.N45,
        O45: dataLedesma.O45,
      };
    }
    if (
      data.ingenioNombre === "Río Grande" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioAnhidroIngeniosNorte.riograndeInicioAnhidro)
    ) {
      h18 = h18 + data.alcoholAnhidro || 0;
      dataRioGrande = {
        P46: h18,
        N46: dataRioGrande.N46,
        O46: dataRioGrande.O46,
      };
    }
    if (
      data.ingenioNombre === "San Isidro" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioAnhidroIngeniosNorte.sanisidroInicioAnhidro)
    ) {
      h19 = h19 + data.alcoholAnhidro || 0;
      dataSanIsidro = {
        P47: h19,
        N47: dataSanIsidro.N47,
        O47: dataSanIsidro.O47,
      };
    }
    if (
      data.ingenioNombre === "Seaboard" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioAnhidroIngeniosNorte.seaboardInicioAnhidro)
    ) {
      h20 = h20 + data.alcoholAnhidro || 0;
      dataSeaboard = {
        P48: h20,
        N48: dataSeaboard.N48,
        O48: dataSeaboard.O48,
      };
    }
  });
  /**************************************************************************************/

  /****************************** DATOS ZAFRA ******************************/
  /** TUCUMAN **/
  dataImportComparativa?.forEach((data) => {
    const newDate = new Date(data.fechaParte);
    const fechaParametro = dataEnd !== null ? new Date(dataEnd) : new Date();
    const anioData = fechaParametro.getFullYear() - 1;
    const diaData = fechaParametro.getDate();
    fechaParametro.setDate(diaData);
    fechaParametro.setFullYear(anioData);
    if (data.ingenioNombre === "Aguilares" && newDate <= fechaParametro) {
      a1 = a1 + data.moliendaCanaBruta || 0;
      b1 = b1 + data.moliendaCanaNeta || 0;
      c1 = c1 + Number(data.azucarEquivalente.replace(/\./g, "")) || 0;
      z1 = z1 + data.azucarBlancoProducido + data?.azucarRefinado;
      e1 =
        e1 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f1 = f1 + data.melazaProducida || 0;
      j1 = j1 + data.azucarBlancoProducido;
      k1 = k1 + data.azucarRefinado;
      l1 = l1 + data.azucarCrudoProducido;
      m1 = m1 + data.azucarOrganico;
      n1 = n1 + data.otroAzucar;
      dataAguilares = {
        R10: a1,
        S10: b1,
        T10: c1 / 1000,
        W10: z1,
        X10: e1,
        Z10: f1,
        AA10: dataAguilares.AA10,
        AB10: dataAguilares.AB10,
        AC10: dataAguilares.AC10,
        AD10: j1,
        AE10: k1,
        AF10: l1,
        AG10: m1,
        AH10: n1,
      };
    }

    if (data.ingenioNombre === "Cruz Alta" && newDate <= fechaParametro) {
      a2 = a2 + data.moliendaCanaBruta;
      b2 = b2 + data.moliendaCanaNeta;
      c2 = c2 + Number(data.azucarEquivalente.replace(/\./g, ""));
      z2 = z2 + data.azucarBlancoProducido + data?.azucarRefinado;
      e2 =
        e2 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f2 = f2 + data.melazaProducida;
      j2 = j2 + data.azucarBlancoProducido;
      k2 = k2 + data.azucarRefinado;
      l2 = l2 + data.azucarCrudoProducido;
      m2 = m2 + data.azucarOrganico;
      n2 = n2 + data.otroAzucar;
      dataCruzAlta = {
        R11: a2,
        S11: b2,
        T11: c2 / 1000,
        W11: z2,
        X11: e2,
        Z11: f2,
        AA11: dataCruzAlta.AA11,
        AB11: dataCruzAlta.AB11,
        AC11: dataCruzAlta.AC11,
        AD11: j2,
        AE11: k2,
        AF11: l2,
        AG11: m2,
        AH11: n2,
      };
    }

    if (data.ingenioNombre === "La Florida" && newDate < fechaParametro) {
      a3 = a3 + data.moliendaCanaBruta;
      b3 = b3 + data.moliendaCanaNeta;
      c3 = c3 + Number(data.azucarEquivalente.replace(/\./g, ""));
      z3 = z3 + data.azucarBlancoProducido + data?.azucarRefinado;
      e3 =
        e3 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f3 = f3 + data.melazaProducida;
      j3 = j3 + data.azucarBlancoProducido;
      k3 = k3 + data.azucarRefinado;
      l3 = l3 + data.azucarCrudoProducido;
      m3 = m3 + data.azucarOrganico;
      n3 = n3 + data.otroAzucar;
      dataLaFlorida = {
        R12: a3,
        S12: b3,
        T12: c3 / 1000,
        W12: z3,
        X12: e3,
        Z12: f3,
        AA12: dataLaFlorida.AA12,
        AB12: dataLaFlorida.AB12,
        AC12: dataLaFlorida.AC12,
        AD12: j3,
        AE12: k3,
        AF12: l3,
        AG12: m3,
        AH12: n3,
      };
    }

    if (data.ingenioNombre === "Concepción" && newDate <= fechaParametro) {
      a4 = a4 + data.moliendaCanaBruta;
      b4 = b4 + data.moliendaCanaNeta;
      c4 = c4 + Number(data.azucarEquivalente.replace(/\./g, ""));
      z4 = z4 + data.azucarBlancoProducido + data?.azucarRefinado;
      e4 =
        e4 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f4 = f4 + data.melazaProducida;
      j4 = j4 + data.azucarBlancoProducido;
      k4 = k4 + data.azucarRefinado;
      l4 = l4 + data.azucarCrudoProducido;
      m4 = m4 + data.azucarOrganico;
      n4 = n4 + data.otroAzucar;
      dataConcepcion = {
        R14: a4,
        S14: b4,
        T14: c4 / 1000,
        W14: z4,
        X14: e4,
        Z14: f4,
        AA14: dataConcepcion.AA14,
        AB14: dataConcepcion.AB14,
        AC14: dataConcepcion.AC14,
        AD14: j4,
        AE14: k4,
        AF14: l4,
        AG14: m4,
        AH14: n4,
      };
    }

    if (data.ingenioNombre === "Marapa" && newDate <= fechaParametro) {
      a5 = a5 + data.moliendaCanaBruta;
      b5 = b5 + data.moliendaCanaNeta;
      c5 = c5 + Number(data.azucarEquivalente.replace(/\./g, ""));
      z5 = z5 + data.azucarBlancoProducido + data?.azucarRefinado;
      e5 =
        e5 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f5 = f5 + data.melazaProducida;
      j5 = j5 + data.azucarBlancoProducido;
      k5 = k5 + data.azucarRefinado;
      l5 = l5 + data.azucarCrudoProducido;
      m5 = m5 + data.azucarOrganico;
      n5 = n5 + data.otroAzucar;
      dataMarapa = {
        R15: a5,
        S15: b5,
        T15: c5 / 1000,
        W15: z5,
        X15: e5,
        Z15: f5,
        AA15: dataMarapa.AA15,
        AB15: dataMarapa.AB15,
        AC15: dataMarapa.AC15,
        AD15: j5,
        AE15: k5,
        AF15: l5,
        AG15: m5,
        AH15: n5,
      };
    }

    if (data.ingenioNombre === "Bella Vista" && newDate <= fechaParametro) {
      a6 = a6 + data.moliendaCanaBruta;
      b6 = b6 + data.moliendaCanaNeta;
      c6 = c6 + Number(data.azucarEquivalente.replace(/\./g, ""));
      z6 = z6 + data.azucarBlancoProducido + data?.azucarRefinado;
      e6 =
        e6 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f6 = f6 + data.melazaProducida;
      j6 = j6 + data.azucarBlancoProducido;
      k6 = k6 + data.azucarRefinado;
      l6 = l6 + data.azucarCrudoProducido;
      m6 = m6 + data.azucarOrganico;
      n6 = n6 + data.otroAzucar;
      dataBellaVista = {
        R17: a6,
        S17: b6,
        T17: c6 / 1000,
        W17: z6,
        X17: e6,
        Z17: f6,
        AA17: dataBellaVista.AA17,
        AB17: dataBellaVista.AB17,
        AC17: dataBellaVista.AC17,
        AD17: j6,
        AE17: k6,
        AF17: l6,
        AG17: m6,
        AH17: n6,
      };
    }

    if (data.ingenioNombre === "Famaillá" && newDate <= fechaParametro) {
      a7 = a7 + data.moliendaCanaBruta;
      b7 = b7 + data.moliendaCanaNeta;
      c7 = c7 + Number(data.azucarEquivalente.replace(/\./g, ""));
      z7 = z7 + data.azucarBlancoProducido + data?.azucarRefinado;
      e7 =
        e7 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f7 = f7 + data.melazaProducida;
      j7 = j7 + data.azucarBlancoProducido;
      k7 = k7 + data.azucarRefinado;
      l7 = l7 + data.azucarCrudoProducido;
      m7 = m7 + data.azucarOrganico;
      n7 = n7 + data.otroAzucar;
      dataFamailla = {
        R18: a7,
        S18: b7,
        T18: c7 / 1000,
        W18: z7,
        X18: e7,
        Z18: f7,
        AA18: dataFamailla.AA18,
        AB18: dataFamailla.AB18,
        AC18: dataFamailla.AC18,
        AD18: j7,
        AE18: k7,
        AF18: l7,
        AG18: m7,
        AH18: n7,
      };
    }

    if (data.ingenioNombre === "La Corona" && newDate <= fechaParametro) {
      a8 = a8 + data.moliendaCanaBruta;
      b8 = b8 + data.moliendaCanaNeta;
      c8 = c8 + Number(data.azucarEquivalente.replace(/\./g, ""));
      z8 = z8 + data.azucarBlancoProducido + data?.azucarRefinado;
      e8 =
        e8 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f8 = f8 + data.melazaProducida;
      j8 = j8 + data.azucarBlancoProducido;
      k8 = k8 + data.azucarRefinado;
      l8 = l8 + data.azucarCrudoProducido;
      m8 = m8 + data.azucarOrganico;
      n8 = n8 + data.otroAzucar;
      dataLaCorona = {
        R19: a8,
        S19: b8,
        T19: c8 / 1000,
        W19: z8,
        X19: e8,
        Z19: f8,
        AA19: dataLaCorona.AA19,
        AB19: dataLaCorona.AB19,
        AC19: dataLaCorona.AC19,
        AD19: j8,
        AE19: k8,
        AF19: l8,
        AG19: m8,
        AH19: n8,
      };
    }

    if (data.ingenioNombre === "La Providencia" && newDate <= fechaParametro) {
      a9 = a9 + data.moliendaCanaBruta;
      b9 = b9 + data.moliendaCanaNeta;
      c9 = c9 + Number(data.azucarEquivalente.replace(/\./g, ""));
      z9 = z9 + data.azucarBlancoProducido + data?.azucarRefinado;
      e9 =
        e9 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f9 = f9 + data.melazaProducida;
      j9 = j9 + data.azucarBlancoProducido;
      k9 = k9 + data.azucarRefinado;
      l9 = l9 + data.azucarCrudoProducido;
      m9 = m9 + data.azucarOrganico;
      n9 = n9 + data.otroAzucar;
      dataLaProvidencia = {
        R20: a9,
        S20: b9,
        T20: c9 / 1000,
        W20: z9,
        X20: e9,
        Z20: f9,
        AA20: dataLaProvidencia.AA20,
        AB20: dataLaProvidencia.AB20,
        AC20: dataLaProvidencia.AC20,

        AD20: j9,
        AE20: k9,
        AF20: l9,
        AG20: m9,
        AH20: n9,
      };
    }

    if (data.ingenioNombre === "La Trinidad" && newDate <= fechaParametro) {
      a10 = a10 + data.moliendaCanaBruta;
      b10 = b10 + data.moliendaCanaNeta;
      c10 = c10 + Number(data.azucarEquivalente.replace(/\./g, ""));
      z10 = z10 + data.azucarBlancoProducido + data?.azucarRefinado;
      e10 =
        e10 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f10 = f10 + data.melazaProducida;
      j10 = j10 + data.azucarBlancoProducido;
      k10 = k10 + data.azucarRefinado;
      l10 = l10 + data.azucarCrudoProducido;
      m10 = m10 + data.azucarOrganico;
      n10 = n10 + data.otroAzucar;
      dataLaTrinidad = {
        R21: a10,
        S21: b10,
        T21: c10 / 1000,
        W21: z10,
        X21: e10,
        Z21: f10,
        AA21: dataLaTrinidad.AA21,
        AB21: dataLaTrinidad.AB21,
        AC21: dataLaTrinidad.AC21,
        AD21: j10,
        AE21: k10,
        AF21: l10,
        AG21: m10,
        AH21: n10,
      };
    }

    if (data.ingenioNombre === "Leales" && newDate <= fechaParametro) {
      a11 = a11 + data.moliendaCanaBruta;
      b11 = b11 + data.moliendaCanaNeta;
      c11 = c11 + Number(data.azucarEquivalente.replace(/\./g, ""));
      z11 = z11 + data.azucarBlancoProducido + data?.azucarRefinado;
      e11 =
        e11 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f11 = f11 + data.melazaProducida;
      j11 = j11 + data.azucarBlancoProducido;
      k11 = k11 + data.azucarRefinado;
      l11 = l11 + data.azucarCrudoProducido;
      m11 = m11 + data.azucarOrganico;
      n11 = n11 + data.otroAzucar;
      dataLeales = {
        R22: a11,
        S22: b11,
        T22: c11 / 1000,
        W22: z11,
        X22: e11,
        Z22: f11,
        AA22: dataLeales.AA22,
        AB22: dataLeales.AB22,
        AC22: dataLeales.AC22,
        AD22: j11,
        AE22: k11,
        AF22: l11,
        AG22: m11,
        AH22: n11,
      };
    }

    if (data.ingenioNombre === "Ñuñorco" && newDate <= fechaParametro) {
      a12 = a12 + data?.moliendaCanaBruta;
      b12 = b12 + data?.moliendaCanaNeta;
      c12 = c12 + Number(data.azucarEquivalente.replace(/\./g, ""));
      z12 = z12 + data?.azucarBlancoProducido + data?.azucarRefinado;
      e12 =
        e12 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f12 = f12 + data?.melazaProducida;
      j12 = j12 + data.azucarBlancoProducido;
      k12 = k12 + data.azucarRefinado;
      l12 = l12 + data.azucarCrudoProducido;
      m12 = m12 + data.azucarOrganico;
      n12 = n12 + data.otroAzucar;
      dataÑuñorco = {
        R23: a12,
        S23: b12,
        T23: c12 / 1000,
        W23: z12,
        X23: e12,
        Z23: f12,
        AA23: dataÑuñorco.AA23,
        AB23: dataÑuñorco.AB23,
        AC23: dataÑuñorco.AC23,
        AD23: j12,
        AE23: k12,
        AF23: l12,
        AG23: m12,
        AH23: n12,
      };
    }

    if (data.ingenioNombre === "Santa Barbara" && newDate <= fechaParametro) {
      a13 = a13 + data.moliendaCanaBruta;
      b13 = b13 + data.moliendaCanaNeta;
      c13 = c13 + Number(data.azucarEquivalente.replace(/\./g, ""));
      z13 = z13 + data.azucarBlancoProducido + data?.azucarRefinado;
      e13 =
        e13 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f13 = f13 + data.melazaProducida;
      j13 = j13 + data.azucarBlancoProducido;
      k13 = k13 + data.azucarRefinado;
      l13 = l13 + data.azucarCrudoProducido;
      m13 = m13 + data.azucarOrganico;
      n13 = n13 + data.otroAzucar;
      dataStaBarbara = {
        R24: a13,
        S24: b13,
        T24: c13 / 1000,
        W24: z13,
        X24: e13,
        Z24: f13,
        AA24: dataStaBarbara.AA24,
        AB24: dataStaBarbara.AB24,
        AC24: dataStaBarbara.AC24,
        AD24: j13,
        AE24: k13,
        AF24: l13,
        AG24: m13,
        AH24: n13,
      };
    }

    if (data.ingenioNombre === "Santa Rosa" && newDate <= fechaParametro) {
      a14 = a14 + data.moliendaCanaBruta;
      b14 = b14 + data.moliendaCanaNeta;
      c14 = c14 + Number(data.azucarEquivalente.replace(/\./g, ""));
      z14 = z14 + data.azucarBlancoProducido + data?.azucarRefinado;
      e14 =
        e14 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f14 = f14 + data.melazaProducida;
      j14 = j14 + data.azucarBlancoProducido;
      k14 = k14 + data.azucarRefinado;
      l14 = l14 + data.azucarCrudoProducido;
      m14 = m14 + data.azucarOrganico;
      n14 = n14 + data.otroAzucar;
      dataStaRosa = {
        R25: a14,
        S25: b14,
        T25: c14 / 1000,
        W25: z14,
        X25: e14,
        Z25: f14,
        AA25: dataStaRosa.AA25,
        AB25: dataStaRosa.AB25,
        AC25: dataStaRosa.AC25,
        AD25: j14,
        AE25: k14,
        AF25: l14,
        AG25: m14,
        AH25: n14,
      };
    }

    if (data.ingenioNombre === "San Juan" && newDate <= fechaParametro) {
      a15 = a15 + data.moliendaCanaBruta;
      b15 = b15 + data.moliendaCanaNeta;
      c15 = c15 + Number(data.azucarEquivalente.replace(/\./g, ""));
      z15 = z15 + data.azucarBlancoProducido + data?.azucarRefinado;
      e15 =
        e15 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f15 = f15 + data.melazaProducida;
      j15 = j15 + data.azucarBlancoProducido;
      k15 = k15 + data.azucarRefinado;
      l15 = l15 + data.azucarCrudoProducido;
      m15 = m15 + data.azucarOrganico;
      n15 = n15 + data.otroAzucar;
      dataSanJuan = {
        R26: a15,
        S26: b15,
        T26: c15 / 1000,
        W26: z15,
        X26: e15,
        Z26: f15,
        AA26: dataSanJuan.AA26,
        AB26: dataSanJuan.AB26,
        AC26: dataSanJuan.AC26,
        AD26: j15,
        AE26: k15,
        AF26: l15,
        AG26: m15,
        AH26: n15,
      };
    }
  });

  /** NORTE **/
  dataImportComparativaNorte?.forEach((data) => {
    const newDate = new Date(data.fechaParte)
    const fechaParametro = dataEnd !== null ? new Date(dataEnd) : new Date();
    const anioData = fechaParametro.getFullYear() - 1;
    const diaData = fechaParametro.getDate()
    fechaParametro.setDate(diaData)
    fechaParametro.setFullYear(anioData)

    if (
      data.ingenioNombre === "La Esperanza" &&
      newDate <= fechaParametro
    ) {
      a16 = a16 + data.moliendaCanaBruta || 0;
      b16 = b16 + data.moliendaCanaNeta || 0;
      c16 = c16 + Number(data.azucarEquivalente.replace(/\./g, '')) || 0;
      z16 = z16 + data.azucarBlancoProducido + data?.azucarRefinado;
      e16 = e16 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f16 = f16 + data.melazaProducida || 0;
      j16 = j16 + data.azucarBlancoProducido;
      k16 = k16 + data.azucarRefinado || 0;
      l16 = l16 + data.azucarCrudoProducido;
      m16 = m16 + data.azucarOrganico || 0;
      n16 = n16 + data.otroAzucar || 0;
      dataLaEsperanza = {
        E44: a16,
        F44: b16,
        G44: c16 / 1000,
        J44: z16,
        K44: e16,
        M44: f16,
        N44: dataLaEsperanza.N44,
        O44: dataLaEsperanza.O44,
        P44: dataLaEsperanza.P44,
        V44: j16,
        W44: k16,
        X44: l16,
        Y44: m16,
        Z44: n16,
      };
    }
    if (
      data.ingenioNombre === "Ledesma" &&
      newDate <= fechaParametro
    ) {
      a17 = a17 + data.moliendaCanaBruta || 0;
      b17 = b17 + data.moliendaCanaNeta || 0;
      c17 = c17 + Number(data.azucarEquivalente.replace(/\./g, '')) || 0;
      z17 = z17 + data.azucarBlancoProducido + data?.azucarRefinado;
      e17 = e17 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f17 = f17 + data.melazaProducida || 0;
      j17 = j17 + data.azucarBlancoProducido;
      k17 = k17 + data.azucarRefinado || 0;
      l17 = l17 + data.azucarCrudoProducido;
      m17 = m17 + data.azucarOrganico || 0;
      n17 = n17 + data.otroAzucar || 0;

      dataLedesma = {
        E45: a17,
        F45: b17,
        G45: c17 / 1000,
        J45: z17,
        K45: e17,
        M45: f17,
        N45: dataLedesma.N45,
        O45: dataLedesma.O45,
        P45: dataLedesma.P45,
        V45: j17,
        W45: k17,
        X45: l17,
        Y45: m17,
        Z45: n17,
      };
    }
    if (
      data.ingenioNombre === "Río Grande" &&
      newDate <= fechaParametro 
    ) {
      a18 = a18 + data.moliendaCanaBruta || 0;
      b18 = b18 + data.moliendaCanaNeta || 0;
      c18 = c18 + Number(data.azucarEquivalente.replace(/\./g, '')) || 0;
      z18 = z18 + data.azucarBlancoProducido + data?.azucarRefinado;
      e18 = e18 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f18 = f18 + data.melazaProducida || 0;
      j18 = j18 + data.azucarBlancoProducido;
      k18 = k18 + data.azucarRefinado || 0;
      l18 = l18 + data.azucarCrudoProducido;
      m18 = m18 + data.azucarOrganico || 0;
      n18 = n18 + data.otroAzucar || 0;

      dataRioGrande = {
        E46: a18,
        F46: b18,
        G46: c18 / 1000,
        J46: z18,
        K46: e18,
        M46: f18,
        N46: dataRioGrande.N46,
        O46: dataRioGrande.O46,
        P46: dataRioGrande.P46,
        V46: j18,
        W46: k18,
        X46: l18,
        Y46: m18,
        Z46: n18,
      };
    }
    if (
      data.ingenioNombre === "San Isidro" &&
      newDate <= fechaParametro
    ) {
      a19 = a19 + data.moliendaCanaBruta || 0;
      b19 = b19 + data.moliendaCanaNeta || 0;
      c19 = c19 + Number(data.azucarEquivalente.replace(/\./g, '')) || 0;
      z19 = z19 + data.azucarBlancoProducido + data?.azucarRefinado;
      e19 = e19 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f19 = f19 + data.melazaProducida || 0;
      j19 = j19 + data.azucarBlancoProducido;
      k19 = k19 + data.azucarRefinado || 0;
      l19 = l19 + data.azucarCrudoProducido;
      m19 = m19 + data.azucarOrganico || 0;
      n19 = n19 + data.otroAzucar || 0;

      dataSanIsidro = {
        E47: a19,
        F47: b19,
        G47: c19 / 1000,
        J47: z19,
        K47: e19,
        M47: f19,
        N47: dataSanIsidro.N47,
        O47: dataSanIsidro.O47,
        P47: dataSanIsidro.P47,
        V47: j19,
        W47: k19,
        X47: l19,
        Y47: m19,
        Z47: n19,
      };
    }
    if (
      data.ingenioNombre === "Seaboard" &&
      newDate <= fechaParametro
    ) {
      a20 = a20 + data.moliendaCanaBruta || 0;
      b20 = b20 + data.moliendaCanaNeta || 0;
      c20 = c20 + Number(data.azucarEquivalente.replace(/\./g, '')) || 0;
      z20 = z20 + data.azucarBlancoProducido + data?.azucarRefinado;
      e20 = e20 +
        (data.azucarCrudoProducido || 0) +
        (data?.azucarOrganico || 0) +
        (data?.otroAzucar || 0);
      f20 = f20 + data.melazaProducida || 0;
      j20 = j20 + data.azucarBlancoProducido;
      k20 = k20 + data.azucarRefinado || 0;
      l20 = l20 + data.azucarCrudoProducido;
      m20 = m20 + data.azucarOrganico || 0;
      n20 = n20 + data.otroAzucar || 0;

      dataSeaboard = {
        E48: a20,
        F48: b20,
        G48: c20 / 1000,
        J48: z20,
        K48: e20,
        M48: f20,
        N48: dataSeaboard.N48,
        O48: dataSeaboard.O48,
        P48: dataSeaboard.P48,
        V48: j20,
        W48: k20,
        X48: l20,
        Y48: m20,
        Z48: n20,
      };
    }
  })

  /*********************************************************************************/
  /*** ALCOHOL ANHIDRO QUE QUEDO DEFASADO ENTRE EL 5/05/2024 y 15/05/2024
   * QUE PERTENECE A LA ZAFRA 2023 ***/
  // if ((zafraParteDiario -1) === 2024) {
  //   dataLaFlorida.AB12 = dataLaFlorida.AB12 - 2526587;
  // }
  // if ((zafraParteDiario -1) === 2023) {
  //   dataLaFlorida.AB12 = dataLaFlorida.AB12 + 2526587;
  // }
  /****************/

  /*** ALCOHOL ANHIDRO ZAFRA 2024 NO DECLARADO POR LO INGENIOS EN LOS PARTES DIARIOS
   * DECLARADO POR EMAIL
   ***/




  /****************************** ANHIDRO 2025 ******************************/
  /****** CONCEPCION *****/
  /*EMPEZO A DECLARAR EN EL PARTE DIARIO
  *
  *
  * Mayo: 1.775.189
  
  ACUMULADO: 1.775.189
  */
  //  if ( zafraParteDiario -1 === 2025) {
  //   dataConcepcion.AB14 = dataConcepcion.AB14 + 1775189
  //  }

  /****************************** ANHIDRO 2024 ******************************/
  /*LEALES 2024
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
  // if (zafraParteDiario - 1 === 2024) {
    // dataLeales.AB22 = dataLeales.AB22 + 31541737
    // dataLeales.AB22 =
    //   dataLeales.AB22 +
    //   2194476 +
    //   2052522 + 
    //   1657315
    //   4133790 +
    //   4971944 +
    //   2963470 +
    //   1460000 +
    //   5347000 +
    //   235750 +
    //   4770000 +
    //   3412785;
  // }

  /* CONCEPCION 2024
  Junio:2.986.603
  Julio: 8.049.602
  Agosto: 6.083.561
  Septiembre: 6.163.307
  Octubre: 5.436.241
  Noviembre:5.290.243
  Diciembre: 5.819.557
  Enero 2025: 6.522.224
  Febrero: 5.677.674
  Marzo: 5.928.463
  abril: 5.551.377
  Acumulado: 63.509.259
  */

  // if (zafraParteDiario - 1 === 2024) {
  //   // dataConcepcion.AB14 = dataConcepcion.AB14 + 63509259;
  //   dataConcepcion.AB14 = dataConcepcion.AB14 + 2986603 + 8049602 + 2000000;
  // }

  /* BELLA VISTA 2024
  Junio: 880.968
  Julio: 2.099.136
  Agosto:3.135.585
  Septiembre: 253.748
  Octubre: 2.483.843
  Noviembre: 1.098.950
  Diciembre: 2.031.615
  Enero:
  Febrero: 2.269.182
  Marzo: 543.734 
  Acumulado: 14.796.761
  */
  // if (zafraParteDiario - 1 === 2024) {
  //   // dataBellaVista.AB17 = dataBellaVista.AB17 + 14796761
  //   dataBellaVista.AB17 =
  //     dataBellaVista.AB17 +
  //     880968 +
  //     2099136 +
  //     1035120
  //   //   3135585 +
  //   //   253748 +
  //   //   2483843 +
  //   //   1098950 +
  //   //   2031615 +
  //   //   2269182 +
  //   //   543734;
  // }
  /*********************************************************************/

  /*** ALCOHOL ANHIDRO ZAFRA 2023 NO DECLARADO POR LO INGENIOS EN LOS PARTES DIARIOS
   * DECLARADO POR EMAIL
   ***/
  // if (zafraParteDiario - 1 === 2023) {
  //   dataBellaVista.AB17 = dataBellaVista.AB17 + 9669715;
  // }
  // if (zafraParteDiario - 1 === 2023) {
  //   dataConcepcion.AB14 = dataConcepcion.AB14 + 35668460;
  // }
  // if (zafraParteDiario - 1 === 2023) {
  //   dataLeales.AB22 = dataLeales.AB22 + 26464761;
  // }
  /**********/

  setDc1(dataAguilares);
  setDc2(dataCruzAlta);
  setDc3(dataLaFlorida);
  setDc4(dataConcepcion);
  setDc5(dataMarapa);
  setDc6(dataBellaVista);
  setDc7(dataFamailla);
  setDc8(dataLaCorona);
  setDc9(dataLaProvidencia);
  setDc10(dataLaTrinidad);
  setDc11(dataLeales);
  setDc12(dataÑuñorco);
  setDc13(dataStaBarbara);
  setDc14(dataStaRosa);
  setDc15(dataSanJuan);
  setNc1(dataLaEsperanza);
  setNc2(dataLedesma);
  setNc3(dataRioGrande);
  setNc4(dataSanIsidro);
  setNc5(dataSeaboard);
}
