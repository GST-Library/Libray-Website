import {create} from 'zustand';
import axios from 'axios';

const useAuthStore = create((set) => ({
    user: null,
    loading: false,
    error: null,
    success: null,

    registerUser: async (formData) => {
        set({ loading: true, error: null, success: null });
        try {
            const response = await axios.post('http://localhost:8000/api/v1/users/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            set({ user: response.data.data, success: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || "Registration failed", loading: false });
        }
    },

    loginUser: async (credentials) => {
        set({ loading: true, error: null, success: null });
        try {
            const response = await axios.post('http://localhost:8000/api/v1/users/login', credentials);
            set({ user: response.data.data, success: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || "Login failed", loading: false });
        }
    },

    logoutUser: () => {
        set({ user: null, success: null });
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },
}));

export default useAuthStore;
