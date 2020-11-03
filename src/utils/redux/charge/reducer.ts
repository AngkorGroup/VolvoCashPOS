import { SET_CHARGE } from '../actionsTypes';
import { ChargeState } from '../types';
import { SetCharge } from './actions';
import { RootState } from '../rootReducer';
import { selectChargeInfo } from '../rootSelector';

const initialState = {
  cardToken: '',
  description: '',
  amount: 0,
  client: undefined,
  operationCode: '',
};

export const getChargeInfo = (state: RootState) => selectChargeInfo(state);

export default function chargeReducer(
  action: SetCharge,
  state: ChargeState = initialState,
): ChargeState {
  if (action.type === SET_CHARGE) {
    return {
      ...action.data,
    };
  } else {
    return state;
  }
}
