import { apiParams } from "../api";

export const getDDJJ = async (params) => {
  const res = await apiParams("GET", params, `declaracionJurada/`, "");
  return res
};
export const getDDJJHistorico = async(params) => {
  const res = await apiParams('GET', params, `declaracionJurada/historicoDDJJ/`, "")
  return res
}