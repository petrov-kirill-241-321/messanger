const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";

const initialState = {
  users: [
    {
      id: 1,
      name: "kirill",
      follow: true,
      location: { country: "Russia", city: "Moscow" },
      photoURL: "",
    },
    {
      id: 2,
      name: "kirill",
      follow: false,
      location: { country: "Russia", city: "Moscow" },
      photoURL: "",
    },
    {
      id: 3,
      name: "kirill",
      follow: true,
      location: { country: "Russia", city: "Moscow" },
      photoURL: "",
    },
  ],
};

export function usersReducer(state = initialState, action) {
  // debugger;
  switch (action.type) {
    case FOLLOW:
      let userIdFindFollow = state.users.map((user) => {
        if (user.id === action.userId) {
          user.follow = true;
        }
        return { ...user };
      });
      return { ...state, users: userIdFindFollow };
    case UN_FOLLOW:
      let userIdFindUnFollow = state.users.map((user) => {
        if (user.id === action.userId) {
          user.follow = false;
        }
        return { ...user };
      });
      return { ...state, users: userIdFindUnFollow };
    default:
      return state;
  }
}

export function followAC(userId) {
  return { type: FOLLOW, userId: userId };
}

export function unFollowAC(userId) {
  return { type: UN_FOLLOW, userId: userId };
}
