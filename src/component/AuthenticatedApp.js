import React from "react";
import { Route, Redirect } from "react-router-dom";
import AppPage from "../layouts/templates/AppPage";
import Home from "./Home";
import Logout from "./Logout";

const AuthenticatedApp = () => (
  <AppPage auth={1}>
    <Route path="/" exact component={Home} />
    <Route path="/logout" exact component={Logout} />
    <Redirect to="/" />
  </AppPage>
);

export default AuthenticatedApp;
