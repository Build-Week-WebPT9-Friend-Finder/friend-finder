import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
  } from "react-router-dom";

  import Login from '../Login';
  import Signup from '../Signup';
  import PrivateRouter from '../Router/PrivateRouter';


export default function ReactRouter(){
    return(
        <Router>
            <nav>
                <NavLink 
                    exact 
                    to="/"
                    activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '1em'}}>
                    Home
                </NavLink>

                <NavLink 
                    exact
                    to="/login"
                    activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '1em'}}>
                    Login
                </NavLink >
                
                <NavLink 
                    exact
                    to="/signup"
                    activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '1em'}}>
                    Sign up
                </NavLink>

                <span>
                <NavLink 
                    className="logout"
                    exact
                    to="/logout"
                    activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '1em'}}>
                    Logout
                </NavLink>
                    </span>
            </nav>

            <Switch>
                <Route path="/" exact component={Login}/>
                <PrivateRouter path="/login" exact component={Login}/>
                <Route path="/signup" exact component={Signup}/>
            </Switch>
        </Router>
    )
}
{/* <Route path="/logout" exact component={Logout}/> */}