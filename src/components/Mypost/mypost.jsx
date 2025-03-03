import React from "react";
import { NewPost } from "../Newpost/newpost.jsx";
import { Posts } from "../Posts/Posts.jsx";

export const MyPost = ({ posts, photo, dispatch }) => {
  // debugger;
  return (
    <section className="mypost container">
      <h1 className="mypost__title">Мои посты:</h1>
      <Posts posts={posts} photo={photo} />
      <NewPost dispatch={dispatch} />
    </section>
  );
};
