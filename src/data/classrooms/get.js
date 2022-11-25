import axios from 'axios'

export const getClassrooms = async () => {
    return await axios
        .get('http://172.27.20.128:3050/v1/incidences/query', { headers: { service: 'classrooms' } })
        .then(response => {
            // console.log('Response', response)
            return response
        })
        .catch(error => {
            console.log(error)
            throw error
        })
}

export const getTypeClassrooms = async () => {
    return await axios
        .get('http://172.27.20.128:3050/v1/typeClassrooms/query', { headers: { service: 'typeClassrooms' } })
        .then(response => {
            return response
        })
        .catch(error => {
            console.log(error)
            throw error
        })
}

export const getFlats = async () => {
    return await axios
        .get(`http://172.27.20.128:3050/v1/incidences/query`, { headers: { service: 'floors' } })
        .then(response => {
            return response
        })
        .catch(error => {
            console.log(error)
            throw error
        })
}
