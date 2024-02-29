import { createContext, useState } from 'react'
import jwt_decode from 'jwt-decode'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
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

  const rolAccess = { administrador: true, superadmin: true, usuario: false }

  return (
    <AuthContext.Provider
      value={{
        authData,
        setToken,
        rolAccess
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
