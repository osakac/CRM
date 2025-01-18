import type { TClientSchema } from "@/helpers/Client/validateConfig";
import type { IClient, IClientContact } from "./types";

export class Client implements IClient {
  id: number;
  name: string;
  surname: string;
  secondName: string;
  dateCreated: Date;
  dateUpdated: Date;
  contacts: IClientContact[];

  constructor(client: TClientSchema) {
    this.id = Date.now();
    this.name = client.name;
    this.surname = client.surname;
    this.secondName = client.secondName ?? "";
    this.dateCreated = new Date();
    this.dateUpdated = new Date();
    this.contacts = client.contacts;
  }
}
