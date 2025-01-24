import type { TClientSchema } from "@/helpers/Client/validateConfig";

export interface IClient {
  id: number;
  fullName: string;
  name: string;
  surname: string;
  secondName: string | undefined;
  dateCreated: Date;
  dateUpdated: Date;
  contacts: IClientContact[];
  updateClientData: (clientData: TClientSchema) => void;
}

export interface IClientContact {
  id: number;
  contactType: string;
  contactValue: string;
}
