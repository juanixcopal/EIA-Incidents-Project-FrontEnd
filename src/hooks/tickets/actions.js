import { useState } from 'react'
import { alertMessage } from '../common/toast-alert'
import axios from 'axios'

export const useActions = ({}) => {
  const [loadingOperation, setLoadingOperation] = useState(false)

  const changeState = async e => {
    e.preventDefault()
    setLoadingOperation(true)
    console.log('siuuu', e.target.value)
    // await axios.put(`${process.env.REACT_APP_API_BASE}/v1/score/demerits`, send_data, { headers: { token: localStorage.token } }).then(({ data }) => {
    //   alertMessage(data, _Score, toggle)
    // })
    setLoadingOperation(false)
  }

  return { loadingOperation, changeState }
}
