import { create } from 'zustand'
import { Api } from 'shared/Api/Api'

export const useNewsStore = create((set) => ({
    news: [],
    isLoading: false,
    error: null,

    fetchAllNews: async () => {
        set({ isLoading: true, error: null });

        try {
            let allResults = [];
            let url = 'news/news/';

            while (url) {
                const response = await Api.get(url);
                const data = response.data;

                allResults = [...allResults, ...data.results];
                url = data.next;
            }

            set({ news: allResults, isLoading: false });

        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    }
}));

