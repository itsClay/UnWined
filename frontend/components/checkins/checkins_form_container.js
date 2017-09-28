import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CheckinsFormModal from "./checkins_form_modal";
import {
  fetchCheckin,
  createCheckin,
  updateCheckin,
  deleteCheckin
} from "../../actions/checkin_actions";
import { fetchWine } from '../../actions/wine_actions';

const mapStateToProps = (state, ownProps) => {

  // this will probably not work with a modal
  // if ( ownProps.match.path == "/wines") {
  //   if (state.checkin[ownProps.match.params.checkinId]) {
  //     checkin = state.checkin[ownProps.match.params.checkinId];
  //   }
  //   formType = 'new';
  // }
  let checkin = {rating: 0, comment: ""};
  if(ownProps.checkinToChange) {
    checkin = ownProps.checkinToChange;
  }
  let wine_id = checkin.wine_id;

  return {
    checkin: checkin,
    currentUser: state.session.currentUser,
    wine: ownProps.wine
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // not sure yet on how to get this to work with w modal
  const action =
    ownProps.match.path === "/checkin/new" ? createCheckin : updateCheckin;
  return {
    createCheckin: checkin => dispatch(createCheckin(checkin)),
    updateCheckin: checkin => dispatch(updateCheckin(checkin)),
    fetchCheckin: id => dispatch(fetchCheckin(id)),
    deleteCheckin: id => dispatch(deleteCheckin(id)),
    fetchWine: id => dispatch(fetchWine(id)),
    action: checkin => dispatch(action(checkin))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CheckinsFormModal)
);
