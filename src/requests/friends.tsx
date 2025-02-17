import axios from 'axios'
const API_URL = process.env.URL

export default async function friendRequests( data: any ) {
    
    const create = axios.post(`${API_URL}/apointments`, data)
    .then((response) => {
        return response.data
    })

    const get = axios.post(`${API_URL}/apointments`)
    .then((response) => {
        return response.data
    })

    const update = axios.post(`${API_URL}/apointments`, data)
    .then((response) => {
        return response.data
    })

    const delet = axios.post(`${API_URL}/apointments`, data)
    .then((response) => {
        return response.data
    })
    
}