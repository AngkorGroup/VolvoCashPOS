type ChargeType = 'FaceToFace' | 'Remote';

export type Status = 'Pending' | 'Accepted' | 'Rejected' | 'Canceled';

export type Charge = {
  id: number;
  amount: {
    value: number;
    currency: string;
    label: string;
  };
  displayName: string;
  status: Status;
  chargeType: ChargeType;
  cardId: number;
  cashierId: number;
  createdAt: string;
};
