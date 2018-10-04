import axios from "axios";
import { FETCH } from "../constants/ActionTypes";

export const fetchApi = () => dispatch => {
  axios
    .get("https://swapi.co/api/people/1/")
    .then(res =>
      dispatch({
        type: FETCH,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
