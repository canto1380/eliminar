import { apiParams } from "../api";

export const getRegion = async (params) => {
  const res = await apiParams("GET", params, `region/`, "");
  if (res.status === 200) {
    const data = res?.data;
    return data;
  }
};