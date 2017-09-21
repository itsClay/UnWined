import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


class Greeting extends React.Component {
  constructor(props){
    super(props);
  }

  noSession(logout) {
    return (
      <div className="splash-wrapper" value="">
        <div className="splash-info">
          <div className="logo-img">
            <img src="http://res.cloudinary.com/do2rg2v7p/image/upload/v1506031298/logo2_lu9qjz.png"></img>
          </div>
        </div>
        <nav className="login-nav">
          <li className="button-sign-in">
            <Link to="/signup">Create a New Account</Link>
          </li>
          <li className="button-sign-in">
            <Link to="/login">Login</Link>
          </li>
        </nav>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </div>
    );
  }

  withSession(currentUser, logout) {
    return (
      <div>
        <p>Welcome, {currentUser.username}</p>
        <button
          onClick={logout}>Logout
        </button>
      </div>
    );
  }

  render(){
    const { currentUser, logout } = this.props;

    return  (
      currentUser ?
        this.withSession(currentUser, logout) : this.noSession(logout)
    );
  }
}

export default Greeting;
