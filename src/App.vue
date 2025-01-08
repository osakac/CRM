<template>
  <TheHeader />

  <main class="py-10">
    <div class="container">
      <h2 class="font-bold text-2xl pb-3">Клиенты</h2>
      <TheTable />
      <button
        class="px-6 py-2 mx-auto block bg-transparent border-2 border-purple-500 text-purple-500 font-semibold hover:bg-purple-500 hover:text-white rounded-lg"
        @click="openModal('clientModal')"
      >
        Добавить клиента
      </button>
    </div>
  </main>

  <Modals />
</template>

<script setup lang="ts">
import TheHeader from "@/components/header/TheHeader.vue";
import Modals from "@/components/modal/Modals/Modals.vue";
import TheTable from "@/components/table/TheTable.vue";
import { useAppStore } from "./store/appStore";

const appStore = useAppStore();
const openModal = (id: string) => appStore.openModal(id);
</script>
