import { useEffect, useState } from 'react'
import { getReports } from 'data/reports/get.js'

export const useFetchReports = () => {
    const [dataReports, setDataReports] = useState([])

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
    }, [])
    return { dataReports }
}
