<script setup>
import TitleHeader from "@/components/TitleHeader.vue";

// Props to pass down
const titleOne = "Contact";
const titleTwo = "Me";
const comment = "Send Me A Message";
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
