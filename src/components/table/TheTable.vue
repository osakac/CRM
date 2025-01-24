<template>
  <div class="tableWrapper">
    <div class="mb-10 min-w-[983px]">
      <TableHeader
        @sort-by-name="sortBy = 'fullName'"
        @sort-by-date-created="sortBy = 'dateCreated'"
        @sort-by-date-updated="sortBy = 'dateUpdated'"
      />
      <TableContent :clients="clientsComputed" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TableContent from "@/components/table/TableContent/TableContent.vue";
import TableHeader from "@/components/table/TableHeader/TableHeader.vue";
import { sortFunction, type TSortBy } from "@/helpers/Table/sortFunction";
import { useClientStore } from "@/store/client/clientStore";
import { computed, ref } from "vue";
import type { Props } from "./types";

const { searchField } = defineProps<Props>();
const clientStore = useClientStore();

const sortBy = ref<TSortBy>("fullName");
const clientsComputed = computed(() => {
  const clients = clientStore.getClients().toSorted(sortFunction(sortBy.value));
  if (searchField) return clients.filter((client) => client.fullName.toLowerCase().includes(searchField.toLowerCase()));
  return clients;
});
</script>

<style scoped>
.tableWrapper {
  @apply overflow-x-scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
