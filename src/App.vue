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
  <section>
    <header class="bg-light-color dark:bg-dark-color pt-2">
      <app-navbar :isDarkMode="isDarkMode" @toggleDarkMode="toggleDarkMode" />
      <social-links />
    </header>
    <main
      class="text-dark-color dark:text-light-color bg-light-color dark:bg-dark-color h-max"
    >
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </section>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(-40%);
}
</style>
