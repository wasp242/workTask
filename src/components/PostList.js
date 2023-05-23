import React, { useState } from "react";
import axios from "axios";
import { Loader } from "./Loader";

export const PostList = ({ posts }) => {
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
    <div>
      {posts &&
        posts.map((post) => (
          <div key={post.id} className="card mb-3">
            <div className="card-header">
              <h5>{post.title}</h5>
            </div>
            <div className="card-body">
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
                      <h6>Comments:</h6>
                      {comments.map((comment) => (
                        <div key={comment.id}>
                          <p>
                            <strong>Email:</strong> {comment.email}
                          </p>
                          <p>{comment.body}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};
