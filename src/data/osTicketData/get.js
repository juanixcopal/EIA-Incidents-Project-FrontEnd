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

export const getpermissionPageDatosOsTicket = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/tickets/query`, {
      headers: { service: 'permission-items-page-tickets', token: localStorage.getItem('token') }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getClosedTicketsCurrentWeek = async () => {
  return await axios

    .get(`${process.env.REACT_APP_API_BASE}/v1/tickets/query`, {
      headers: { service: 'closed-tickets-current-week', token: localStorage.getItem('token') }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getDataTicketByStaff = async ({ dataModal }) => {
  const { staff_id } = dataModal.params
  return await axios

    .get(`${process.env.REACT_APP_API_BASE}/v1/tickets/query`, {
      headers: { service: 'closed-tickets-by-staff-and-weekly', token: localStorage.getItem('token') },
      params: { staff_id }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
