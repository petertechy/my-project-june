import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 2,
        allStudent: JSON.parse(localStorage.getItem("student")) || []
    },
    reducers: {
        increment: (state)=>{
           state.count += 1
        },
        decrement: (state)=>{
            state.count -= 1
        },
        increaseByParam: (state, actions) =>{
            state.count += actions.payload
        },
        saveStudent: (state, actions)=>{
            state.allStudent.push(actions.payload)

            localStorage.setItem('student', JSON.stringify(state.allStudent))
        }
    }
})

export const {increment, decrement, increaseByParam, saveStudent} = counterSlice.actions
export default counterSlice.reducer