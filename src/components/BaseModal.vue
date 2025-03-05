<script lang="ts" setup>
type Emits = {
  close: [];
};

const emit = defineEmits<Emits>();
</script>

<template>
  <div
    class="fixed h-full w-full top-0 left-0 flex justify-center items-center"
  >
    <div
      class="absolute bg-[#00000080] top-0 left-0 w-full h-full z-998"
      @click="emit('close')"
    ></div>
    <div class="absolute top-1 right-1 z-999">
      <span
        @click="emit('close')"
        class="material-symbols-outlined cursor-pointer !text-3xl text-white"
        >close</span
      >
    </div>
    <div class="z-999">
      <slot />
    </div>
  </div>
</template>
