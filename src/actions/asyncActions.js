import axios from "axios";
import { FETCH } from "../constants/ActionTypes";

export const FETCH = () => dispatch => {
  axios
    .get("/api/profile")
    .then(res =>
      dispatch({
        type: types.GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: types.GET_PROFILE,
        payload: {}
      })
    );
};
