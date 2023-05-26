import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "./Loader";
import { PostListItem } from "./PostListItem.js";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserPostsRequest,
  fetchUserDetailsRequest,
} from "../saga/actions";

export const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const user = useSelector((state) => state.user);
  const userPosts = useSelector((state) => state.userPosts);
  const loading = useSelector((state) => state.loadingUser);

  useEffect(() => {
    dispatch(fetchUserPostsRequest(userId));
    dispatch(fetchUserDetailsRequest(userId));
  }, [dispatch, userId]);

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
