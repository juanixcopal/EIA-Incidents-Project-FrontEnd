import { useState } from 'react'
import { alertMessage } from '../common/toast-alert'
import axios from 'axios'

export const useActions = ({ dataModal, scoreToDeduct, toggle, FetchDemerits, FetchUsersAndScore, scoreToAdd, setScoreToAdd, setScoreToDeduct }) => {
  const [loadingOperation, setLoadingOperation] = useState(false)
  const { _Score } = FetchUsersAndScore

  const addDemerits = async e => {
    e.preventDefault()
    const { id_user } = dataModal.params

    const send_data = {
      id_user,
      scoreToDeduct
    }

    setLoadingOperation(true)
    await axios.put(`${process.env.REACT_APP_API_BASE}/v1/score/demerits`, send_data, { headers: { token: localStorage.token } }).then(({ data }) => {
      alertMessage(data, _Score, toggle)
    })
    setScoreToDeduct(0)
    setLoadingOperation(false)
  }

  const addMerits = async e => {
    e.preventDefault()
    const { id_user } = dataModal.params

    const send_data = {
      id_user,
      scoreToAdd
    }

    setLoadingOperation(true)
    await axios.put(`${process.env.REACT_APP_API_BASE}/v1/score/merits`, send_data, { headers: { token: localStorage.token } }).then(({ data }) => {
      alertMessage(data, _Score, toggle)
    })
    setScoreToAdd(0)
    setLoadingOperation(false)
  }

  return { loadingOperation, addDemerits, addMerits }
}
