import axios from 'axios'

export const getFloors = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/classrooms/query`, { headers: { service: 'all-floors', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
