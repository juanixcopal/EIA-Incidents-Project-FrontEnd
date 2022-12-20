import { useEffect, useState } from 'react'
import { getReports } from 'data/reports/get.js'
let refresh = false
export const useFetchReports = () => {
    const [dataReports, setDataReports] = useState([])
    const refreshReports = () => (refresh = !refresh)

    useEffect(() => {
        ;(async () => {
            await getReports()
                .then(({ data }) => {
                    setDataReports(data)
                })
                .catch(error => {
                    console.log('error', error)
                })
        })()
        // eslint-disable-next-line
    }, [refresh])
    return { dataReports, refreshReports }
}
