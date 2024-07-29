import { createSlice } from '@reduxjs/toolkit'

export const counterSlice=createSlice({
    name: 'counter',
    initialState: {
        value: []
    },
    reducers: {
        Upload : (state,action) => {
            state.value.push(action.payload);
        }
    }
})

export const { Upload }=counterSlice.actions;

export default counterSlice.reducer