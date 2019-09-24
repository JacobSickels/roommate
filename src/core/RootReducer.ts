import { combineReducers } from "redux";
import auth from "./auth/reducer";
import { StateType } from "typesafe-actions";

export const rootReducers = {
  auth
};

const rootReducer = combineReducers(rootReducers);

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
