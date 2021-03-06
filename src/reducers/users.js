import {
  FETCHING_USERS_START,
  FETCHING_USERS_SUCCESS,
  FETCHING_USERS_FAILURE,
} from "../actions/users";

const initialState = {
  users: [],
  isFetching: false,
  error: "",
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_USERS_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCHING_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: action.payload,
      };
    case FETCHING_USERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
