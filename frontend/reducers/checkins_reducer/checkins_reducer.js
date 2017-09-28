import { RECEIVE_ALL_CHECKINS,
         RECEIVE_CHECKIN,
         REMOVE_CHECKIN } from '../../actions/checkin_actions';
import { RECEIVE_WINE } from '../../actions/wine_actions';
import { RECEIVE_OTHER_USER } from '../../actions/user_actions';

import merge from 'lodash.merge';

const CheckinsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newCheckinState;

  switch(action.type) {
    case RECEIVE_OTHER_USER:
      return merge({}, action.user.checkins);
    case RECEIVE_ALL_CHECKINS:
      return action.checkins;
    case RECEIVE_CHECKIN:
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
