import UserProfile from "./user_profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  fetchCheckins,
  fetchCheckin,
  updateCheckin,
  deleteCheckin
} from "../../actions/checkin_actions";
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  if (state.session.currentUser.id === ownProps.match.path){
    // need to test this, if they match we want to do this checkin
    // filtering below. if we fetch a different user we can rely upon
    // the api call to give us both the user info and the checkins.
  }
  const checkins = Object.values(state.checkins);
  // .filter(
  //   (checkin) => checkin.user_id === state.session.currentUser.id
  // );

  return {
    currentUser: state.session.currentUser,
    checkins: checkins,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCheckins: () => dispatch(fetchCheckins()),
  fetchCheckin: id => dispatch(fetchCheckin(id)),
  updateCheckin: checkin => dispatch(updateCheckin(checkin)),
  deleteCheckin: id => dispatch(deleteCheckin(id)),
  fetchUser: user => dispatch(fetchUser(user))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserProfile)
);
