import { apiParams } from "../api";

export const getActualizarDDJJTucuman = async (params) => {
    const res = await apiParams("GET", params, `declaracionJurada/actualizarDDJJTucuman/`, "");
    return res

};