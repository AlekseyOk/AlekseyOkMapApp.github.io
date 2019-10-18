import React, { Component } from "react";
import { Route, Switch, Redirect, Router } from "react-router-dom";
import Public from "./public/index";
import Private from "./private/index";
import Login from "./login/index";
import { AuthProvider } from "./auth"
import { PrivateRoute } from "./PrivateRoute"
import  SimpleMenu  from "./components/menu/index.js"
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <AuthProvider>
            <SimpleMenu/>
              <Switch>
                <Route path="/public" component={Public} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/private" component={Private} />
                <Redirect to="/public" />
              </Switch>
        </AuthProvider> 
      </Router>
    );
  }
}

export default App;