import React from "react";
import { Switch, Route } from "react-router-dom";
import AppPage from "../layouts/templates/AppPage";
import Login from "./Login";
import Signup from "./Signup";

const UnauthenticatedApp = () => (
  <AppPage auth={0}>
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
    </Switch>
  </AppPage>
);

export default UnauthenticatedApp;
