import axios from "axios";
import { VITE_API_URL, VITE_API_VERSION } from "shared/constants/constants";


export const Api = axios.create({
    baseURL: `${VITE_API_URL}${VITE_API_VERSION}`
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