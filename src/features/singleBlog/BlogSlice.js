import { createSlice, createAsyncThunk } from "@reduxjs/toolkit" ;
import getBlog from "./getBlog";


// initialState 
const initialState = {
    IsLoading: false,
    Blog:{},
    isError: false,
    Error:""
}

// Blogs async thunk 
export const fetchBlog = createAsyncThunk("fetch/Blog", async(id)=>{

    const blog = await getBlog(id)
    return blog

});

// Blogs reducer 
const BlogReducer = createSlice({
    name:"Blog",
    initialState,
    extraReducers: (builder) => {
         builder
            .addCase(fetchBlog.pending, (state)=>{
                state.IsLoading= true
            })
            .addCase(fetchBlog.fulfilled, (state, action) => {
                state.IsLoading= false
                state.Blog = action.payload
            })
            .addCase(fetchBlog.rejected, (state, action) => {
            
                state.Blog = [],
                state.Error = action.error.message,
                state.isError = true
                
            })
    }
})

export default BlogReducer.reducer;
