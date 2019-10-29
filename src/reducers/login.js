import {
  LOGIN_USER,
  UPDATE_USER,
  LOGOUT_USER,
} from "../actions/login";

export const loginReducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...action.payload };
    case UPDATE_USER:
      return { ...state, ...action.payload };
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
};
