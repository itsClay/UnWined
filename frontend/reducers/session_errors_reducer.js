import { RECEIVE_ERRORS, RECEIVE_USER, CLEAR_ERRORS } from '../actions/session_actions';

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return action.errors;
    case RECEIVE_USER:
      return [];
    default:
      return state;
  }
};

export default SessionErrorsReducer;
