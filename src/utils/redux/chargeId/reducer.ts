import { SET_CHARGE_ID } from '../actionsTypes';
import { ChargeIdState } from '../types';
import { SetCharge } from './actions';
import { RootState } from '../rootReducer';
import { selectChargeId } from '../rootSelector';

const initialState = {
  id: 0,
};

export const getChargeId = (state: RootState) => selectChargeId(state).id;

export default function chargeReducer(
  state: ChargeIdState = initialState,
  action: SetCharge,
): ChargeIdState {
  if (action?.type === SET_CHARGE_ID) {
    return {
      id: action.data,
    };
  } else {
    return state;
  }
}
