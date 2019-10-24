import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import WebFont from "webfontloader";
import { usersReducer } from "./reducers/users";

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
  usersReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root"),
);
