import axios from "axios";
import { VITE_BASE_URL } from "shared/constants/constants";


export const Api = axios.create({
    baseURL: `${VITE_BASE_URL}` + 'ru/api/'
})

Api.interceptors.request.use(
    (config) => {
        const language = JSON.parse(localStorage.getItem('language'))
        if (language) {
            config.headers["Accept-Language"] = language.code
        }
        return config
    },
    (err) => Promise.reject(err),
)