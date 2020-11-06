import { api } from 'utils/api';
import { Action } from 'redux';
import { Auth } from '../types';
import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGOUT_USER,
  CLEAR_AUTH_ERROR,
  SET_AUTH,
} from '../actionsTypes';
import { setUserToken, setUserName } from 'utils/storage';

export interface LoginRequest extends Action {
  type: typeof LOGIN_REQUEST;
}

export interface LoginFailure extends Action {
  type: typeof LOGIN_FAILURE;
}

export interface Logout extends Action {
  type: typeof LOGOUT_USER;
}

export interface CleanError extends Action {
  type: typeof CLEAR_AUTH_ERROR;
}

export interface LoginSuccess extends Action {
  type: typeof LOGIN_SUCCESS;
  data: Auth;
}

export interface SetAuth extends Action {
  type: typeof SET_AUTH;
  auth: boolean;
}

export type AuthActions =
  | LoginRequest
  | LoginFailure
  | LoginSuccess
  | Logout
  | SetAuth
  | CleanError;

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
  api
    .delete('logout')
    .then(() => {
      setUserToken('');
      dispatch({ type: LOGOUT_USER });
    })
    .catch((err) => {
      console.log('error', err);
    });
};

export const setAuth = (auth: boolean) => {
  return {
    type: SET_AUTH,
    auth,
  };
};

export const cleanError = () => {
  return {
    type: CLEAR_AUTH_ERROR,
  };
};

export const login = (userData: UserData) => (dispatch: any) => {
  dispatch(loginRequest());
  api
    .post('login', userData)
    .then((res) => {
      setUserToken(res.authToken);
      setUserName(res.cashier.fullName);
      dispatch(loginSuccess(res));
    })
    .catch((err) => {
      dispatch(loginFailure(err));
    });
};
