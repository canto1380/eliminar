import { apiParams } from "../api";

export const getParteDiarios = async (params) => {
    const res = await apiParams("GET", params, `getParteDiarios/`, "");
  if (res.status === 200) {
    const data = res.data;
    return data;
  }
};