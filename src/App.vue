<script setup>
import { RouterView } from "vue-router";
import createDungeon from "./utils/createDungeon";

console.log(createDungeon.create({ width: 20, height: 20, minSquare: 10 }));
</script>

<template>
  <RouterView />
</template>
