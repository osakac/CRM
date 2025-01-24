import { Client } from "@/entities/client/client";
import type { IClient } from "@/entities/client/types";
import type { TClientSchema } from "@/helpers/Client/validateConfig";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useClientStore = defineStore("clientStore", () => {
  const clients = ref<IClient[]>([
    {
      id: 123456,
      fullName: "Скворцов Денис Юрьевич",
      name: "Денис",
      surname: "Скворцов",
      secondName: "Юрьевич",
      dateCreated: new Date(),
      dateUpdated: new Date(),
      contacts: [
        {
          id: 1,
          contactType: "phone",
          contactValue: "+7 (999) 999-99-99",
        },
      ],
      updateClientData(clientData: TClientSchema) {
        this.name = clientData.name;
        this.surname = clientData.surname;
        this.secondName = clientData.secondName;
        this.contacts = clientData.contacts;
        this.dateUpdated = new Date();
      },
    },
  ]);

  const addClient = (clientData: TClientSchema) => clients.value.push(new Client(clientData));
  const deleteClient = (clientId: number) => (clients.value = clients.value.filter((c) => c.id !== clientId));
  const updateClient = (clientId: number, clientData: TClientSchema) =>
    clients.value.find((c) => c.id === clientId)?.updateClientData(clientData);

  return { clients, addClient, deleteClient, updateClient };
});
