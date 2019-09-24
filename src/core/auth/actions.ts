import { firebase, googleAuthProvider } from "../firebase";
import { createAction, ActionType } from "typesafe-actions";

//Creating a login action object for dispatching to Redux store
export const login = createAction(
  "[Auth] Login",
  resolve => (user: firebase.User) => resolve(user)
);

//Creates the Google Popup for signin to authenticate the user
export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

//Creating the logout action object for dispatching to Redux store
export const logout = createAction("[Auth] Logout");

//Calls Firebase signout, un-authenticating the user
export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

const authAction = {
  login,
  logout
};

export type AuthAction = ActionType<typeof authAction>;
