// You will add code to this file
import React, { useState } from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import "./Comment.css";

let commentData, setComment;

const CommentSection = props => {
  const {postId, comments} = props;
  [commentData, setComment] = useState(comments);
  console.log(comments);

  return (
    <div>
      {commentData.map((singleComment) => {
        return <Comment key={postId} comment={singleComment}/>
      })}
      <CommentInput />
    </div>
  );
};

export {commentData, setComment};
export default CommentSection;
