import { dialogsReduser } from "./dialogsPage";
import { profileReducer } from "./profilePage";

let store = {
  _state: {
    profilePage: {
      myPosts: [],
      newPost: { id: 1, text: "", likes: 0 },
    },
    dialogsPage: {
      messages: [
        {
          id: 1,
          message: { text: "Как дела?", time: "12:01" },
          name: "artem",
        },
        { id: 2, message: { text: "норм", time: "12:02" }, name: "kirill" },
        {
          id: 3,
          message: { text: "че делаешь", time: "12:03" },
          name: "vadim",
        },
        { id: 4, message: { text: "ниче", time: "12:04" }, name: "Nika" },
        { id: 5, message: { text: "ниче", time: "12:04" }, name: "Arina" },
      ],
      newMessageBody: "",
      users: [
        { id: 1, name: "kirill" },
        { id: 2, name: "arina" },
        { id: 3, name: "nika" },
        { id: 4, name: "vadim" },
      ],
    },
    newsPage: {
      news: [
        { id: 1, text: "jskjdlsjajdjsdjdjklasjdlasd;", likes: 10 },
        { id: 2, text: "jjkjioij", likes: 11 },
        { id: 3, text: "dfasfsafa", likes: 13 },
        { id: 4, text: "jskjdlsjajsfggdfvdvzsa", likes: 14 },
        { id: 5, text: "jskjdlssfdasfsv", likes: 10 },
      ],
    },
  },

  dispatch(action) {
    // debugger;
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._renderingPage(store);
  },
  getState() {
    return this._state;
  },
  addPost() {
    // debugger;
    const newPostEl = document.querySelector(".post");
    let text = newPostEl.value;
    let counterId = this._state.profilePage.myPosts.length + 1;

    let newPost = {
      id: counterId,
      text: `${text}`,
      likes: 0,
    };
    this._state.profilePage.myPosts.push(newPost);
    this._renderingPage(this._state);
    newPostEl.value = "";
  },
  newPostWrite() {
    // debugger;
    const newPostEl = document.querySelector(".post");
    let counterId = this._state.profilePage.myPosts.length + 1;

    let newPost = {
      id: counterId,
      text: `${newPostEl.value}`,
      likes: 0,
    };
    this._state.profilePage.newPost = newPost;
    this._renderingPage(this._state);
  },
  _renderingPage() {
    return;
  },
  // subscribe(observer) {
  //   this._renderingPage = observer;
  // },
};

window.store = store;
