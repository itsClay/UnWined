import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import WinesReducer from './wines_reducer/wines_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  wines: WinesReducer
});

export default rootReducer;
