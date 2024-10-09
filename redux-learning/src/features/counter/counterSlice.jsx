
import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:"counter",
    initialState:{value:0},
    reducers:{
        increment: (state, action) => {
            // console.log(state.value);
            // console.log(action);
            // console.log(action.payload);
            state.value += action.payload;
        },
        decrement: (state, action) => {
            // console.log(state.value);
            // console.log(action);
            // console.log(action.payload);
            state.value -= action.payload;
        }
    }
});

export const { increment,decrement } = counterSlice.actions;

export default counterSlice.reducer;