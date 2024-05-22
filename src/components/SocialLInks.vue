<script setup>
import leetcodeIcon from "@/assets/icons/leetcode-icon.svg";
import frontendMentor from "@/assets/icons/frontend-mentor-icon.svg";
</script>

<template>
  <div
    class="text-sm z-50 flex divide-y rounded text-dark-color dark:text-light-color fixed flex-col bottom-80 left-5 xs:top-72 xs:text-base xs:left-7 lg:left-11 lg:text-2xl xl:left-20"
  >
    <button type="button" class="py-1">
      <i class="fa-brands fa-github"></i>
    </button>
    <button type="button" class="py-1">
      <i class="fa-brands fa-linkedin"></i>
    </button>
    <button type="button" class="py-1">
      <img :src="leetcodeIcon" alt="leetcode icon" class="h-4" />
    </button>
    <button type="button" class="py-1">
      <img :src="frontendMentor" alt="frontend icon" class="h-4" />
    </button>
  </div>
</template>

<style scoped></style>
