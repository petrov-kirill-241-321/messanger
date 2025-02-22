import { legacy_createStore as createStore, combineReducers } from "redux";

import { profileReducer } from "./profilePage";
import { dialogsReduser } from "./dialogsPage";
import { newsReducer } from "./newsPage";
import { usersReducer } from "./usersPage";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReduser,
  newsPage: newsReducer,
  usersPage: usersReducer,
});

export let store = createStore(reducers);
