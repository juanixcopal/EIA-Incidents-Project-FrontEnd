import axios from 'axios'

export const getReports = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/dashboard/query`, { headers: { service: 'all-incidences-active', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getStates = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/dashboard/query`, { headers: { service: 'all-status-incidence', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
