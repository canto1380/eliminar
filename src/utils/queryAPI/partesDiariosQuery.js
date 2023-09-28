import { api } from "./api";

export const getDataPartesDiarios = async (params) => {
const res = await api("GET", params, `news/`, '');
if (res.status === 200) {
  const data = res?.data;
  return data;
}
};