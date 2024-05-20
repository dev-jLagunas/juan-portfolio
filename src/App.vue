<script setup>
import { ref } from "vue";
import AppNavbar from "./components/AppNavbar.vue";

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
  console.log(document.documentElement.classList);
};
</script>

<template>
  <header class="bg-light-color dark:bg-dark-color pt-2">
    <app-navbar :isDarkMode="isDarkMode" @toggleDarkMode="toggleDarkMode" />
  </header>
  <main
    class="h-screen text-dark-color dark:text-light-color bg-light-color dark:bg-dark-color pt-32"
  >
    <router-view />
  </main>
</template>

<style scoped></style>
