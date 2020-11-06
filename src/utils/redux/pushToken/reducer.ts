import { SET_PUSH_TOKEN } from '../actionsTypes';
import { PushTokenState } from '../types';
import { SetCharge } from './actions';
import { RootState } from '../rootReducer';
import { selectPushToken } from '../rootSelector';

const initialState = {
  token: '',
};

export const getPushToken = (state: RootState) => selectPushToken(state).token;

export default function chargeReducer(
  state: PushTokenState = initialState,
  action: SetCharge,
): PushTokenState {
  if (action.type === SET_PUSH_TOKEN) {
    return {
      token: action.data,
    };
  } else {
    return state;
  }
}
