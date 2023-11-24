import { apiParams } from "../api";

export const getIngenios = async (params) => {
  const res = await apiParams("GET", params, `ingenios/`, "");
  if (res.status === 200) {
    const data = res?.data;
    return data;
  }
};