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
