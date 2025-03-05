<script setup>
import { RouterLink, RouterView } from "vue-router";
import createDungeon from "./utils/createDungeon";
import Shutter from "./components/Shutter/Shutter.vue";

console.log(createDungeon.create({ width: 20, height: 20, minSquare: 10 }));
</script>

<template>
  <div class="flex">
    <Shutter />
    <div class="flex flex-col w-full h-full">
      <div>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
      <div>
        <RouterView />
      </div>
    </div>
  </div>
</template>
