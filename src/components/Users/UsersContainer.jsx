import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Users } from "./Users";
import {
  follow,
  followAC,
  getUsersThunkCreator,
  setCurrentPage,
  setIsToggleFollowingProgress,
  setLoading,
  setUsers,
  unFollow,
  unFollowAC,
} from "../../redux/usersPage";
import axios from "axios";
import { usersApi } from "../../api";

export function UsersContainer() {
  let dispatch = useDispatch();

  // Достаем данные из Redux store
  let users = useSelector((state) => state.usersPage.users);
  let pageSize = useSelector((state) => state.usersPage.pageSize);
  let currentPage = useSelector((state) => state.usersPage.currentPage);
  let totalUsersCount = useSelector((state) => state.usersPage.totalUsersCount);
  let isLoading = useSelector((state) => state.usersPage.isLoading);
  let isToggleFollowingProgress = useSelector(
    (state) => state.usersPage.isToggleFollowingProgress
  );

  let pageCount = Math.ceil(totalUsersCount / pageSize);

  async function fetchUsers(page) {
    try {
      dispatch(getUsersThunkCreator(page, pageSize));
    } catch (error) {
      console.error("Ошибка при загрузке пользователей:", error);
    }
  }

  async function followedUser(userId) {
    dispatch(follow(userId));
  }

  async function unFollowedUser(userId) {
    dispatch(unFollow(userId));
  }

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  function changePage(page) {
    dispatch(setCurrentPage(page));
  }

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <Users
      users={users}
      pageCount={pageCount}
      currentPage={currentPage}
      changePage={changePage}
      pages={pages}
      dispatch={dispatch}
      isLoading={isLoading}
      followedUser={followedUser}
      unFollowedUser={unFollowedUser}
      isToggleFollowingProgress={isToggleFollowingProgress}
    />
  );
}
