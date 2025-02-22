import React from "react";
import { MyProfile } from "./myprofile";
import { useDispatch, useSelector } from "react-redux";

export const MyProfileContainer = () => {
  // debugger;
  const dispatch = useDispatch();
  let posts = useSelector((state) => state.profilePage.myPosts);
  // let posts = props.store.getState().profilePage.myPosts;
  // let dispatch = props.store.dispatch;
  return <MyProfile posts={posts} dispatch={dispatch} />;
};
