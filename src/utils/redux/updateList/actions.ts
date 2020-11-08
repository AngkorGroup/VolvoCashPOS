import { UPDATE_LIST } from '../actionsTypes';
import { Action } from 'redux';

export interface UpdateList extends Action {
  type: typeof UPDATE_LIST;
}

export interface NullAction extends Action {
  type: string;
}

export function updateList() {
  return {
    type: UPDATE_LIST,
  };
}
