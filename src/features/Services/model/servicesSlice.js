import { createSlice } from '@reduxjs/toolkit'
import { servicesThunk } from './servicesThunk'

const servicesSlice = createSlice({
    name: 'service',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(servicesThunk.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        addCase(servicesThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        addCase(servicesThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})

export default servicesSlice.reducer