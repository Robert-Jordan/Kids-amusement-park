import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Switch>
          <Route path='/index' render={props => <Index {...props} />} />
          <Route
            path='/nucleo-icons'
            render={props => <NucleoIcons {...props} />}
          />
          <Route
            path='/landing-page'
            render={props => <LandingPage {...props} />}
          />
          <Route
            path='/profile-page'
            render={props => <ProfilePage {...props} />}
          />
          <Route
            path='/login-page'
            render={props => <LoginPage {...props} />}
          />
          <Redirect to='/index' />
          <Redirect from='/' to='/index' />
        </Switch>
      </Switch>
    );
  }
}

export default App;