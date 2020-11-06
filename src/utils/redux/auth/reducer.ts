import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_USER,
  SET_AUTH,
  CLEAR_AUTH_ERROR,
} from '../actionsTypes';
import { Auth } from '../types';
import { AuthActions } from './actions';
import { RootState } from '../rootReducer';
import { selectAuth } from '../rootSelector';

interface AuthState {
  isFetching: boolean;
  isAuthenticated: boolean;
  error: string;
  data: Auth | null;
}

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  error: '',
  data: null,
};

export const getIsAuthenticated = (state: RootState) =>
  selectAuth(state).isAuthenticated;

export const getUser = (state: RootState) => selectAuth(state).data;

export const getIsFetching = (state: RootState) => selectAuth(state).isFetching;

export const getError = (state: RootState) => selectAuth(state).error;

const errorMessage = 'Correo o contraseña incorrectos';

export default function loginReducer(
  state: AuthState = initialState,
  action: AuthActions,
): AuthState {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuthenticated: action.auth,
      };
    case CLEAR_AUTH_ERROR:
      return {
        ...state,
        error: '',
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        data: null,
      };
    case LOGIN_REQUEST:
      return { ...state, isFetching: true, error: '' };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        isAuthenticated: true,
        data: action.data,
      };
    case LOGIN_FAILURE:
      return { ...initialState, error: errorMessage };
    default:
      return state;
  }
}
