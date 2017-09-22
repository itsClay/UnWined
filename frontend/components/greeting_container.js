import Greeting from './greeting';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Greeting)
);
