import { Api } from "shared/Api/Api";
import { create } from "zustand";


export const useAboutUsStore = create((set) => ({
    title1: '',
    text1: '',
    title2: '',
    text2: '',
    image: "",
    isLoading: false,
    error: null,
    fetchAboutUs: async () => {
        set({ isLoading: true, error: null })
        try {
            const response = await Api.get(`about_us/`)
            const aboutUsData = response.data.results[0]
            set({
                title1: aboutUsData.title1,
                title2: aboutUsData.title2,
                text1: aboutUsData.text1,
                text2: aboutUsData.text2,
                image: aboutUsData.image,
                isLoading: false
            })
        } catch (error) {
            set({ error: error.message, isLoading: false })
        }
    }
}))