import React from "react";
import { Link, withRoute } from "react-router-dom";
import { ProtectedRoute } from "../../util/route_util";
import CheckinsIndexItem from "./checkins_index_item";
import orderBy from "lodash.orderby";

class CheckinsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCheckins();
  }

  findTopTwentyCheckins() {
    const arr = orderBy(
      Object.values(this.props.checkins),
      ["created_seconds"],
      ["desc"]
    );
    return arr.slice(0, 20).reverse();
  }

  render() {
    if (!this.props.checkins) {
      return null;
    }
    const checkins = this.findTopTwentyCheckins();

    return (
      <div className="checkin-wrapper">
        <div className="checkin-container">
          <div className="checkin-header">
            <span>What people are drinking</span>
          </div>
          <div className="checkin-content">
              {
                checkins.map(checkin => (
                <div key={`checkin-${checkin.id}`} className="user-checkin">
                  <CheckinsIndexItem
                    checkin={checkin}
                  />
                </div>
              )).reverse()
              }

          </div>
        </div>
      </div>
    );
  }
}

export default CheckinsIndex;
