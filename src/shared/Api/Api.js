import axios from "axios";
import { BASE_URL } from "shared/constants/constants";


export const Api = axios.create({
    baseURL: `${BASE_URL}`
})

Api.interceptors.request.use(
    (config) => {
        const userLanguage = localStorage.getItem("i18nextLng");
        if (userLanguage) {
            config.headers["Accept-Language"] = userLanguage;
        }
        return config;
    }
);