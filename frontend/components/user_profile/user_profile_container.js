import UserProfile from "./user_profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  fetchCheckins,
  fetchCheckin,
  updateCheckin,
  deleteCheckin
} from "../../actions/checkin_actions";

const mapStateToProps = state => {
  const checkins = Object.values(state.checkins).filter(
    (checkin) => checkin.user_id === state.session.currentUser.id
  );

  return {
    currentUser: state.session.currentUser,
    checkins: checkins
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCheckins: () => dispatch(fetchCheckins()),
  fetchCheckin: id => dispatch(fetchCheckin(id)),
  updateCheckin: checkin => dispatch(updateCheckin(checkin)),
  deleteCheckin: id => dispatch(deleteCheckin(id))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserProfile)
);
