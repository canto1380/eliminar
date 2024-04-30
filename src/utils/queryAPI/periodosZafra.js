import { apiParams } from "../api";

export const getPeriodoZafra = async (params) => {
  const res = await apiParams("GET", params, `periodoZafra/`, "");
  if (res.status === 200) {
    const data = res.data;
    return data;
  }
};