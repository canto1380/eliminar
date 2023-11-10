import axios from 'axios'

export const api = async (method, params) => {
  const url = 'http://sistemaweb.ipaat.gov.ar:8084/api/partediario'
  const credentialData = {
    username: 'externo',
    password: 'Externo@2022*',
  }
  try {
    const res = await axios({
      params: { dataEnd: '02-10-2023' },
      headers: {
        'Content-Type': 'application/json',
      },
      auth: credentialData,
      method,
      url: `${url}`,
    })
    return res
  } catch (error) {
    return error
  }
}

export const apiBEPATH = async (method, params, urlPath) => {
  const url = process.env.REACT_APP_API
    ? process.env.REACT_APP_API
    : process.env.REACT_APP_PRODUCTION

  const credentialData = {
    username: 'externo',
    password: 'Externo@2022*',
  }
  try {
    const res = await axios({
      params,
      headers: {
        'Content-Type': 'application/json',
      },
      auth: credentialData,
      method,
      url: `${url}${urlPath}`,
    })
    return res
  } catch (error) {
    return error
  }
}
