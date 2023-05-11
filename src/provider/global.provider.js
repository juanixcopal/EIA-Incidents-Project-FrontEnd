import { createContext, useState } from 'react'
import jwt_decode from 'jwt-decode'

import { PageOsTicket, PageEstadistica } from './pagesPermission/index'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const { verItemTermometro, verTablaMesActual, verTablaPrimerSemestre, verTablaSegundoSemestre, verTablaSemanal } = PageOsTicket()

  const { verPastelMesActual, verPastelRangoFecha, verLinealSemanal, verTablaTicketSemana } = PageEstadistica()

  const [authData, setAuthData] = useState(() => {
    const token = localStorage.getItem('token')
    if (token) {
      return jwt_decode(token)
    } else {
      return null
    }
  })

  /*Se debe de usar en el login */
  const setToken = token => {
    localStorage.setItem('token', token)
    setAuthData(jwt_decode(token))
  }

  /*Se debe de usar cuando se desloguea para borrar el token del localStorage */
  const clearToken = () => {
    localStorage.removeItem('token')
    setAuthData(null)
  }

  return (
    <AuthContext.Provider
      value={{
        authData,
        setToken,
        clearToken,
        verItemTermometro,
        verTablaMesActual,
        verTablaPrimerSemestre,
        verTablaSegundoSemestre,
        verTablaSemanal,
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
