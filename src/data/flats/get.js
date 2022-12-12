import axios from 'axios'

export const getFlats = async () => {
    return await axios
        .get(`${process.env.REACT_APP_API_BASE}/v1/incidences/query`, { headers: { service: 'floors' } })
        .then(response => {
            return response
        })
        .catch(error => {
            throw error
        })
}
