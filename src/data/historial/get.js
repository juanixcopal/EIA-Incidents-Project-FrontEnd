import axios from 'axios'

export const getIncidencesByUser = async () => {
  return await axios

    .get(`${process.env.REACT_APP_API_BASE}/v1/historial/query`, { headers: { service: 'incidences-user', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
