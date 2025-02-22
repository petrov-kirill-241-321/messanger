import React from "react";
import s from "./News.module.css";
import { Post } from "../Post/post";
import { News } from "./News";
import { useSelector, useDispatch } from "react-redux";

export const NewsContainer = () => {
  let news = useSelector((state) => state.newsPage.news);
  return <News news={news} />;
};
