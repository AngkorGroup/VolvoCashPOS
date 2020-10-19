import { LOG_IN, LOG_OUT } from '../actions';

export interface VerifyCodeSuccess {
  type: typeof LOG_IN;
  payload: VerifyCodeResponse;
}