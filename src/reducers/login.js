import { LOGIN_USER } from "../actions/login";

export const loginReducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...action.payload };
    default:
      return state;
  }
};
