import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loader } from "./Loader";
import { PostListItem } from "./PostListItem.js";
import { useLocation } from "react-router-dom";

export const User = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const userDetailsResponse = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${userId}`
          );
          const userPostsResponse = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
          );
          setUser(userDetailsResponse.data);
          setUserPosts(userPostsResponse.data);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [userId]);

  const goBack = () => {
    navigate("/");
  };

  return (
    <div>
      <button className="btn btn-primary mb-3" onClick={goBack}>
        Back
      </button>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h2 className="m-2">User Details:</h2>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <h2 className="m-2">User Posts:</h2>
          {userPosts.map((post) => (
            <PostListItem post={post} key={post.id} />
          ))}
        </div>
      )}
    </div>
  );
};
