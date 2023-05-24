import React from "react";

export const CommentListItem = ({ comment }) => {
  return (
    <div key={comment.id} className="card mb-3">
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">
          Email: {comment.email}
        </h6>
        <p className="card-text">{comment.body}</p>
      </div>
    </div>
  );
};
