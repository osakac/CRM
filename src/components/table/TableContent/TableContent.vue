<template>
  <div class="h-[400px] w-full bg-white overflow-y-scroll my-table rounded-lg">
    <div class="client flex items-center pl-5 py-3 hover:bg-gray-200" v-for="client in clients" :key="client.id">
      <div class="w-[7%] pad">{{ client.id.toString().slice(-6) }}</div>
      <div class="w-[21%] pad">{{ client.fullName }}</div>
      <div class="w-[17%] pad">{{ formatDateTime(client.dateCreated) }}</div>
      <div class="w-[17%] pad">{{ formatDateTime(client.dateUpdated) }}</div>
      <div class="w-[15%] flex flex-wrap items-center gap-2 pad">
        <span
          v-for="contact in client.contacts"
          :key="contact.id"
          v-tooltip="{ content: contact.contactValue, theme: 'custom-tooltip' }"
        >
          <img :src="getContactIcon(contact.contactType)" :alt="contact.contactType" />
        </span>
        <button
          class="rounded-full border border-purple-700 text-sm hover:bg-purple-700 hover:text-white px-1 py-0.5"
          v-if="client.contacts.length > 4"
        >
          +{{ client.contacts.length - 4 }}
        </button>
      </div>
      <div class="w-[23%] flex flex-wrap gap-x-4 gap-y-2 pad">
        <button class="optionBtn bg-blue-500 text-white" @click="onEdit(client.id)">Изменить</button>
        <button class="optionBtn bg-red-500 text-white" @click="onDeleteClient(client.id)">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDateTime } from "@/helpers/Date/formatDateTime";
import { useAppStore } from "@/store/appStore";
import { useClientStore } from "@/store/client/clientStore";
import type { Props } from "./types";

defineProps<Props>();
const appStore = useAppStore();
const clientStore = useClientStore();

const onEdit = (clientId: number) => appStore.openModal("clientModal", clientId);
const onDeleteClient = (clientId: number) => clientStore.deleteClient(clientId);

const getContactIcon = (contactType: string) => `/img/svg/${contactType}-contact-icon.svg`;
</script>

<style scoped>
.my-table::-webkit-scrollbar {
  display: none;
}

.client:not(:last-child) {
  border-bottom: 2px solid #e5e5e5;
}

.optionBtn {
  @apply rounded-md px-2 py-1;
}

.pad {
  @apply pr-3;
}
</style>
