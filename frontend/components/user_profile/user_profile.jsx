import React from "react";
import CheckinsIndexItem from '../checkins/checkins_index_item';
import CheckinsFormContainer from '../checkins/checkins_form_container';
import { Link, withRoute } from "react-router-dom";
import { ProtectedRoute } from "../../util/route_util";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: null};
  }

  componentWillMount() {
    console.log(this.props);
    if(this.props.match.params === '/users/:userId') {
      // this.props.receiveUser();
    }
    this.props.fetchCheckins().then( () => this.setState({loading: false}));
    this.setState({loading: true});
  }

  renderCheckinsOrNiceMessage() {
    if(this.state.loading) {
      return (
        <h1>...Loading</h1>
      );
    }
    if (this.props.checkins.length === 0) {
      return (
        <div className="checkin-filler">
          <h1>You have no reviews yet!</h1>
        </div>
      );
    } else {
      return (
        this.props.checkins.map( (checkin) => (
          <div key={`checkin-${checkin.id}`} className="user-checkin">
            <div className="right-align input-btn">
              <CheckinsFormContainer
                formType="edit"
                checkinToChange={checkin}
                wine={ checkin.wine }
              />
            </div>
            <CheckinsIndexItem
              checkin={checkin}
            />
          </div>
        )).reverse()
      );
    }
  }

  render() {
    return (
      <div className="checkin-wrapper">
        <div className="checkin-container">
          <div className="checkin-header">
            <span>Your recent Checkins</span>
          </div>
          <div className="checkin-content">
            {
              this.renderCheckinsOrNiceMessage()
            }
          </div>
        </div>
      </div>

    );
  }
}
export default UserProfile;
