import { api } from 'utils/api';
import { Action } from 'redux';
import { setUserToken } from 'utils/storage';
import { Auth } from '../types';
import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGOUT_USER,
} from '../actionsTypes';

export interface LoginRequest extends Action {
  type: typeof LOGIN_REQUEST;
}

export interface LoginFailure extends Action {
  type: typeof LOGIN_FAILURE;
}

export interface Logout extends Action {
  type: typeof LOGOUT_USER;
}

export interface LoginSuccess extends Action {
  type: typeof LOGIN_SUCCESS;
  data: Auth;
}

export type AuthActions = LoginRequest | LoginFailure | LoginSuccess | Logout;

interface UserData {
  email: string;
  password: string;
  deviceToken: string;
}

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const loginFailure = (message: string) => {
  return {
    type: LOGIN_FAILURE,
    error: message,
  };
};

const loginSuccess = (data: Auth) => {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
};

export const logout = () => (dispatch: any) => {
  dispatch({ type: LOGOUT_USER });
};

export const login = (userData: UserData) => (dispatch: any) => {
  dispatch(loginRequest());
  api
    .post('login', userData)
    .then((res) => {
      api.setToken(res.authToken);
      // setUserToken(res.authToken);
      dispatch(loginSuccess(res));
    })
    .catch((err) => {
      dispatch(loginFailure(err));
    });
};
