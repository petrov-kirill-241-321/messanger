import { Navigate, useNavigate } from "react-router-dom";
import { authApi } from "../api";
import { Login } from "../components/Login/Login";
const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const GET_AUTH_USER_DATA = "GET_AUTH_USER_DATA";

const initialState = {
  login: null,
  email: null,
  id: null,
  isLoading: false,
  isAuth: false,
};

export function usersReducerAuth(state = initialState, action) {
  // debugger;
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return { ...state, ...action.data };

    case GET_AUTH_USER_DATA:
      return { ...state };

    default:
      return state;
  }
}

export function setAuthUserData(id, email, login) {
  // debugger;
  return { type: SET_AUTH_USER_DATA, data: { id, email, login, isAuth: true } };
}
export function getAuthUserData() {
  // debugger;
  return { type: GET_AUTH_USER_DATA };
}

export function deleteAuthUser() {
  return {
    type: SET_AUTH_USER_DATA,
    data: { id: null, email: null, login: null, isAuth: false },
  };
}

export const authMe = (setIsLogin) => {
  return async (dispatch) => {
    try {
      // debugger;
      const data = await authApi.authMe();
      let { id, email, login } = data.data;

      dispatch(setAuthUserData(id, email, login));
      setIsLogin(login);
    } catch (e) {
      console.log(e);
    }
  };
};

// export const logIn = () => {
//   return async (dispatch) => {
//     const resp = await authApi.logIn(...data);
//   };
// };
