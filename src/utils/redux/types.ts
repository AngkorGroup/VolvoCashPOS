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
  documentType?: string;
  documentNumber?: string;
  name: string;
  id?: number;
}
export interface ChargeState {
  client?: IClient;
  cardToken?: string;
  description: string;
  amount: number;
  operationCode?: string;
}
