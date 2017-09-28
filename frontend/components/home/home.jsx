import React from "react";
import { Link, NavLink } from "react-router-dom";
import SessionFormContainer from "../session_form_container";
import { AuthRoute, ProtectedRoute } from "../../util/route_util";
import WinesContainer from "../wines/wines_index_container";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.logout = this.props.logout.bind(this);
  }

  componentDidMount() {
    // ...
  }

  render() {
    return (
      <div>
        <nav className="dash-nav">
          <div className="inner">
            <div className="left-nav">
              <Link to="/profile">
                <span>UnWined</span>
              </Link>
              <div className="nav-links">
                <NavLink to="/wines">The Cellar</NavLink>
              </div>
              <div className="nav-links">
                <NavLink to="/feed">Feed</NavLink>
              </div>
            </div>
            <div className="right-nav">
              <Link to="/profile" className="user-welcome">
                Welcome, {this.currentUser.username}
              </Link>
              <button className="dash-logout" onClick={this.logout}>
                Logout
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Home;
