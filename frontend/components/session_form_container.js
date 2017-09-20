import { connect } from 'react-redux';
import SessionForm from './session_form';
import { withRouter } from 'react-router';
import { login, logout, signup } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  formType: (ownProps.match.path === '/login') ? 'login' : 'signup'
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.match.path.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: (user) => dispatch(processForm(user))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
