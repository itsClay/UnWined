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
    return (
      <div className="checkin-wrapper">
        <div className="checkin-container">
          <div className="checkin-header">
            <span>Your recent Checkins</span>
          </div>
          <div className="checkin-content">
            {
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
              ))
            }
          </div>


        </div>
      </div>

    );
  }
}
export default UserProfile;
