import { Api } from 'shared/Api/Api';
import { create } from 'zustand';

export const useServicesStore = create((set) => ({
    services: [],
    isLoading: false,
    error: null,
    fetchServices: async () => {
        set({ isLoading: true, error: null });

        try {
            let allResults = [];
            let url = 'news/services/';

            while (url) {
                const response = await Api.get(url);
                const data = response.data;

                allResults = [...allResults, ...data.results];
                url = data.next;
            }

            set({ services: allResults, isLoading: false });

        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    }
}));