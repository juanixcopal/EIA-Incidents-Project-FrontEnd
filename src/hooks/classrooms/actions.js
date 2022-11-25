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

        // console.log('SENDING: ', data)

        setLoadingOperation(true)
        await axios.post('http://172.27.20.128:3050/v1/classrooms/manager', data).then(({ data }) => {
            alertMessage(data, refreshClassrooms, toggle)
        })
        setLoadingOperation(false)
    }

    return { loadingOperation, createClassroom }
}
