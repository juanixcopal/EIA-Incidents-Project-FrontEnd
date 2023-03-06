import { useState } from 'react'
import { alertMessage } from '../common/toast-alert'
import axios from 'axios'

export const useActions = ({ FetchReportsData, data, toggle, dataModal, sockets }) => {
  const [loadingOperation, setLoadingOperation] = useState(false)
  const { _getReports } = FetchReportsData

  const updateIncidence = async e => {
    e.preventDefault()

    const { id_reporte } = dataModal.params

    const update_data = {
      ...data,
      id_reporte
    }

    setLoadingOperation(true)
    await axios
      .put(`http://192.168.0.17:3050/v1/dashboard/manager?id_reporte=${id_reporte}`, update_data, { headers: { token: localStorage.token } })
      .then(({ data }) => {
        alertMessage(data, _getReports, toggle)
        sockets.incidencesSocket.emit('update_incidence', data)
      })
    setLoadingOperation(false)
  }

  return { loadingOperation, updateIncidence }
}
