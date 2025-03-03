import React from "react";

import s from "../Header/header.module.css";
import { NavLink } from "react-router-dom";

export const Header = ({ login, logOut }) => {
  // debugger;

  return (
    <header className={`${s.header} container`}>
      <a href="#" className="header__logo">
        <img className={s.image} src="./logo192.png" alt="logo" />
      </a>

      <h1 className="header__title">Типа Месседжер</h1>

      {login ? (
        <>
          <h2>{login}</h2> <button onClick={logOut}>Выйти</button>
        </>
      ) : (
        <NavLink className={s.link} to="/login">
          Войти
        </NavLink>
      )}
    </header>
  );
};
