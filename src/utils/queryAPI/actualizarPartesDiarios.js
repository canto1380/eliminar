import { apiParams } from "../api";

export const getActualizarPartesDiarios = async (params) => {
    const res = await apiParams("GET", params, `parteDiarioDB/`, "");
    return res
    // if (res.status === 200) {
  //   const data = res.data;
  //   return data;
  // }
};

export const getActualizarPartesDiariosNorte = async (params) => {
    const res = await apiParams("GET", params, `parteDiarioNorteDB/`, "");
    return res
};