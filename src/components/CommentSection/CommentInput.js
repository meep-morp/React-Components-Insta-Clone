// You do not need to do anything in this file
import React, {useState} from 'react';
import {commentData, setComment} from "./CommentSectionContainer";

const CommentInput = props => {
  const [newComment, setNewComment] = useState('')

  return (
    <form className="comment-form" onSubmit={ 
      event => {setComment(commentData.push({username: "meep-morp", text: newComment}))
    }}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={event => setNewComment(event.target.value)}
      />
    </form>
  );
};

export default CommentInput;
