import axios from 'axios'

export const getIncidencesByUser = async ({ formattedDate }) => {
  return await axios

    .get(`${process.env.REACT_APP_API_BASE}/v1/historial/query`, {
      headers: { service: 'search-incidences-user', token: localStorage.getItem('token') },
      params: { formattedDate }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
