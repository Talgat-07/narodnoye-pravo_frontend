import { Api } from 'shared/Api/Api';
import { create } from 'zustand';

export const useVacanciesStore = create((set) => ({
    vacancies: [],
    isLoading: false,
    error: null,
    fetchVacancies: async () => {
        set({ isLoading: true, error: null });

        try {
            let allResults = [];
            let url = 'vacancy/vacancies/'; 

            while (url) {
                const response = await Api.get(url);
                const data = response.data;

                
                allResults = [...allResults, ...data.results];
                
                url = data.next;
            }

            set({ vacancies: allResults, isLoading: false });

        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    }
}));   