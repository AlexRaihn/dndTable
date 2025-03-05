<script lang="ts" setup>
import { h } from "vue";
import { renderModal } from "@/utils/renderModal";
import Test from "@/components/Test.vue";

function openModal() {
  renderModal(
    Test,
    {
      test: "Hello, World!",
    },
    {
      // Слоты для MyComponent
      header: () => h("h1", "Custom Header"),
      footer: () => h("p", "Custom Footer"),
    }
  );
}
</script>

<template>
  <div class="min-h-100">
    <div @click="openModal">dfesag</div>
  </div>
</template>
