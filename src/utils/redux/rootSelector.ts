import { RootState } from 'utils/redux/rootReducer';

export const selectAuth = (state: RootState) => state.auth;

export const selectChargeInfo = (state: RootState) => state.charge;

export const selectPushToken = (state: RootState) => state.push;

export const selectChargeId = (state: RootState) => state.chargeId;

export const selectUpdateList = (state: RootState) => state.updateList;

export const selectEmail = (state: RootState) => state.forgetPassword;
