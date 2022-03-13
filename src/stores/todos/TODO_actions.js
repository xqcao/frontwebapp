import * as todotype from "./TODO_types";

export const add_todo = (todo) => ({ type: todotype.ADD_TODO, payload: todo });

export const get_todo = (id) => ({ type: todotype.GET_TODO, payload: id });

export const delete_todo = (id) => ({
  type: todotype.DELETE_TODO,
  payload: id,
});

export const update_todo = (todo) => ({
  type: todotype.UPDATE_TODO,
  payload: todo,
});

export const all_todo = () => ({ type: todotype.GET_ALL_TODO });
