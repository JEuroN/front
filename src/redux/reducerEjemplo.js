import { createSlice } from '@reduxjs/toolkit'

export const ejemploReducer = createSlice({
    name: 'ejemplo',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        upValue: (state, action) => {
            console.log(action)
            state.value += action.payload
        }
    }
})

export const {increment, decrement, upValue} = ejemploReducer.actions

export default ejemploReducer.reducer;