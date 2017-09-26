import React from "react";
import CheckinsIndexItem from '../checkins/checkins_index_item';
import CheckinsFormContainer from '../checkins/checkins_form_container';
import { Link, withRoute } from "react-router-dom";
import { ProtectedRoute } from "../../util/route_util";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCheckins();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>User Profile</h1>
        <ul>
          {
            this.props.checkins.map( (checkin) => (
              <div>
                <CheckinsIndexItem
                  key={`checkin-${checkin.id}`}
                  checkin={checkin}
                />
              <CheckinsFormContainer formType="edit" checkinToChange={checkin} wine={ checkin.wine }/>
              </div>
            ))
          }
        </ul>
      </div>
    );
  }
}
export default UserProfile;
