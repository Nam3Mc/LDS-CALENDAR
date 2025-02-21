import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_URL;

const authRequests = {
  signIn: async (data: any) => {
    try {
      const response = await axios.post(`${API_URL}/signin/`, data);
      return response.data;
    } catch (error) {
      console.error("Sign In Error:", error);
      throw error;
    }
  },

  signUp: async (data: any) => {
    try {
      const response = await axios.post(`${API_URL}/signup/`, data);
      return response.data;
    } catch (error) {
      console.error("Sign Up Error:", error);
      throw error;
    }
  },
};

export default authRequests;
