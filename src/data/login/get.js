import axios from "axios"

export const getReports = async () =>{
    return await axios.get(`http://localhost:3050/login/dates`)
    .then((response)=>{
        // console.log('Respuesta', response);
        return response
    })
    .catch((error)=>{
        throw error
    })
}