import React from "react";
import { Route, Redirect } from "react-router-dom";
import AppPage from "../layouts/templates/AppPage";
import Home from "./Home";
import Onboarding from "./Onboarding";
import Logout from "./Logout";

const AuthenticatedApp = () => (
  <AppPage auth={1}>
    <Route path="/" exact component={Home} />
    <Route path="/user-info" exact component={Onboarding} />
    <Route path="/logout" exact component={Logout} />
  </AppPage>
);

export default AuthenticatedApp;
