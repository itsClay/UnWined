import CheckinsIndex from './checkins_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCheckins,
         fetchCheckin,
         createCheckin,
         updateCheckin,
         deleteCheckin } from '../../actions/checkin_actions';


const mapStateToProps = (state) => ({
  checkins: state.checkins
});

const mapDispatchToProps = (dispatch) => ({
  fetchCheckins: () => dispatch(fetchCheckins()),
  fetchCheckin: (id) => dispatch(fetchCheckin(id)),
  createCheckin: (checkin) => dispatch(createCheckin(checkin)),
  updateCheckin: (checkin) => dispatch(updateCheckin(checkin)),
  deleteCheckin: (id) => dispatch(deleteCheckin(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(CheckinsIndex)
);
