import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Loader } from "./Loader";
import { CommentListItem } from "./CommentListItem";

export const PostListItem = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const toggleComments = async (postId) => {
    if (selectedPost === postId) {
      setSelectedPost(null);
      setComments([]);
    } else {
      setSelectedPost(postId);
      if (comments.length === 0) {
        await fetchComments(postId);
      }
    }
  };

  const fetchComments = async (postId) => {
    try {
      setLoadingComments(true);
      setTimeout(async () => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        setComments(response.data);
        setLoadingComments(false);
      }, 500);
    } catch (error) {
      console.error(error);
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
                {comments.map((comment) => (
                  <CommentListItem comment={comment} key={comment.id} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
