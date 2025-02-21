import axios from 'axios'
const API_URL = process.env.NEXT_PUBLIC_URL

export default async function userRequests( data: any ) {

    const get = axios.post(`${API_URL}/apointments`)
    .then((response) => {
        return response.data
    })

    const update = axios.post(`${API_URL}/apointments`, data)
    .then((response) => {
        return response.data
    })

    const del = axios.post(`${API_URL}/apointments`, data)
    .then((response) => {
        return response.data
    })
    
}