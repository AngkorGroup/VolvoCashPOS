import { combineReducers } from 'redux';
import auth from './auth/reducer';
import charge from './charge/reducer';

const rootReducer = combineReducers({
  auth,
  charge,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
