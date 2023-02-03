import { useState } from 'react'
import { alertMessage } from '../common/toast-alert'
import axios from 'axios'

export const useActions = ({ FetchDataReports, dataIncident, toggle, dataModal, socket }) => {
  const [loadingOperation, setLoadingOperation] = useState(false)
  const { refresIncidences } = FetchDataReports

  const createIncidence = async e => {
    e.preventDefault()
    const { id_aula } = dataModal.params

    const send_data = {
      ...dataIncident,
      id_aula
    }

    setLoadingOperation(true)
    await axios.post('http://172.27.20.128:3050/v1/incidences/manager', send_data).then(({ data }) => {
      alertMessage(data, refresIncidences, toggle)
    })
    setLoadingOperation(false)
  }

  const testEmitedEvent = () => {
    console.log('EMITED EVENT')
    // socket.emit('test', { id: 1, name: 'Prueba' })
    socket.emit('getData')
  }

  return { loadingOperation, createIncidence, testEmitedEvent }
}
