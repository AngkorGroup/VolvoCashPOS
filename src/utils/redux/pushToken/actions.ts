import { SET_PUSH_TOKEN } from '../actionsTypes';
import { PushTokenState } from '../types';
import { Action } from 'redux';

export interface SetCharge extends Action {
  type: typeof SET_PUSH_TOKEN;
  data: string;
}

export function setPushToken(data: string) {
  return {
    type: SET_PUSH_TOKEN,
    data,
  };
}
