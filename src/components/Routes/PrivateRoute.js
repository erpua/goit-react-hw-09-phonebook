import React from 'react';
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsLoggedIn(state),
});

export default connect(mapStateToProps, null)(PrivateRoute);
