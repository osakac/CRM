<template>
  <div class="flex items-end pl-5 mb-2 text-gray-400">
    <div class="w-[7%]">ID</div>
    <div class="w-[21%]">Фамилия Имя Отчество <button class="arrow-btn" @click="sortByName"></button></div>
    <div class="w-[17%]">Дата и время<br />создания <button class="arrow-btn" @click="sortByDateCreated"></button></div>
    <div class="w-[17%]">Последние<br />изменения <button class="arrow-btn" @click="sortByDateUpdated"></button></div>
    <div class="w-[15%]">Контакты</div>
    <div class="w-[23%]">Действия</div>
  </div>
</template>

<script setup lang="ts">
import type { Emits } from "./types";

const emit = defineEmits<Emits>();

const sortByName = () => emit("sortByName");
const sortByDateCreated = () => emit("sortByDateCreated");
const sortByDateUpdated = () => emit("sortByDateUpdated");
</script>

<style scoped>
.arrow-btn {
  @apply w-3 h-3 bg-no-repeat bg-center;
  background-image: url("/img/svg/arrow_down.svg");
}
</style>
