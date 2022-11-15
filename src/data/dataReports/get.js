import axios from 'axios'

export const getReportingData = async () => {
    return await axios
        .get(`http://172.27.20.114:3050/v1/incidences/query`, { headers: { service: 'open-incidences' } })
        .then(response => {
            // console.log('Respuesta', response)
            return response
        })
        .catch(error => {
            throw error
        })
}
