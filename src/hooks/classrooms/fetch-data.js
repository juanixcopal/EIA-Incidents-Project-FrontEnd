// import { fabClasses } from "@mui/material";
import { useEffect, useState } from "react"
import { getClassrooms } from "../../data/classrooms/get.js"


export const useFetchClassrooms = () =>{
    const [ classrooms, setClassrooms ] = useState([])

    useEffect(()=>{
        (async()=>{
            await getClassrooms()
            .then(({data})=>{
                // console.log('TRAE DATA', data);
                setClassrooms(data)
            })
            .catch((error)=>{
                console.log('error', error);
            })
        })()
        // return () => {}
    },[])
    return {classrooms}
}