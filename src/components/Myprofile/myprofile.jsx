import React, { useState } from "react";
import image from "../../image-ava/avatar.jpg";
import s from "../Myprofile/myprofile.module.css";
import { Post } from "../Post/post";
import { MyPost } from "../Mypost/mypost";
import { MyModal } from "../ModalWindow/MyModal";
import { useEffect } from "react";

const Info = ({ status, photo, saveStatus }) => {
  // debugger;
  const [visible, setVisible] = useState(false);
  const [statusUserInfo, setStatusUserInfo] = useState(status || ""); // Начальное значение

  useEffect(() => {
    setStatusUserInfo(status || ""); // Обновляем, если приходит новый статус
  }, [status]); // Следим за изменением `status`

  function clickButton() {
    setVisible(true);
  }

  return (
    <div className="myprofile__info">
      <MyModal
        visible={visible}
        setVisible={setVisible}
        status={status}
        saveStatus={saveStatus}
        setStatusUserInfo={setStatusUserInfo}
      />
      <img
        className={s.image}
        src={photo ? (!photo.small ? image : photo.small) : image}
        alt="my-photo"
      ></img>
      <p className="myprofile__description">{statusUserInfo}</p>
      <button onClick={clickButton}>изменить</button>
    </div>
  );
};

export const MyProfile = ({ posts, dispatch, user, status, saveStatus }) => {
  // debugger;

  return (
    <section className="myprofile container">
      <h1>{user ? user.fullName : null}</h1>
      <Info
        photo={user ? user.photos : null}
        status={status}
        saveStatus={saveStatus}
      />
      <MyPost
        posts={posts}
        dispatch={dispatch}
        photo={user ? user.photos : null}
      />
    </section>
  );
};
