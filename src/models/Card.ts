import { Currency } from './Money';
import { Contact } from './Contact';

export interface CardType {
  id: number;
  name: string;
  displayName: string;
  color: string;
}

interface Balance {
  value: number;
  currency: string;
  label: string;
}

type OwnerType = 'primary' | 'secondary';

export interface ICard {
  id: number;
  cardType: CardType;
  balance: Balance;
  calculatedBalance: Balance;
  currency: Currency;
  imageUrl?: string;
  contact: Contact;
  ownerType: OwnerType;
}

export interface Card {
  id: number;
  code: string;
  cardType: CardType;
  balance: Balance;
  imageUrl?: string;
  calculatedBalance: Balance;
  contact: Contact;
  cardToken: string;
}
