<script setup lang="ts">
import { onMounted } from "vue";
import { renderPixiApp } from "./Pixi/tableApp";

onMounted(() => {
  renderPixiApp("pixiStage");
});
</script>

<template>
  <div>
    <div class="flex flex-col">
      <div id="pixiStage" class="h-full w-full" />
    </div>
  </div>
</template>
