import { apiParams } from "../api";

export const getDDJJ = async (params) => {
  const res = await apiParams("GET", params, `declaracionJurada/`, "");
 return res
};