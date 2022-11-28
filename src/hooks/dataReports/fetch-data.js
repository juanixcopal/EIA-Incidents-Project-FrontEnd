import { useEffect, useState } from 'react'
import { getReportingData } from '../../data/dataReports/get.js'
let refresh = false
export const useFetchReportingData = () => {
    const [reportsData, setReportsData] = useState([])
    const refresIncidences = () => (refresh = !refresh)

    useEffect(() => {
        ;(async () => {
            await getReportingData()
                .then(({ data }) => {
                    setReportsData(data)
                })
                .catch(error => {
                    console.log('error', error)
                })
        })()
    }, [refresh])
    return { reportsData, refresIncidences }
}
