import React from "react";
import { PostListItem } from "./PostListItem";

export const PostList = ({ posts }) => {
  return (
    <div>{posts && posts.map((post) => <PostListItem post={post} />)}</div>
  );
};
