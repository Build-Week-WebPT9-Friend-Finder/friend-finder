import React from "react";
import { useSelector } from "react-redux";
import AuthenticatedApp from "./component/AuthenticatedApp";
import UnauthenticatedApp from "./component/UnauthenticatedApp";
import "./sass/index.scss";

function App() {
  const login = useSelector(state => state.login);

  return login ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
