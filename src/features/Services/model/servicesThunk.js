import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "shared/api";


export const servicesThunk = createAsyncThunk(
    'services/servicesThunk',
    async (_, { rejectWithValue }) => {
        try {
            const res = await api.getServices()
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)