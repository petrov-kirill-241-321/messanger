import React from "react";
import { NavLink, Route, BrowserRouter, Routes } from "react-router-dom";
import s from "../Sidebar/sidebar.module.css";

const SidebarItem = (props) => {
  return (
    <li className={s.item}>
      <NavLink to={props.way} className={s.link}>
        {props.name}
      </NavLink>
    </li>
  );
};

export const Sidebar = () => {
  return (
    <section className={s.sidebar}>
      <div className="sedebar__wrapper">
        <ul className="sidebar__list">
          <SidebarItem way="/" name="Профиль" />
          <SidebarItem way="/message" name="Сообщения" />
          <SidebarItem way="/posts" name="Новости" />
          <SidebarItem way="/music" name="Музыка" />
          <SidebarItem way="/settings" name="Настройка" />
          <SidebarItem way="/users" name="Пользователи" />
        </ul>
      </div>
    </section>
  );
};
