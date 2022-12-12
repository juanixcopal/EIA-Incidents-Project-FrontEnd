import { useState } from 'react'
import { alertMessage } from 'hooks/common/toast-alert'
import axios from 'axios'

export const useActions = ({ FetchClassrooms, data, toggle }) => {
    const [loadingOperation, setLoadingOperation] = useState(false)
    const { refreshClassrooms } = FetchClassrooms

    const createClassroom = async e => {
        e.preventDefault()
        const { id_planta, id_tipo_aula } = data

        if (!id_planta || !id_tipo_aula) {
            alertMessage({ result: false, message: 'Aun hay campos sin rellenar' })
            return
        }

        setLoadingOperation(true)
        await axios.post(`${process.env.REACT_APP_API_BASE}/v1/classrooms/manager`, data).then(({ data }) => {
            alertMessage(data, refreshClassrooms, toggle)
        })
        setLoadingOperation(false)
    }

    return { loadingOperation, createClassroom }
}
