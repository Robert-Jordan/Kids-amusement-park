import React from 'react';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => rest.loggedIn === true
                ? <Component {...rest} {...props} />
                : <Redirect to={{ pathname: '/login-page', state: { from: props.location } }} />}
        />
    )
}

export default PrivateRoute;