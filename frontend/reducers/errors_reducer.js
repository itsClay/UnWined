import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import WinesErrorsReducer from './wines_reducer/wine_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  wines: WinesErrorsReducer
});

export default ErrorsReducer;
