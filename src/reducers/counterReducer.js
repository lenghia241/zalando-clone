import * as types from "../constants/ActionTypes";

const initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD:
      return state + 1;
    case types.MINUS:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
