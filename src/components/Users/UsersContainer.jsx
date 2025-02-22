import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Users } from "./Users";

export function UsersContainer() {
  //   debugger;
  let dispatch = useDispatch();
  let users = useSelector((state) => {
    return state.usersPage.users;
  });
  //   let usersArray = users.map(user=>)
  return <Users users={users} dispatch={dispatch} />;
}
