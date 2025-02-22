import React from "react";
import myImage from "../../image-ava/cat.png";
import s from "../Myprofile/myprofile.module.css";
import { Post } from "../Post/post";
import { MyPost } from "../Mypost/mypost";

const Info = (props) => {
  return (
    <div className="myprofile__info">
      <img className={s.image} src={myImage} alt="my-photo"></img>
      <p className="myprofile__description">{props.description}</p>
    </div>
  );
};

export const MyProfile = (props) => {
  // debugger;
  return (
    <section className="myprofile container">
      <Info description="Красавчик" />
      <MyPost posts={props.posts} dispatch={props.dispatch} />
    </section>
  );
};
