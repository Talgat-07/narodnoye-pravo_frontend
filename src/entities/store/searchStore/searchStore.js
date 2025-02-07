import { create } from 'zustand';
import { Api } from 'shared/api/Api';

export const useSearchStore = create((set) => ({
    searchResults: [],
    isLoading: false,
    error: null,

    searchNews: async (query, category) => {
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
            const filteredResults = results.filter((item) => {
                if (category === 'kg') {
                    return item.category === 'kg_news';
                } else if (category === 'fcon') {
                    return item.category === 'foreign_news';
                }
                return true;
            });

            filteredResults.sort((a, b) => new Date(b.date) - new Date(a.date));

            set({ searchResults: filteredResults, isLoading: false });
        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    },

    resetSearch: () => {
        set({ searchResults: [] });
    },
}));
