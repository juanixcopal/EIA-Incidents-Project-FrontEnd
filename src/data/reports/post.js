import axios from "axios"

export const postReports = async () =>{
    axios.post(`http://172.27.20.114:3050/reporte/reportes`,{
        tiulo: 'Prueba',
        descripcion: 'Post',
        id_estado_incidencia: 1,
        id_aula: 2
    })
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })
}