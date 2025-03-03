import React from "react";
import s from "../Newpost/newpost.module.css";
import {
  addPostActionCreate,
  newPostWrite,
  newPostWriteActionCreate,
  state,
} from "../../redux/profilePage";
import { store } from "../../redux/redux-store";
import { useSelector } from "react-redux";

export const NewPost = ({ dispatch }) => {
  // debugger;
  let text = useSelector((state) => state.profilePage.newPost.text);

  function newPostWrite() {
    return dispatch(newPostWriteActionCreate());
  }

  function addPost() {
    return dispatch(addPostActionCreate());
  }

  return (
    <section className="newpost ">
      <div className="newpost__wrapper container">
        <h1 className="newpost__title">Добавить новый пост</h1>
        <textarea
          value={text}
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
