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

  findTopTenCheckins() {
    const arr = orderBy(
      Object.values(this.props.checkins),
      ["created_at"],
      ["desc"]
    );
    return arr.slice(0, 10);
  }

  render() {
    if (!this.props.checkins) {
      return null;
    }
    const checkins = this.findTopTenCheckins();

    return (
      <div className="checkin-wrapper">
        <div className="checkin-container">
          <div className="checkin-header">
            <span>Recent Global Activity</span>
          </div>
          <div className="checkin-content">

              {checkins.map(checkin => (
                <CheckinsIndexItem
                  key={`checkin-${checkin.id}`}
                  checkin={checkin}
                />
              ))}

          </div>
        </div>
      </div>
    );
  }
}

export default CheckinsIndex;
