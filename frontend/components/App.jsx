import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import HomeContainer from './home/home_container';
import WinesContainer from './wines/wines_index_container';
import WinesShowContainer from './wines/wines_show_container';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
      <ProtectedRoute path="/" component={ HomeContainer }/>

      <Switch>
        <ProtectedRoute path="/wines/:wineId" component={ WinesShowContainer }/>
        <ProtectedRoute exact path="/wines" component={ WinesContainer }/>
        <AuthRoute exact path="/" component={ GreetingContainer } />
      </Switch>

  </div>
);

export default App;

// <ProtectedRoute path="/wines" component={ HomeContainer }/>
// <ProtectedRoute exact path="/wines/:wineId" component={ HomeContainer }/>
