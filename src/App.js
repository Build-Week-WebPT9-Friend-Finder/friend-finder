import React from "react";
// import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
// import AppPage from "./layouts/templates/AppPage";
// import PrivateRouter from "./component/Router/PrivateRouter";
// import Home from "./component/Home";
// import Signup from "./component/Signup";
// import Login from "./component/Login";
// import Logout from "./component/Logout";
import { loginUser } from "./actions/login";
import AuthenticatedApp from "./component/AuthenticatedApp";
import UnauthenticatedApp from "./component/UnauthenticatedApp";
import "./sass/index.scss";

function App({ login, loginUser }) {
  return login ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

const mapStateToProps = state => ({
  login: state.login,
});

export default connect(
  mapStateToProps,
  { loginUser },
)(App);
