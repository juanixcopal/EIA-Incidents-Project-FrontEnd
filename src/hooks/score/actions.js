import { useState } from 'react'
import { alertMessage } from '../common/toast-alert'
import axios from 'axios'

export const useActions = ({ dataModal, scoreToDeduct, toggle, FetchDemerits }) => {
  const [loadingOperation, setLoadingOperation] = useState(false)
  const { demerits } = FetchDemerits
  const addDemerits = async e => {
    e.preventDefault()
    const { id_user } = dataModal.params

    const send_data = {
      id_user,
      scoreToDeduct
    }
    console.log('SEND DATA', send_data)

    setLoadingOperation(true)
    await axios.put('http://172.27.20.128:3050/v1/score/demerits', send_data).then(({ data }) => {
      console.log('STEP 2')
      alertMessage(data, demerits, toggle)
    })
    console.log('STEP 3')
    setLoadingOperation(false)
  }

  return { loadingOperation, addDemerits }
}

// dataModal, scoreToDeduct, toggle, FetchDemerits
