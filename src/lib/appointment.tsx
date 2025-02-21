import axios from "axios"
const API_URL = process.env.NEXT_PUBLIC_URL

const appointmentRequests = {
  create: async (data: any) => {
    try {
      const response = await axios.post(`${API_URL}/appointments`, data);
      return response.data;
    } catch (error) {
      console.error("Error al crear la cita:", error);
      throw error;
    }
  },

  getAll: async () => {
    try {
      const response = await axios.get(`${API_URL}/appointments`)
      return response.data
    } catch (error) {
      console.error("Error al obtener citas:", error)
      throw error
    }
  },

  update: async (id: string, data: any) => {
    try {
      const response = await axios.put(`${API_URL}/appointments/${id}`, data)
      return response.data
    } catch (error) {
      console.error("Error al actualizar la cita:", error)
      throw error
    }
  },

  delete: async (id: string) => {
    try {
      const response = await axios.delete(`${API_URL}/appointments/${id}`)
      return response.data;
    } catch (error) {
      console.error("Error al eliminar la cita:", error)
      throw error
    }
  },
};

export default appointmentRequests
