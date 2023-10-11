import { createSlice, createAsyncThunk } from "@reduxjs/toolkit" ;
import getRelatedBlog from "./getRelatedBlog";


// initialState 
const initialState = {
    IsLoading: false,
    Blog:[],
    isError: false,
    Error:""
}

// Blogs async thunk 
export const fetchRelatedBlog = createAsyncThunk("fetch/RelatedBlog", async({tag, id})=>{

    const blog = await getRelatedBlog(tag, id)
    return blog

});

// Blogs reducer 
const RelatedBlogReducer = createSlice({
    name:"RelatedBlog",
    initialState,
    extraReducers: (builder) => {
         builder
            .addCase(fetchRelatedBlog.pending, (state)=>{
                state.IsLoading= true
            })
            .addCase(fetchRelatedBlog.fulfilled, (state, action) => {
                state.IsLoading= false
                state.Blog = action.payload
            })
            .addCase(fetchRelatedBlog.rejected, (state, action) => {
            
                state.Blog = [],
                state.Error = action.error.message,
                state.isError = true
                
            })
    }
})

export default RelatedBlogReducer.reducer;
