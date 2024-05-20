<script setup>
import juanLogo from "@/assets/logo/juanlogo.png";
</script>

<template>
  <nav
    class="h-max font-rubik flex flex-col items-center bg-nav-light text-light-color dark:text-dark-color w-90vw mx-auto rounded-md fixed left-1/2 transform -translate-x-1/2"
  >
    <img :src="juanLogo" alt="personal logo" class="h-16 mt-2" />
    <button @click="$emit('toggleDarkMode')" class="absolute">
      <i class="fa-solid fa-moon"></i>
    </button>
    <ul
      class="flex justify-evenly items-center w-full text-sm -mt-2 cursor-pointer"
    >
      <router-link to="/" active-class="active">about me</router-link>
      <router-link to="/works" active-class="active">works</router-link>
      <router-link to="/contact" active-class="active">contact</router-link>
    </ul>
  </nav>
</template>

<style scoped>
.active {
  text-transform: uppercase;

}
</style>
