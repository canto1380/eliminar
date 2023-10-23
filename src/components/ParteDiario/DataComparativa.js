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
  },
  dataCruzAlta = {
    R11: 0,
    S11: 0,
    T11: 0,
    W11: 0,
    X11: 0,
    Z11: 0,
    AA11: 0,
  },
  dataLaFlorida = {
    R12: 0,
    S12: 0,
    T12: 0,
    W12: 0,
    X12: 0,
    Z12: 0,
    AA12: 0,
  },
  dataConcepcion = {
    R14: 0,
    S14: 0,
    T14: 0,
    W14: 0,
    X14: 0,
    Z14: 0,
    AA14: 0,
  },
  dataMarapa = {
    R15: 0,
    S15: 0,
    T15: 0,
    W15: 0,
    X15: 0,
    Z15: 0,
    AA15: 0,
  },
  dataBellaVista = {
    R17: 0,
    S17: 0,
    T17: 0,
    W17: 0,
    X17: 0,
    Z17: 0,
    AA17: 0,
  },
  dataFamailla = {
    R18: 0,
    S18: 0,
    T18: 0,
    W18: 0,
    X18: 0,
    Z18: 0,
    AA18: 0,
  },
  dataLaCorona = {
    R19: 0,
    S19: 0,
    T19: 0,
    W19: 0,
    X19: 0,
    Z19: 0,
    AA19: 0,
  },
  dataLaProvidencia = {
    R20: 0,
    S20: 0,
    T20: 0,
    W20: 0,
    X20: 0,
    Z20: 0,
    AA20: 0,
  },
  dataLaTrinidad = {
    R21: 0,
    S21: 0,
    T21: 0,
    W21: 0,
    X21: 0,
    Z21: 0,
    AA21: 0,
  },
  dataLeales = {
    R22: 0,
    S22: 0,
    T22: 0,
    W22: 0,
    X22: 0,
    Z22: 0,
    AA22: 0,
  },
  dataÑuñorco = {
    R23: 0,
    S23: 0,
    T23: 0,
    W23: 0,
    X23: 0,
    Z23: 0,
    AA23: 0,
  },
  dataStaBarbara = {
    R24: 0,
    S24: 0,
    T24: 0,
    W24: 0,
    X24: 0,
    Z24: 0,
    AA24: 0,
  },
  dataStaRosa = {
    R25: 0,
    S25: 0,
    T25: 0,
    W25: 0,
    X25: 0,
    Z25: 0,
    AA25: 0,
  },
  dataInicioIngenios = {
    Cell10: 0,
    Cell11: 0,
    Cell12: 0,
    Cell14: 0,
    Cell15: 0,
    Cell17: 0,
    Cell18: 0,
    Cell19: 0,
    Cell20: 0,
    Cell21: 0,
    Cell22: 0,
    Cell23: 0,
    Cell24: 0,
    Cell25: 0,
  },
  dataFinIngenios = {
    CellQ10: 0,
    CellQ11: 0,
    CellQ12: 0,
    CellQ14: 0,
    CellQ15: 0,
    CellQ17: 0,
    CellQ18: 0,
    CellQ19: 0,
    CellQ20: 0,
    CellQ21: 0,
    CellQ22: 0,
    CellQ23: 0,
    CellQ24: 0,
    CellQ25: 0,
  };

export const dataComparativaPorTipo = (
  dataImportComparativa,
  dataEnd,
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
  setFechasInicioIngeniosComparativa,
  setFechasFinIngeniosComparativa,
  setDataDiasZafraComparativa
) => {
  const date = dataEnd !== null ? new Date(dataEnd) : new Date();
  const anioDataComparativa = date.getFullYear() - 1;
  const dateComparativa = new Date(date);
  dateComparativa.setFullYear(anioDataComparativa);

  /** FECHAS INICIOS DE ZAFRA **/
  const aguil = dataImportComparativa?.find(
    (d) =>
      d.IngenioNombre === "Aguilares" &&
      parseInt(d.FechaParte.split("/")[2]) === dataEnd.getFullYear() - 1 &&
      d.MoliendaCanaBruta !== 0
  );

  const cruz = dataImportComparativa?.find(
    (d) =>
      d.IngenioNombre === "Cruz Alta" &&
      parseInt(d.FechaParte.split("/")[2]) === dataEnd.getFullYear() - 1 &&
      d.MoliendaCanaBruta !== 0
  );

  const florida = dataImportComparativa?.find(
    (d) =>
      d.IngenioNombre === "La Florida" &&
      parseInt(d.FechaParte.split("/")[2]) === dataEnd.getFullYear() - 1 &&
      d.MoliendaCanaBruta !== 0
  );

  const concep = dataImportComparativa?.find(
    (d) =>
      d.IngenioNombre === "Concepción" &&
      parseInt(d.FechaParte.split("/")[2]) === dataEnd.getFullYear() - 1 &&
      d.MoliendaCanaBruta !== 0
  );

  const marapa = dataImportComparativa?.find(
    (d) =>
      d.IngenioNombre === "Marapa" &&
      parseInt(d.FechaParte.split("/")[2]) === dataEnd.getFullYear() - 1 &&
      d.MoliendaCanaBruta !== 0
  );

  const bellaVista = dataImportComparativa?.find(
    (d) =>
      d.IngenioNombre === "Bella Vista" &&
      parseInt(d.FechaParte.split("/")[2]) === dataEnd.getFullYear() - 1 &&
      d.MoliendaCanaBruta !== 0
  );

  const famail = dataImportComparativa?.find(
    (d) =>
      d.IngenioNombre === "Famaillá" &&
      parseInt(d.FechaParte.split("/")[2]) === dataEnd.getFullYear() - 1 &&
      d.MoliendaCanaBruta !== 0
  );

  const corona = dataImportComparativa?.find(
    (d) =>
      d.IngenioNombre === "La Corona" &&
      parseInt(d.FechaParte.split("/")[2]) === dataEnd.getFullYear() - 1 &&
      d.MoliendaCanaBruta !== 0
  );

  const providencia = dataImportComparativa?.find(
    (d) =>
      d.IngenioNombre === "La Providencia" &&
      parseInt(d.FechaParte.split("/")[2]) === dataEnd.getFullYear() - 1 &&
      d.MoliendaCanaBruta !== 0
  );

  const trinidad = dataImportComparativa?.find(
    (d) =>
      d.IngenioNombre === "La Trinidad" &&
      parseInt(d.FechaParte.split("/")[2]) === dataEnd.getFullYear() - 1 &&
      d.MoliendaCanaBruta !== 0
  );

  const leales = dataImportComparativa?.find(
    (d) =>
      d.IngenioNombre === "Leales" &&
      parseInt(d.FechaParte.split("/")[2]) === dataEnd.getFullYear() - 1 &&
      d.MoliendaCanaBruta !== 0 &&
      parseInt(d.FechaParte.split("/")[1]) >= 5
  );

  const nunorco = dataImportComparativa?.find(
    (d) =>
      d.IngenioNombre === "Ñuñorco" &&
      parseInt(d.FechaParte.split("/")[2]) === dataEnd.getFullYear() - 1 &&
      d.MoliendaCanaBruta !== 0
  );

  const stabarbara = dataImportComparativa?.find(
    (d) =>
      d.IngenioNombre === "Santa Barbara" &&
      parseInt(d.FechaParte.split("/")[2]) === dataEnd.getFullYear() - 1 &&
      d.MoliendaCanaBruta !== 0
  );

  const starosa = dataImportComparativa?.find(
    (d) =>
      d.IngenioNombre === "Santa Rosa" &&
      parseInt(d.FechaParte.split("/")[2]) === dataEnd.getFullYear() - 1 &&
      d.MoliendaCanaBruta !== 0
  );

  dataInicioIngenios = {
    Cell10: aguil?.FechaParte,
    Cell11: cruz?.FechaParte,
    Cell12: florida?.FechaParte,
    Cell14: concep?.FechaParte,
    Cell15: marapa?.FechaParte,
    Cell17: bellaVista?.FechaParte,
    Cell18: famail?.FechaParte,
    Cell19: corona?.FechaParte,
    Cell20: providencia?.FechaParte,
    Cell21: trinidad?.FechaParte,
    Cell22: leales?.FechaParte,
    Cell23: nunorco?.FechaParte,
    Cell24: stabarbara?.FechaParte,
    Cell25: starosa?.FechaParte,
  };

  /** FECHAS FIN DE ZAFRA **/
  let aguilComparativoFinal = dataImportComparativa?.filter(
    (d) =>
      d.IngenioNombre === "Aguilares" &&
      parseInt(d.FechaParte.split("/")[2]) === anioDataComparativa &&
      d.MoliendaCanaBruta !== 0 &&
      d?.CantidadTara !== 0
  );
  if (aguilComparativoFinal && aguilComparativoFinal.length > 0) {
    const aguilConverted =
      aguilComparativoFinal &&
      dateConverted(
        aguilComparativoFinal[aguilComparativoFinal.length - 1].FechaParte
      );
    const aguilDiff =
      (aguilConverted - dateComparativa) / (1000 * 60 * 60 * 24);
    aguilComparativoFinal =
      aguilDiff < 0
        ? aguilComparativoFinal[aguilComparativoFinal.length - 1].FechaParte
        : "";
  } else {
    aguilComparativoFinal = null;
  }

  let cruzComparativoFinal = dataImportComparativa?.filter(
    (d) =>
      d.IngenioNombre === "Cruz Alta" &&
      parseInt(d.FechaParte.split("/")[2]) === anioDataComparativa &&
      d.MoliendaCanaBruta !== 0 &&
      d?.CantidadTara !== 0
  );
  if (cruzComparativoFinal && cruzComparativoFinal.length > 0) {
    const cruzConverted =
      cruzComparativoFinal &&
      dateConverted(
        cruzComparativoFinal[cruzComparativoFinal.length - 1].FechaParte
      );
    const cruzDiff = (cruzConverted - dateComparativa) / (1000 * 60 * 60 * 24);
    cruzComparativoFinal =
      cruzDiff < 0
        ? cruzComparativoFinal[cruzComparativoFinal.length - 1].FechaParte
        : "";
  } else {
    cruzComparativoFinal = null;
  }

  let floridaComparativoFinal = dataImportComparativa?.filter(
    (d) =>
      d.IngenioNombre === "La Florida" &&
      parseInt(d.FechaParte.split("/")[2]) === anioDataComparativa &&
      d.MoliendaCanaBruta !== 0 &&
      d?.CantidadTara !== 0
  );
  if (floridaComparativoFinal && floridaComparativoFinal.length > 0) {
    const floridaConverted =
      floridaComparativoFinal &&
      dateConverted(
        floridaComparativoFinal[floridaComparativoFinal.length - 1].FechaParte
      );
    const floridaDiff =
      (floridaConverted - dateComparativa) / (1000 * 60 * 60 * 24);
    floridaComparativoFinal =
      floridaDiff < 0
        ? floridaComparativoFinal[floridaComparativoFinal.length - 1].FechaParte
        : "";
  } else {
    floridaComparativoFinal = null;
  }

  let concepComparativoFinal = dataImportComparativa?.filter(
    (d) =>
      d.IngenioNombre === "Concepción" &&
      parseInt(d.FechaParte.split("/")[2]) === anioDataComparativa &&
      d.MoliendaCanaBruta !== 0 &&
      d?.CantidadTara !== 0
  );
  if (concepComparativoFinal && concepComparativoFinal.length > 0) {
    const concepConverted =
      concepComparativoFinal &&
      dateConverted(
        concepComparativoFinal[concepComparativoFinal.length - 1].FechaParte
      );
    const concepDiff =
      (concepConverted - dateComparativa) / (1000 * 60 * 60 * 24);
    concepComparativoFinal =
      concepDiff < 0
        ? concepComparativoFinal[concepComparativoFinal.length - 1].FechaParte
        : "";
  } else {
    concepComparativoFinal = 0;
  }
  let marapaComparativoFinal = dataImportComparativa?.filter(
    (d) =>
      d.IngenioNombre === "Marapa" &&
      parseInt(d.FechaParte.split("/")[2]) === anioDataComparativa &&
      d.MoliendaCanaBruta !== 0 &&
      d?.CantidadTara !== 0
  );
  if (marapaComparativoFinal && marapaComparativoFinal.length > 0) {
    const marapaConvert =
      marapaComparativoFinal &&
      dateConverted(
        marapaComparativoFinal[marapaComparativoFinal.length - 1].FechaParte
      );
    const marapaDiff =
      (marapaConvert - dateComparativa) / (1000 * 60 * 60 * 24);
    marapaComparativoFinal =
      marapaDiff < 0
        ? marapaComparativoFinal[marapaComparativoFinal.length - 1].FechaParte
        : "";
  } else {
    marapaComparativoFinal = null;
  }

  let bellaVistaComparativoFinal = dataImportComparativa?.filter(
    (d) =>
      d.IngenioNombre === "Bella Vista" &&
      parseInt(d.FechaParte.split("/")[2]) === anioDataComparativa &&
      d.MoliendaCanaBruta !== 0 &&
      d?.CantidadTara !== 0
  );
  if (bellaVistaComparativoFinal && bellaVistaComparativoFinal.length > 0) {
    const bellaVistaConvert =
      bellaVistaComparativoFinal &&
      dateConverted(
        bellaVistaComparativoFinal[bellaVistaComparativoFinal.length - 1]
          .FechaParte
      );
    const vellaVistaDiff =
      (bellaVistaConvert - dateComparativa) / (1000 * 60 * 60 * 24);
    bellaVistaComparativoFinal =
      vellaVistaDiff < 0
        ? bellaVistaComparativoFinal[bellaVistaComparativoFinal.length - 1]
            .FechaParte
        : "";
  } else {
    bellaVistaComparativoFinal = null;
  }

  let famailComparativoFinal = dataImportComparativa?.filter(
    (d) =>
      d.IngenioNombre === "Famaillá" &&
      parseInt(d.FechaParte.split("/")[2]) === anioDataComparativa &&
      d.MoliendaCanaBruta !== 0 &&
      d?.CantidadTara !== 0
  );
  if (famailComparativoFinal && famailComparativoFinal.length > 0) {
    const famailConvert =
      famailComparativoFinal &&
      dateConverted(
        famailComparativoFinal[famailComparativoFinal.length - 1].FechaParte
      );
    const famailDiff =
      (famailConvert - dateComparativa) / (1000 * 60 * 60 * 24);
    famailComparativoFinal =
      famailDiff < 0
        ? famailComparativoFinal[famailComparativoFinal.length - 1].FechaParte
        : "";
  } else {
    famailComparativoFinal = null;
  }

  let coronaComparativoFinal = dataImportComparativa?.filter(
    (d) =>
      d.IngenioNombre === "La Corona" &&
      parseInt(d.FechaParte.split("/")[2]) === anioDataComparativa &&
      d.MoliendaCanaBruta !== 0 &&
      d?.CantidadTara !== 0
  );
  if (coronaComparativoFinal && coronaComparativoFinal.length > 0) {
    const coronaConvert =
      coronaComparativoFinal &&
      dateConverted(
        coronaComparativoFinal[coronaComparativoFinal.length - 1].FechaParte
      );
    const coronaDiff =
      (coronaConvert - dateComparativa) / (1000 * 60 * 60 * 24);
    coronaComparativoFinal =
      coronaDiff < 0
        ? coronaComparativoFinal[coronaComparativoFinal.length - 1].FechaParte
        : "";
  } else {
    coronaComparativoFinal = null;
  }

  let providenciaComparativoFinal = dataImportComparativa?.filter(
    (d) =>
      d.IngenioNombre === "La Providencia" &&
      parseInt(d.FechaParte.split("/")[2]) === anioDataComparativa &&
      d.MoliendaCanaBruta !== 0 &&
      d?.CantidadTara !== 0
  );
  if (providenciaComparativoFinal && providenciaComparativoFinal.length > 0) {
    const providenciaConvert =
      providenciaComparativoFinal &&
      dateConverted(
        providenciaComparativoFinal[providenciaComparativoFinal.length - 1]
          .FechaParte
      );
    const providenciaDiff =
      (providenciaConvert - dateComparativa) / (1000 * 60 * 60 * 24);
    providenciaComparativoFinal =
      providenciaDiff < 0
        ? providenciaComparativoFinal[providenciaComparativoFinal.length - 1]
            .FechaParte
        : "";
  } else {
    providenciaComparativoFinal = null;
  }

  let trinidadComparativoFinal = dataImportComparativa?.filter(
    (d) =>
      d.IngenioNombre === "La Trinidad" &&
      parseInt(d.FechaParte.split("/")[2]) === anioDataComparativa &&
      d.MoliendaCanaBruta !== 0 &&
      d?.CantidadTara !== 0
  );
  if (trinidadComparativoFinal && trinidadComparativoFinal.length > 0) {
    const trinidadConvert =
      trinidadComparativoFinal &&
      dateConverted(
        trinidadComparativoFinal[trinidadComparativoFinal.length - 1].FechaParte
      );
    const trinidadDiff =
      (trinidadConvert - dateComparativa) / (1000 * 60 * 60 * 24);
    trinidadComparativoFinal =
      trinidadDiff < 0
        ? trinidadComparativoFinal[trinidadComparativoFinal.length - 1]
            .FechaParte
        : "";
  } else {
    trinidadComparativoFinal = null;
  }

  let lealesComparativoFinal = dataImportComparativa?.filter(
    (d) =>
      d.IngenioNombre === "Leales" &&
      parseInt(d.FechaParte.split("/")[2]) === anioDataComparativa &&
      d.MoliendaCanaBruta !== 0 &&
      d?.CantidadTara !== 0
  );
  if (lealesComparativoFinal && lealesComparativoFinal.length > 0) {
    const lealesConvert =
      lealesComparativoFinal &&
      dateConverted(
        lealesComparativoFinal[lealesComparativoFinal.length - 1].FechaParte
      );
    const lealesDiff =
      (lealesConvert - dateComparativa) / (1000 * 60 * 60 * 24);
    lealesComparativoFinal =
      lealesDiff < 0
        ? lealesComparativoFinal[lealesComparativoFinal.length - 1].FechaParte
        : "";
  } else {
    lealesComparativoFinal = null;
  }

  let nunorcoComparativoFinal = dataImportComparativa?.filter(
    (d) =>
      d.IngenioNombre === "Ñuñorco" &&
      parseInt(d.FechaParte.split("/")[2]) === anioDataComparativa &&
      d.MoliendaCanaBruta !== 0 &&
      d?.CantidadTara !== 0
  );
  if (nunorcoComparativoFinal && nunorcoComparativoFinal.length > 0) {
    const nunorcoConvert =
      nunorcoComparativoFinal &&
      dateConverted(
        nunorcoComparativoFinal[nunorcoComparativoFinal.length - 1].FechaParte
      );
    const nunorcoDiff =
      (nunorcoConvert - dateComparativa) / (1000 * 60 * 60 * 24);
    nunorcoComparativoFinal =
      nunorcoDiff < 0
        ? nunorcoComparativoFinal[nunorcoComparativoFinal.length - 1].FechaParte
        : "";
  } else {
    nunorcoComparativoFinal = null;
  }

  let stabarbaraComparativoFinal = dataImportComparativa?.filter(
    (d) =>
      d.IngenioNombre === "Santa Barbara" &&
      parseInt(d.FechaParte.split("/")[2]) === anioDataComparativa &&
      d.MoliendaCanaBruta !== 0 &&
      d?.CantidadTara !== 0
  );
  if (stabarbaraComparativoFinal && stabarbaraComparativoFinal.length > 0) {
    const stabarbaraConvert =
      stabarbaraComparativoFinal &&
      dateConverted(
        stabarbaraComparativoFinal[stabarbaraComparativoFinal.length - 1]
          .FechaParte
      );
    const stabarbaraDiff =
      (stabarbaraConvert - dateComparativa) / (1000 * 60 * 60 * 24);
    stabarbaraComparativoFinal =
      stabarbaraDiff < 0
        ? stabarbaraComparativoFinal[stabarbaraComparativoFinal.length - 1]
            .FechaParte
        : "";
  } else {
    stabarbaraComparativoFinal = null;
  }

  let starosaComparativoFinal = dataImportComparativa?.filter(
    (d) =>
      d.IngenioNombre === "Santa Rosa" &&
      parseInt(d.FechaParte.split("/")[2]) === anioDataComparativa &&
      d.MoliendaCanaBruta !== 0 &&
      d?.CantidadTara !== 0
  );
  if (starosaComparativoFinal && starosaComparativoFinal.length > 0) {
    const starosaConvert =
      starosaComparativoFinal &&
      dateConverted(
        starosaComparativoFinal[starosaComparativoFinal.length - 1].FechaParte
      );
    const starosaDiff =
      (starosaConvert - dateComparativa) / (1000 * 60 * 60 * 24);
    starosaComparativoFinal =
      starosaDiff < 0
        ? starosaComparativoFinal[starosaComparativoFinal.length - 1].FechaParte
        : "";
  } else {
    starosaComparativoFinal = null;
  }

  dataFinIngenios = {
    CellQ10: aguilComparativoFinal,
    CellQ11: cruzComparativoFinal,
    CellQ12: floridaComparativoFinal,
    CellQ14: concepComparativoFinal,
    CellQ15: marapaComparativoFinal,
    CellQ17: bellaVistaComparativoFinal,
    CellQ18: famailComparativoFinal,
    CellQ19: coronaComparativoFinal,
    CellQ20: providenciaComparativoFinal,
    CellQ21: trinidadComparativoFinal,
    CellQ22: lealesComparativoFinal,
    CellQ23: nunorcoComparativoFinal,
    CellQ24: stabarbaraComparativoFinal,
    CellQ25: starosaComparativoFinal,
  };

  /** MAYOR DIA DE ZAFRA **/
  let mayor = 0, fin=0;

  const fechaFin = dataImportComparativa?.filter(
    (d) => d.MoliendaCanaBruta !== 0 && d?.CantidadTara !== 0
  );
  fin = fechaFin && fechaFin[fechaFin.length -1].FechaParte
  fin = dateConverted(fin)

  const diff = fin - dateComparativa
  const diff1 =diff / (1000*60*60*24)

  const fechaFinalParaComparar = diff1 < 0 ? fin : dateComparativa

  if (dataEnd && dataInicioIngenios && dataImportComparativa) {
    for (let clave in dataInicioIngenios) {
      const dateConvert = dateConverted(dataInicioIngenios[clave]);
      const diffDate = fechaFinalParaComparar - dateConvert;
      const daysDate = diffDate / (1000 * 60 * 60 * 24);
      if (daysDate >= mayor) {
        mayor = daysDate;
      }
    }
  }
  setFechasInicioIngeniosComparativa(dataInicioIngenios);
  setFechasFinIngeniosComparativa(dataFinIngenios);
  setDataDiasZafraComparativa(mayor);

  for (let i = 1; i <= 14; i++) {
    let varName1 = "a" + i;
    let varName2 = "b" + i;
    let varName3 = "c" + i;
    let varName4 = "z" + i;
    let varName5 = "e" + i;
    let varName6 = "f" + i;
    let varName7 = "g" + i;

    window[varName1] = 0;
    window[varName2] = 0;
    window[varName3] = 0;
    window[varName4] = 0;
    window[varName5] = 0;
    window[varName6] = 0;
    window[varName7] = 0;
  }

  for (let i = 1; i <= 14; i++) {
    let varName1 = "a" + i;
    let varName2 = "b" + i;
    let varName3 = "c" + i;
    let varName4 = "z" + i;
    let varName5 = "e" + i;
    let varName6 = "f" + i;
    let varName7 = "g" + i;

    window[varName1] = 0;
    window[varName2] = 0;
    window[varName3] = 0;
    window[varName4] = 0;
    window[varName5] = 0;
    window[varName6] = 0;
    window[varName7] = 0;
  }
  dataImportComparativa?.forEach((data) => {
    const newDate = dateConverted(data?.FechaParte);
    const fechaParametro = dataEnd !== null ? new Date(dataEnd) : new Date();
    const anioData = fechaParametro.getFullYear() - 1;
    fechaParametro.setFullYear(anioData);
    if (
      data.IngenioNombre === "Aguilares" &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a1 = a1 + data.MoliendaCanaBruta || 0;
      b1 = b1 + data.MoliendaCanaNeta || 0;
      c1 = c1 + data.AzucarEquivalente || 0;
      z1 = z1 + data.AzucarBlancoProducido || 0;
      e1 = e1 + data.AzucarCrudoProducido || 0;
      f1 = f1 + data.MelazaProducida || 0;
      g1 = g1 + data.AlcoholProducido || 0;
      dataAguilares = {
        R10: a1,
        S10: b1,
        T10: c1,
        W10: z1,
        X10: e1,
        Z10: f1,
        AA10: g1,
      };
    }

    if (
      data.IngenioNombre === "Cruz Alta" &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a2 = a2 + data.MoliendaCanaBruta;
      b2 = b2 + data.MoliendaCanaNeta;
      c2 = c2 + data.AzucarEquivalente;
      z2 = z2 + data.AzucarBlancoProducido;
      e2 = e2 + data.AzucarCrudoProducido;
      f2 = f2 + data.MelazaProducida;
      g2 = g2 + data.AlcoholProducido;
      dataCruzAlta = {
        R11: a2,
        S11: b2,
        T11: c2,
        W11: z2,
        X11: e2,
        Z11: f2,
        AA11: g2,
      };
    }

    if (
      data.IngenioNombre === "La Florida" &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a3 = a3 + data.MoliendaCanaBruta;
      b3 = b3 + data.MoliendaCanaNeta;
      c3 = c3 + data.AzucarEquivalente;
      z3 = z3 + data.AzucarBlancoProducido;
      e3 = e3 + data.AzucarCrudoProducido;
      f3 = f3 + data.MelazaProducida;
      g3 = g3 + data.AlcoholProducido;
      dataLaFlorida = {
        R12: a3,
        S12: b3,
        T12: c3,
        W12: z3,
        X12: e3,
        Z12: f3,
        AA12: g3,
      };
    }

    if (
      data.IngenioNombre === "Concepción" &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a4 = a4 + data.MoliendaCanaBruta;
      b4 = b4 + data.MoliendaCanaNeta;
      c4 = c4 + data.AzucarEquivalente;
      z4 = z4 + data.AzucarBlancoProducido;
      e4 = e4 + data.AzucarCrudoProducido;
      f4 = f4 + data.MelazaProducida;
      g4 = g4 + data.AlcoholProducido;
      dataConcepcion = {
        R14: a4,
        S14: b4,
        T14: c4,
        W14: z4,
        X14: e4,
        Z14: f4,
        AA14: g4,
      };
    }

    if (
      data.IngenioNombre === "Marapa" &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a5 = a5 + data.MoliendaCanaBruta;
      b5 = b5 + data.MoliendaCanaNeta;
      c5 = c5 + data.AzucarEquivalente;
      z5 = z5 + data.AzucarBlancoProducido;
      e5 = e5 + data.AzucarCrudoProducido;
      f5 = f5 + data.MelazaProducida;
      g5 = g5 + data.AlcoholProducido;
      dataMarapa = {
        R15: a5,
        S15: b5,
        T15: c5,
        W15: z5,
        X15: e5,
        Z15: f5,
        AA15: g5,
      };
    }

    if (
      data.IngenioNombre === "Bella Vista" &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a6 = a6 + data.MoliendaCanaBruta;
      b6 = b6 + data.MoliendaCanaNeta;
      c6 = c6 + data.AzucarEquivalente;
      z6 = z6 + data.AzucarBlancoProducido;
      e6 = e6 + data.AzucarCrudoProducido;
      f6 = f6 + data.MelazaProducida;
      g6 = g6 + data.AlcoholProducido;
      dataBellaVista = {
        R17: a6,
        S17: b6,
        T17: c6,
        W17: z6,
        X17: e6,
        Z17: f6,
        AA17: g6,
      };
    }

    if (
      data.IngenioNombre === "Famaillá" &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a7 = a7 + data.MoliendaCanaBruta;
      b7 = b7 + data.MoliendaCanaNeta;
      c7 = c7 + data.AzucarEquivalente;
      z7 = z7 + data.AzucarBlancoProducido;
      e7 = e7 + data.AzucarCrudoProducido;
      f7 = f7 + data.MelazaProducida;
      g7 = g7 + data.AlcoholProducido;
      dataFamailla = {
        R18: a7,
        S18: b7,
        T18: c7,
        W18: z7,
        X18: e7,
        Z18: f7,
        AA18: g7,
      };
    }

    if (
      data.IngenioNombre === "La Corona" &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a8 = a8 + data.MoliendaCanaBruta;
      b8 = b8 + data.MoliendaCanaNeta;
      c8 = c8 + data.AzucarEquivalente;
      z8 = z8 + data.AzucarBlancoProducido;
      e8 = e8 + data.AzucarCrudoProducido;
      f8 = f8 + data.MelazaProducida;
      g8 = g8 + data.AlcoholProducido;
      dataLaCorona = {
        R19: a8,
        S19: b8,
        T19: c8,
        W19: z8,
        X19: e8,
        Z19: f8,
        AA19: g8,
      };
    }

    if (
      data.IngenioNombre === "La Providencia" &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a9 = a9 + data.MoliendaCanaBruta;
      b9 = b9 + data.MoliendaCanaNeta;
      c9 = c9 + data.AzucarEquivalente;
      z9 = z9 + data.AzucarBlancoProducido;
      e9 = e9 + data.AzucarCrudoProducido;
      f9 = f9 + data.MelazaProducida;
      g9 = g9 + data.AlcoholProducido;
      dataLaProvidencia = {
        R20: a9,
        S20: b9,
        T20: c9,
        W20: z9,
        X20: e9,
        Z20: f9,
        AA20: g9,
      };
    }

    if (
      data.IngenioNombre === "La Trinidad" &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a10 = a10 + data.MoliendaCanaBruta;
      b10 = b10 + data.MoliendaCanaNeta;
      c10 = c10 + data.AzucarEquivalente;
      z10 = z10 + data.AzucarBlancoProducido;
      e10 = e10 + data.AzucarCrudoProducido;
      f10 = f10 + data.MelazaProducida;
      g10 = g10 + data.AlcoholProducido;
      dataLaTrinidad = {
        R21: a10,
        S21: b10,
        T21: c10,
        W21: z10,
        X21: e10,
        Z21: f10,
        AA21: g10,
      };
    }

    if (
      data.IngenioNombre === "Leales" &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a11 = a11 + data.MoliendaCanaBruta;
      b11 = b11 + data.MoliendaCanaNeta;
      c11 = c11 + data.AzucarEquivalente;
      z11 = z11 + data.AzucarBlancoProducido;
      e11 = e11 + data.AzucarCrudoProducido;
      f11 = f11 + data.MelazaProducida;
      g11 = g11 + data.AlcoholProducido;
      dataLeales = {
        R22: a11,
        S22: b11,
        T22: c11,
        W22: z11,
        X22: e11,
        Z22: f11,
        AA22: g11,
      };
    }

    if (
      data.IngenioNombre === "Ñuñorco" &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a12 = a12 + data?.MoliendaCanaBruta;
      b12 = b12 + data?.MoliendaCanaNeta;
      c12 = c12 + data?.AzucarEquivalente;
      z12 = z12 + data?.AzucarBlancoProducido;
      e12 = e12 + data?.AzucarCrudoProducido;
      f12 = f12 + data?.MelazaProducida;
      g12 = g12 + data?.AlcoholProducido;
      dataÑuñorco = {
        R23: a12,
        S23: b12,
        T23: c12,
        W23: z12,
        X23: e12,
        Z23: f12,
        AA23: g12,
      };
    }

    if (
      data.IngenioNombre === "Santa Barbara" &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a13 = a13 + data.MoliendaCanaBruta;
      b13 = b13 + data.MoliendaCanaNeta;
      c13 = c13 + data.AzucarEquivalente;
      z13 = z13 + data.AzucarBlancoProducido;
      e13 = e13 + data.AzucarCrudoProducido;
      f13 = f13 + data.MelazaProducida;
      g13 = g13 + data.AlcoholProducido;
      dataStaBarbara = {
        R24: a13,
        S24: b13,
        T24: c13,
        W24: z13,
        X24: e13,
        Z24: f13,
        AA24: g13,
      };
    }

    if (
      data.IngenioNombre === "Santa Rosa" &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a14 = a14 + data.MoliendaCanaBruta;
      b14 = b14 + data.MoliendaCanaNeta;
      c14 = c14 + data.AzucarEquivalente;
      z14 = z14 + data.AzucarBlancoProducido;
      e14 = e14 + data.AzucarCrudoProducido;
      f14 = f14 + data.MelazaProducida;
      g14 = g14 + data.AlcoholProducido;
      dataStaRosa = {
        R25: a14,
        S25: b14,
        T25: c14,
        W25: z14,
        X25: e14,
        Z25: f14,
        AA25: g14,
      };
    }
  });
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
};
