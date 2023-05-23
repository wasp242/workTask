import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loader } from "./Loader";
import { PostList } from "./PostList";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoadingPosts(true);
      setTimeout(async () => {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
        setLoadingPosts(false);
      }, 500);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return <div>{loadingPosts ? <Loader /> : <PostList posts={posts} />}</div>;
};
