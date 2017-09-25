import { RECEIVE_ALL_CHECKINS,
         RECEIVE_CHECKIN,
         REMOVE_CHECKIN } from '../../actions/checkin_actions';
import merge from 'lodash.merge';

const CheckinsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newCheckinState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_CHECKINS:
      const wines = {};
      action.checkins.forEach( (checkin) => ( checkin[checkin.id] = checkin ));
      return wines;
    case RECEIVE_CHECKIN:
      // const newWine = {[action.wine.id]: action.wine};
      // newWineState[action.wine.id] = newWine;
      newCheckinState = merge({}, state, {[action.checkin.id]: action.checkin});
      return newCheckinState;
    case REMOVE_CHECKIN:
      newCheckinState = merge({}, state);
      delete newCheckinState[action.wine.id];
      return newCheckinState;
    default:
      return state;
  }
};

export default CheckinsReducer;
