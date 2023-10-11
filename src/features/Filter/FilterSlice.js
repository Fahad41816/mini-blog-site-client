import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Sort:"",
    filter:""
}

const FliterReducer = createSlice({
    name:"Blog/Filter",
    initialState,
    reducers:{
        sortBlog:(state, action)=>{
            state.Sort = action.payload
        },
        filterBog:(state, action)=>{
            state.filter = action.payload
        }
    }
})


export default FliterReducer.reducer;
export const FilterAction = FliterReducer.actions