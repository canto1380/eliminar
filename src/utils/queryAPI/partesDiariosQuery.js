import { api, apiBE, apiBEPATH } from './api'

export const getDataPartesDiarios = async (params) => {
  const res = await api('GET', params, ``, '')
  if (res.status === 200) {
    const data = res?.data
    return data
  }
}

export const getDataPartesDiariosBE = async (params, urlPath) => {
  const res = await apiBEPATH('GET', params, urlPath, '')
  if (res.status === 200) {
    const data = res?.data?.data?.ParteDiarios
    return data
  }
}
