<script setup>
import TitleHeader from "@/components/TitleHeader.vue";
import ProjectsWrapper from "@/components/ProjectsWrapper.vue";
// Props to pass down
const titleOne = "My";
const titleTwo = "Works";
const comment = "See My Highlighted Projects";
</script>
<template>
  <section class="pt-32 h-max">
    <title-header
      :titleOne="titleOne"
      :titleTwo="titleTwo"
      :comment="comment"
    />
    <section
      class="md:grid md:grid-cols-2 md:w-max md:gap-4 md:mx-auto lg:grid-cols-3 xl:grid-cols-4 pb-20"
    >
      <projects-wrapper />
    </section>
  </section>
</template>
