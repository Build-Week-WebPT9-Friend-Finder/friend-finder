import { LOGIN_USER } from "../actions/login";

export const loginReducer = (state = null, action) => {
  console.log("from login reducer:", state, action.payload);
  switch (action.type) {
    case LOGIN_USER:
      return { ...action.payload };
    default:
      return state;
  }
};
