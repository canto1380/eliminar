import { apiParams } from "../api";

export const getMeses = async (params) => {
  const res = await apiParams("GET", params, `mesesZafra/`, "");
  if (res.status === 200) {
    const data = res?.data;
    return data;
  }
};