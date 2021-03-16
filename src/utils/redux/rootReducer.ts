import { combineReducers } from 'redux';
import auth from './auth/reducer';
import charge from './charge/reducer';
import push from './pushToken/reducer';
import chargeId from './chargeId/reducer';
import updateList from './updateList/reducer';
import forgetPassword from './forgetPass/reducer';

const rootReducer = combineReducers({
  auth,
  charge,
  push,
  chargeId,
  updateList,
  forgetPassword,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
