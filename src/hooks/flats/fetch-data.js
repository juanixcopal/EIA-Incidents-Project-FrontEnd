import { useEffect, useState } from 'react'
import { getFlats } from '../../data/flats/get.js'
let refresh = false
export const useFetchFlatsData = () => {
    const [flatsData, setFlatsData] = useState([])
    const refresFlats = () => (refresh = !refresh)

    useEffect(() => {
        ;(async () => {
            await getFlats()
                .then(({ data }) => {
                    setFlatsData(data)
                })
                .catch(error => {
                    console.log('error', error)
                })
        })()
        // eslint-disable-next-line
    }, [refresh])
    return { flatsData, refresFlats }
}
