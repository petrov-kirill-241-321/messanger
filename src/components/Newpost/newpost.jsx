import React from "react";
import s from "../Newpost/newpost.module.css";
import {
  addPostActionCreate,
  newPostWrite,
  newPostWriteActionCreate,
  state,
} from "../../redux/profilePage";
import { store } from "../../redux/redux-store";

export const NewPost = (props) => {
  // debugger;
  function newPostWrite() {
    return store.dispatch(newPostWriteActionCreate());
  }

  function addPost() {
    return store.dispatch(addPostActionCreate());
  }

  return (
    <section className="newpost ">
      <div className="newpost__wrapper container">
        <h1 className="newpost__title">Добавить новый пост</h1>
        <textarea
          value={store.getState().profilePage.newPost.text}
          className="post"
          onInput={newPostWrite}
        ></textarea>
        <button className={s.button} onClick={addPost}>
          Добавить
        </button>
      </div>
    </section>
  );
};
