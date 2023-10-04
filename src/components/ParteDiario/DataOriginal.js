/* eslint-disable no-undef */
import moment from 'moment'
import { dateConverted } from '../../helpers/helpers'

let dataAguilares = {
    E10: 0,
    F10: 0,
    G10: 0,
    J10: 0,
    K10: 0,
    M10: 0,
    N10: 0,
  },
  dataCruzAlta = {
    E11: 0,
    F11: 0,
    G11: 0,
    J11: 0,
    K11: 0,
    M11: 0,
    N11: 0,
  },
  dataLaFlorida = {
    E12: 0,
    F12: 0,
    G12: 0,
    J12: 0,
    K12: 0,
    M12: 0,
    N12: 0,
  },
  dataConcepcion = {
    E14: 0,
    F14: 0,
    G14: 0,
    J14: 0,
    K14: 0,
    M14: 0,
    N14: 0,
  },
  dataMarapa = {
    E15: 0,
    F15: 0,
    G15: 0,
    J15: 0,
    K15: 0,
    M15: 0,
    N15: 0,
  },
  dataBellaVista = {
    E17: 0,
    F17: 0,
    G17: 0,
    J17: 0,
    K17: 0,
    M17: 0,
    N17: 0,
  },
  dataFamailla = {
    E18: 0,
    F18: 0,
    G18: 0,
    J18: 0,
    K18: 0,
    M18: 0,
    N18: 0,
  },
  dataLaCorona = {
    E19: 0,
    F19: 0,
    G19: 0,
    J19: 0,
    K19: 0,
    M19: 0,
    N19: 0,
  },
  dataLaProvidencia = {
    E20: 0,
    F20: 0,
    G20: 0,
    J20: 0,
    K20: 0,
    M20: 0,
    N20: 0,
  },
  dataLaTrinidad = {
    E21: 0,
    F21: 0,
    G21: 0,
    J21: 0,
    K21: 0,
    M21: 0,
    N21: 0,
  },
  dataLeales = {
    E22: 0,
    F22: 0,
    G22: 0,
    J22: 0,
    K22: 0,
    M22: 0,
    N22: 0,
  },
  dataÑuñorco = {
    E23: 0,
    F23: 0,
    G23: 0,
    J23: 0,
    K23: 0,
    M23: 0,
    N23: 0,
  },
  dataStaBarbara = {
    E24: 0,
    F24: 0,
    G24: 0,
    J24: 0,
    K24: 0,
    M24: 0,
    N24: 0,
  },
  dataStaRosa = {
    E25: 0,
    F25: 0,
    G25: 0,
    J25: 0,
    K25: 0,
    M25: 0,
    N25: 0,
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
  }

export const dataPorTipo = (
  dataImport,
  dataEnd,
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
  setFechasInicioIngenios,
  setDataDiasZafra
) => {
  // const dateEndFormat = moment(dataEnd).format('DD/MM/YYYY')

  const aguil = dataImport?.find(
    (d) =>
      d.IngenioNombre === 'Aguilares' &&
      parseInt(d.FechaParte.split('/')[2]) === dataEnd.getFullYear() &&
      d.MoliendaCanaBruta !== 0
  )

  const cruz = dataImport?.find(
    (d) =>
      d.IngenioNombre === 'Cruz Alta' &&
      parseInt(d.FechaParte.split('/')[2]) === dataEnd.getFullYear() &&
      d.MoliendaCanaBruta !== 0
  )

  const florida = dataImport?.find(
    (d) =>
      d.IngenioNombre === 'La Florida' &&
      parseInt(d.FechaParte.split('/')[2]) === dataEnd.getFullYear() &&
      d.MoliendaCanaBruta !== 0
  )

  const concep = dataImport?.find(
    (d) =>
      d.IngenioNombre === 'Concepción' &&
      parseInt(d.FechaParte.split('/')[2]) === dataEnd.getFullYear() &&
      d.MoliendaCanaBruta !== 0
  )

  const marapa = dataImport?.find(
    (d) =>
      d.IngenioNombre === 'Marapa' &&
      parseInt(d.FechaParte.split('/')[2]) === dataEnd.getFullYear() &&
      d.MoliendaCanaBruta !== 0
  )

  const bellaVista = dataImport?.find(
    (d) =>
      d.IngenioNombre === 'Bella Vista' &&
      parseInt(d.FechaParte.split('/')[2]) === dataEnd.getFullYear() &&
      d.MoliendaCanaBruta !== 0
  )

  const famail = dataImport?.find(
    (d) =>
      d.IngenioNombre === 'Famaillá' &&
      parseInt(d.FechaParte.split('/')[2]) === dataEnd.getFullYear() &&
      d.MoliendaCanaBruta !== 0
  )

  const corona = dataImport?.find(
    (d) =>
      d.IngenioNombre === 'La Corona' &&
      parseInt(d.FechaParte.split('/')[2]) === dataEnd.getFullYear() &&
      d.MoliendaCanaBruta !== 0
  )

  const providencia = dataImport?.find(
    (d) =>
      d.IngenioNombre === 'La Providencia' &&
      parseInt(d.FechaParte.split('/')[2]) === dataEnd.getFullYear() &&
      d.MoliendaCanaBruta !== 0
  )

  const trinidad = dataImport?.find(
    (d) =>
      d.IngenioNombre === 'La Trinidad' &&
      parseInt(d.FechaParte.split('/')[2]) === dataEnd.getFullYear() &&
      d.MoliendaCanaBruta !== 0
  )

  const leales = dataImport?.find(
    (d) =>
      d.IngenioNombre === 'Leales' &&
      parseInt(d.FechaParte.split('/')[2]) === dataEnd.getFullYear() &&
      d.MoliendaCanaBruta !== 0 &&
      parseInt(d.FechaParte.split('/')[1]) >= 5
  )

  const nunorco = dataImport?.find(
    (d) =>
      d.IngenioNombre === 'Ñuñorco' &&
      parseInt(d.FechaParte.split('/')[2]) === dataEnd.getFullYear() &&
      d.MoliendaCanaBruta !== 0
  )

  const stabarbara = dataImport?.find(
    (d) =>
      d.IngenioNombre === 'Santa Barbara' &&
      parseInt(d.FechaParte.split('/')[2]) === dataEnd.getFullYear() &&
      d.MoliendaCanaBruta !== 0
  )
  const starosa = dataImport?.find(
    (d) =>
      d.IngenioNombre === 'Santa Rosa' &&
      parseInt(d.FechaParte.split('/')[2]) === dataEnd.getFullYear() &&
      d.MoliendaCanaBruta !== 0
  )
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
  }
  let mayor = 0
  if (dataEnd) {
    for (let clave in dataInicioIngenios) {
      const dateConvert = dateConverted(dataInicioIngenios[clave])
      const diffDate = dataEnd - dateConvert
      const daysDate = diffDate / (1000 * 60 * 60 * 24)
      if(daysDate >= mayor) {
        mayor = Math.ceil(daysDate)
      }
    }
  }
  setDataDiasZafra(mayor)
  setFechasInicioIngenios(dataInicioIngenios)
  
  for (let i = 1; i <= 14; i++) {
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
  dataImport?.forEach((data) => {
    const newDate = dateConverted(data?.FechaParte)
    const fechaParametro = dataEnd !== null ? new Date(dataEnd) : new Date()
    if (
      data.IngenioNombre === 'Aguilares' &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      
      a1 = a1 + data.MoliendaCanaBruta || 0
      b1 = b1 + data.MoliendaCanaNeta || 0
      c1 = c1 + data.AzucarEquivalente || 0
      z1 = z1 + data.AzucarBlancoProducido || 0
      e1 = e1 + data.AzucarCrudoProducido || 0
      f1 = f1 + data.MelazaProducida || 0
      g1 = g1 + data.AlcoholProducido || 0
      dataAguilares = {
        E10: a1,
        F10: b1,
        G10: c1,
        J10: z1,
        K10: e1,
        M10: f1,
        N10: g1,
        
      }
    }

    if (
      data.IngenioNombre === 'Cruz Alta' &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a2 = a2 + data.MoliendaCanaBruta
      b2 = b2 + data.MoliendaCanaNeta
      c2 = c2 + data.AzucarEquivalente
      z2 = z2 + data.AzucarBlancoProducido
      e2 = e2 + data.AzucarCrudoProducido
      f2 = f2 + data.MelazaProducida
      g2 = g2 + data.AlcoholProducido
      dataCruzAlta = {
        E11: a2,
        F11: b2,
        G11: c2,
        J11: z2,
        K11: e2,
        M11: f2,
        N11: g2,
      }
    }

    if (
      data.IngenioNombre === 'La Florida' &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a3 = a3 + data.MoliendaCanaBruta
      b3 = b3 + data.MoliendaCanaNeta
      c3 = c3 + data.AzucarEquivalente
      z3 = z3 + data.AzucarBlancoProducido
      e3 = e3 + data.AzucarCrudoProducido
      f3 = f3 + data.MelazaProducida
      g3 = g3 + data.AlcoholProducido
      dataLaFlorida = {
        E12: a3,
        F12: b3,
        G12: c3,
        J12: z3,
        K12: e3,
        M12: f3,
        N12: g3,
      }
    }

    if (
      data.IngenioNombre === 'Concepción' &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a4 = a4 + data.MoliendaCanaBruta
      b4 = b4 + data.MoliendaCanaNeta
      c4 = c4 + data.AzucarEquivalente
      z4 = z4 + data.AzucarBlancoProducido
      e4 = e4 + data.AzucarCrudoProducido
      f4 = f4 + data.MelazaProducida
      g4 = g4 + data.AlcoholProducido
      dataConcepcion = {
        E14: a4,
        F14: b4,
        G14: c4,
        J14: z4,
        K14: e4,
        M14: f4,
        N14: g4,
      }
    }

    if (
      data.IngenioNombre === 'Marapa' &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a5 = a5 + data.MoliendaCanaBruta
      b5 = b5 + data.MoliendaCanaNeta
      c5 = c5 + data.AzucarEquivalente
      z5 = z5 + data.AzucarBlancoProducido
      e5 = e5 + data.AzucarCrudoProducido
      f5 = f5 + data.MelazaProducida
      g5 = g5 + data.AlcoholProducido
      dataMarapa = {
        E15: a5,
        F15: b5,
        G15: c5,
        J15: z5,
        K15: e5,
        M15: f5,
        N15: g5,
      }
    }

    if (
      data.IngenioNombre === 'Bella Vista' &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a6 = a6 + data.MoliendaCanaBruta
      b6 = b6 + data.MoliendaCanaNeta
      c6 = c6 + data.AzucarEquivalente
      z6 = z6 + data.AzucarBlancoProducido
      e6 = e6 + data.AzucarCrudoProducido
      f6 = f6 + data.MelazaProducida
      g6 = g6 + data.AlcoholProducido
      dataBellaVista = {
        E17: a6,
        F17: b6,
        G17: c6,
        J17: z6,
        K17: e6,
        M17: f6,
        N17: g6,
      }
    }

    if (
      data.IngenioNombre === 'Famaillá' &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a7 = a7 + data.MoliendaCanaBruta
      b7 = b7 + data.MoliendaCanaNeta
      c7 = c7 + data.AzucarEquivalente
      z7 = z7 + data.AzucarBlancoProducido
      e7 = e7 + data.AzucarCrudoProducido
      f7 = f7 + data.MelazaProducida
      g7 = g7 + data.AlcoholProducido
      dataFamailla = {
        E18: a7,
        F18: b7,
        G18: c7,
        J18: z7,
        K18: e7,
        M18: f7,
        N18: g7,
      }
    }

    if (
      data.IngenioNombre === 'La Corona' &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a8 = a8 + data.MoliendaCanaBruta
      b8 = b8 + data.MoliendaCanaNeta
      c8 = c8 + data.AzucarEquivalente
      z8 = z8 + data.AzucarBlancoProducido
      e8 = e8 + data.AzucarCrudoProducido
      f8 = f8 + data.MelazaProducida
      g8 = g8 + data.AlcoholProducido
      dataLaCorona = {
        E19: a8,
        F19: b8,
        G19: c8,
        J19: z8,
        K19: e8,
        M19: f8,
        N19: g8,
      }
    }

    if (
      data.IngenioNombre === 'La Providencia' &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a9 = a9 + data.MoliendaCanaBruta
      b9 = b9 + data.MoliendaCanaNeta
      c9 = c9 + data.AzucarEquivalente
      z9 = z9 + data.AzucarBlancoProducido
      e9 = e9 + data.AzucarCrudoProducido
      f9 = f9 + data.MelazaProducida
      g9 = g9 + data.AlcoholProducido
      dataLaProvidencia = {
        E20: a9,
        F20: b9,
        G20: c9,
        J20: z9,
        K20: e9,
        M20: f9,
        N20: g9,
      }
    }

    if (
      data.IngenioNombre === 'La Trinidad' &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a10 = a10 + data.MoliendaCanaBruta
      b10 = b10 + data.MoliendaCanaNeta
      c10 = c10 + data.AzucarEquivalente
      z10 = z10 + data.AzucarBlancoProducido
      e10 = e10 + data.AzucarCrudoProducido
      f10 = f10 + data.MelazaProducida
      g10 = g10 + data.AlcoholProducido
      dataLaTrinidad = {
        E21: a10,
        F21: b10,
        G21: c10,
        J21: z10,
        K21: e10,
        M21: f10,
        N21: g10,
      }
    }

    if (
      data.IngenioNombre === 'Leales' &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a11 = a11 + data.MoliendaCanaBruta
      b11 = b11 + data.MoliendaCanaNeta
      c11 = c11 + data.AzucarEquivalente
      z11 = z11 + data.AzucarBlancoProducido
      e11 = e11 + data.AzucarCrudoProducido
      f11 = f11 + data.MelazaProducida
      g11 = g11 + data.AlcoholProducido
      dataLeales = {
        E22: a11,
        F22: b11,
        G22: c11,
        J22: z11,
        K22: e11,
        M22: f11,
        N22: g11,
      }
    }

    if (
      data.IngenioNombre === 'Ñuñorco' &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a12 = a12 + data?.MoliendaCanaBruta
      b12 = b12 + data?.MoliendaCanaNeta
      c12 = c12 + data?.AzucarEquivalente
      z12 = z12 + data?.AzucarBlancoProducido
      e12 = e12 + data?.AzucarCrudoProducido
      f12 = f12 + data?.MelazaProducida
      g12 = g12 + data?.AlcoholProducido
      dataÑuñorco = {
        E23: a12,
        F23: b12,
        G23: c12,
        J23: z12,
        K23: e12,
        M23: f12,
        N23: g12,
      }
    }

    if (
      data.IngenioNombre === 'Santa Barbara' &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a13 = a13 + data.MoliendaCanaBruta
      b13 = b13 + data.MoliendaCanaNeta
      c13 = c13 + data.AzucarEquivalente
      z13 = z13 + data.AzucarBlancoProducido
      e13 = e13 + data.AzucarCrudoProducido
      f13 = f13 + data.MelazaProducida
      g13 = g13 + data.AlcoholProducido
      dataStaBarbara = {
        E24: a13,
        F24: b13,
        G24: c13,
        J24: z13,
        K24: e13,
        M24: f13,
        N24: g13,
      }
    }

    if (
      data.IngenioNombre === 'Santa Rosa' &&
      newDate <= fechaParametro &&
      newDate.getFullYear() === fechaParametro.getFullYear()
    ) {
      a14 = a14 + data.MoliendaCanaBruta
      b14 = b14 + data.MoliendaCanaNeta
      c14 = c14 + data.AzucarEquivalente
      z14 = z14 + data.AzucarBlancoProducido
      e14 = e14 + data.AzucarCrudoProducido
      f14 = f14 + data.MelazaProducida
      g14 = g14 + data.AlcoholProducido
      dataStaRosa = {
        E25: a14,
        F25: b14,
        G25: c14,
        J25: z14,
        K25: e14,
        M25: f14,
        N25: g14,
      }
    }
  })
  setD1(dataAguilares)
  setD2(dataCruzAlta)
  setD3(dataLaFlorida)
  setD4(dataConcepcion)
  setD5(dataMarapa)
  setD6(dataBellaVista)
  setD7(dataFamailla)
  setD8(dataLaCorona)
  setD9(dataLaProvidencia)
  setD10(dataLaTrinidad)
  setD11(dataLeales)
  setD12(dataÑuñorco)
  setD13(dataStaBarbara)
  setD14(dataStaRosa)
}
