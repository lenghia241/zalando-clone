import { ADD, MINUS } from "../constants/ActionTypes";

export const addOne = () => {
  return {
    type: ADD
  };
};

export const minusOne = () => {
  return {
    type: MINUS
  };
};
