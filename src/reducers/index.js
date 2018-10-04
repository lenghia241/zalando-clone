import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import asyncReducer from "./asyncReducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  async: asyncReducer
});
