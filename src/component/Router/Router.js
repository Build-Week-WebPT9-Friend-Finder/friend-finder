import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Login from "../Login";
import Signup from "../Signup";
import Home from "../Home";
import Logout from "../Logout";
import PrivateRouter from "../Router/PrivateRouter";

export default function ReactRouter() {
  return (
    <Router>
      <Switch>
        <PrivateRouter path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/logout" exact component={Logout} />
      </Switch>
    </Router>
  );
}
