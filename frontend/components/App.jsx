import React from "react";
import GreetingContainer from "./greeting_container";
import SessionFormContainer from "./session_form_container";
import HomeContainer from "./home/home_container";
import WinesContainer from "./wines/wines_index_container";
import WinesShowContainer from "./wines/wines_show_container";
import WinesFormContainer from "./wines/wines_form_container";
import CheckinsIndexContainer from "./checkins/checkins_index_container";
import UserProfileContainer from "./user_profile/user_profile_container";
import { Route, Redirect, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <ProtectedRoute path="/" component={HomeContainer} />
    <Switch>
      <ProtectedRoute exact path="/wines" component={WinesContainer} />
      <ProtectedRoute exact path="/wines/new" component={WinesFormContainer} />
      <ProtectedRoute exact path="/wines/:wineId" component={WinesShowContainer} />
      <ProtectedRoute exact path="/wines/:wineId/edit" component={WinesFormContainer} />
      <ProtectedRoute exact path="/feed" component={CheckinsIndexContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer} />
      <ProtectedRoute exact path="/profile" component={UserProfileContainer} />
      <AuthRoute path="/" component={GreetingContainer} />
      <Route path="/" component={() => <Redirect to="/" />} />
    </Switch>
  </div>
);

export default App;

// <ProtectedRoute path="/wines" component={ HomeContainer }/>
// <ProtectedRoute exact path="/wines/:wineId" component={ HomeContainer }/>
