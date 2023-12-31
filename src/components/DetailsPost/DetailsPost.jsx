import React from 'react';
import Image from '../../assets/images/mern.webp'

const DetailsPost = ({blog}) => {

  const {id, image, createdAt, title, like, tags, description, isSaved} = blog  
   
  return (
        <main className="post">
        <img src={image} alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
        <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
         {title}
        </h1>
        <div className="tags" id="lws-singleTags">
           {tags?.map((tag) => (<span>#{tag} </span>))}
        </div>
        <div className="btn-group">
          {/* <!-- handle like on button click --> */}
          <button className="like-btn" id="lws-singleLinks">
            <i className="fa-regular fa-thumbs-up"></i> {like}
          </button>
          {/* <!-- handle save on button click --> */}
          {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
          <button className="active save-btn" id="lws-singleSavedBtn">
            <i className="fa-regular fa-bookmark"></i> {isSaved ? "unSaved" : "Saved" } 
          </button>
        </div>
        <div className="mt-6">
          <p>
           {description}
          </p>
        </div>
        </div>
      </main>
    );
};

export default DetailsPost;