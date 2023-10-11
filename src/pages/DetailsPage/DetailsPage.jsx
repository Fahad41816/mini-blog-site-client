import React, { useEffect } from 'react';
import DetailsPost from '../../components/DetailsPost/DetailsPost';
import RelatedPost from '../../components/RelatedPost/RelatedPost';
import { useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlog } from '../../features/singleBlog/blogSlice';
 

const DetailsPage = () => {
    const dispatch = useDispatch()
    const {Blog, id} = useSelector((state)=> state.Blog) 
    const {blogId} = useLoaderData()

    
    useEffect(()=>{
      dispatch(fetchBlog(blogId))
    },[dispatch, blogId])


    return (
    <>
      <div className="container mt-8">
        <a href="index.html" className="inline-block text-gray-600 home-btn" id="lws-goHome"><i
        className="mr-2 fa-solid fa-house"></i>Go Home</a>
      </div>
      <section className="post-page-container">
      {/* <!-- detailed post  --> */}
        <DetailsPost blog={Blog}/>
      {/* <!-- detailed post ends --> */}
      {/* <!-- related posts --> */}
        <RelatedPost tag={Blog.tags} id={Blog.id}/>
      {/* <!-- related posts ends --> */}
      </section>
    
    </>
    );
};

export default DetailsPage;