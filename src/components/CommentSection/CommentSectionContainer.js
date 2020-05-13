// You will add code to this file
import React, { useState } from "react";
import Comment from "./Comment";
import CommentInput, {newComment} from "./CommentInput";
import "./Comment.css";


const CommentSection = props => {
  const {postId, comments} = props;
  const [commentData, setComment] = useState(comments);
  console.log(comments);

  return (
    <div>
      {commentData.map((singleComment) => {
        return <Comment key={postId} comment={singleComment}/>
      })}
      <CommentInput addNewComment={event => {
        event.preventDefault();
        setComment(commentData.concat({username: "meep-morp", text: newComment}))}
        }/>
    </div>
  );
};

export default CommentSection;
