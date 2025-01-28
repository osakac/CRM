<template>
  <BaseModal v-if="isVisible" @close="onClose">
    <header class="flex items-center justify-between px-7 mb-5">
      <h3 class="font-bold text-xl" v-if="!clientData">Новый клиент</h3>
      <h3 class="font-bold text-xl" v-else>
        Изменить клиента: {{ clientData.id.toString().slice(-6) }}
      </h3>
      <button
        class="w-6 h-6 flex justify-center items-center hover:bg-red-600 hover:text-white rounded-full text-red-600"
        @click="onClose"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
    </header>

    <form class="flex flex-col gap-3" @submit="onSubmit">
      <div class="px-7 flex flex-col gap-3 mb-2">
        <div>
          <input class="input" v-model="surnameValue" type="text" placeholder="Фамилия*" />
          <span class="text-red-600 text-sm" v-if="errors.surname">{{ errors.surname }}</span>
        </div>
        <div>
          <input class="input" type="text" v-model="nameValue" placeholder="Имя*" />
          <span class="text-red-600 text-sm" v-if="errors.name">{{ errors.name }}</span>
        </div>
        <input class="input" type="text" v-model="secondNameValue" placeholder="Отчество" />
      </div>

      <ClientModalContacts :fields :push :remove :replace :errors />

      <button
        class="px-6 py-2 mx-auto block bg-purple-500 text-white font-semibold hover:bg-purple-600 rounded-lg"
        type="submit"
      >
        {{ clientData ? "Сохранить" : "Создать" }}
      </button>
    </form>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from "@/components/modal/BaseModal/BaseModal.vue";
import type { IClientContact } from "@/entities/client/types";
import {
  clientSchema,
  formatClientData,
  type TClientSchema,
} from "@/helpers/Client/validateConfig";
import { useClientStore } from "@/store/client/clientStore";
import { useField, useFieldArray, useForm } from "vee-validate";
import { toRaw, watch } from "vue";
import ClientModalContacts from "./ClientModalContacts/ClientModalContacts.vue";
import type { Emits, Props } from "./types";

const { clientData, isVisible } = defineProps<Props>();
const emit = defineEmits<Emits>();
const clientStore = useClientStore();

const initialValues: { contacts: IClientContact[] } = {
  contacts: [],
};

const { handleSubmit, errors, resetForm } = useForm<TClientSchema>({
  validationSchema: clientSchema,
  initialValues,
});
const { value: surnameValue } = useField("surname");
const { value: nameValue } = useField("name");
const { value: secondNameValue } = useField("secondName");
const { fields, push, remove, replace } = useFieldArray<IClientContact>("contacts");

const onSubmit = handleSubmit((values) => {
  const validatedClientData = formatClientData(values);
  if (!clientData) clientStore.addClient(validatedClientData);
  else clientStore.updateClient(clientData.id, validatedClientData);
  onClose();
});

watch(
  () => clientData,
  () => {
    if (clientData) {
      surnameValue.value = clientData.surname;
      nameValue.value = clientData.name;
      secondNameValue.value = clientData.secondName ?? "";
      replace(structuredClone(toRaw(clientData.contacts)));
    }
  },
);

const onClose = () => {
  emit("close");
  resetForm();
};
</script>

<style scoped>
.input {
  @apply border-b-2 border-gray-200 outline-none w-full;
}
</style>
