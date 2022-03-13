import * as types from "./COUNTER_types";

export const increaseCount = () => {
  return { type: types.INCREASE_COUNT };
};

export const decreaseCount = () => ({ type: types.DECREASE_COUNT });

export const increaseFastCount = (n) => ({
  type: types.INCREASE_FAST_COUNT,
  payload: n,
});

export const decreaseFastCount = (n) => ({
  type: types.DECREASE_FAST_COUNT,
  payload: n,
});
