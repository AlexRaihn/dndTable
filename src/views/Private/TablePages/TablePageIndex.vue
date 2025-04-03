<script setup lang="ts">
import TablePageBody from "@/components/Private/TablePage/TablePageBody.vue";
import TablePageSettingsBody from "@/components/Private/TablePage/TablePageSettingsBody.vue";
import TablePageSideBar from "@/components/Private/TablePage/TablePageSideBar.vue";
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
    <div class="SideBar">
      <TablePageSideBar />
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 2.2fr 0.1fr;
  grid-template-rows: 0.2fr 1.4fr 1fr;
  gap: 4px 4px;
  grid-template-areas:
    "navbar navbar navbar"
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
