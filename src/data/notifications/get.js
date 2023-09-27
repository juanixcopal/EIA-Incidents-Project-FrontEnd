import axios from 'axios'

export const getAllNotificationsActive = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/notifications/query`, { headers: { service: 'all-notifications', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
