import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import { Route } from 'react-router';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <div>
      <h1>UnWined</h1>
      <GreetingContainer />
    </div>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
