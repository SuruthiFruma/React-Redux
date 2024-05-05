import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "ca",
    initialState: {
        item: 30
    },
    reducers: {
        addItem: (state, action) =>   state.item + action.payload
    },
    extraReducers:(builder)=>{
        builder.addCase(incrementAsync.pending,(state,action)=>{
            console.log("Promise pending")
            console.log(state)
            console.log(action)
           return  state.item})
        .addCase(incrementAsync.fulfilled,(state,action)=>{
            console.log("promise fulfilled",action)
            console.log(action.payload)
            console.log(state)
            let a=action.payload
            return a})
    }
})
export const incrementAsync=createAsyncThunk("ca/incrementAsync", async (value) => {
    console.log("value",value)
   return await new Promise((res) =>setTimeout(res("120"),1000) )
  
}) 
console.log("async thunk",incrementAsync)
export default cartSlice.reducer
export const { addItem } = cartSlice.actions
