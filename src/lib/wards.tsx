import { Ward } from '@/types/ward'
import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_URL

export default {
    create: async (data: any) => {
        return axios.post(`${API_URL}/ward`, data)
            .then(response => response.data)
            .catch(error => {
                console.error("Error creating appointment:", error)
                throw error
            })
    },

    getAll: async (): Promise<Ward[]> => {
        try {
            console.log("API_URL:", API_URL);
            const response = await axios.get(`${API_URL}/wards`);
            return response.data
        } catch (error) {
            console.error("Error fetching appointments:", error);
            throw error;
        }
    },

    update: async (data: any) => {
        return axios.put(`${API_URL}/ward`, data)
            .then(response => response.data)
            .catch(error => {
                console.error("Error updating appointment:", error)
                throw error
            })
    },

    delete: async (id: number) => {
        return axios.delete(`${API_URL}/ward/${id}`) 
            .then(response => response.data)
            .catch(error => {
                console.error("Error deleting appointment:", error)
                throw error
            })
    }
}
