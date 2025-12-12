import Cookies from 'js-cookie'
// import serverCookies from 'cookies'
import moment from 'moment'

export const setDataToken = (data) => {
  return localStorage.setItem('data-security-ipaat-2.0', JSON.stringify(data))
}
export const getDataToken = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('data-security-ipaat-2.0'))
  }
}
export const setToken = (token) => {
  return localStorage.setItem('jwt-security-ipaat-2.0', JSON.stringify(token))
}
export const getTokenLS = () => {
  let tok = localStorage.getItem('jwt-security-ipaat-2.0')
  if (tok !== null) {
    tok = tok.replace(/['"]+/g, '')
    return tok
  }
}

export const getToken = (ctx) => {
  let token
  token = Cookies.get('token-ipaat-v2')
  return token || undefined
}

export const deleteToken = () => {
  localStorage.removeItem('data-security-ipaat-2.0')
  return localStorage.removeItem('jwt-security-ipaat-2.0')
}

export const deleteCookies = () => {
  Cookies.remove('token-ipaat-v2')
  Cookies.remove('idUser')
}

export const setStateSidebar = (state) => {
  return localStorage.setItem('state-menu', state)
}
export const getStateSidebar = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('state-menu'))
  }
}

/**
 * CONVIERTE FECHA DE FORMATO DD/MM/YYYY DE LOS PARTE DIARIOS
 * EN  (OBJECT):  Sat Sep 16 2023 00:00:00 GMT-0300 (hora estándar de Argentina)
 * **/
export const dateConverted = (date) => {
  if (!date) return
  const fechaAConvertir = date
  const fechaDividida = fechaAConvertir.split('/')
  const fechaNueva = new Date(
    +fechaDividida[2],
    fechaDividida[1] - 1,
    fechaDividida[0]
  )
  const fechaFormato = moment(fechaNueva).format('MM/DD/YYYY')
  const newDate = new Date(fechaFormato)
  return newDate
}
/**
 * CONVIERTE MES Y QUINCENA A FECHA REAL
 * RECIBE {year: 2025, month: 5, quincena: 1} → {from: Date, to: Date}
 * quincena 1: del día 1 al 15
 * quincena 2: del día 16 al último día del mes
 */
export const getDateFromQuincena = ({ year, month, quincena }) => {
  if (!month || !quincena || !year) return null;

  const startDay = quincena === 1 ? 1 : 16;
  const endDay =
    quincena === 1
      ? 15
      : new Date(year, month, 0).getDate(); // último día del mes

  return {
    from: new Date(year, month - 1, startDay, 0, 0, 0, 0),
    to: new Date(year, month - 1, endDay, 23, 59, 59, 999)
  };
};