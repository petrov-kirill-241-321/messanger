import "./index.css";
import { store } from "./redux/redux-store.js";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let renderingPage = function (state) {
  // debugger;
  root.render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  );
};
renderingPage(store.getState());
store.subscribe(() => {
  renderingPage(store);
});

window.state = store.getState();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
