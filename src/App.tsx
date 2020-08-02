import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from './components/types';
// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss";
import "./assets/demo/demo.css";
import "./assets/demo/nucleo-icons-page-styles.css";
import "./assets/css/services.css";
// main components 
import Index from "./components/homePage/Index";
import SignUp from "./components/registration/SignUp";
import LoginPage from "./components/authentication/LoginPage";
import ProfilePage from "./components/profile/ProfilePage";
import PrivateRoute from './shared/Routes/PrivateRoute';
import CategoryPage from './components/category/CategoryPage';
import Checkout from './components/checkout/Checkout';
import CardPayment from './components/checkout/CardPayment/CardPayment';


const App = () => {
  const loggedIn = useSelector(state => state.authentication.loggedIn);
  const firstName = useSelector(state => state.profile.firstName);
  const lastName = useSelector(state => state.profile.lastName);
  const email = useSelector(state => state.profile.email);

  return (
    <Switch>
      <Switch>
        <Route path='/index' render={props =>
          <Index
            {...props}
            loggedIn={loggedIn} 
          />} />
        <PrivateRoute
          path='/profile-page'
          loggedIn={loggedIn}
          firstName={firstName}
          lastName={lastName}
          email={email}
          component={ProfilePage}
        />
        <Route
          path='/login-page'
          render={props => <LoginPage {...props} />}
        />
        <Route
          path='/registration-page'
          render={props => <SignUp {...props} />}
        />
        <Route
          path='/category-page'
          render={props => <CategoryPage {...props}
          loggedIn={loggedIn}
          />}
        />
        <Route
          path='/checkout/:serviceName/:serviceId'
          render={props => <Checkout {...props} loggedIn={loggedIn} />}
        />
        <Route
          path='/card-payment'
          render={props => <CardPayment {...props} loggedIn={loggedIn} />}
        />
        <Redirect to='/index' />
        <Redirect from='/' to='/index' />
      </Switch>
    </Switch>
  );
}

export default App;