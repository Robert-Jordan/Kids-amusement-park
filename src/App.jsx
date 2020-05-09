import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index";
import SignUp from "views/registration/SignUp";
import LoginPage from "views/authentication/LoginPage";
import ProfilePage from "views/profile/ProfilePage";
import Example from "views/Example";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Switch>
          <Route path='/ex' render={props => <Example {...props} />} />
          <Route path='/index' render={props => <Index {...props} />} />
          <Route
            path='/profile-page'
            render={props => <ProfilePage {...props} />}
          />
          <Route
            path='/login-page'
            render={props => <LoginPage {...props} />}
          />
          <Route
            path='/registration-page'
            render={props => <SignUp {...props} />}
          />
          <Redirect to='/index' />
          <Redirect from='/' to='/index' />
        </Switch>
      </Switch>
    );
  }
}

export default App;