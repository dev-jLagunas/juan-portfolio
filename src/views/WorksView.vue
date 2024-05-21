<script setup>
import TitleHeader from "@/components/TitleHeader.vue";

// Props to pass down
const titleOne = "My";
const titleTwo = "Works";
const comment = "See My Highlighted Projects";
</script>
<template>
  <section class="pt-32 h-screen">
    <title-header
      :titleOne="titleOne"
      :titleTwo="titleTwo"
      :comment="comment"
    />
  </section>
</template>
