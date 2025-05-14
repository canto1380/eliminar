import { apiParams } from "../api";

export const getLastUpdated = async (params) => {
    const res = await apiParams("GET", params, `lastUpdated/`, "");
  if (res.status === 200) {
    const data = res.data;
    return data;
  }
};