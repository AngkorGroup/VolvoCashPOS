import createDataContext from '../createDataContext';
import { LOG_IN, LOG_OUT } from '../actions';


interface AuthState {
  authToken?: string;
  email: string;
}

const initialState: AuthState = {
  authToken: undefined,
  email: '',
};

export interface LogInAction {
  type: typeof LOG_IN;
  payload: AuthState;
}

export interface LogOutAction {
  type: typeof LOG_OUT;
  payload: object;
}

type AuthAction = LogInAction | LogOutAction;

const authReducer = (state: AuthState = initialState,
  action: AuthAction) => {
  switch (action.type) {
    case LOG_OUT:
      return { authToken: null, email: '' };
    case LOG_IN:
      return {
        authToken: action.payload.authToken,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

const signin = dispatch => {
  return ({ email, password }) => {
    // Do some API Request here
    console.log('Signin');
    dispatch({
      type: 'signin',
      payload: {
        authToken: 'some access token here',
        email,
      },
    });
  };
};

const signout = dispatch => {
  return () => {
    dispatch({ type: 'signout' });
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout },
  { authToken: null, email: '' },
);