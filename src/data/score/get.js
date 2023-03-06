import axios from 'axios'

export const getUsersAndScore = async () => {
  return await axios

    .get(`${process.env.REACT_APP_API_BASE}/v1/score/query`, { headers: { service: 'users', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getDemerits = async () => {
  return await axios

    .get(`${process.env.REACT_APP_API_BASE}/v1/score/query`, { headers: { service: 'demerits', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
