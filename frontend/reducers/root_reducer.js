import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import WinesReducer from './wines_reducer/wines_reducer';
import CheckinsReducer from './checkins_reducer/checkins_reducer';
import UsersReducer from './user_profile/user_profile_reducer';
import SearchReducer from './search_reducer/search_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  wines: WinesReducer,
  checkins: CheckinsReducer,
  user: UsersReducer,
  query: SearchReducer
});

export default rootReducer;
