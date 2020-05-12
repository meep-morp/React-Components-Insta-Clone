//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../../src/dummy-data";
// import data 
// import dummyData from "./src/dummy-data.js";

const PostsPage = (props) => {
  const {postsData} = props;
  console.log(props);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {postsData.map((postObj) => {
        return <Post post={postObj}/>
      })}
    </div>
  );
};

export default PostsPage;
