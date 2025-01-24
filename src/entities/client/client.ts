import type { TClientSchema } from "@/helpers/Client/validateConfig";
import type { IClient, IClientContact } from "./types";

export class Client implements IClient {
  id: number;
  fullName: string;
  name: string;
  surname: string;
  secondName: string | undefined;
  dateCreated: Date;
  dateUpdated: Date;
  contacts: IClientContact[];

  constructor(clientData: TClientSchema) {
    this.id = Date.now();
    this.fullName = `${clientData.surname} ${clientData.name} ${clientData.secondName ?? ""}`;
    this.name = clientData.name;
    this.surname = clientData.surname;
    this.secondName = clientData.secondName;
    this.dateCreated = new Date();
    this.dateUpdated = new Date();
    this.contacts = clientData.contacts;
  }

  updateClientData(clientData: TClientSchema) {
    this.fullName = `${clientData.surname} ${clientData.name} ${clientData.secondName ?? ""}`;
    this.name = clientData.name;
    this.surname = clientData.surname;
    this.secondName = clientData.secondName;
    this.contacts = clientData.contacts;
    this.dateUpdated = new Date();
  }
}
