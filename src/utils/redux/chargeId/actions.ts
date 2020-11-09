import { SET_CHARGE_ID } from '../actionsTypes';
import { Action } from 'redux';

export interface SetCharge extends Action {
  type: typeof SET_CHARGE_ID;
  data: number;
}

export interface NullAction extends Action {
  type: string;
  data: number;
}

export function setChargeId(data: number) {
  return {
    type: SET_CHARGE_ID,
    data,
  };
}
