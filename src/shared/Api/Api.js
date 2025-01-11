import axios from "axios";
import { BASE_URL } from "shared/constants/constants";


export const Api = axios.create({
    baseURL: `${BASE_URL}`
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