<script setup lang="ts">
import TablePageBody from "@/components/Private/TablePage/TablePageBody.vue";
import TablePageSettingsBody from "@/components/Private/TablePage/TablePageSettingsBody.vue";
</script>

<template>
  <RouterLink :to="{ name: 'SettingsIndex' }">Вперёд</RouterLink>
  <div>
    <TablePageSettingsBody />
    <TablePageBody />
  </div>
</template>
