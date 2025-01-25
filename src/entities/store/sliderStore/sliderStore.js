import { Api } from 'shared/Api/Api';
import { create } from 'zustand';

export const useSliderStore = create((set) => ({
    employees: [],
    isLoading: false,
    error: null,
    fetchSlider: async () => {
        set({ isLoading: true, error: null });
        try {
            let allResults = [];
            let url = 'about_us/employees/';

            while (url) {
                const response = await Api.get(url);
                const data = response.data;

                allResults = [...allResults, ...data.results];
                url = data.next;
            }

            set({ employees: allResults, isLoading: false });
        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    }
}));