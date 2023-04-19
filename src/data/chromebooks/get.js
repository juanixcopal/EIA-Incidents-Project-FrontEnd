import axios from 'axios'

export const getEstadosChromebook = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/chromebooks/query`, { headers: { service: 'get-estados-chromebooks', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getCarritosChromebook = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/chromebooks/query`, { headers: { service: 'get-carritos-chromebooks', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getChromebooksByArmario = async ({ dataModal }) => {
  const { id_armario } = dataModal.params

  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/chromebooks/query`, {
      headers: { service: 'get-chromebooks-by-armario', token: localStorage.getItem('token') },
      params: { id_armario: id_armario }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
