<script setup lang="ts">
type Props = {
  test: string;
  close: () => void;
};

defineProps<Props>();
</script>

<template>
  <div class="bg-white p-4 rounded-md">
    {{ test }}
    <slot name="header" />
    <slot name="footer" />
    <button @click="close">Закрыть</button>
  </div>
</template>
