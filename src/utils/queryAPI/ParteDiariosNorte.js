import { apiParams } from "../api";

export const getParteDiariosNorte = async (params) => {
    const res = await apiParams("GET", params, `getParteDiariosNorte/`, "");
  if (res.status === 200) {
    const data = res.data;
    return data;
  }
};