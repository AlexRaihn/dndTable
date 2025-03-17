<script setup lang="ts">
import TablePageBody from "@/components/Private/TablePage/TablePageBody.vue";
import TablePageSettingsBody from "@/components/Private/TablePage/TablePageSettingsBody.vue";
</script>

<template>
  <div class="container">
    <div class="navbar">
      <RouterLink :to="{ name: 'SettingsIndex' }">Вперёд</RouterLink>
      <TablePageSettingsBody />
    </div>
    <div class="tableBody">
      <TablePageBody />
    </div>
    <div class="SideBar"></div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 0.5fr 1.9fr 0.2fr;
  grid-template-rows: 0.2fr 2fr 0.1fr;
  gap: 0px 0px;
  grid-template-areas:
    "navbar navbar SideBar"
    "tableBody tableBody SideBar"
    "tableBody tableBody SideBar";
}
.navbar {
  grid-area: navbar;
}
.tableBody {
  grid-area: tableBody;
}
.SideBar {
  grid-area: SideBar;
}
</style>
