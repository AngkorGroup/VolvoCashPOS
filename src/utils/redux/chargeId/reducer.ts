import { SET_CHARGE_ID } from '../actionsTypes';
import { ChargeIdState } from '../types';
import { SetCharge, NullAction } from './actions';
import { RootState } from '../rootReducer';
import { selectChargeId } from '../rootSelector';

const initialState = {
  id: 0,
};

export const getChargeId = (state: RootState) => selectChargeId(state).id;

export default function chargeReducer(
  state: ChargeIdState = initialState,
  action: SetCharge | NullAction = { type: '', data: 0 },
): ChargeIdState {
  if (action?.type === SET_CHARGE_ID) {
    return {
      id: action.data,
    };
  } else {
    return state;
  }
}
