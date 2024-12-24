import { Api } from 'shared/api/api';
import { create } from 'zustand';

export const useServicesStore = create((set) => ({
    services: [],
    isLoading: false,
    error: null,
    fetchServices: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await Api.get();
            set({ services: response.data.results, isLoading: false });
        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    },
}));

