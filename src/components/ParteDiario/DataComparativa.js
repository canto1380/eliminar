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
  };

export const dataComparativaPorTipo = (
  dataImportComparativa,
  dataImportDestileriaComparativa,
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
  setFechasInicioIngeniosComparativa,
  setFechasInicioDestileriaIngeniosComparativa,
  setFechasInicioIngeniosNorteComparativa,
  setFechasInicioDestileriaIngeniosNorteComparativa
) => {
  const date = dataEnd !== null ? new Date(dataEnd) : new Date();
  const anioDataComparativa = date.getFullYear() - 1;
  const dateComparativa = new Date(date);
  dateComparativa.setFullYear(anioDataComparativa);

  /** FECHAS INICIOS DE ZAFRA **/
  // const aguil = dataImportComparativa?.find(
  //   (d) =>
  //     d.IngenioNombre === "Aguilares" &&
  //     parseInt(d.FechaParte.split("/")[2]) === dataEnd.getFullYear() - 1 &&
  //     d.MoliendaCanaBruta !== 0
  // );
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

  setFechasInicioIngeniosComparativa(dataInicioIngenios);
  setFechasInicioDestileriaIngeniosComparativa(dataInicioDestileriaIngenios);
  setFechasInicioIngeniosNorteComparativa(dataInicioIngeniosNorte);
  setFechasInicioDestileriaIngeniosNorteComparativa(
    dataInicioDestileriaIngeniosNorte
  );

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

  // for (let i = 1; i <= 15; i++) {
  //   let varName1 = "a" + i;
  //   let varName2 = "b" + i;
  //   let varName3 = "c" + i;
  //   let varName4 = "z" + i;
  //   let varName5 = "e" + i;
  //   let varName6 = "f" + i;
  //   let varName7 = "g" + i;

  //   window[varName1] = 0;
  //   window[varName2] = 0;
  //   window[varName3] = 0;
  //   window[varName4] = 0;
  //   window[varName5] = 0;
  //   window[varName6] = 0;
  //   window[varName7] = 0;
  // }

  /****************************** DATOS DESTILERIA ALCOHOL ******************************/
  dataImportDestileriaComparativa?.forEach((data) => {
    const newDate = dateConverted(data?.FechaParte);
    const fechaParametro = dataEnd !== null ? new Date(dataEnd) : new Date();
    const anioData = fechaParametro.getFullYear() - 1;

    fechaParametro.setFullYear(anioData);
    if (
      data.IngenioNombre === "Aguilares" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.aguilInicio)
    ) {
      g1 = g1 + data.AlcoholProducido;
      i1 = i1 + data.AlcoholHidratado;
      h1 = h1 + data.AlcoholAnhidro || 0;
      dataAguilares = {
        R10: 0,
        S10: 0,
        T10: 0,
        W10: 0,
        X10: 0,
        Z10: 0,
        AA10: g1,
        AB10: h1,
        AC10: i1,
      };
    }

    if (
      data.IngenioNombre === "Cruz Alta" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.cruzInicio)
    ) {
      g2 = g2 + data.AlcoholProducido;
      i2 = i2 + data.AlcoholHidratado;
      h2 = h2 + data.AlcoholAnhidro || 0;
      dataCruzAlta = {
        R11: 0,
        S11: 0,
        T11: 0,
        W11: 0,
        X11: 0,
        Z11: 0,
        AA11: g2,
        AB11: h2,
        AC11: i2,
      };
    }
    if (
      data.IngenioNombre === "La Florida" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.floridaInicio)
    ) {
      g3 = g3 + data.AlcoholProducido;
      i3 = i3 + data.AlcoholHidratado;
      h3 = h3 + data.AlcoholAnhidro || 0;
      dataLaFlorida = {
        R12: 0,
        S12: 0,
        T12: 0,
        W12: 0,
        X12: 0,
        Z12: 0,
        AA12: g3,
        AB12: h3,
        AC12: i3,
      };
    }
    if (
      data.IngenioNombre === "Concepción" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.concepInicio)
    ) {
      g4 = g4 + data.AlcoholProducido;
      i4 = i4 + data.AlcoholHidratado;
      h4 = h4 + data.AlcoholAnhidro || 0;
      dataConcepcion = {
        R14: 0,
        S14: 0,
        T14: 0,
        W14: 0,
        X14: 0,
        Z14: 0,
        AA14: g4,
        AB14: h4,
        AC14: i4,
      };
    }

    if (
      data.IngenioNombre === "Marapa" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.marapaInicio)
    ) {
      g5 = g5 + data.AlcoholProducido;
      i5 = i5 + data.AlcoholHidratado;
      h5 = h5 + data.AlcoholAnhidro || 0;
      dataMarapa = {
        R15: 0,
        S15: 0,
        T15: 0,
        W15: 0,
        X15: 0,
        Z15: 0,
        AA15: g5,
        AB15: h5,
        AC15: i5,
      };
    }

    if (
      data.IngenioNombre === "Bella Vista" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.bellaInicio)
    ) {
      g6 = g6 + data.AlcoholProducido;
      i6 = i6 + data.AlcoholHidratado;
      h6 = h6 + data.AlcoholAnhidro || 0;
      dataBellaVista = {
        R17: 0,
        S17: 0,
        T17: 0,
        W17: 0,
        X17: 0,
        Z17: 0,
        AA17: g6,
        AB17: h6,
        AC17: i6,
      };
    }

    if (
      data.IngenioNombre === "Famaillá" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.famaillaInicio)
    ) {
      g7 = g7 + data.AlcoholProducido;
      i7 = i7 + data.AlcoholHidratado;
      h7 = h7 + data.AlcoholAnhidro || 0;
      dataFamailla = {
        R18: 0,
        S18: 0,
        T18: 0,
        W18: 0,
        X18: 0,
        Z18: 0,
        AA18: g7,
        AB18: h7,
        AC18: i7,
      };
    }

    if (
      data.IngenioNombre === "La Corona" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.coronaInicio)
    ) {
      g8 = g8 + data.AlcoholProducido;
      i8 = i8 + data.AlcoholHidratado;
      h8 = h8 + data.AlcoholAnhidro || 0;
      dataLaCorona = {
        R19: 0,
        S19: 0,
        T19: 0,
        W19: 0,
        X19: 0,
        Z19: 0,
        AA19: g8,
        AB19: h8,
        AC19: i8,
      };
    }

    if (
      data.IngenioNombre === "La Providencia" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.provInicio)
    ) {
      g9 = g9 + data.AlcoholProducido;
      i9 = i9 + data.AlcoholHidratado;
      h9 = h9 + data.AlcoholAnhidro || 0;
      dataLaProvidencia = {
        R20: 0,
        S20: 0,
        T20: 0,
        W20: 0,
        X20: 0,
        Z20: 0,
        AA20: g9,
        AB20: h9,
        AC20: i9,
      };
    }

    if (
      data.IngenioNombre === "La Trinidad" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.trinInicio)
    ) {
      g10 = g10 + data.AlcoholProducido;
      i10 = i10 + data.AlcoholHidratado;
      h10 = h10 + data.AlcoholAnhidro || 0;
      dataLaTrinidad = {
        R21: 0,
        S21: 0,
        T21: 0,
        W21: 0,
        X21: 0,
        Z21: 0,
        AA21: g10,
        AB21: h10,
        AC21: i10,
      };
    }

    if (
      data.IngenioNombre === "Leales" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.lealesInicio)
    ) {
      g11 = g11 + data.AlcoholProducido;
      i11 = i11 + data.AlcoholHidratado;
      h11 = h11 + data.AlcoholAnhidro || 0;
      dataLeales = {
        R22: 0,
        S22: 0,
        T22: 0,
        W22: 0,
        X22: 0,
        Z22: 0,
        AA22: g11,
        AB22: h11,
        AC22: i11,
      };
    }

    if (
      data.IngenioNombre === "Ñuñorco" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.nunorcoInicio)
    ) {
      g12 = g12 + data.AlcoholProducido;
      i12 = i12 + data.AlcoholHidratado;
      h12 = h12 + data.AlcoholAnhidro || 0;
      dataÑuñorco = {
        R23: 0,
        S23: 0,
        T23: 0,
        W23: 0,
        X23: 0,
        Z23: 0,
        AA23: g12,
        AB23: h12,
        AC23: i12,
      };
    }

    if (
      data.IngenioNombre === "Santa Barbara" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.staBarInicio)
    ) {
      g13 = g13 + data.AlcoholProducido;
      i13 = i13 + data.AlcoholHidratado;
      h13 = h13 + data.AlcoholAnhidro || 0;
      dataStaBarbara = {
        R24: 0,
        S24: 0,
        T24: 0,
        W24: 0,
        X24: 0,
        Z24: 0,
        AA24: g13,
        AB24: h13,
        AC24: i13,
      };
    }

    if (
      data.IngenioNombre === "Santa Rosa" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.staRosaInicio)
    ) {
      g14 = g14 + data.AlcoholProducido;
      i14 = i14 + data.AlcoholHidratado;
      h14 = h14 + data.AlcoholAnhidro || 0;
      dataStaRosa = {
        R25: 0,
        S25: 0,
        T25: 0,
        W25: 0,
        X25: 0,
        Z25: 0,
        AA25: g14,
        AB25: h14,
        AC25: i14,
      };
    }

    if (
      data.IngenioNombre === "San Juan" &&
      newDate <= fechaParametro &&
      newDate >= new Date(dataInicioDestileriaIngenios.sanJuanInicio)
    ) {
      g15 = g15 + data.AlcoholProducido;
      i15 = i15 + data.AlcoholHidratado;
      h15 = h15 + data.AlcoholAnhidro || 0;
      dataSanJuan = {
        R26: 0,
        S26: 0,
        T26: 0,
        W26: 0,
        X26: 0,
        Z26: 0,
        AA26: g15,
        AB26: h15,
        AC26: i15,
      };
    }
  });
  /**************************************************************************************/

  dataImportComparativa?.forEach((data) => {
    const newDate = dateConverted(data?.FechaParte);
    const fechaParametro = dataEnd !== null ? new Date(dataEnd) : new Date();
    const anioData = fechaParametro.getFullYear() - 1;
    fechaParametro.setFullYear(anioData);
    if (data.IngenioNombre === "Aguilares" && newDate <= fechaParametro) {
      a1 = a1 + data.MoliendaCanaBruta || 0;
      b1 = b1 + data.MoliendaCanaNeta || 0;
      c1 = c1 + data.AzucarEquivalente || 0;
      z1 = z1 + data.AzucarBlancoProducido + data?.AzucarRefinado;
      e1 =
        e1 +
        (data.AzucarCrudoProducido || 0) +
        (data?.AzucarOrganico || 0) +
        (data?.OtroAzucar || 0);
      f1 = f1 + data.MelazaProducida || 0;
      // g1 = g1 + data.AlcoholProducido || 0
      j1 = j1 + data.AzucarBlancoProducido;
      k1 = k1 + data.AzucarRefinado;
      l1 = l1 + data.AzucarCrudoProducido;
      m1 = m1 + data.AzucarOrganico;
      n1 = n1 + data.OtroAzucar
      dataAguilares = {
        R10: a1,
        S10: b1,
        T10: c1,
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

    if (data.IngenioNombre === "Cruz Alta" && newDate <= fechaParametro) {
      a2 = a2 + data.MoliendaCanaBruta;
      b2 = b2 + data.MoliendaCanaNeta;
      c2 = c2 + data.AzucarEquivalente;
      z2 = z2 + data.AzucarBlancoProducido + data?.AzucarRefinado;
      e2 =
        e2 +
        (data.AzucarCrudoProducido || 0) +
        (data?.AzucarOrganico || 0) +
        (data?.OtroAzucar || 0);
      f2 = f2 + data.MelazaProducida;
      // g2 = g2 + data.AlcoholProducido
      j2 = j2 + data.AzucarBlancoProducido;
      k2 = k2 + data.AzucarRefinado;
      l2 = l2 + data.AzucarCrudoProducido;
      m2 = m2 + data.AzucarOrganico;
      n2 = n2 + data.OtroAzucar
      dataCruzAlta = {
        R11: a2,
        S11: b2,
        T11: c2,
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

    if (data.IngenioNombre === "La Florida" && newDate <= fechaParametro) {
      a3 = a3 + data.MoliendaCanaBruta;
      b3 = b3 + data.MoliendaCanaNeta;
      c3 = c3 + data.AzucarEquivalente;
      z3 = z3 + data.AzucarBlancoProducido + data?.AzucarRefinado;
      e3 =
        e3 +
        (data.AzucarCrudoProducido || 0) +
        (data?.AzucarOrganico || 0) +
        (data?.OtroAzucar || 0);
      f3 = f3 + data.MelazaProducida;
      // g3 = g3 + data.AlcoholProducido
      j3 = j3 + data.AzucarBlancoProducido;
      k3 = k3 + data.AzucarRefinado;
      l3 = l3 + data.AzucarCrudoProducido;
      m3 = m3 + data.AzucarOrganico;
      n3 = n3 + data.OtroAzucar
      dataLaFlorida = {
        R12: a3,
        S12: b3,
        T12: c3,
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

    if (data.IngenioNombre === "Concepción" && newDate <= fechaParametro) {
      a4 = a4 + data.MoliendaCanaBruta;
      b4 = b4 + data.MoliendaCanaNeta;
      c4 = c4 + data.AzucarEquivalente;
      z4 = z4 + data.AzucarBlancoProducido + data?.AzucarRefinado;
      e4 =
        e4 +
        (data.AzucarCrudoProducido || 0) +
        (data?.AzucarOrganico || 0) +
        (data?.OtroAzucar || 0);
      f4 = f4 + data.MelazaProducida;
      // g4 = g4 + data.AlcoholProducido
      j4 = j4 + data.AzucarBlancoProducido;
      k4 = k4 + data.AzucarRefinado;
      l4 = l4 + data.AzucarCrudoProducido;
      m4 = m4 + data.AzucarOrganico;
      n4 = n4 + data.OtroAzucar
      dataConcepcion = {
        R14: a4,
        S14: b4,
        T14: c4,
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

    if (data.IngenioNombre === "Marapa" && newDate <= fechaParametro) {
      a5 = a5 + data.MoliendaCanaBruta;
      b5 = b5 + data.MoliendaCanaNeta;
      c5 = c5 + data.AzucarEquivalente;
      z5 = z5 + data.AzucarBlancoProducido + data?.AzucarRefinado;
      e5 =
        e5 +
        (data.AzucarCrudoProducido || 0) +
        (data?.AzucarOrganico || 0) +
        (data?.OtroAzucar || 0);
      f5 = f5 + data.MelazaProducida;
      // g5 = g5 + data.AlcoholProducido
      j5 = j5 + data.AzucarBlancoProducido;
      k5 = k5 + data.AzucarRefinado;
      l5 = l5 + data.AzucarCrudoProducido;
      m5 = m5 + data.AzucarOrganico;
      n5 = n5 + data.OtroAzucar
      dataMarapa = {
        R15: a5,
        S15: b5,
        T15: c5,
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

    if (data.IngenioNombre === "Bella Vista" && newDate <= fechaParametro) {
      a6 = a6 + data.MoliendaCanaBruta;
      b6 = b6 + data.MoliendaCanaNeta;
      c6 = c6 + data.AzucarEquivalente;
      z6 = z6 + data.AzucarBlancoProducido + data?.AzucarRefinado;
      e6 =
        e6 +
        (data.AzucarCrudoProducido || 0) +
        (data?.AzucarOrganico || 0) +
        (data?.OtroAzucar || 0);
      f6 = f6 + data.MelazaProducida;
      // g6 = g6 + data.AlcoholProducido
      j6 = j6 + data.AzucarBlancoProducido;
      k6 = k6 + data.AzucarRefinado;
      l6 = l6 + data.AzucarCrudoProducido;
      m6 = m6 + data.AzucarOrganico;
      n6 = n6 + data.OtroAzucar
      dataBellaVista = {
        R17: a6,
        S17: b6,
        T17: c6,
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

    if (data.IngenioNombre === "Famaillá" && newDate <= fechaParametro) {
      a7 = a7 + data.MoliendaCanaBruta;
      b7 = b7 + data.MoliendaCanaNeta;
      c7 = c7 + data.AzucarEquivalente;
      z7 = z7 + data.AzucarBlancoProducido + data?.AzucarRefinado;
      e7 =
        e7 +
        (data.AzucarCrudoProducido || 0) +
        (data?.AzucarOrganico || 0) +
        (data?.OtroAzucar || 0);
      f7 = f7 + data.MelazaProducida;
      // g7 = g7 + data.AlcoholProducido
      j7 = j7 + data.AzucarBlancoProducido;
      k7 = k7 + data.AzucarRefinado;
      l7 = l7 + data.AzucarCrudoProducido;
      m7 = m7 + data.AzucarOrganico;
      n7 = n7 + data.OtroAzucar
      dataFamailla = {
        R18: a7,
        S18: b7,
        T18: c7,
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

    if (data.IngenioNombre === "La Corona" && newDate <= fechaParametro) {
      a8 = a8 + data.MoliendaCanaBruta;
      b8 = b8 + data.MoliendaCanaNeta;
      c8 = c8 + data.AzucarEquivalente;
      z8 = z8 + data.AzucarBlancoProducido + data?.AzucarRefinado;
      e8 =
        e8 +
        (data.AzucarCrudoProducido || 0) +
        (data?.AzucarOrganico || 0) +
        (data?.OtroAzucar || 0);
      f8 = f8 + data.MelazaProducida;
      // g8 = g8 + data.AlcoholProducido
      j8 = j8 + data.AzucarBlancoProducido;
      k8 = k8 + data.AzucarRefinado;
      l8 = l8 + data.AzucarCrudoProducido;
      m8 = m8 + data.AzucarOrganico;
      n8 = n8 + data.OtroAzucar
      dataLaCorona = {
        R19: a8,
        S19: b8,
        T19: c8,
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

    if (data.IngenioNombre === "La Providencia" && newDate <= fechaParametro) {
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
      // g9 = g9 + data.AlcoholProducido
      j9 = j9 + data.AzucarBlancoProducido;
      k9 = k9 + data.AzucarRefinado;
      l9 = l9 + data.AzucarCrudoProducido;
      m9 = m9 + data.AzucarOrganico;
      n9 = n9 + data.OtroAzucar
      dataLaProvidencia = {
        R20: a9,
        S20: b9,
        T20: c9,
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

    if (data.IngenioNombre === "La Trinidad" && newDate <= fechaParametro) {
      a10 = a10 + data.MoliendaCanaBruta;
      b10 = b10 + data.MoliendaCanaNeta;
      c10 = c10 + data.AzucarEquivalente;
      z10 = z10 + data.AzucarBlancoProducido + data?.AzucarRefinado;
      e10 =
        e10 +
        (data.AzucarCrudoProducido || 0) +
        (data?.AzucarOrganico || 0) +
        (data?.OtroAzucar || 0);
      f10 = f10 + data.MelazaProducida;
      // g10 = g10 + data.AlcoholProducido
      j10 = j10 + data.AzucarBlancoProducido;
      k10 = k10 + data.AzucarRefinado;
      l10 = l10 + data.AzucarCrudoProducido;
      m10 = m10 + data.AzucarOrganico;
      n10 = n10 + data.OtroAzucar
      dataLaTrinidad = {
        R21: a10,
        S21: b10,
        T21: c10,
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

    if (data.IngenioNombre === "Leales" && newDate <= fechaParametro) {
      a11 = a11 + data.MoliendaCanaBruta;
      b11 = b11 + data.MoliendaCanaNeta;
      c11 = c11 + data.AzucarEquivalente;
      z11 = z11 + data.AzucarBlancoProducido + data?.AzucarRefinado;
      e11 =
        e11 +
        (data.AzucarCrudoProducido || 0) +
        (data?.AzucarOrganico || 0) +
        (data?.OtroAzucar || 0);
      f11 = f11 + data.MelazaProducida;
      // g11 = g11 + data.AlcoholProducido
      j11 = j11 + data.AzucarBlancoProducido;
      k11 = k11 + data.AzucarRefinado;
      l11 = l11 + data.AzucarCrudoProducido;
      m11 = m11 + data.AzucarOrganico;
      n11 = n11 + data.OtroAzucar
      dataLeales = {
        R22: a11,
        S22: b11,
        T22: c11,
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

    if (data.IngenioNombre === "Ñuñorco" && newDate <= fechaParametro) {
      a12 = a12 + data?.MoliendaCanaBruta;
      b12 = b12 + data?.MoliendaCanaNeta;
      c12 = c12 + data?.AzucarEquivalente;
      z12 = z12 + data?.AzucarBlancoProducido + data?.AzucarRefinado;
      e12 =
        e12 +
        (data.AzucarCrudoProducido || 0) +
        (data?.AzucarOrganico || 0) +
        (data?.OtroAzucar || 0);
      f12 = f12 + data?.MelazaProducida;
      // g12 = g12 + data?.AlcoholProducido
      j12 = j12 + data.AzucarBlancoProducido;
      k12 = k12 + data.AzucarRefinado;
      l12 = l12 + data.AzucarCrudoProducido;
      m12 = m12 + data.AzucarOrganico;
      n12 = n12 + data.OtroAzucar
      dataÑuñorco = {
        R23: a12,
        S23: b12,
        T23: c12,
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

    if (data.IngenioNombre === "Santa Barbara" && newDate <= fechaParametro) {
      a13 = a13 + data.MoliendaCanaBruta;
      b13 = b13 + data.MoliendaCanaNeta;
      c13 = c13 + data.AzucarEquivalente;
      z13 = z13 + data.AzucarBlancoProducido + data?.AzucarRefinado;
      e13 =
        e13 +
        (data.AzucarCrudoProducido || 0) +
        (data?.AzucarOrganico || 0) +
        (data?.OtroAzucar || 0);
      f13 = f13 + data.MelazaProducida;
      // g13 = g13 + data.AlcoholProducido
      j13 = j13 + data.AzucarBlancoProducido;
      k13 = k13 + data.AzucarRefinado;
      l13 = l13 + data.AzucarCrudoProducido;
      m13 = m13 + data.AzucarOrganico;
      n13 = n13 + data.OtroAzucar
      dataStaBarbara = {
        R24: a13,
        S24: b13,
        T24: c13,
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

    if (data.IngenioNombre === "Santa Rosa" && newDate <= fechaParametro) {
      a14 = a14 + data.MoliendaCanaBruta;
      b14 = b14 + data.MoliendaCanaNeta;
      c14 = c14 + data.AzucarEquivalente;
      z14 = z14 + data.AzucarBlancoProducido + data?.AzucarRefinado;
      e14 =
        e14 +
        (data.AzucarCrudoProducido || 0) +
        (data?.AzucarOrganico || 0) +
        (data?.OtroAzucar || 0);
      f14 = f14 + data.MelazaProducida;
      // g14 = g14 + data.AlcoholProducido
      j14 = j14 + data.AzucarBlancoProducido;
      k14 = k14 + data.AzucarRefinado;
      l14 = l14 + data.AzucarCrudoProducido;
      m14 = m14 + data.AzucarOrganico;
      n14 = n14 + data.OtroAzucar
      dataStaRosa = {
        R25: a14,
        S25: b14,
        T25: c14,
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

    if (data.IngenioNombre === "San Juan" && newDate <= fechaParametro) {
      a15 = a15 + data.MoliendaCanaBruta;
      b15 = b15 + data.MoliendaCanaNeta;
      c15 = c15 + data.AzucarEquivalente;
      z15 = z15 + data.AzucarBlancoProducido + data?.AzucarRefinado;
      e15 =
        e15 +
        (data.AzucarCrudoProducido || 0) +
        (data?.AzucarOrganico || 0) +
        (data?.OtroAzucar || 0);
      f15 = f15 + data.MelazaProducida;
      // g15 = g15 + data.AlcoholProducido
      j15 = j15 + data.AzucarBlancoProducido;
      k15 = k15 + data.AzucarRefinado;
      l15 = l15 + data.AzucarCrudoProducido;
      m15 = m15 + data.AzucarOrganico;
      n15 = n15 + data.OtroAzucar
      dataSanJuan = {
        R26: a15,
        S26: b15,
        T26: c15,
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

/*********************************************************************************/
  /*** ALCOHOL ANHIDRO QUE QUEDO DEFASADO ENTRE EL 5/05/2024 y 15/05/2024
   * QUE PERTENECE A LA ZAFRA 2023 ***/
  if ((zafraParteDiario -1) === 2024) {
    dataLaFlorida.AB12 = dataLaFlorida.AB12 - 2526587;
  }
  if ((zafraParteDiario -1) === 2023) {
    dataLaFlorida.AB12 = dataLaFlorida.AB12 + 2526587;
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
  Acumulado: 28.128.952

  */
  if ((zafraParteDiario -1) === 2024) {
    dataLeales.R53 = dataLeales.R53 + 2194476 + 2052522 + 4133790 + 4971944 + 2963470 + 1460000 + 5347000 + 235750 + 4770000;
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
  Acumulado: 46.351.745
  */
  if ((zafraParteDiario -1) === 2024) {
    dataConcepcion.R46 = dataConcepcion.R46 + 46351745;
  }

  /* BELLA VISTA 
  Junio: 880.968
  Julio: 2.099.136
  Agosto:3.135.585
  Septiembre: 253.748
  Octubre: 2.483.843
  Noviembre: 1.098.950
  Diciembre: 2.031.615
  Acumulado: 11.983.845
  */
  if ((zafraParteDiario -1) === 2024) {
    dataBellaVista.R45 = dataBellaVista.R45 + 880968 + 2099136 + 3135585 + 253748 + 2483843 + 1098950 + 2031615;
  }
  /**********/

  /*** ALCOHOL ANHIDRO ZAFRA 2023 NO DECLARADO POR LO INGENIOS EN LOS PARTES DIARIOS
   * DECLARADO POR EMAIL
   ***/
  if ((zafraParteDiario -1) === 2023) {
    dataBellaVista.AB17 = dataBellaVista.AB17 + 9669715;
  }
  if ((zafraParteDiario -1) === 2023) {
    dataConcepcion.AB14 = dataConcepcion.AB14 + 35668460;
  }
  if ((zafraParteDiario -1) === 2023) {
    dataLeales.AB22 = dataLeales.AB22 + 26464761;
  }
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
};
