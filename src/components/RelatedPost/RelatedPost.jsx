import React, { useEffect } from 'react';
import Iamge from '../../assets/images/git.webp'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedBlog } from '../../features/Relatedblog/RelatedBlogSlice';
import { Link } from 'react-router-dom';

const RelatedPost = ({tag, id}) => {
  const dispatch = useDispatch()
  const {Blog} = useSelector((State)=> State.RelatedBlog)
  
  useEffect(()=>{
    dispatch(fetchRelatedBlog({tag, id}))
  },[dispatch, tag, id])
  
  return (
        <aside>
        <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
        <div className="space-y-4 related-post-container">
        {/* <!-- related post  --> */}
        {
          Blog.map(data=> (
            <div className="card" key={data.key}>
                  <Link to={`/blogs/${data.id}`}>
                    <img src={data.image} className="card-image" alt="" />
                  </Link>
                  <div className="p-4">
                    <Link to={`/blogs/${data.id}`} className="text-lg post-title lws-RelatedPostTitle">
                      {data.title}
                    </Link>
                    <div className="mb-0 tags">
                      {data.tags.map(tag => <span> #{tag}, </span>)} 
                    </div>
                    <p>{data.createdAt}</p>
                  </div>
            </div>
          ))
        }
        
        {/* <!-- related post ends --> */}
        </div>
        </aside>
    );
};

export default RelatedPost;