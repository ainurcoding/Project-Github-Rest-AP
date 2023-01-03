import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    users: [],
    isLoading: false,
    isError: false,
    message: ''
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        }
    },
    extraReducers(builder){

    }
}); 

export default usersSlice.reducer