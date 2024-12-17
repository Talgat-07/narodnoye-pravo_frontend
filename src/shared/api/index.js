import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export const api = {
    getServices() {
        return instance.get(`ru/api/about_us/services/?format=json`)
    }
}