import { apiParams } from "../api";

export const getDataComparativa = async (params) => {
  const res = await apiParams("GET", params, `dataComparativa/`, "");
  if (res.status === 200) {
    const data = res?.data;
    return data;
  }
};