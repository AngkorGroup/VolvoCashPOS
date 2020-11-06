import { combineReducers } from 'redux';
import auth from './auth/reducer';
import charge from './charge/reducer';
import push from './pushToken/reducer';
import chargeId from './chargeId/reducer';

const rootReducer = combineReducers({
  auth,
  charge,
  push,
  chargeId,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
