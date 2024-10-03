/* eslint-disable no-undef */
import { dateConverted } from '../../helpers/helpers'

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
  dataSanJuan = {
    R26: 0,
    S26: 0,
    T26: 0,
    W26: 0,
    X26: 0,
    Z26: 0,
    AA26: 0,
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
    sanJuanFin: null
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
    esperanzaFin: null
  };

export const dataComparativaPorTipo = (
  dataImportComparativa,
  dataImportDestileriaComparativa,
  dataEnd,
  dateFinIngenios,
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
  setFechasInicioDestileriaIngeniosNorteComparativa,
) => {
  const date = dataEnd !== null ? new Date(dataEnd) : new Date()
  const anioDataComparativa = date.getFullYear() - 1
  const dateComparativa = new Date(date)
  dateComparativa.setFullYear(anioDataComparativa)

  /** FECHAS INICIOS DE ZAFRA **/
  // const aguil = dataImportComparativa?.find(
  //   (d) =>
  //     d.IngenioNombre === "Aguilares" &&
  //     parseInt(d.FechaParte.split("/")[2]) === dataEnd.getFullYear() - 1 &&
  //     d.MoliendaCanaBruta !== 0
  // );
  const aguil = dateFinIngenios?.find((d) => d.nombre_ingenio === 'Aguilares')

  const cruz = dateFinIngenios?.find((d) => d.nombre_ingenio === 'Cruz Alta')

  const florida = dateFinIngenios?.find(
    (d) => d.nombre_ingenio === 'La Florida'
  )

  const concep = dateFinIngenios?.find((d) => d.nombre_ingenio === 'Concepción')

  const marapa = dateFinIngenios?.find((d) => d.nombre_ingenio === 'Marapa')

  const bellaVista = dateFinIngenios?.find(
    (d) => d.nombre_ingenio === 'Bella Vista'
  )

  const famail = dateFinIngenios?.find((d) => d.nombre_ingenio === 'Famaillá')

  const corona = dateFinIngenios?.find((d) => d.nombre_ingenio === 'La Corona')

  const providencia = dateFinIngenios?.find(
    (d) => d.nombre_ingenio === 'La Providencia'
  )

  const trinidad = dateFinIngenios?.find(
    (d) => d.nombre_ingenio === 'La Trinidad'
  )

  const leales = dateFinIngenios?.find((d) => d.nombre_ingenio === 'Leales')

  const nunorco = dateFinIngenios?.find((d) => d.nombre_ingenio === 'Ñuñorco')
  const stabarbara = dateFinIngenios?.find(
    (d) => d.nombre_ingenio === 'Santa Bárbara'
  )
  const starosa = dateFinIngenios?.find(
    (d) => d.nombre_ingenio === 'Santa Rosa'
  )
  const sanjuan = dateFinIngenios?.find((d) => d.nombre_ingenio === 'San Juan')

/** NORTE **/
const sanisidro = dateFinIngenios?.find(
  (d) => d.nombre_ingenio === "San Isidro"
)
const seaboard = dateFinIngenios?.find(
  (d) => d.nombre_ingenio === "Seaboard"
)
const ledesma = dateFinIngenios?.find(
  (d) => d.nombre_ingenio === "Ledesma"
)
const riogrande = dateFinIngenios?.find(
  (d) => d.nombre_ingenio === "Río Grande"
)
const laesperanza = dateFinIngenios?.find(
  (d) => d.nombre_ingenio === "La Esperanza"
)

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
  }

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
  }

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
  }
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

  setFechasInicioIngeniosComparativa(dataInicioIngenios)
  setFechasInicioDestileriaIngeniosComparativa(dataInicioDestileriaIngenios)
  setFechasInicioIngeniosNorteComparativa(dataInicioIngeniosNorte)
  setFechasInicioDestileriaIngeniosNorteComparativa(dataInicioDestileriaIngeniosNorte)

  for (let i = 1; i <= 15; i++) {
    let varName1 = 'a' + i
    let varName2 = 'b' + i
    let varName3 = 'c' + i
    let varName4 = 'z' + i
    let varName5 = 'e' + i
    let varName6 = 'f' + i
    let varName7 = 'g' + i

    window[varName1] = 0
    window[varName2] = 0
    window[varName3] = 0
    window[varName4] = 0
    window[varName5] = 0
    window[varName6] = 0
    window[varName7] = 0
  }

  for (let i = 1; i <= 15; i++) {
    let varName1 = 'a' + i
    let varName2 = 'b' + i
    let varName3 = 'c' + i
    let varName4 = 'z' + i
    let varName5 = 'e' + i
    let varName6 = 'f' + i
    let varName7 = 'g' + i

    window[varName1] = 0
    window[varName2] = 0
    window[varName3] = 0
    window[varName4] = 0
    window[varName5] = 0
    window[varName6] = 0
    window[varName7] = 0
  }

  /****************************** DATOS DESTILERIA ALCOHOL ******************************/
  dataImportDestileriaComparativa?.forEach((data) => {
    const newDate = dateConverted(data?.FechaParte)
    const fechaParametro = dataEnd !== null ? new Date(dataEnd) : new Date()
    const anioData = fechaParametro.getFullYear() - 1
    
    fechaParametro.setFullYear(anioData)
    if (
      data.IngenioNombre === 'Aguilares'
      && newDate <= fechaParametro
      && newDate >= new Date(dataInicioDestileriaIngenios.aguilInicio)
    ) {
      g1 = g1 + data.AlcoholProducido;
      dataAguilares = {
        R10: 0,
        S10: 0,
        T10: 0,
        W10: 0,
        X10: 0,
        Z10: 0,
        AA10: g1,
      };
    }

    if (
      data.IngenioNombre === 'Cruz Alta'
      && newDate <= fechaParametro
      && newDate >= new Date(dataInicioDestileriaIngenios.cruzInicio)
    ) {
      g2 = g2 + data.AlcoholProducido;
      dataCruzAlta = {
        R11: 0,
        S11: 0,
        T11: 0,
        W11: 0,
        X11: 0,
        Z11: 0,
        AA11: g2,
      };
    }
    if (
      data.IngenioNombre === 'La Florida'
      && newDate <= fechaParametro
      && newDate >= new Date(dataInicioDestileriaIngenios.floridaInicio)
    ) {
      // console.log(data.AlcoholProducido)
      g3 = g3 + data.AlcoholProducido;
      dataLaFlorida = {
        R12: 0,
        S12: 0,
        T12: 0,
        W12: 0,
        X12: 0,
        Z12: 0,
        AA12: g3,
      };
    }
    if (
      data.IngenioNombre === 'Concepción'
      && newDate <= fechaParametro
      && newDate >= new Date(dataInicioDestileriaIngenios.concepInicio)
    ) {
      g4 = g4 + data.AlcoholProducido;
      dataConcepcion = {
        R14: 0,
        S14: 0,
        T14: 0,
        W14: 0,
        X14: 0,
        Z14: 0,
        AA14: g4,
      };
    }

    if (
      data.IngenioNombre === 'Marapa'
      && newDate <= fechaParametro
      && newDate >= new Date(dataInicioDestileriaIngenios.marapaInicio)
    ) {
      g5 = g5 + data.AlcoholProducido;
      dataMarapa = {
        R15: 0,
        S15: 0,
        T15: 0,
        W15: 0,
        X15: 0,
        Z15: 0,
        AA15: g5,
      };
    }

    if (
      data.IngenioNombre === 'Bella Vista'
      && newDate <= fechaParametro
      && newDate >= new Date(dataInicioDestileriaIngenios.bellaInicio)
    ) {
      g6 = g6 + data.AlcoholProducido;
      dataBellaVista = {
        R17: 0,
        S17: 0,
        T17: 0,
        W17: 0,
        X17: 0,
        Z17: 0,
        AA17: g6,
      };
    }

    if (
      data.IngenioNombre === 'Famaillá'
      && newDate <= fechaParametro
      && newDate >= new Date(dataInicioDestileriaIngenios.famaillaInicio)
    ) {
      g7 = g7 + data.AlcoholProducido;
      dataFamailla = {
        R18: 0,
        S18: 0,
        T18: 0,
        W18: 0,
        X18: 0,
        Z18: 0,
        AA18: g7,
      };
    }

    if (
      data.IngenioNombre === 'La Corona'
      && newDate <= fechaParametro
      && newDate >= new Date(dataInicioDestileriaIngenios.coronaInicio)
    ) {
      g8 = g8 + data.AlcoholProducido;
      dataLaCorona = {
        R19: 0,
        S19: 0,
        T19: 0,
        W19: 0,
        X19: 0,
        Z19: 0,
        AA19: g8,
      };
    }

    if (
      data.IngenioNombre === 'La Providencia'
      && newDate <= fechaParametro
      && newDate >= new Date(dataInicioDestileriaIngenios.provInicio)
    ) {
      g9 = g9 + data.AlcoholProducido;
      dataLaProvidencia = {
        R20: 0,
        S20: 0,
        T20: 0,
        W20: 0,
        X20: 0,
        Z20: 0,
        AA20: g9,
      };
    }

    if (
      data.IngenioNombre === 'La Trinidad'
      && newDate <= fechaParametro
      && newDate >= new Date(dataInicioDestileriaIngenios.trinInicio)
    ) {
      g10 = g10 + data.AlcoholProducido;
      dataLaTrinidad = {
        R21: 0,
        S21: 0,
        T21: 0,
        W21: 0,
        X21: 0,
        Z21: 0,
        AA21: g10,
      };
    }

    if (
      data.IngenioNombre === 'Leales'
      && newDate <= fechaParametro
      && newDate >= new Date(dataInicioDestileriaIngenios.lealesInicio)
    ) {
      g11 = g11 + data.AlcoholProducido;
      dataLeales = {
        R22: 0,
        S22: 0,
        T22: 0,
        W22: 0,
        X22: 0,
        Z22: 0,
        AA22: g11,
      };
    }

    if (
      data.IngenioNombre === 'Ñuñorco'
      && newDate <= fechaParametro
      && newDate >= new Date(dataInicioDestileriaIngenios.nunorcoInicio)
    ) {
      g12 = g12 + data.AlcoholProducido;
      dataÑuñorco = {
        R23: 0,
        S23: 0,
        T23: 0,
        W23: 0,
        X23: 0,
        Z23: 0,
        AA23: g12,
      };
    }

    if (
      data.IngenioNombre === 'Santa Barbara'
      && newDate <= fechaParametro
      && newDate >= new Date(dataInicioDestileriaIngenios.staBarInicio)
    ) {
      g13 = g13 + data.AlcoholProducido;
      dataStaBarbara = {
        R24: 0,
        S24: 0,
        T24: 0,
        W24: 0,
        X24: 0,
        Z24: 0,
        AA24: g13,
      };
    }

    if (
      data.IngenioNombre === 'Santa Rosa'
      && newDate <= fechaParametro
      && newDate >= new Date(dataInicioDestileriaIngenios.staRosaInicio)
    ) {
      g14 = g14 + data.AlcoholProducido;
      dataStaRosa = {
        R25: 0,
        S25: 0,
        T25: 0,
        W25: 0,
        X25: 0,
        Z25: 0,
        AA25: g14,
      };
    }

    if (
      data.IngenioNombre === 'San Juan'
      && newDate <= fechaParametro
      && newDate >= new Date(dataInicioDestileriaIngenios.sanJuanInicio)
    ) {
      g15 = g15 + data.AlcoholProducido;
      dataSanJuan = {
        R26: 0,
        S26: 0,
        T26: 0,
        W26: 0,
        X26: 0,
        Z26: 0,
        AA26: g15,
      };
    }



  })
  /**************************************************************************************/

  dataImportComparativa?.forEach((data) => {
    const newDate = dateConverted(data?.FechaParte)
    const fechaParametro = dataEnd !== null ? new Date(dataEnd) : new Date()
    const anioData = fechaParametro.getFullYear() - 1
    fechaParametro.setFullYear(anioData)
    if (data.IngenioNombre === 'Aguilares' && newDate <= fechaParametro) {
      a1 = a1 + data.MoliendaCanaBruta || 0
      b1 = b1 + data.MoliendaCanaNeta || 0
      c1 = c1 + data.AzucarEquivalente || 0
      z1 = z1 + data.AzucarBlancoProducido || 0
      e1 = e1 + data.AzucarCrudoProducido || 0
      f1 = f1 + data.MelazaProducida || 0
      // g1 = g1 + data.AlcoholProducido || 0
      dataAguilares = {
        R10: a1,
        S10: b1,
        T10: c1,
        W10: z1,
        X10: e1,
        Z10: f1,
        AA10: dataAguilares.AA10,
      }
    }

    if (data.IngenioNombre === 'Cruz Alta' && newDate <= fechaParametro) {
      a2 = a2 + data.MoliendaCanaBruta
      b2 = b2 + data.MoliendaCanaNeta
      c2 = c2 + data.AzucarEquivalente
      z2 = z2 + data.AzucarBlancoProducido
      e2 = e2 + data.AzucarCrudoProducido
      f2 = f2 + data.MelazaProducida
      // g2 = g2 + data.AlcoholProducido
      dataCruzAlta = {
        R11: a2,
        S11: b2,
        T11: c2,
        W11: z2,
        X11: e2,
        Z11: f2,
        AA11: dataCruzAlta.AA11,
      }
    }

    if (data.IngenioNombre === 'La Florida' && newDate <= fechaParametro) {
      a3 = a3 + data.MoliendaCanaBruta
      b3 = b3 + data.MoliendaCanaNeta
      c3 = c3 + data.AzucarEquivalente
      z3 = z3 + data.AzucarBlancoProducido
      e3 = e3 + data.AzucarCrudoProducido
      f3 = f3 + data.MelazaProducida
      // g3 = g3 + data.AlcoholProducido
      dataLaFlorida = {
        R12: a3,
        S12: b3,
        T12: c3,
        W12: z3,
        X12: e3,
        Z12: f3,
        AA12: dataLaFlorida.AA12,
      }
    }

    if (data.IngenioNombre === 'Concepción' && newDate <= fechaParametro) {
      a4 = a4 + data.MoliendaCanaBruta
      b4 = b4 + data.MoliendaCanaNeta
      c4 = c4 + data.AzucarEquivalente
      z4 = z4 + data.AzucarBlancoProducido
      e4 = e4 + data.AzucarCrudoProducido
      f4 = f4 + data.MelazaProducida
      // g4 = g4 + data.AlcoholProducido
      dataConcepcion = {
        R14: a4,
        S14: b4,
        T14: c4,
        W14: z4,
        X14: e4,
        Z14: f4,
        AA14: dataConcepcion.AA14,
      }
    }

    if (data.IngenioNombre === 'Marapa' && newDate <= fechaParametro) {
      a5 = a5 + data.MoliendaCanaBruta
      b5 = b5 + data.MoliendaCanaNeta
      c5 = c5 + data.AzucarEquivalente
      z5 = z5 + data.AzucarBlancoProducido
      e5 = e5 + data.AzucarCrudoProducido
      f5 = f5 + data.MelazaProducida
      // g5 = g5 + data.AlcoholProducido
      dataMarapa = {
        R15: a5,
        S15: b5,
        T15: c5,
        W15: z5,
        X15: e5,
        Z15: f5,
        AA15: dataMarapa.AA15,
      }
    }

    if (data.IngenioNombre === 'Bella Vista' && newDate <= fechaParametro) {
      a6 = a6 + data.MoliendaCanaBruta
      b6 = b6 + data.MoliendaCanaNeta
      c6 = c6 + data.AzucarEquivalente
      z6 = z6 + data.AzucarBlancoProducido
      e6 = e6 + data.AzucarCrudoProducido
      f6 = f6 + data.MelazaProducida
      // g6 = g6 + data.AlcoholProducido
      dataBellaVista = {
        R17: a6,
        S17: b6,
        T17: c6,
        W17: z6,
        X17: e6,
        Z17: f6,
        AA17: dataBellaVista.AA17,
      }
    }

    if (data.IngenioNombre === 'Famaillá' && newDate <= fechaParametro) {
      a7 = a7 + data.MoliendaCanaBruta
      b7 = b7 + data.MoliendaCanaNeta
      c7 = c7 + data.AzucarEquivalente
      z7 = z7 + data.AzucarBlancoProducido
      e7 = e7 + data.AzucarCrudoProducido
      f7 = f7 + data.MelazaProducida
      // g7 = g7 + data.AlcoholProducido
      dataFamailla = {
        R18: a7,
        S18: b7,
        T18: c7,
        W18: z7,
        X18: e7,
        Z18: f7,
        AA18: dataFamailla.AA18,
      }
    }

    if (data.IngenioNombre === 'La Corona' && newDate <= fechaParametro) {
      a8 = a8 + data.MoliendaCanaBruta
      b8 = b8 + data.MoliendaCanaNeta
      c8 = c8 + data.AzucarEquivalente
      z8 = z8 + data.AzucarBlancoProducido
      e8 = e8 + data.AzucarCrudoProducido
      f8 = f8 + data.MelazaProducida
      // g8 = g8 + data.AlcoholProducido
      dataLaCorona = {
        R19: a8,
        S19: b8,
        T19: c8,
        W19: z8,
        X19: e8,
        Z19: f8,
        AA19: dataLaCorona.AA19,
      }
    }

    if (data.IngenioNombre === 'La Providencia' && newDate <= fechaParametro) {
      a9 = a9 + data.MoliendaCanaBruta
      b9 = b9 + data.MoliendaCanaNeta
      c9 = c9 + data.AzucarEquivalente
      z9 = z9 + data.AzucarBlancoProducido
      e9 = e9 + data.AzucarCrudoProducido
      f9 = f9 + data.MelazaProducida
      // g9 = g9 + data.AlcoholProducido
      dataLaProvidencia = {
        R20: a9,
        S20: b9,
        T20: c9,
        W20: z9,
        X20: e9,
        Z20: f9,
        AA20: dataLaProvidencia.AA20,
      }
    }

    if (data.IngenioNombre === 'La Trinidad' && newDate <= fechaParametro) {
      a10 = a10 + data.MoliendaCanaBruta
      b10 = b10 + data.MoliendaCanaNeta
      c10 = c10 + data.AzucarEquivalente
      z10 = z10 + data.AzucarBlancoProducido
      e10 = e10 + data.AzucarCrudoProducido
      f10 = f10 + data.MelazaProducida
      // g10 = g10 + data.AlcoholProducido
      dataLaTrinidad = {
        R21: a10,
        S21: b10,
        T21: c10,
        W21: z10,
        X21: e10,
        Z21: f10,
        AA21: dataLaTrinidad.AA21,
      }
    }

    if (data.IngenioNombre === 'Leales' && newDate <= fechaParametro) {
      a11 = a11 + data.MoliendaCanaBruta
      b11 = b11 + data.MoliendaCanaNeta
      c11 = c11 + data.AzucarEquivalente
      z11 = z11 + data.AzucarBlancoProducido
      e11 = e11 + data.AzucarCrudoProducido
      f11 = f11 + data.MelazaProducida
      // g11 = g11 + data.AlcoholProducido
      dataLeales = {
        R22: a11,
        S22: b11,
        T22: c11,
        W22: z11,
        X22: e11,
        Z22: f11,
        AA22: dataLeales.AA22,
      }
    }

    if (data.IngenioNombre === 'Ñuñorco' && newDate <= fechaParametro) {
      a12 = a12 + data?.MoliendaCanaBruta
      b12 = b12 + data?.MoliendaCanaNeta
      c12 = c12 + data?.AzucarEquivalente
      z12 = z12 + data?.AzucarBlancoProducido
      e12 = e12 + data?.AzucarCrudoProducido
      f12 = f12 + data?.MelazaProducida
      // g12 = g12 + data?.AlcoholProducido
      dataÑuñorco = {
        R23: a12,
        S23: b12,
        T23: c12,
        W23: z12,
        X23: e12,
        Z23: f12,
        AA23: dataÑuñorco.AA23,
      }
    }

    if (data.IngenioNombre === 'Santa Barbara' && newDate <= fechaParametro) {
      a13 = a13 + data.MoliendaCanaBruta
      b13 = b13 + data.MoliendaCanaNeta
      c13 = c13 + data.AzucarEquivalente
      z13 = z13 + data.AzucarBlancoProducido
      e13 = e13 + data.AzucarCrudoProducido
      f13 = f13 + data.MelazaProducida
      // g13 = g13 + data.AlcoholProducido
      dataStaBarbara = {
        R24: a13,
        S24: b13,
        T24: c13,
        W24: z13,
        X24: e13,
        Z24: f13,
        AA24: dataStaBarbara.AA24,
      }
    }

    if (data.IngenioNombre === 'Santa Rosa' && newDate <= fechaParametro) {
      a14 = a14 + data.MoliendaCanaBruta
      b14 = b14 + data.MoliendaCanaNeta
      c14 = c14 + data.AzucarEquivalente
      z14 = z14 + data.AzucarBlancoProducido
      e14 = e14 + data.AzucarCrudoProducido
      f14 = f14 + data.MelazaProducida
      // g14 = g14 + data.AlcoholProducido
      dataStaRosa = {
        R25: a14,
        S25: b14,
        T25: c14,
        W25: z14,
        X25: e14,
        Z25: f14,
        AA25: dataStaRosa.AA25,
      }
    }

    if (data.IngenioNombre === 'San Juan' && newDate <= fechaParametro) {
      a15 = a15 + data.MoliendaCanaBruta
      b15 = b15 + data.MoliendaCanaNeta
      c15 = c15 + data.AzucarEquivalente
      z15 = z15 + data.AzucarBlancoProducido
      e15 = e15 + data.AzucarCrudoProducido
      f15 = f15 + data.MelazaProducida
      // g15 = g15 + data.AlcoholProducido
      dataSanJuan = {
        R26: a15,
        S26: b15,
        T26: c15,
        W26: z15,
        X26: e15,
        Z26: f15,
        AA26: dataSanJuan.AA26,
      }
    }
  })
  // console.log(dataLaFlorida)
  setDc1(dataAguilares)
  setDc2(dataCruzAlta)
  setDc3(dataLaFlorida)
  setDc4(dataConcepcion)
  setDc5(dataMarapa)
  setDc6(dataBellaVista)
  setDc7(dataFamailla)
  setDc8(dataLaCorona)
  setDc9(dataLaProvidencia)
  setDc10(dataLaTrinidad)
  setDc11(dataLeales)
  setDc12(dataÑuñorco)
  setDc13(dataStaBarbara)
  setDc14(dataStaRosa)
  setDc15(dataSanJuan)
}
