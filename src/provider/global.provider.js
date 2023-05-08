import { useFetchInitPermissionPages } from '../hooks/permissionPages/index'
import { createContext, useState } from 'react'
import jwt_decode from 'jwt-decode'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const mainHook = useFetchInitPermissionPages()

  const { FetchPermissionPageDatosOsTicket } = mainHook

  const { permissionPageOsTicket } = FetchPermissionPageDatosOsTicket

  const itemTermometro = permissionPageOsTicket.find(item => item.nombre_item === 'termometro')
  const verItemTermometro = itemTermometro ? itemTermometro.ver_item : null

  const itemTablaMesActual = permissionPageOsTicket.find(item => item.nombre_item === 'mes_actual')
  const verTablaMesActual = itemTablaMesActual ? itemTablaMesActual.ver_item : null

  const itemTablaPrimerSemestre = permissionPageOsTicket.find(item => item.nombre_item === 'primer_semestre')
  const verTablaPrimerSemestre = itemTablaPrimerSemestre ? itemTablaPrimerSemestre.ver_item : null

  const itemTablaSegundoSemestre = permissionPageOsTicket.find(item => item.nombre_item === 'segundo_semestre')
  const verTablaSegundoSemestre = itemTablaSegundoSemestre ? itemTablaSegundoSemestre.ver_item : null

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
        permissionPageOsTicket
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
