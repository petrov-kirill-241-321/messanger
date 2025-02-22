import React from "react";
import s from "./News.module.css";
import { Post } from "../Post/post";

export const News = (props) => {
  let news = props.news;
  let newsList = news.map((element) => <Post text={element.text} />);

  return <section className={`${s.News} container`}>{newsList}</section>;
};
