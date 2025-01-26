import ClientModal from "@/components/modal/ClientModal/ClientModal.vue";
import { Modal } from "@/entities/modal/modal";
import { defineStore } from "pinia";
import { ref, shallowRef } from "vue";
import { useClientStore } from "./client/clientStore";

export const useAppStore = defineStore("appStore", () => {
  const modals = ref<Modal[]>([new Modal("clientModal", shallowRef(ClientModal))]);
  const getModals = () => modals.value;

  const openModal = (modalId: string, clientId?: number) => {
    const modal = modals.value.find((m) => m.id === modalId);

    if (clientId && modal) {
      const clientStore = useClientStore();
      const clientProps = clientStore.getClients().find((c) => c.id === clientId);
      if (clientProps) modal.clientData = clientProps;
    }

    modal?.openModal();
  };

  const closeModal = (id: string) => modals.value.find((m) => m.id === id)?.closeModal();

  return { modals, getModals, openModal, closeModal };
});
