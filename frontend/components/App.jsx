import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import DashBoardContainer from './dashboard_container';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/dashboard" component={DashBoardContainer}/>
      <AuthRoute path="/" component={GreetingContainer} />
    </Switch>
  </div>
);

export default App;
