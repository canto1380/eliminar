import { api } from "../api";

export const getUsuariosById = async ( id, token) => {
  const res = await api("GET", `usuarios/${id}`, "", token);
  if (res.status === 200) {
    const data = res?.data;
    return data;
  }
};