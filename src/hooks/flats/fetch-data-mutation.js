import { useEffect, useState } from 'react'
import { getFlats } from '../../data/flats/get.js'

export const useFetchFlats = () => {
    const [flats, setFlats] = useState([])

    useEffect(() => {
        ;(async () => {
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
        })()
    }, [])
    return { flats }
}
