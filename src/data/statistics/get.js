import axios from 'axios'

export const getTypeIncidencesClosed = async () => {
  return await axios

    .get(`${process.env.REACT_APP_API_BASE}/v1/statistics/query`, { headers: { service: 'type-incidences-closed', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getTypeIncidencesClosedByRangeDate = async ({ formattedStartDate, formattedEndDate }) => {
  return await axios

    .get(`${process.env.REACT_APP_API_BASE}/v1/statistics/query`, {
      headers: { service: 'type-incidences-closed-by-range-date', token: localStorage.getItem('token') },
      params: { formattedStartDate, formattedEndDate }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
