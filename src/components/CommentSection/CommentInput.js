// You do not need to do anything in this file
import React, {useState} from 'react';

let newComment, setNewComment;

const CommentInput = props => {
  [newComment, setNewComment] = useState('')

  return (
    <form className="comment-form" onSubmit={props.addNewComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={event => setNewComment(event.target.value)}
      />
    </form>
  );
};

export {newComment}
export default CommentInput;
