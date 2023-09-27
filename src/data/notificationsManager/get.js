import axios from 'axios'

export const getAllExpiredNotificationsActive = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/notificationsManager/query`, {
      headers: { service: 'all-expired-notifications', token: localStorage.getItem('token') }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getAllNotificationPriorities = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/notificationsManager/query`, {
      headers: { service: 'all-notification-priorities', token: localStorage.getItem('token') }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
