import React, { createContext, useReducer } from 'react'
import { getTokenLS, setDataToken, setToken } from '../helpers/helpers'
export const User = createContext()

const dataUser = getTokenLS()
const initialState = {
  userToken: dataUser ? dataUser : [],
}

function reducer(state, action) {
  console.log(action)
  switch (action.type) {
    case 'LOGIN': {
      // setToken(action?.payload?.item?.token)
      // setDataToken(action?.payload?.user)
      return {...state, userToken: action?.payload?.item?.token}
    }
    default:
      return state;
  }
}

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch, dataUser }
  return <User.Provider value={value}>{children}</User.Provider>
}

export default UserProvider
