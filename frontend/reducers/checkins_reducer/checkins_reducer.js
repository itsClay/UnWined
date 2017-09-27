import { RECEIVE_ALL_CHECKINS,
         RECEIVE_CHECKIN,
         REMOVE_CHECKIN } from '../../actions/checkin_actions';
import { RECEIVE_WINE } from '../../actions/wine_actions';

import merge from 'lodash.merge';

const CheckinsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newCheckinState;

  switch(action.type) {
    case RECEIVE_ALL_CHECKINS:
      newCheckinState = merge(
                        {},
                        state,
                        action.checkins );
      return newCheckinState;
    case RECEIVE_CHECKIN:
      // const newWine = {[action.wine.id]: action.wine};
      // newWineState[action.wine.id] = newWine;
      newCheckinState = merge({}, state, {[action.checkin.id]: action.checkin});
      return newCheckinState;
    case REMOVE_CHECKIN:
      newCheckinState = merge({}, state);
      delete newCheckinState[action.wine.id];
      return newCheckinState;
    case RECEIVE_WINE:
      newCheckinState = merge({}, state, action.checkins);
      return newCheckinState;
    default:
      return state;
  }
};

export default CheckinsReducer;