<script setup></script>

<template>
  <div
    class="w-4/5 grid grid-cols-2 gap-2 mx-auto font-rubik xs:w-2/3 md:grid-cols-4 py-5 lg:w-1/3"
  >
    <router-link
      to="/"
      class="border-l-8 border-orange-300 py-2 rounded-sm bg-nav-light text-light-color tracking-widest text-xs dark:text-dark-color text-center"
      active-class="active"
    >
      HOME
    </router-link>
    <router-link
      to="/about"
      class="border-r-8 border-orange-300 py-2 rounded-sm bg-nav-light text-light-color tracking-widest text-xs dark:text-dark-color text-center"
      active-class="active"
    >
      ABOUT
    </router-link>
    <router-link
      to="/works"
      class="border-l-8 border-orange-300 py-2 rounded-sm bg-nav-light text-light-color tracking-widest text-xs dark:text-dark-color text-center"
      active-class="active"
    >
      WORKS
    </router-link>
    <router-link
      to="/contact"
      class="border-r-8 border-orange-300 py-2 rounded-sm bg-nav-light text-light-color tracking-widest text-xs dark:text-dark-color text-center"
      active-class="active"
    >
      CONTACT
    </router-link>
  </div>
</template>

<style scoped>
.active {
  background-color: rgb(158, 210, 214);
}
</style>
