import { create } from 'zustand';
import { Api } from 'shared/api/Api';

export const useSearchStore = create((set) => ({
    searchResults: [],
    isLoading: false,
    error: null,

    searchNews: async (query) => {
        set({ isLoading: true, error: null });

        try {
            let results = [];
            let url = `news/news/?search=${encodeURIComponent(query)}`;

            while (url) {
                const response = await Api.get(url);
                const data = response.data;

                results = [...results, ...data.results];
                url = data.next;
            }

            results.sort((a, b) => new Date(b.date) - new Date(a.date));

            set({ searchResults: results, isLoading: false });
        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    },

    resetSearch: () => {
        set({ searchResults: [] });
    },
}));
