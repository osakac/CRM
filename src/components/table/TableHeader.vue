<template>
  <div class="flex items-end pl-5 mb-2 text-gray-400">
    <div class="w-[7%]">ID <button class="arrow-btn"></button></div>
    <div class="w-[21%]">Фамилия Имя Отчество <button class="arrow-btn"></button></div>
    <div class="w-[17%]">Дата и время<br />создания <button class="arrow-btn"></button></div>
    <div class="w-[17%]">Последние<br />изменения <button class="arrow-btn"></button></div>
    <div class="w-[15%]">Контакты</div>
    <div class="w-[23%]">Действия</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.arrow-btn {
  @apply w-3 h-3 bg-no-repeat bg-center;
  background-image: url("/img/svg/arrow_down.svg");
}
</style>
