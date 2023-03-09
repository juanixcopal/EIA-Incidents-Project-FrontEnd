import axios from 'axios'

export const getOpenTickets = async () => {
  return await axios

    .get(`${process.env.REACT_APP_API_BASE}/v1/tickets/query`, { headers: { service: 'open-tickets', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getClosedTicketsFirstSemester = async () => {
  return await axios

    .get(`${process.env.REACT_APP_API_BASE}/v1/tickets/query`, { headers: { service: 'closed-tickets-first-semester', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getClosedTicketsSecondSemester = async () => {
  return await axios

    .get(`${process.env.REACT_APP_API_BASE}/v1/tickets/query`, { headers: { service: 'closed-tickets-second-semester', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getClosedTicketsCurrentMonth = async () => {
  return await axios

    .get(`${process.env.REACT_APP_API_BASE}/v1/tickets/query`, { headers: { service: 'closed-tickets-current-month', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
