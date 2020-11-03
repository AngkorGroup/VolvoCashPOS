import { Currency } from './Money';

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
  ownerName?: string;
  qrUrl?: string;
  ownerType: OwnerType;
}

export interface Card {
  id: number;
  cardType: CardType;
  balance: Balance;
  currency: Currency;
  imageUrl?: string;
  calculatedBalance: Balance;
  ownerName?: string;
  qrUrl?: string;
  ownerType: OwnerType;
  cardToken: string;
}
