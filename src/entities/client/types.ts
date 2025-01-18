export interface IClient {
  id: number;
  name: string;
  surname: string;
  secondName: string;
  dateCreated: Date;
  dateUpdated: Date;
  contacts: IClientContact[];
}

export interface IClientContact {
  id: number;
  contactType: string;
  contactValue: string;
}
