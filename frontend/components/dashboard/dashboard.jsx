import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session_form_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

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
        <nav className="dash-nav">
          <div className="inner">
            <div className="left-nav">
              <span>UnWined</span>
              <ul className="nav-links">
                <li><a href="#">The Cellar</a></li>
                <li><a href="#">Wines</a></li>
              </ul>
            </div>
            <div className="right-nav">
              <p className="user-welcome">Welcome, {this.currentUser.username}</p>
              <button
                className="dash-logout"
                onClick={this.logout}>Logout
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Dashboard;
