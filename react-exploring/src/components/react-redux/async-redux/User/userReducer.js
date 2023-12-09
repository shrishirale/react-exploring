import {
  FETCH_USER_FAIL,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";

const intitalState = {
  loading: false,
  users: [],
  error: "",
};

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        laoding: false,
        error: action.payload,
        users: [],
      };
    default:
      return state;
  }
};
export default reducer;
