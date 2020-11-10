import { SET_CHARGE } from '../actionsTypes';
import { ChargeState } from '../types';
import { Action } from 'redux';

export interface SetCharge extends Action {
  type: typeof SET_CHARGE;
  data: ChargeState;
}

export interface NullAction extends Action {
  type: string;
  data: ChargeState;
}

export function setCharge(data: ChargeState) {
  return {
    type: SET_CHARGE,
    data,
  };
}
