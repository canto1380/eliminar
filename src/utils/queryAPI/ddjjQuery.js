import { apiBEPATH } from "./api"

export const getDataDDJJBE = async (params, urlPath) => {
  const res = await apiBEPATH('GET', params, urlPath, '')
  if (res.status === 200) {
    const data = res?.data?.data?.DeclaracionesJuradas

    return data
  }
}
