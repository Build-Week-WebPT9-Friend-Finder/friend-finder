import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/login";

const Logout = ({ login, logoutUser }) => {
  useEffect(() => {
    window.localStorage.clear();
    logoutUser();
  });

  return <Redirect to="/login" />;
};

const mapStateToProps = state => {
  return {
    login: state.login,
  };
};

export default connect(
  mapStateToProps,
  { logoutUser },
)(Logout);
