interface IDocumentType {
  abbreviation: string;
}

export type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  type: string;
  phone: string;
  email: string;
  documentType: IDocumentType;
  documentNumber: string;
  status: string;
  clientId: number;
};
