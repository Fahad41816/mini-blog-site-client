import React, { useEffect, useState } from 'react';
import FilterPage from '../Filter/FilterPage';
import SinglePost from '../SinglePost/SinglePost';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../features/Blogs/BlogsSlice';

const HomeContent = () => {
  const dispatch = useDispatch()
  const {Blogs} = useSelector((state)=> state.Blogs)
  const {Sort, filter} = useSelector((state)=> state.Filter)

   

  useEffect(()=>{
    dispatch(fetchBlogs({Sort, filter}))
  },[dispatch, Sort, filter])
 
 

    return (
        <section className="wrapper">
          <FilterPage/>

        {/* <!-- posts container  --> */}
        <main className="post-container" id="lws-postContainer">
          {/* <!-- single post --> */}
           {
            Blogs.map(blog => (
              <SinglePost key={blog.id} blog={blog}/> 
            ))
           }        
        </main>
        {/* <!-- posts container ends --> */}
      </section>
    );
};

export default HomeContent;