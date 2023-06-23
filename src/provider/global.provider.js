import { createContext, useState } from 'react'
import jwt_decode from 'jwt-decode'

import { PageEstadistica } from './pagesPermission/index'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const { verPastelMesActual, verPastelRangoFecha, verLinealSemanal, verTablaTicketSemana } = PageEstadistica()

  const [authData, setAuthData] = useState(() => {
    const token = localStorage.getItem('token')
    if (token) {
      return jwt_decode(token)
    } else {
      return ''
    }
  })

  const setToken = token => {
    localStorage.setItem('token', token)
    setAuthData(jwt_decode(token))
  }

  return (
    <AuthContext.Provider
      value={{
        authData,
        setToken,
        verPastelMesActual,
        verPastelRangoFecha,
        verLinealSemanal,
        verTablaTicketSemana
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
