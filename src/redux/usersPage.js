import { usersApi } from "../api";

const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const GET_COUNT_PAGE = "GET_COUNT_PAGE";
const SET_USERS = "SET_USERS";
const SET_LOADING = "SET_LOADING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 50,
  currentPage: 1,
  isLoading: false,
  isFetching: false,
  isToggleFollowingProgress: [],
};

export function usersReducer(state = initialState, action) {
  function followOrUnfollow(choice) {
    let userIdFindFollowOrUnfollow = state.users.map((user) => {
      if (user.id === action.userId) {
        user.followed = choice;
      }
      return { ...user };
    });
    return userIdFindFollowOrUnfollow;
  }

  // debugger;
  switch (action.type) {
    case FOLLOW:
      return { ...state, users: followOrUnfollow(true) };

    case UN_FOLLOW:
      return { ...state, users: followOrUnfollow(false) };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case GET_COUNT_PAGE:
      return { ...state, pageCount: action.pageCount };

    case SET_USERS:
      return { ...state, users: [...action.users] };

    case SET_LOADING:
      return { ...state, isLoading: action.isLoading };

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        isToggleFollowingProgress: action.isFetching
          ? [...state.isToggleFollowingProgress, action.userId] // Добавляем id, если идет процесс
          : state.isToggleFollowingProgress.filter(
              (id) => id !== action.userId
            ), // Убираем после завершения
      };

    default:
      return state;
  }
}

export function followAC(userId) {
  return { type: FOLLOW, userId };
}

export function unFollowAC(userId) {
  return { type: UN_FOLLOW, userId };
}

export function setCurrentPage(currentPage) {
  return { type: SET_CURRENT_PAGE, currentPage };
}

export function getCountPage(pageCount) {
  return { type: GET_COUNT_PAGE, pageCount };
}

export function setUsers(users) {
  return { type: SET_USERS, users };
}

export function setLoading(isLoading) {
  return { type: SET_LOADING, isLoading };
}

export function setIsToggleFollowingProgress(isFetching, userId) {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  };
}

export const getUsersThunkCreator = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    let data = await usersApi.getUsers(page, pageSize);
    console.log(data);

    dispatch(setUsers(data.items));
    dispatch(setLoading(false));
  };
};

export const follow = (userId) => {
  return async (dispatch) => {
    dispatch(setIsToggleFollowingProgress(true, userId)); // Дизейблим кнопку

    let data = await usersApi.follow(userId);
    if (data.resultCode === 0) {
      dispatch(followAC(userId));
    }

    dispatch(setIsToggleFollowingProgress(false, userId));
  };
};

export const unFollow = (userId) => {
  return async (dispatch) => {
    dispatch(setIsToggleFollowingProgress(true, userId)); // Дизейблим кнопку

    let data = await usersApi.unFollow(userId);
    if (data.resultCode === 0) {
      dispatch(unFollowAC(userId));
    }

    dispatch(setIsToggleFollowingProgress(false, userId));
  };
};
