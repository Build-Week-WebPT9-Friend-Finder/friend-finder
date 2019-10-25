import React from "react";
import { Switch, Route } from "react-router-dom";
import AppPage from "./layouts/templates/AppPage";
import PrivateRouter from "./component/Router/PrivateRouter";
import Home from "./component/Home";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Logout from "./component/Logout";
import "./sass/index.scss";

function App() {
  return (
    <>
      <AppPage>
        <Switch>
          <PrivateRouter path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/logout" exact component={Logout} />
        </Switch>
      </AppPage>
    </>
  );
}

export default App;
