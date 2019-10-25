import React from "react";
import { Switch } from "react-router-dom";
import AppPage from "../layouts/templates/AppPage";
import Home from "./Home";
import Logout from "./Logout";
import PrivateRouter from "./Router/PrivateRouter";

const AuthenticatedApp = () => (
  <AppPage auth={1}>
    <Switch>
      <PrivateRouter path="/" exact component={Home} />
      <PrivateRouter path="/logout" exact component={Logout} />
    </Switch>
  </AppPage>
);

export default AuthenticatedApp;
