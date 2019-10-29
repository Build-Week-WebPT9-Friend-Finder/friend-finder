import React from "react";
import { Route, Redirect } from "react-router-dom";
import AppPage from "../layouts/templates/AppPage";
import Login from "./Login";
import Signup from "./Signup";
import getLocalUserId from "../utils/getLocalUserId";

const UnauthenticatedApp = () => (
  <AppPage auth={0}>
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />
    {getLocalUserId() ? null : <Redirect to="/login" />}
  </AppPage>
);

export default UnauthenticatedApp;
