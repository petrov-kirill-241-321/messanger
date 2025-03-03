import { legacy_createStore as createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { profileReducer } from "./profilePage";
import { dialogsReduser } from "./dialogsPage";
import { newsReducer } from "./newsPage";
import { usersReducer } from "./usersPage";
import { usersReducerAuth } from "./auth-reducer";
import { thunk } from "redux-thunk";
import { compose } from "redux";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReduser,
  newsPage: newsReducer,
  usersPage: usersReducer,
  auth: usersReducerAuth,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);
