import axios from 'axios'

export const getReports = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/dashboard/query`, { headers: { service: 'incidences', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getStates = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/dashboard/query`, { headers: { service: 'status', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getReportingData = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/incidences/query`, { headers: { service: 'open-incidences', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
