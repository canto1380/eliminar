import Cookies from "js-cookie";
// import serverCookies from 'cookies'
import moment from "moment";

export const setDataToken = (data) => {
  return localStorage.setItem("data-security-ipaat-2.0", JSON.stringify(data));
};
export const getDataToken = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("data-security-ipaat-2.0"));
  }
};
export const setToken = (token) => {
  return localStorage.setItem("jwt-security-ipaat-2.0", JSON.stringify(token));
};
export const getTokenLS = () => {
  let tok = localStorage.getItem("jwt-security-ipaat-2.0");
  if (tok !== null) {
    tok = tok.replace(/['"]+/g, "");
    return tok;
  } else {
    return null;
  }
};

export const getToken = (ctx) => {
  let token;
  token = Cookies.get("token");
  return token || null;
};
// export const getIdUser = (ctx) => {
//   let idUser
//   if (ctx) {
//     const { req, res } = ctx
//     const cookies = new serverCookies(req, res)
//     idUser = cookies.get('idUser')
//   } else {
//     idUser = clientCookies.get('idUser')
//   }

//   return idUser || null
// }
export const deleteToken = () => {
  localStorage.removeItem("data-security-ipaat-2.0");
  return localStorage.removeItem("jwt-security-ipaat-2.0");
};

export const deleteCookies = () => {
  Cookies.remove("token");
  Cookies.remove("idUser");
};

/**
 * CONVIERTE FECHA DE FORMATO DD/MM/YYYY DE LOS PARTE DIARIOS
 * EN  (OBJECT):  Sat Sep 16 2023 00:00:00 GMT-0300 (hora estándar de Argentina)
 * **/
export const dateConverted = (date) => {
  if (!date) return;
  const fechaAConvertir = date;
  const fechaDividida = fechaAConvertir.split("/");
  const fechaNueva = new Date(
    +fechaDividida[2],
    fechaDividida[1] - 1,
    fechaDividida[0]
  );
  const fechaFormato = moment(fechaNueva).format("MM/DD/YYYY");
  const newDate = new Date(fechaFormato);
  return newDate;
};
