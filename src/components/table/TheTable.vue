<template>
  <div class="mb-10">
    <TableHeader
      @sort-by-name="sortBy = 'fullName'"
      @sort-by-date-created="sortBy = 'dateCreated'"
      @sort-by-date-updated="sortBy = 'dateUpdated'"
    />
    <TableContent :clients="clientsComputed" />
  </div>
</template>

<script setup lang="ts">
import TableContent from "@/components/table/TableContent/TableContent.vue";
import TableHeader from "@/components/table/TableHeader/TableHeader.vue";
import { sortFunction, type TSortBy } from "@/helpers/Table/sortFunction";
import { useClientStore } from "@/store/client/clientStore";
import { computed, ref } from "vue";

const clientStore = useClientStore();

const sortBy = ref<TSortBy>("fullName");
const clientsComputed = computed(() => {
  const clients = clientStore.clients.value.toSorted(sortFunction(sortBy.value));
  return clients;
});
</script>
