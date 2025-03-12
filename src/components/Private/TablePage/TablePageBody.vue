<script setup lang="ts">
import { renderPixiApp } from "@/components/Pixi/app";
import { TilingSprite, Assets } from "pixi.js";

const texture = await Assets.load("https://pixijs.com/assets/p2.jpeg");
const tilingSprite = new TilingSprite({
  texture,
  width: window.innerWidth,
  height: window.innerHeight,
});

renderPixiApp("pixiStage", {
  resizeTo: window,
  tilingSprite,
});
</script>

<template>
  <div class="relative">
    <div class="absolute -z-999"></div>
    <div id="pixiStage" />
  </div>
</template>
