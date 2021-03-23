import { SET_EMAIL } from '../actionsTypes';
import { ForgetPasswordState } from '../types';
import { SetEmail, NullAction } from './actions';
import { RootState } from '../rootReducer';
import { selectEmail } from '../rootSelector';

const initialState = {
  email: '',
};

export const getEmail = (state: RootState) => selectEmail(state).email;

export default function chargeReducer(
  state: ForgetPasswordState = initialState,
  action: SetEmail | NullAction = { type: '', data: '' },
): ForgetPasswordState {
  if (action.type === SET_EMAIL) {
    return {
      email: action.data,
    };
  } else {
    return state;
  }
}
