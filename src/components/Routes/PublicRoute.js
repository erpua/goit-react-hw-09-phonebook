import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import authSelectors from '../../redux/auth/auth-selectors';

export default function PublicRoute({
  component: Component,
  redirectTo,
  ...routeProps
}) {
  const isLogIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Route
      {...routeProps}
      render={props =>
        isLogIn && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
