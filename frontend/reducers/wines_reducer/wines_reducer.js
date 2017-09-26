import { RECEIVE_ALL_WINES,
         RECEIVE_WINE,
         REMOVE_WINE } from '../../actions/wine_actions';
import merge from 'lodash.merge';

const DEFAULT_STATE = {
  1: {
    id: 1,
    vineyard: "Lewis",
    wine_type: "Cabernet Sauvignon",
    location: "Napa, CA",
    year: 2017,
    checkins: [1, 3, 5],
    img_url: "http://s3.amazonaws.com/mscwordpresscontent/top100/wp-content/uploads/2016/11/Bottle_6834173.png",
  }
};

const WinesReducer = (state = DEFAULT_STATE, action) => {
  Object.freeze(state);
  let newWineState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_ALL_WINES:
      const wines = {};
      action.wines.forEach( (wine) => ( wines[wine.id] = wine ));
      return wines;
    case RECEIVE_WINE:
      // const newWine = {[action.wine.id]: action.wine};
      // newWineState[action.wine.id] = newWine;
      newWineState = merge({}, newWineState, {[action.wine.id]: action.wine});
      return newWineState;
    case REMOVE_WINE:
      delete newWineState[action.wine.id];
      return newWineState;
    default:
      return state;
  }
};

export default WinesReducer;
