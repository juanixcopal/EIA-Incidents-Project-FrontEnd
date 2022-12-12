import axios from 'axios'

export const getReportingData = async () => {
    return await axios
        .get(`${process.env.REACT_APP_API_BASE}/v1/incidences/query`, { headers: { service: 'open-incidences' } })
        .then(response => {
            return response
        })
        .catch(error => {
            throw error
        })
}
