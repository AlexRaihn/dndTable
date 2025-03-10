<template>
  <header>
    <nav class="shadow bg-black">
      <div class="container px-6 py-4 mx-auto">
        <div class="lg:flex lg:items-center lg:justify-between">
          <div class="flex items-center justify-between">
            <a href="#" class="mx-auto">
              <img
                class="w-auto h-6 sm:h-7"
                src="https://merakiui.com/images/full-logo.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
    <div
      class="w-full bg-center bg-cover h-[38rem]"
      style="
        background-image: url('https://i.etsystatic.com/37712799/r/il/0a5b4d/4383474441/il_fullxfull.4383474441_ifgz.jpg');
      "
    >
      <div
        class="flex items-center justify-center w-full h-full bg-gray-900/40"
      >
        <div class="text-center">
          <h1 class="text-3xl font-semibold text-white lg:text-4xl">
            Ваш лучший помощник для игр
          </h1>
          <button
            class="w-full px-5 py-2 mt-4 text-sm font-medium text-white transition-colors duration-300 transform bg-green-600 rounded-md lg:w-auto hover:bg-green-500 focus:outline-none focus:bg-green-500"
          >
            Попробовать
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";
// import MainShutter from '@/components/Public/MainPage/MainShutter/MainShutter.vue'

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const isOpen = ref(false);
/*
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
  <\/script>
*/
</script>
