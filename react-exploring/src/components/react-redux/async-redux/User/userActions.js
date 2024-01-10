import {
  FETCH_USER_FAIL,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";
import axios from "axios";
export const fetchUserData = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: payload,
  };
};

export const fetchUserFail = (error) => {
  return {
    type: FETCH_USER_FAIL,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserData);

    axios.get("https://jsonplaceholder.typicode.com/users").then((resp) => {
      console.log("resp", resp);
      const users = resp.data;
      dispatch(fetchUserSuccess(users));
    });
  };
};
