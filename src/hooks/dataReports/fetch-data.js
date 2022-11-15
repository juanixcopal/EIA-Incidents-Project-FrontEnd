import { useEffect, useState } from "react";
import { getReportingData } from "../../data/dataReports/get.js";
// import{io} from 'socket.io-client'
// let refresh = false

export const useFetchReportingData = () => {
    const [reportsData, setReportsData] = useState([])
    // const socket = io("http://172.27.20.114:3040")
    // const refreshReport = () => {
    //     refresh = !refresh
    // }

    // socket.on("refreshRemote", (arg) => {
    //     console.log('EJECUTANDO EVENTO', arg);
    //     refreshReport()
    // })
    
    useEffect(() => {
        (async () => {
            await getReportingData()
                .then(({ data }) => {
                    setReportsData(data)
                })
                .catch((error) => {
                    console.log('error', error);
                })
        })()
    }, [])
    return { reportsData }
}