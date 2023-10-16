import axios from 'axios'

export const getFloors = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_BASE}/v1/classrooms/query`, { headers: { service: 'all-floors', token: localStorage.getItem('token') } })
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
    .get(`${process.env.REACT_APP_API_BASE}/v1/classrooms/query`, {
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
    .get(`${process.env.REACT_APP_API_BASE}/v1/classrooms/query`, {
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
