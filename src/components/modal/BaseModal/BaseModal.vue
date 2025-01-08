<template>
  <div class="fixed top-0 left-0 w-screen h-screen bg-black/50" @click="onClose">
    <div
      class="absolute w-[450px] bg-white transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-4 rounded-lg"
      @click.stop
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Emits } from "./types";

const emit = defineEmits<Emits>();

const onClose = () => emit("close");
</script>

<style scoped></style>
