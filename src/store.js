import { configureStore } from '@reduxjs/toolkit'; 
import BlogsReducer from './features/Blogs/BlogsSlice';
import blogSlice from './features/singleBlog/blogSlice';
import RelatedBlogSlice from './features/Relatedblog/RelatedBlogSlice';
import FilterSlice from './features/Filter/FilterSlice';

const store = configureStore({
  reducer: {
    Blogs: BlogsReducer,
    Blog: blogSlice,
    RelatedBlog : RelatedBlogSlice,
    Filter: FilterSlice
  },
});


export default store;

