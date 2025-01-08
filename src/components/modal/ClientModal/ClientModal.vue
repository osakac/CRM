<template>
  <BaseModal v-if="isVisible" @close="onClose">
    <header class="flex items-center justify-between px-7 mb-7">
      <h3 class="font-bold text-xl">Новый клиент</h3>
      <button
        class="w-6 h-6 flex justify-center items-center hover:bg-red-600 hover:text-white rounded-full text-red-600"
        @click="onClose"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
    </header>

    <Form class="flex flex-col gap-3" @submit="onSubmit">
      <div class="px-7 flex flex-col gap-3">
        <Field class="input" type="text" name="surname" placeholder="Фамилия*" />
        <Field class="input" type="text" name="name" placeholder="Имя*" />
        <Field class="input" type="text" name="secondName" placeholder="Отчество" />
      </div>

      <button class="px-6 py-2 mx-auto block bg-purple-500 text-white font-semibold hover:bg-purple-600 rounded-lg">
        Создать
      </button>
    </Form>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from "@/components/modal/BaseModal/BaseModal.vue";
import { Field, Form } from "vee-validate";
import type { Emits, Props } from "./types";

defineProps<Props>();
const emit = defineEmits<Emits>();

const onSubmit = (values: any) => {
  console.log(values);
};

const onClose = () => emit("close");
</script>

<style scoped>
.input {
  @apply border-b-2 border-gray-200 outline-none;
}
</style>
