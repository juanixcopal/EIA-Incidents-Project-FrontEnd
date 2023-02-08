import { useState } from 'react'
import { alertMessage } from '../common/toast-alert'
import axios from 'axios'

export const useActions = ({ FetchDataReports, dataIncident, toggle, dataModal, sockets }) => {
  const [loadingOperation, setLoadingOperation] = useState(false)
  const { _getReportingData } = FetchDataReports

  const createIncidence = async e => {
    e.preventDefault()
    const { id_aula } = dataModal.params

    const send_data = {
      ...dataIncident,
      id_aula
    }

    setLoadingOperation(true)
    await axios.post('http://172.27.20.128:3050/v1/incidences/manager', send_data).then(({ data }) => {
      alertMessage(data, _getReportingData, toggle)
      sockets.incidencesSocket.emit('create_incidence', data)
    })
    setLoadingOperation(false)
  }

  const testEmitedEvent = () => {
    console.log('EMITED EVENT')
  }

  // const updateIncidence = async e => {
  //   e.preventDefault()
  //   const { comentario, id_estado_incidencia, id_reporte } = dataModal.params

  //   const update_Data = {
  //     ...dataIncident,
  //     id_reporte
  //   }
  //   setLoadingOperation(true)
  //   await axios.patch('http://172.27.20.128:3050/v1/dashboard/manager', { params: { id_reporte } })
  // }

  return { loadingOperation, createIncidence, testEmitedEvent }
}
