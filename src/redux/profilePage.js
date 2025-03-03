const ADD_POST = "ADD-POST";
const NEW_POST_WRITE = "NEW-POST-WRITE";
const SET_NEW_STATUS = "SET_NEW_STATUS";

const initialState = {
  myPosts: [],
  newPost: { id: 1, text: "", likes: 0 },
  status: "",
};

export function profileReducer(state = initialState, action) {
  // debugger;
  let newPostEl, text, counterId, newPost;
  newPostEl = document.querySelector(".post");
  switch (action.type) {
    case ADD_POST:
      text = newPostEl.value;
      counterId = state.myPosts.length + 1;

      newPost = {
        id: counterId,
        text: `${text}`,
        likes: 0,
      };

      return {
        ...state,
        myPosts: [...state.myPosts, { ...newPost }],
        newPost: { ...newPost, text: "" },
      };
    case NEW_POST_WRITE:
      counterId = state.myPosts.length + 1;

      newPost = {
        id: counterId,
        text: `${newPostEl.value}`,
        likes: 0,
      };

      return { ...state, newPost: { ...newPost } };

    case SET_NEW_STATUS:
      return { ...state, ...action.status };

    default:
      return state;
  }
}

export function newPostWriteActionCreate() {
  return { type: NEW_POST_WRITE };
}

export function addPostActionCreate() {
  return { type: ADD_POST };
}

export function setNewStatus(status) {
  return { type: SET_NEW_STATUS, status };
}
