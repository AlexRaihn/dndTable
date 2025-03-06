<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline';

type Props = {
    navigation: {name: string, href: string}[],
}

type Emits = {
    close: []
}

const emit = defineEmits<Emits>()
defineProps<Props>()
</script>

<template>
    <div class="fixed inset-0 z-49 bg-[#00000080]" @click="emit('close')"/>
    <div class="fixed top-0 right-0 z-50 w-full h-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              Тест
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="emit('close')">
              <XMarkIcon class="size-6"/>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
              <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
              </div>
            </div>
          </div>
        </div>
</template>