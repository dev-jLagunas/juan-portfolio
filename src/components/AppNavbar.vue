<script setup>
import juanLogo from "@/assets/logo/juanlogo.png";
import { ref } from "vue";

// State
const languageBoxOpen = ref(true);

// Props
const props = defineProps(["isDarkMode"]);
</script>

<template>
  <nav
    class="z-20 h-max font-rubik bg-nav-light text-light-color dark:text-dark-color w-90vw mx-auto rounded-md fixed left-1/2 transform -translate-x-1/2"
  >
    <img :src="juanLogo" alt="personal logo" class="h-16 mx-auto" />
    <button
      @click="$emit('toggleDarkMode')"
      class="absolute top-5 -left-6 bg-light-color text-dark-color px-7 py-1 -rotate-45 dark:bg-dark-color dark:text-light-color text-xs"
    >
      {{ isDarkMode ? "Light Mode" : "Dark Mode" }}
    </button>
    <ul
      class="flex justify-center sm:gap-8 lg:gap-16 gap-1 items-center w-full text-sm -mt-2 cursor-pointer pb-1"
    >
      <router-link to="/" active-class="active" class="px-1">HOME</router-link>
      <router-link to="/about" active-class="active" class="px-1"
        >ABOUT</router-link
      >
      <router-link to="/works" active-class="active" class="px-1"
        >WORKS</router-link
      >
      <router-link to="/contact" active-class="active" class="px-1"
        >CONTACT</router-link
      >
    </ul>
    <button
      @click="languageBoxOpen = !languageBoxOpen"
      class="absolute top-4 -right-6 bg-light-color text-dark-color px-7 py-1 rotate-45 dark:bg-dark-color dark:text-light-color text-xs"
    >
      Language
    </button>
    <ul
      v-if="languageBoxOpen"
      class="caret absolute top-24 right-1 p-5 rounded-md bg-nav-light flex flex-col justify-center items-center gap-1 text-sm"
    >
      <li>ENGLISH</li>
      <li>SPANISH</li>
      <li>JAPANESE</li>
    </ul>
  </nav>
</template>

<style scoped>
.active {
  border-left: 4px double #fdba74;
  border-right: 4px double #fdba74;
}

.caret::before {
  content: "";
  @apply absolute -top-2 right-0;
  border-left: 15px solid transparent;
  border-bottom: 15px solid #8cb9bd;
}
</style>
