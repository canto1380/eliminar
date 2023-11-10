import { apiParams } from "../api";

export const getAnios = async (params) => {
  const res = await apiParams("GET", params, `aniosZafra/`, "");
  if (res.status === 200) {
    const data = res?.data;
    return data;
  }
};