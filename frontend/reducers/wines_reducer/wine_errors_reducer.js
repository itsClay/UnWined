import { RECEIVE_WINE_ERRORS,
         RECEIVE_WINE } from '../../actions/wine_actions';

// || [];
const WinesErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_WINE_ERRORS:
      return [...action.errors];
    case RECEIVE_WINE:
      return [];
    default:
      return state;
  }
};

export default WinesErrorsReducer;
