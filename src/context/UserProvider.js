import React, { createContext, useReducer } from 'react'
import { getTokenLS } from '../helpers/helpers'
// console.log(getTokenLS())
export const User = createContext()

const dataUser = getTokenLS()
const initialState = {
  userToken: dataUser ? dataUser : [],
}

function reducer(state, action) {
  console.log(state)
  console.log(action)
}

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch, dataUser }
  return <User.Provider value={value}>{children}</User.Provider>
}

export default UserProvider
