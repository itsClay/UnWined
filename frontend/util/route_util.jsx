import { Route, Redirect, withRouter  } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

// new route that will send our user to splash page if not logged in
const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={ path } render={ (props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/home" />
    )
  )}/>
);

// new route sending user to dashboard if logged in already
const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={ path } render={ (props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
);

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};

export const AuthRoute = withRouter(connect(
  mapStateToProps, null)(Auth)
);
export const ProtectedRoute = withRouter(connect(
  mapStateToProps, null)(Protected)
);
