import React from "react";
import image from "../../image-ava/cat.png";
import s from "./post.module.css";

export const Post = ({ text }) => {
  // debugger;
  return (
    <div className={`container ${s.container}`}>
      <img className={s.image} src={image} alt="" />
      <p className={s.desctiption}>{text}</p>
    </div>
  );
};
