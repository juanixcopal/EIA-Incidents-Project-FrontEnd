import { useState } from 'react'
import { defaultData, defuaultMessage } from './default-data'
import { postLogin } from '../../data/login/post'
import { useNavigate } from 'react-router-dom'

export const useFetchInitLogin = () => {
  const [data, setData] = useState(defaultData)
  const [message, setMessage] = useState(defuaultMessage)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const handleInputChange = event => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const handleTogglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword)
  }

  const login = async e => {
    e.preventDefault()

    const { username, password } = data

    if (!username || !password) {
      setMessage({
        message: 'Faltan campos importantes',
        result: false
      })
      setTimeout(() => {
        setMessage({
          message: '',
          result: false
        })
      }, 2000)
      return
    }

    setLoading(true)
    await postLogin({ data })
      .then(({ token, result, redirect, username, full_name }) => {
        if (result) {
          localStorage.clear()
          localStorage.setItem('token', token)
          localStorage.setItem('username', username)
          localStorage.setItem('fullName', full_name)
          window.location.href = redirect
          setTimeout(() => {
            navigate('/datos-os-ticket')
          }, 200)
        }
      })
      .catch(error => {
        if (error) {
          const { message, result } = error.data
          setMessage({
            message: message,
            result: result
          })
        } else {
          setMessage({
            message: 'No hay comunicación con los servicios, verifica tu internet',
            result: false
          })
        }
      })
    setLoading(false)
  }

  return {
    data,
    handleInputChange,
    login,
    message,
    loading,
    showPassword,
    handleTogglePasswordVisibility
  }
}
