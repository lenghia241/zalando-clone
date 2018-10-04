import * as types from "../constants/ActionTypes";

const initialState = {};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH:
      return action.payload;
    default:
      return state;
  }
};

export default counterReducer;
