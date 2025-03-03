import React, { useEffect, useState } from "react";
import { MyProfile } from "./myprofile";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { profileApi, usersApi } from "../../api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect.js";
import { setNewStatus } from "../../redux/profilePage.js";

const MyProfileContainer = () => {
  // debugger;
  const dispatch = useDispatch();
  const params = useParams();

  let posts = useSelector((state) => state.profilePage.myPosts);
  let status = useSelector((state) => state.profilePage.status);
  const myId = useSelector((state) => state.auth.id);

  const [statusUser, setStatusUser] = useState(status);
  const [user, setUser] = useState(null);

  // Если userId нет в параметрах, используем дефолтный
  const userId = params.userId || myId;

  async function fetchUserProfile(userId) {
    let data = await usersApi.getUserProfile(userId);
    return data;
  }

  async function fetchUserStatus(userId) {
    let data = await profileApi.getUserProfileStatus(userId);
    status = data;
    setStatusUser(data);
  }

  async function saveStatus(newStatus) {
    const setStatus = await profileApi.setUserProfileStatus(newStatus);
    dispatch(setNewStatus(newStatus));
  }

  useEffect(() => {
    fetchUserStatus(userId);
  }, []);

  useEffect(() => {
    async function fetchData() {
      setUser(await fetchUserProfile(userId));
    }
    fetchData();
  }, [userId]); // Изменил зависимость на userId

  return (
    <MyProfile
      posts={posts}
      dispatch={dispatch}
      user={user}
      status={statusUser}
      saveStatus={saveStatus}
    />
  );
};

// Правильное использование HOC
export default withAuthRedirect(MyProfileContainer);
