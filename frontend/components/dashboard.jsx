import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.logout = this.props.logout.bind(this);
  }

  componentDidMount() {
    // ...
  }

  render () {
    return (
      <div>
        <p>Welcome, {this.currentUser.username}</p>
        <button
          onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Dashboard;
