import React from "react";

import s from "../Header/header.module.css";

export const Header = () => {
  return (
    <header className={`${s.header} container`}>
      <a href="#" className="header__logo">
        <img className={s.image} src="./logo192.png" alt="logo" />
      </a>
      <h1 className="header__title">Типа Месседжер</h1>
    </header>
  );
};
