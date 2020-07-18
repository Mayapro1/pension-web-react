import { combineReducers } from "redux";

import userReducer from "./auth/user.reducer";

export default combineReducers({
  user: userReducer,
});
