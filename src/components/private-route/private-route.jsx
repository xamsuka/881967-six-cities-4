import React from "react";
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({component: Component, userData, getFavoriteOffers, ...rest }) => {
  return (
    <Route
    {...rest}

    render={(props) => {
      return  Object.keys(userData).length
      ? <Component {...props} userData = {userData} getFavoriteOffers = {getFavoriteOffers} />
      : <Redirect to="/login" />;
    }

    }
  />
  )
};

export default PrivateRoute;
