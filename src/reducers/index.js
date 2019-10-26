import { users } from "./users";
import { loginReducer } from "./login";
import { combineReducers } from "redux";

const reducer = combineReducers({ login: loginReducer, users });

export default reducer;
