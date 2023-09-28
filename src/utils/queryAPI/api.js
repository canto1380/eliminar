import axios from "axios";

// const url = process.env.REACT_APP_API ? process.env.REACT_APP_API : process.env.REACT_APP_PRODUCTION
const url = 'http://sistemaweb.ipaat.gov.ar:8084/api/partediario'
export const api = async (method, params) => {
  const credentialData = {
    username: 'externo',
    password: 'Externo@2022*'
  }
  try {
    const res = await axios({
      params,
      headers: {
        'Content-Type': 'application/json'
      },
      auth: credentialData,
      method,
      url: `${url}`
    });

    return res
  } catch (error) {
    console.log(error)
    return error
  }
};
