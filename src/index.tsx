import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import { firebase } from "./core/firebase";
import store from "./core/store";
import { login, logout } from "./core/auth/actions";

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user));
  } else {
    store.dispatch(logout());
  }

  ReactDOM.render(<App />, document.getElementById("root"));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
