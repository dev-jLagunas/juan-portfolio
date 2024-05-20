<script setup>
import { ref } from "vue";
import AppNavbar from "./components/AppNavbar.vue";
import SocialLinks from "./components/SocialLInks.vue";

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
};
</script>

<template>
  <header class="bg-light-color dark:bg-dark-color pt-2">
    <app-navbar :isDarkMode="isDarkMode" @toggleDarkMode="toggleDarkMode" />
    <social-links />
  </header>
  <main
    class="h-screen text-dark-color dark:text-light-color bg-light-color dark:bg-dark-color"
  >
    <router-view />
  </main>
</template>

<style scoped></style>
