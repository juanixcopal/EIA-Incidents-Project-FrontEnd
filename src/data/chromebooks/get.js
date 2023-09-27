import axios from 'axios'

export const getEstadosChromebook = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/chromebooks/query`, { headers: { service: 'state-chromebooks', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getCarritosChromebook = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/chromebooks/query`, { headers: { service: 'wardrobes-chromebooks', token: localStorage.getItem('token') } })
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
      headers: { service: 'chromebooks-trolley', token: localStorage.getItem('token') },
      params: { id_armario: id_armario }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
