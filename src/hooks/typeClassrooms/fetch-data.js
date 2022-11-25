import { useEffect, useState } from 'react'
import { getTypeClassrooms } from '../../data/typeClassrooms/get.js'

let refresh = false

export const useFetchTypeClassrooms = () => {
    const [typeClassrooms, setTypeClassrooms] = useState([])
    const refreshClassrooms = () => {
        refresh = !refresh
    }

    useEffect(() => {
        ;(async () => {
            await getTypeClassrooms()
                .then(({ data }) => {
                    let mutation = data.map(item => {
                        const { id_tipo_aula, tipo_aula } = item
                        return { value: id_tipo_aula, label: tipo_aula }
                    })
                    setTypeClassrooms(mutation)
                })
                .catch(error => {
                    console.log('error', error)
                })
        })()
    }, [refresh])
    return { typeClassrooms, refreshClassrooms }
}
