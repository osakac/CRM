import ClientModal from "@/components/modal/ClientModal/ClientModal.vue";
import { Modal } from "@/entities/modal";
import { defineStore } from "pinia";
import { ref, shallowRef } from "vue";

export const useAppStore = defineStore("appStore", () => {
  const modals = ref([new Modal("clientModal", shallowRef(ClientModal))]);
  const getModals = () => modals;
  const openModal = (id: string) => modals.value.find((m) => m.id === id)?.openModal();
  const closeModal = (id: string) => modals.value.find((m) => m.id === id)?.closeModal();

  return { modals, getModals, openModal, closeModal };
});
