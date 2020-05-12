// You will add code in this file
import React, { useState } from "react";
// import dummyData from "../../../src/dummy-data";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";


import "./Posts.css";
let likeNumbers, setLikeNumbers;

// pass props in this file to
const Post = props => {
  [likeNumbers, setLikeNumbers] = useState(27);

  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection likeNumber={likeNumbers}/>
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export {likeNumbers, setLikeNumbers};
export default Post;
