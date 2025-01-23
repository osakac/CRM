<template>
  <BaseModal v-if="isVisible" @close="onClose">
    <header class="flex items-center justify-between px-7 mb-5">
      <h3 class="font-bold text-xl" v-if="!clientData">Новый клиент</h3>
      <h3 class="font-bold text-xl" v-else>Изменить клиента: {{ clientData.id.toString().slice(-6) }}</h3>
      <button
        class="w-6 h-6 flex justify-center items-center hover:bg-red-600 hover:text-white rounded-full text-red-600"
        @click="onClose"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
    </header>

    <Form
      class="flex flex-col gap-3"
      @submit="onSubmit"
      :validation-schema="clientSchema"
      :initial-values="initialFormData"
    >
      <div class="px-7 flex flex-col gap-3 mb-2">
        <div>
          <Field class="input" name="surname" :value="clientData?.surname" type="text" placeholder="Фамилия*" />
          <ErrorMessage name="surname" class="text-red-600 text-sm" />
        </div>
        <div>
          <Field class="input" type="text" name="name" :value="clientData?.name" placeholder="Имя*" />
          <ErrorMessage name="name" class="text-red-600 text-sm" />
        </div>
        <Field class="input" type="text" name="secondName" :value="clientData?.secondName" placeholder="Отчество" />
      </div>

      <div class="contacts">
        <FieldArray name="contacts" v-slot="{ fields, push, remove }">
          <div class="" v-for="(field, index) in fields" :key="field.key">
            <div class="flex border border-gray-700">
              <Field class="select" :name="`contacts[${index}].contactType`" as="select">
                <option
                  v-for="contact in POSSIBLE_CLIENT_CONTACTS"
                  :key="contact.contactType"
                  :value="contact.contactType"
                >
                  {{ contact.contactValue }}
                </option>
              </Field>
              <Field
                class="w-full border-l border-r border-gray-700 outline-none px-3"
                :name="`contacts[${index}].contactValue`"
                type="text"
              />
              <button class="w-9" @click="remove(index)">X</button>
            </div>
            <ErrorMessage :name="`contacts[${index}].contactValue`" class="text-red-600 text-sm w-full" />
          </div>

          <button
            class="flex justify-center items-center gap-2 mx-auto font-medium w-full"
            @click="push({ id: Date.now(), contactType: 'phone', contactValue: '' })"
            type="button"
          >
            Добавить контакт
          </button>
        </FieldArray>
      </div>

      <button
        class="px-6 py-2 mx-auto block bg-purple-500 text-white font-semibold hover:bg-purple-600 rounded-lg"
        type="submit"
      >
        <template v-if="!clientData">Создать</template>
        <template v-else>Сохранить</template>
      </button>
    </Form>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from "@/components/modal/BaseModal/BaseModal.vue";
import { POSSIBLE_CLIENT_CONTACTS } from "@/entities/client/config";
import type { IClientContact } from "@/entities/client/types";
import { clientSchema, validateClientData, type TClientSchema } from "@/helpers/Client/validateConfig";
import { useClientStore } from "@/store/client/clientStore";
import { ErrorMessage, Field, FieldArray, Form } from "vee-validate";
import { watchEffect } from "vue";
import type { Emits, Props } from "./types";

const { clientData, isVisible } = defineProps<Props>();
const emit = defineEmits<Emits>();
const clientStore = useClientStore();

const initialFormData: { contacts: IClientContact[] } = {
  contacts: [],
};

watchEffect(() => {
  initialFormData.contacts = clientData?.contacts ?? [];
});

const onSubmit = (values: TClientSchema) => {
  const validatedClientData = validateClientData(values);
  if (!clientData) clientStore.addClient(validatedClientData);
  else clientStore.updateClient(clientData.id, validatedClientData);
  onClose();
};

const onClose = () => {
  emit("close");
};
</script>

<style scoped>
.input {
  @apply border-b-2 border-gray-200 outline-none w-full;
}

.contacts {
  @apply bg-gray-200 py-2 px-7 flex flex-col gap-2;
}

.select {
  @apply outline-none relative appearance-none;
  padding: 2px 35px 2px 10px;
  background-image: url("/img/svg/arrow_down.svg");
  background-repeat: no-repeat;
  background-position: right 10px center;
}
</style>
