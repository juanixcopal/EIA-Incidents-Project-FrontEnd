import { useEffect, useState } from 'react'
import { getClassrooms, getTypeClassrooms, getFlats } from '../../data/classrooms/get.js'
let refresh = false

export const useFetchClassrooms = () => {
    const [classrooms, setClassrooms] = useState([])
    const refreshClassrooms = () => (refresh = !refresh)

    useEffect(() => {
        ;(async () => {
            await getClassrooms()
                .then(({ data }) => {
                    setClassrooms(data)
                })
                .catch(error => {
                    console.log('error', error)
                })
        })()
        // eslint-disable-next-line
    }, [refresh])

    return { classrooms, refreshClassrooms }
}

export const useFetchTypeClassrooms = () => {
    const [typeClassrooms, setTypeClassrooms] = useState([])
    const [loadingTypeClassrooms, setLoadingTypeClassrooms] = useState(false)

    useEffect(() => {
        ;(async () => {
            setLoadingTypeClassrooms(true)
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
            setLoadingTypeClassrooms(false)
        })()
    }, [])
    return { typeClassrooms, loadingTypeClassrooms }
}

export const useFetchFlats = () => {
    const [flats, setFlats] = useState([])
    const [loadingFlats, setLoadingFlats] = useState(false)

    useEffect(() => {
        ;(async () => {
            setLoadingFlats(true)
            await getFlats()
                .then(({ data }) => {
                    let mutation = data.map(item => {
                        const { id_planta, planta } = item
                        return { value: id_planta, label: planta }
                    })
                    setFlats(mutation)
                })
                .catch(error => {
                    console.log('error', error)
                })
            setLoadingFlats(false)
        })()
    }, [])
    return { flats, loadingFlats }
}
