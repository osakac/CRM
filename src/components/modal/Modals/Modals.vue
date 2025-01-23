<template>
  <Teleport to="body">
    <component
      v-for="modal in appStore.modals"
      :key="modal.id"
      :is="modal.component"
      :is-visible="modal.isVisible"
      @close="appStore.closeModal(modal.id)"
      :client-data="modal.clientData"
    ></component>
  </Teleport>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/appStore";

const appStore = useAppStore();
</script>
