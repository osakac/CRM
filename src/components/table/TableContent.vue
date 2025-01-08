<template>
  <div class="h-[400px] w-full bg-white overflow-y-scroll my-table rounded-lg">
    <div class="client flex items-center pl-5 py-3 hover:bg-gray-200">
      <div class="w-[7%]">123456</div>
      <div class="w-[21%]">Скворцов Денис Юрьевич</div>
      <div class="w-[17%]">21.02.2021 12:41</div>
      <div class="w-[17%]">21.02.2021 14:50</div>
      <div class="w-[15%]">Контакты</div>
      <div class="w-[23%]"><button>Изменить</button><button>Удалить</button></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.my-table::-webkit-scrollbar {
  display: none;
}

.client:not(:last-child) {
  border-bottom: 2px solid #e5e5e5;
}
</style>
