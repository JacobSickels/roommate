import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory as createHistory } from "history";
import rootReducer from "./RootReducer";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*
    This function is responsible for combining all of the reducers into a single Redux store
*/

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const history = createHistory();

export default store;
