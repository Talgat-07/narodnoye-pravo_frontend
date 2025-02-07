import { Api } from "shared/Api/Api";
import { create } from "zustand";

export const useFooterStore = create((set) => ({
    phone_numbers: [],
    emails: [],
    address: '',
    google_map_address: '',
    open_hours: '',
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
                google_map_address: typeof footerData.google_map_address === 'string' ? footerData.google_map_address: '',
                open_hours: typeof footerData.open_hours === 'string' ? footerData.open_hours : '', 
                isLoading: false,
            });
        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    }
}));
