import axios from 'axios'

export const getFloors = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/incidences/query`, { headers: { service: 'all-floors' } })
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
    .get(`${process.env.REACT_APP_API_BASE}/v1/incidences/query`, { headers: { service: 'classrooms-by-floor' }, params: { id_floor } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

// export const getReports = async () => {
//   return await axios
//     .get(`${process.env.REACT_APP_API_BASE}/v1/incidences/query`, { headers: { service: 'incidences' } })
//     .then(response => {
//       return response
//     })
//     .catch(error => {
//       throw error
//     })
// }

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

export const getIncidencesForFloor = async ({ dataModal }) => {
  const { id_aula } = dataModal.params

  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/incidences/query`, {
      headers: { service: 'incidences-by-classroom' },
      params: {
        id_classroom: id_aula
      }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
