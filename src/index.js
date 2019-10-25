import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import WebFont from "webfontloader";
import App from "./App";
import reducer from "./reducers/";
import getLocalUserId from "./utils/getLocalUserId";
import { LOGIN_USER } from "./actions/login";
import getUser from "./utils/getUser";

WebFont.load({
  google: {
    families: [
      "Open Sans:400,400i,700,700i",
      "Arimo:400,400i,700,700i",
      "Lato:400,400i,700,700",
    ],
  },
});

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);

if (getLocalUserId()) {
  getUser(getLocalUserId()).then(user =>
    store.dispatch({ type: LOGIN_USER, payload: user }),
  );
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />,
    </Router>
  </Provider>,
  document.getElementById("root"),
);

export default store;
