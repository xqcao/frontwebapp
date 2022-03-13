import { combineReducers } from "redux";

import todoreduce from "./todos/TODO_reduce";
import counterreduce from "./counter/COUNTER_reduce";
export default combineReducers({
  todoreduce: todoreduce,
  counterreduce,
});
