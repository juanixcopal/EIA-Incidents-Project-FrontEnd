import axios from 'axios'

export const getReports = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/incidences/query`, { headers: { service: 'incidences' } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getStates = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/dashboard/query`, { headers: { service: 'status' } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
