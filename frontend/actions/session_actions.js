import * as APIUtil from '../util/session_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveUser = (currentUser) => ({
  type: RECEIVE_USER,
  currentUser
});

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
    errors: []
  };
};

export const login = (user) => dispatch => {
  return APIUtil.login(user).then(
    receivedUser => dispatch(receiveUser( receivedUser )),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(
    () => dispatch(receiveUser( null )),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const signup = (user) => dispatch => {
  return APIUtil.signup(user).then(
    (receivedUser) => dispatch(receiveUser( receivedUser )),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
