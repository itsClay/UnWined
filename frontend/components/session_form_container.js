import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SessionForm from './session_form';
import { login, logout, signup, clearErrors } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  formType: (ownProps.match.path === '/login') ? 'login' : 'signup'
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.match.path.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: (user) => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearErrors()),
    login: (user) => dispatch(login(user))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
