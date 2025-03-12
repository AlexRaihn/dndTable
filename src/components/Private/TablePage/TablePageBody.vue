<template>
  <div>
    <v-stage
      ref="stage"
      :config="{
        width,
        height,
        draggable: true,
      }"
    >
      <v-layer>
        <v-group ref="group">
          <v-rect
            v-for="n in 100"
            :config="{
              x: 20 + n * 5,
              y: 50 + n * 5,
              width: 100,
              height: 100,
              fill: 'white',
              shadowBlur: 10,
            }"
          />
        </v-group>
      </v-layer>
    </v-stage>
  </div>
</template>

<script setup lang="ts">
const width = window.innerWidth;
const height = window.innerHeight;
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
