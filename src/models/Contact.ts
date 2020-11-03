// import { Currency, Money } from './Money';

// export interface IContact {
//   id: number;
//   firstName: string;
//   lastName: string;
//   fullName: string;
//   type: string;
//   phone: string;
//   email: string;
//   documentType: string;
//   documentNumber: string;
//   status: string;
//   clientId: number;
// }

// export class Contact {
//   public id: number;
//   public firstName: string;
//   public lastName: string;
//   public fullName: string;
//   public type: string;
//   public phone: string;
//   public email: string;
//   public documentType: string;
//   public documentNumber: string;
//   public status: string;
//   public clientId: number;

//   constructor(json: IContact) {
//     this.id = json.id;
//     this.cardType = json.cardType;
//     this.balance = json.balance;
//     this.imageUrl = json.imageUrl;
//     this.ownerName = json.ownerName;
//     this.qrUrl = json.qrUrl;
//     this.currency = json.currency;
//     this.ownerType = json.ownerType;
//   }
//

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
