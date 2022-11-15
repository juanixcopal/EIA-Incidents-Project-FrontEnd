import { useEffect, useState } from "react";
import { getReports } from "../../data/reports/get.js";

export const useFetchReports = () =>{
    const [ reports, setReports ] = useState([])

    useEffect(()=>{
        (async()=>{
            await getReports()
            .then(({data})=>{
                // console.log('Gg',data);
                setReports(data)
            })
            .catch((error)=>{
                console.log('error', error);
            })
        })()
    },[])
    return {reports}
}