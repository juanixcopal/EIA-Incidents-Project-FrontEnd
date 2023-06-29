import axios from 'axios'

export const getTypeIncidencesClosed = async () => {
  return await axios

    .get(`${process.env.REACT_APP_API_BASE}/v1/statistics/query`, { headers: { service: 'closed-ticket-current-month', token: localStorage.getItem('token') } })
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
      headers: { service: 'closed-tickets-by-range-date', token: localStorage.getItem('token') },
      params: { formattedStartDate, formattedEndDate }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getpermissionPageEstadistica = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/statistics/query`, {
      headers: { service: 'permission-items-page-statistics', token: localStorage.getItem('token') }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getClosedTicketsCurrentWeek = async ({ weekly }) => {
  return await axios

    .get(`${process.env.REACT_APP_API_BASE}/v1/statistics/query`, {
      headers: { service: 'tickets-closed-by-week', token: localStorage.getItem('token') },
      params: { weekly }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getDataTicketByStaff = async ({ dataModal, weekly }) => {
  const { staff_id } = dataModal.params

  return await axios

    .get(`${process.env.REACT_APP_API_BASE}/v1/statistics/query`, {
      headers: { service: 'closed-tickets-by-staff-and-weekly', token: localStorage.getItem('token') },
      params: { weekly, staff_id }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getTypeIncidencesClosedWeek = async () => {
  return await axios

    .get(`${process.env.REACT_APP_API_BASE}/v1/statistics/query`, { headers: { service: 'type-incidences-closed-week', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
