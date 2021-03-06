import { SET_CHARGE } from '../actionsTypes';
import { ChargeState } from '../types';
import { SetCharge, NullAction } from './actions';
import { RootState } from '../rootReducer';
import { selectChargeInfo } from '../rootSelector';

const initialState: ChargeState = {
  cardToken: '',
  description: '',
  amount: 0,
  client: {
    documentType: '',
    documentNumber: '',
    name: '',
  },
  operationCode: '',
};

export const getChargeInfo = (state: RootState) => selectChargeInfo(state);

export default function chargeReducer(
  state: ChargeState = initialState,
  action: SetCharge | NullAction = { type: '', data: initialState },
): ChargeState {
  if (action.type === SET_CHARGE) {
    return {
      ...action.data,
    };
  } else {
    return state;
  }
}
