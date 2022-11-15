import axios from "axios"

export const getReports = async () =>{
    return await axios.get(`http://172.27.20.114:3050/api/reportes`)
    .then((response)=>{
        // console.log('Respuesta', response);
        return response
    })
    .catch((error)=>{
        throw error
    })
}