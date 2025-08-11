import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 2,
        allStudent: []
    }
})

export default counterSlice.reducer