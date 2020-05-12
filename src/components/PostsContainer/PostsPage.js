//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";


const PostsPage = (props) => {
  const {postsData} = props;
  console.log(props);

  return (
    <div className="posts-container-wrapper">
      {postsData.map((postObj) => {
        return <Post post={postObj}/>
      })}
    </div>
  );
};

export default PostsPage;
