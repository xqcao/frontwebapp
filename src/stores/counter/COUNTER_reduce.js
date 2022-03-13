import * as counterTypes from "./COUNTER_types";

const defaultState = 3;

const reduce = (state = defaultState, action) => {
  switch (action.type) {
    case counterTypes.INCREASE_COUNT:
      console.log("increase one");
      return state + 1;
    case counterTypes.DECREASE_COUNT:
      return state - 1;
    case counterTypes.INCREASE_FAST_COUNT:
      return state + action.payload;
    case counterTypes.DECREASE_FAST_COUNT:
      return state - action.payload;
    case counterTypes.RESET_COUNT:
      return 0;
    default:
      return state;
  }
};

export default reduce;
