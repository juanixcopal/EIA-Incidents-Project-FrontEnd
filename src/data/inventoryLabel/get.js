import axios from 'axios'

export const getIdentifierUEAA = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/labelInventory/query`, { headers: { service: 'identifier-ueaa', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
