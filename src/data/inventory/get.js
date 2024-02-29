import axios from 'axios'

export const getFloors = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/inventory/query`, { headers: { service: 'all-floors', token: localStorage.getItem('token') } })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getClassroomsByFloor = async ({ data }) => {
  const { id_planta } = data

  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/inventory/query`, {
      headers: { service: 'classrooms-by-floor', token: localStorage.getItem('token') },
      params: { id_floor: id_planta }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getComputerByRoom = async ({ dataModal }) => {
  const { id_aula } = dataModal.params

  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/inventory/query`, {
      headers: { service: 'computer-by-room', token: localStorage.getItem('token') },
      params: { id_room: id_aula }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export const getDataComputerByComputer = async ({ dataComputer }) => {
  const { id_dg_ordenador } = dataComputer

  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/inventory/query`, {
      headers: { service: 'data-computer-by-computer', token: localStorage.getItem('token') },
      params: { id_computer: id_dg_ordenador }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}
