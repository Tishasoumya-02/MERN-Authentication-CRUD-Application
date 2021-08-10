import React from "react";
import { Route, Redirect } from "react-router-dom";
// import Axios from "axios";
//  import { authtoken } from "../App";


const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login",state:{ from: props.location}}}/>
      )
    }
  />
);

export default PrivateRoute