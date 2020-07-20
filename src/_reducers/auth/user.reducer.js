import { UserActionTypes } from "../../_constants/user.types";
import isEmpty from 'lodash/isEmpty';

const INITIAL_STATE = {
  currentUser: {},
  isAuthenticated: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        currentUser: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;