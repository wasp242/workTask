import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Loader } from "./Loader";
import { CommentListItem } from "./CommentListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsRequest } from "./../actions";

export const PostListItem = ({ post }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments[post.id]);
  const loadingComments = useSelector(
    (state) => state.loadingComments[post.id]
  );
  const selectedPost = useSelector((state) => state.selectedPost);

  const toggleComments = (postId) => {
    if (selectedPost === postId) {
      dispatch(fetchCommentsRequest(null));
    } else {
      dispatch(fetchCommentsRequest(postId));
    }
  };

  return (
    <div key={post.id} className="card mb-3">
      <div className="card-header">
        <h5>{post.title}</h5>
      </div>
      <div className="card-body">
        <Link to={`/users/${post.userId}`}>
          <img
            src={"https://via.placeholder.com/40/"}
            alt="Author Avatar"
            className="avatar"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <p className="card-text">{post.body}</p>
        <button
          className="btn btn-primary"
          onClick={() => toggleComments(post.id)}
        >
          {selectedPost === post.id ? "Hide Comments" : "Show Comments"}
        </button>
        {selectedPost === post.id && (
          <div>
            {loadingComments ? (
              <Loader />
            ) : (
              <div>
                <h3 className="m-3">Comments:</h3>
                {comments && comments.length > 0 ? (
                  comments.map((comment) => (
                    <CommentListItem comment={comment} key={comment.id} />
                  ))
                ) : (
                  <p>No comments found.</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
