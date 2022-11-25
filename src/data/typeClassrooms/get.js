import axios from 'axios'

export const getTypeClassrooms = async () => {
    return await axios
        .get('http://172.27.20.128:3050/v1/typeClassrooms/query', { headers: { service: 'typeClassrooms' } })
        .then(response => {
            return response
        })
        .catch(error => {
            console.log(error)
        })
}
