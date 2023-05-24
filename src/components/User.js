import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loader } from "./Loader";
import { PostListItem } from "./PostListItem";
import { useLocation } from "react-router-dom";

export const User = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        setUser(response.data);
        setLoadingUser(false);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchUserPosts = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        setUserPosts(response.data);
        setLoadingPosts(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserDetails();
    fetchUserPosts();
  }, [userId]);
  const goBack = () => {
    navigate("/");
  };

  return (
    <div>
      <button className="btn btn-primary mb-3" onClick={goBack}>
        Back
      </button>
      {loadingUser ? (
        <Loader />
      ) : (
        <div>
          <h2>User Details:</h2>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      )}
      {loadingPosts ? (
        <Loader />
      ) : (
        <div>
          <h2>User Posts:</h2>
          {userPosts.map((post) => (
            <PostListItem post={post} key={post.id} />
          ))}
        </div>
      )}
    </div>
  );
};
