import React from "react";
import s from "./Posts.module.css";
import { Post } from "../Post/post";

export const Posts = (props) => {
  // debugger;
  let postsElements = props.posts.map((post) => {
    return <Post text={post.text} />;
  });
  return <section className="posts">{postsElements}</section>;
};
