<template>
  <div class="mb-10">
    <TableHeader />
    <TableContent :clients="clientStore.clients" />
  </div>
</template>

<script setup lang="ts">
import TableContent from "@/components/table/TableContent/TableContent.vue";
import TableHeader from "@/components/table/TableHeader.vue";
import { useClientStore } from "@/store/client/clientStore";

const clientStore = useClientStore();
</script>
