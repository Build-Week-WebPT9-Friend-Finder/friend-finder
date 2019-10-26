import React from "react";
import { connect } from "react-redux";
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
