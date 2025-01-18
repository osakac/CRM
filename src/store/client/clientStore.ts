import { Client } from "@/entities/client/client";
import type { IClient } from "@/entities/client/types";
import type { TClientSchema } from "@/helpers/Client/validateConfig";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useClientStore = defineStore("clientStore", () => {
  const clients = ref<IClient[]>([
    {
      id: 123456,
      name: "Денис",
      surname: "Скворцов",
      secondName: "Юрьевич",
      dateCreated: new Date(),
      dateUpdated: new Date(),
      contacts: [],
    },
  ]);

  const addClient = (client: TClientSchema) => clients.value.push(new Client(client));
  const deleteClient = (clientId: number) => (clients.value = clients.value.filter((c) => c.id !== clientId));

  return { clients, addClient, deleteClient };
});
