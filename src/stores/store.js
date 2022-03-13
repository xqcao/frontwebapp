import { createStore, applyMiddleware } from "redux";
import reduces from "./allreduces";
import thunk from "redux-thunk";
const store = createStore(
  reduces,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;
