import { useState } from 'react'
import { alertMessage } from 'hooks/common/toast-alert'
import axios from 'axios'

export const useActions = ({ FetchDataReports, data, toggle, dataModal }) => {
    const [loadingOperation, setLoadingOperation] = useState(false)
    const { refresIncidences } = FetchDataReports
    const createIncidence = async e => {
        e.preventDefault()
        const { id_aula } = dataModal.params

        setLoadingOperation(true)
        await axios.post('http://172.27.20.128:3050/v1/incidences/manager', data).then(({ data }) => {
            alertMessage(data, refresIncidences, toggle)
        })
        setLoadingOperation(false)
    }
    return { loadingOperation, createIncidence }
}
