import { apiParams } from "../api";

export const getQuincenas = async (params) => {
  const res = await apiParams("GET", params, `quincenasZafra/`, "");
  if (res.status === 200) {
    const data = res?.data;
    return data;
  }
};