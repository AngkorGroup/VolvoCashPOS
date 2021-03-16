import { SET_EMAIL } from '../actionsTypes';
import { Action } from 'redux';

export interface SetEmail extends Action {
  type: typeof SET_EMAIL;
  data: string;
}

export interface NullAction extends Action {
  type: string;
  data: string;
}

export function setRecoveryEmail(data: string) {
  return {
    type: SET_EMAIL,
    data,
  };
}
