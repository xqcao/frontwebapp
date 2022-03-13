import { combineReducers } from "redux";

import todoreduce from "./todos/TODO_reduce";

export default combineReducers({
  todoreduce: todoreduce,
});
