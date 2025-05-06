import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

const CounterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increament : (state,action)=>{
            state.value+=1;
        },
        decreament : (state,action)=>{
            state.value-1;
        },
        increamentValue : (state,action)=>{
            state.value+=action.payload[1];
        },
        decreamentValue : (state,action)=>{
            state.value-=action.payload;
         }
    }
});

export const {increament, decreament, increamentValue, decreamentValue} = CounterSlice.actions;
export default CounterSlice.reducer;