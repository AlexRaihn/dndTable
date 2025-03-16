<script setup lang="ts">
import { renderPixiApp } from "./Pixi/tableApp";

renderPixiApp("pixiStage");
</script>

<template>
  <div class="w-full">
    <div id="pixiStage" class="h-[100vh] w-[100vh]" />
  </div>
</template>
