import { create } from 'zustand';
import axios from 'axios';

const useServicesStore = create((set) => ({
    services: [],
    isLoading: false,
    error: null,
    fetchServices: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get(`/ru/api/about_us/services/`);
            set({ services: response.data.results, isLoading: false });
        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    },
}));

export default useServicesStore;
