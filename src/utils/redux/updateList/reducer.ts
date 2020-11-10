import { UPDATE_LIST } from '../actionsTypes';
import { UpdateListState } from '../types';
import { UpdateList, NullAction } from './actions';
import { RootState } from '../rootReducer';
import { selectUpdateList } from '../rootSelector';

const initialState = {
  flag: false,
};

export const getUpdateFlag = (state: RootState) => selectUpdateList(state).flag;

export default function chargeReducer(
  state: UpdateListState = initialState,
  action: UpdateList | NullAction = { type: '' },
): UpdateListState {
  if (action.type === UPDATE_LIST) {
    return {
      flag: !state.flag,
    };
  } else {
    return state;
  }
}
