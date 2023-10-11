import { createSlice, createAsyncThunk } from "@reduxjs/toolkit" ;
import getBlogs from "./getBlogs";


// initialState 
const initialState = {
    IsLoading: false,
    Blogs:[],
    isError: false,
    Error:""
}

// Blogs async thunk 
export const fetchBlogs = createAsyncThunk("fetch/Blogs", async({Sort, filter})=>{

    const blogs = await getBlogs(Sort, filter)
    return blogs

});

// Blogs reducer 
const BlogsReducer = createSlice({
    name:"Blogs",
    initialState,
    extraReducers: (builder) => {
         builder
            .addCase(fetchBlogs.pending, (state)=>{
                state.IsLoading= true
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.IsLoading= false
                state.Blogs = action.payload
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
            
                state.Blogs = [],
                state.Error = action.error.message,
                state.isError = true
                
            })
    }
})

export default BlogsReducer.reducer;
