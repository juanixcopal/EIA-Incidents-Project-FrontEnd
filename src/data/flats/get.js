import axios from 'axios'

export const getFlats = async () => {
    return await axios
        .get(`http://172.27.20.114:3050/v1/incidences/query`, { headers: { service: 'floors' } })
        .then(response => {
            // console.log('Response', response);
            return response
        })
        .catch(error => {
            throw error
        })
}
