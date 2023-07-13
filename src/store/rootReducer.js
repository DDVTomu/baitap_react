import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  //child reducer
  //key: value
  userReducer,
});

export default rootReducer;
