import axios from 'axios'

export const getAllUsers = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/users/query`, { headers: { service: 'all-users', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getRoles = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/users/query`, { headers: { service: 'all-roles', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getAllSuperadmins = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/users/query`, { headers: { service: 'superadmins-users', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
