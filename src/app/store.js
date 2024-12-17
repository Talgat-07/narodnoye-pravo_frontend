import { configureStore } from "@reduxjs/toolkit";
import servicesSlice from "features/Services/model/servicesSlice";



const store = configureStore({
    reducer: {
        services: servicesSlice
    }
})

export default store;