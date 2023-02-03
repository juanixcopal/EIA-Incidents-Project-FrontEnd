import axios from 'axios'

export const getFloors = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/incidences/query`, { headers: { service: 'floors' } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getClassrooms = async ({ data }) => {
  const { id_floor } = data

  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/incidences/query`, { headers: { service: 'classrooms' }, params: { id_floor } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getReports = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/incidences/query`, { headers: { service: 'incidences' } })
    .then(response => {
      // console.log(response)
      return response
    })
    .catch(error => {
      throw error
    })
}

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
