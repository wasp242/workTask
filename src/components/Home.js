import React, { useEffect } from "react";
import { Loader } from "./Loader";
import { PostList } from "./PostList";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest } from "./../saga/actions";

export const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const loadingPosts = useSelector((state) => state.loadingPosts);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  return <div>{loadingPosts ? <Loader /> : <PostList posts={posts} />}</div>;
};
