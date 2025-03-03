import React, { useState } from "react";
import s from "./Users.module.css";
import { unFollowAC, followAC } from "../../redux/usersPage";
import initialImage from "../../image-ava/avatar.jpg";
import { Preloader } from "../Preloader/Preloader";
import { NavLink } from "react-router-dom";

export function Users({
  users,
  pageCount,
  currentPage,
  changePage,
  pages,
  dispatch,
  isLoading,
  followedUser,
  unFollowedUser,
  isToggleFollowingProgress,
}) {
  // debugger;

  let usersElements = users.map((user) => {
    return (
      <div key={user.id}>
        <h3>{user.name}</h3>
        {user.photos.small ? (
          <NavLink to={`/profile/${user.id}`}>
            <img src={user.photos.small} className={s.image} alt="avatarka" />
          </NavLink>
        ) : (
          <NavLink to={`/profile/${user.id}`}>
            <img src={initialImage} className={s.image} alt="avatarka" />
          </NavLink>
        )}

        <button
          disabled={isToggleFollowingProgress.includes(user.id)}
          onClick={() => {
            if (user.followed) {
              unFollowedUser(user.id);
            } else {
              followedUser(user.id);
            }
          }}
        >
          {user.followed ? "Unfollow" : "Follow"}
        </button>
      </div>
    );
  });

  return (
    <section className="container">
      {isLoading ? (
        <Preloader />
      ) : (
        <div>
          <p className="pages">
            {pages.map((page) => (
              <button
                className={currentPage === page ? s.active : ""}
                onClick={() => changePage(page)}
              >
                {page}
              </button>
            ))}
          </p>
          <div>{usersElements}</div>
        </div>
      )}
    </section>
  );
}
