import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
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
      <nav>
        <NavLink
          exact
          to="/"
          activeStyle={{
            borderBottom: "solid 3px #fff",
            paddingBottom: "1em",
          }}
        >
          Home
        </NavLink>

        <NavLink
          exact
          to="/login"
          activeStyle={{
            borderBottom: "solid 3px #fff",
            paddingBottom: "1em",
          }}
        >
          Login
        </NavLink>

        <NavLink
          exact
          to="/signup"
          activeStyle={{
            borderBottom: "solid 3px #fff",
            paddingBottom: "1em",
          }}
        >
          Sign up
        </NavLink>

        <span>
          <NavLink
            className="logout"
            exact
            to="/logout"
            activeStyle={{
              borderBottom: "solid 3px #fff",
              paddingBottom: "1em",
            }}
          >
            Logout
          </NavLink>
        </span>
      </nav>

      <Switch>
        <PrivateRouter path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/logout" exact component={Logout} />
      </Switch>
    </Router>
  );
}
