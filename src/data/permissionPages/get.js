import axios from 'axios'

export const getpermissionPageDatosOsTicket = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/permissionPage/query`, {
      headers: { service: 'permission-page-OsTicket' }
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
    .get(`${process.env.REACT_APP_API_BASE}/v1/permissionPage/query`, {
      headers: { service: 'permission-page-estadistica' }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
