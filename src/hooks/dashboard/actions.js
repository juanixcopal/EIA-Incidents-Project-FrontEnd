import { useState } from 'react'
import { alertMessage } from '../common/toast-alert'
import axios from 'axios'

export const useActions = ({ data, toggle, dataModal }) => {
  const [loadingOperation, setLoadingOperation] = useState(false)

  const updateIncidence = async e => {
    e.preventDefault()

    const { id_reporte } = dataModal.params

    const update_data = {
      ...data,
      id_reporte
    }

    setLoadingOperation(true)
    await axios.put(`http://172.27.20.128:3050/v1/dashboard/manager?id_reporte=${id_reporte}`, update_data).then(({ data }) => {
      alertMessage(data, toggle)
    })
    setLoadingOperation(false)
  }

  return { loadingOperation, updateIncidence }
}
