import { Api } from "shared/api/Api";
import { create } from "zustand";

export const useFooterStore = create((set) => ({
    formatted_phone_number: [],
    emails: [],
    address: '',
    isLoading: false,
    error: null,
    fetchFooter: async () => {
        set({ isLoading: true, error: null })
        try {
            const response = await Api.get(`footer/`)
            const footerData = response.data
            set({
                formatted_phone_number: Array.isArray(footerData.formatted_phone_number) ? footerData.formatted_phone_number : [],
                emails: Array.isArray(footerData.emails) ? footerData.emails : [],
                address: typeof footerData.address === 'string' ? footerData.address : '',
                isLoading: false,
            });
        } catch (error) {
            set({ error: error.message, isLoading: false })
        }
    }
}));
