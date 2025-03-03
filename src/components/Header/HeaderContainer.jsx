import React, { useEffect, useState } from "react";
import { Header } from "./header";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  authMe,
  deleteAuthUser,
  getAuthUserData,
  logIn,
  setAuthUserData,
} from "../../redux/auth-reducer";
import { authApi, authorization } from "../../api";

export function HeaderContainer() {
  // debugger;
  let dispatch = useDispatch();
  let login = useSelector((state) => state.auth.login);

  const [isLogin, setIsLogin] = useState(login);

  async function logOut() {
    const resp = await authApi.logOut();
    dispatch(deleteAuthUser());
  }

  function getUserAuth() {
    dispatch(getAuthUserData());
  }

  async function fetchAuth() {
    dispatch(authMe(setIsLogin));
  }

  useEffect(() => {
    fetchAuth();
  }, []);

  useEffect(() => {
    getUserAuth();
  }, [login]);

  return <Header login={login} logOut={logOut} />;
}
