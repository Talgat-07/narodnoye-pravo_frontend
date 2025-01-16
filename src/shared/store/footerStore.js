import { Api } from "shared/api/Api";
import { create } from "zustand";

export const useFooterStore = create((set) => ({
    phone_numbers: [],
    emails: [],
    address: '',
    isLoading: false,
    error: null,
    fetchFooter: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await Api.get(`footer/`);
            const footerData = response.data;
            set({
                phone_numbers: Array.isArray(footerData.phone_numbers) ? footerData.phone_numbers : [],
                emails: Array.isArray(footerData.emails) ? footerData.emails : [],
                address: typeof footerData.address === 'string' ? footerData.address : '',
                isLoading: false,
            });
        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    }
}));
