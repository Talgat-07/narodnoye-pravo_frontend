import { create } from 'zustand';
import { Api } from 'shared/Api/Api';

function parseDateFromDDMMYYYY(dateStr) {
    const [day, month, year] = dateStr.split('.');
    return new Date(`${year}-${month}-${day}`);
}

export const useNewsStore = create((set) => ({
    news: [],
    isLoading: false,
    error: null,

    selectedCategory: 'kg',

    setSelectedCategory: (category) => {
        set({ selectedCategory: category });
    },

  fetchAllNews: async () => {
    set({ isLoading: true, error: null });

    try {
      let allResults = [];
      let url = "news/news/";

      while (url) {
        const response = await Api.get(url);
        const data = response.data;

                allResults = [...allResults, ...data.results];
                url = data.next;
            }
            allResults.sort((a, b) => {
                const dateA = parseDateFromDDMMYYYY(a.date);
                const dateB = parseDateFromDDMMYYYY(b.date);
                return dateB - dateA;
            });

            set({ news: allResults, isLoading: false });
        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    },
}));
