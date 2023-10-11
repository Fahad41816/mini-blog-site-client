import React from 'react';
import Image from '../../assets/images/git.webp'
import { Link, useNavigation } from 'react-router-dom';
import Axios from '../../utils/axios';




const SinglePost = ({blog}) => {

    const {id,image, createdAt, title, likes, tags, isSaved} = blog
    const navigate = useNavigation()
    const saveHandler =() => {
        console.log(isSaved, id)
        Axios.patch(`/blogs/${id}`, {
            "isSaved": isSaved ? false : true    
        }).then(res  => console.log(res.data))
        window.location.reload()
       
    }



    return (
        
            <div className="lws-card">
                <Link to={`blogs/${id}`}>
                <img src={image} className="lws-card-image" alt="" />
                </Link>
                <div className="p-4">
                <div className="lws-card-header">
                    <p className="lws-publishedDate">{createdAt}</p>
                    <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>{likes}</p>
                </div>
                <Link to={`blogs/${id}`} className="lws-postTitle"> {title} </Link>
                <div className="lws-tags"> {tags.map(tag => (<span>{tag}</span>))}   </div>
                {/* <!-- Show this element if post is saved --> */}
                <div onClick={saveHandler} className="flex gap-2 mt-4 cursor-pointer">
                    <span className="lws-badge"> {isSaved ? "unsaved" : "Saved"}  </span>
                </div>
                {/* <!-- Show this element if post is saved Ends --> */}
                </div>
            </div>
        
    );
};

export default SinglePost;