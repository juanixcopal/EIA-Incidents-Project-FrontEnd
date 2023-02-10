import { useState } from 'react'
import { defaultData, defuaultMessage } from './default-data'
import { postLogin } from '../../data/login/post'
import { useHistory } from 'react-router-dom'

export const useFetchInitLogin = () => {
  const history = useHistory()
  const [data, setData] = useState(defaultData)
  const [message, setMessage] = useState(defuaultMessage)
  const [loading, setLoading] = useState(false)

  const handleInputChange = event => {
    setData({ ...data, [event.target.name]: event.target.value })
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
      .then(({ token, result, redirect, username }) => {
        console.log('RSEULTADO ', token, result, redirect, username)
        if (result) {
          localStorage.clear()
          localStorage.setItem('token', token)
          localStorage.setItem('username', username)
          window.location.href = redirect
          setTimeout(() => {
            history.push(`/user/dashboard`)
          }, 200)
        }
      })
      .catch(error => {
        console.log('ERROR: ', error)
        if (error) {
          const { message, result } = error.data
          setMessage({
            message: message,
            result: result
          })
        } else {
          setMessage({
            message: 'No hay comunicación con los servicios :(',
            result: false
          })
        }
      })
    setLoading(false)
  }

  return { data, handleInputChange, login, message, loading }
}
