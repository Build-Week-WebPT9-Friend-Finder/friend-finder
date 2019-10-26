export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const loginUser = user => ({
  type: LOGIN_USER,
  payload: { user },
});

export const logoutUser = user => ({
  type: LOGOUT_USER,
  payload: { user: null },
});
