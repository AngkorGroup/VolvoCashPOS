import { SET_CHARGE } from '../actionsTypes';
import { ChargeState } from '../types';
import { SetCharge } from './actions';
import { RootState } from '../rootReducer';
import { selectChargeInfo } from '../rootSelector';

const initialState = {
  cardToken: '',
  description: '',
  amount: 0,
};

export const getChargeInfo = (state: RootState) => selectChargeInfo(state);

export default function chargeReducer(
  state: ChargeState = initialState,
  action: SetCharge,
): ChargeState {
  switch (action.type) {
    case SET_CHARGE:
      return {
        ...action.data,
      };
    default:
      return state;
  }
}
