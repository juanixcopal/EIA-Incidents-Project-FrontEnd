import axios from 'axios'

export const getTypeClassrooms = async () => {
    return await axios
        .get(`${process.env.REACT_APP_API_BASE}/v1/typeClassrooms/query`, { headers: { service: 'typeClassrooms' } })
        .then(response => {
            return response
        })
        .catch(error => {
            console.log(error)
        })
}
