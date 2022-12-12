import { useState } from 'react'
import { alertMessage } from 'hooks/common/toast-alert'
import axios from 'axios'

export const useActions = ({ FetchDataReports, data, toggle }) => {
    const [loadingOperation, setLoadingOperation] = useState(false)
    const { refresIncidences } = FetchDataReports
    const createIncidence = async e => {
        e.preventDefault()

        setLoadingOperation(true)
        await axios.post(`${process.env.REACT_APP_API_BASE}/v1/incidences/manager`, data).then(({ data }) => {
            alertMessage(data, refresIncidences, toggle)
        })
        setLoadingOperation(false)
    }
    return { loadingOperation, createIncidence }
}
