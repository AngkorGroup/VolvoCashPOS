import { Card } from 'models/Card';

export type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  type: string;
  phone: string;
  email: string;
  documentType: string;
  documentNumber: string;
  status: string;
  clientId: number;
};

export type ContactList = Contact[];

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone: string;
  tpCode: string;
  dealerId: number;
};

export type Auth = {
  cashier: User;
  authToken: string;
};

export interface IClient {
  documentType: string;
  documentNumber?: string;
  displayName?: string;
  name: string;
  id?: number;
}
export interface ChargeState {
  imageUrl?: string;
  client?: IClient;
  cardToken?: string;
  date?: string;
  hour?: string;
  description: string;
  displayName?: string;
  amount: number;
  amountLabel?: string;
  operationCode?: string;
}

interface IAmount {
  value: number;
  currency: string;
  label: string;
}

export interface Charge {
  id: number;
  imageUrl?: string;
  amount: IAmount;
  displayName: string;
  status: string;
  chargeType: string;
  cardId: number;
  cashierId: number;
  description?: string;
  operationCode?: string;
  card: Card;
}

export interface PushTokenState {
  token: string;
}

export interface ForgetPasswordState {
  email: string;
}

export interface UpdateListState {
  flag: boolean;
}

export interface ChargeIdState {
  id: number;
}
