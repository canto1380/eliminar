import { apiParams } from "../api";

export const getActualizarPartesDiarios = async (params) => {
    const res = await apiParams("GET", params, `parteDiarioDB/`, "");
    return res

};

export const getActualizarPartesDiariosNorte = async (params) => {
    const res = await apiParams("GET", params, `parteDiarioNorteDB/`, "");
    return res
};