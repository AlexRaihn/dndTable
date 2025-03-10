<script lang="ts" setup>
import { ref } from "vue";
import { logIn } from "./AuthPage.vue";

const user = ref({
  login: "",
  password: "",
});
</script>

<template>
  <div class="px-6 py-8 text-center">
    <n-card>
      <div class="flex flex-col gap-4 text-left">
        <n-input v-model="user.login" placeholder="Введите логин" />
        <n-input
          v-model="user.password"
          password
          placeholder="Введите пароль"
        />
        <n-button @click="logIn">Зарегистрироваться</n-button>
      </div>
    </n-card>

    <p class="mt-4 text-gray-600 dark:text-gray-200">
      Already have an account?
      <router-link
        :to="{ name: 'SignIn' }"
        class="text-blue-400 hover:underline"
        >Sign In</router-link
      >
    </p>
  </div>
</template>
