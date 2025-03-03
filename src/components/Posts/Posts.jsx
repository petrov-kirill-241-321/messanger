import React from "react";
import s from "./Posts.module.css";
import { Post } from "../Post/post";

export const Posts = ({ posts, photo }) => {
  // debugger;
  let postsElements = posts.map((post) => {
    return <Post text={post.text} photo={photo} />;
  });
  return <section className="posts">{postsElements}</section>;
};
