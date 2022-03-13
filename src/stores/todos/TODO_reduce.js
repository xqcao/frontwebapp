import * as todotype from "./TODO_types";
const DEFAULT_STATE = [];

const reduce = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case todotype.ADD_TODO:
      return [...state, action.payload];
    case todotype.DELETE_TODO:
      const s1 = [...state].filter((it) => it.id !== action.payload);
      return s1;
    case todotype.UPDATE_TODO:
      console.log(action.payload);
      return [...state].map((it) => {
        if (it.id === action.payload.id) {
          it = { ...action.payload };
        }
        return it;
      });

    case todotype.GET_TODO:
      return [...state].filter((it) => (it.id = action.payload.id))[0];
    case todotype.GET_ALL_TODO:
      return state;
    default:
      return state;
  }
};

export default reduce;
