import { applyMiddleware, createStore } from "redux";
import userReducer from "./userReducer";
import thunk from "redux-thunk";

const store = createStore(userReducer, composeWithDevTools applyMiddleware(thunk));
export default store;
