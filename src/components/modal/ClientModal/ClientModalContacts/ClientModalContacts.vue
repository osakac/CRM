<template>
  <div class="contacts">
    <div v-for="(field, idx) in fields" :key="field.key">
      <div class="flex border border-gray-700">
        <Field class="select" :name="`contacts[${idx}].contactType`" as="select">
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
          :name="`contacts[${idx}].contactValue`"
          type="text"
        />
        <button class="w-9" @click="remove(idx)">X</button>
      </div>
      <span
        class="text-red-600 text-sm w-full"
        v-if="errors[`contacts[${idx}].contactValue` as any]"
      >
        {{ errors[`contacts[${idx}].contactValue` as any] }}
      </span>
    </div>

    <button
      class="flex justify-center items-center gap-2 mx-auto font-medium w-full"
      @click="push({ id: Date.now(), contactType: 'phone', contactValue: '' })"
      type="button"
    >
      Добавить контакт
    </button>
  </div>
</template>

<script setup lang="ts">
import { POSSIBLE_CLIENT_CONTACTS } from "@/entities/client/config";
import { Field } from "vee-validate";
import type { Props } from "./types";

defineProps<Props>();
</script>

<style scoped>
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
