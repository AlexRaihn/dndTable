<script setup lang="ts">
import { onMounted } from "vue";
import { renderPixiApp } from "./Pixi/tableApp";

onMounted(() => {
  renderPixiApp("pixiStage");
});
</script>

<template>
  <div class="p-1 pixiContainer">
    <div id="pixiStage" class="w-full h-full" />
  </div>
</template>

<style scoped>
.pixiContainer {
  height: calc(100vh - 80px);
}
</style>
