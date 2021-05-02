import React from 'react';
import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

export default function PrivateRoute({
  component: Component,
  redirectTo,
  ...routeProps
}) {
  const isLogIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Route
      {...routeProps}
      render={props =>
        isLogIn ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
}
