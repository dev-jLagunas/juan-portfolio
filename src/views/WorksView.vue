<script setup>
import TitleHeader from "@/components/TitleHeader.vue";
import ProjectsWrapper from "@/components/ProjectsWrapper.vue";
// Props to pass down
const titleOne = "My";
const titleTwo = "Works";
const comment = "See My Highlighted Projects";
</script>
<template>
  <section class="pt-32 h-max custom-bg">
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

<style scoped>
/* .custom-bg {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg clip-path='url(%26quot%3b%23SvgjsClipPath1042%26quot%3b)' fill='none'%3e%3ccircle r='93.335' cx='-43.23' cy='55.38' stroke='%238cb9bd' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='93.335' cx='447.08' cy='459.48' stroke='%238cb9bd' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='93.335' cx='661.19' cy='750.53' stroke='%238cb9bd' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='158.56' cx='1019.04' cy='281.35' stroke='%238cb9bd' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='168.47' cx='247.23' cy='223.8' stroke='%238cb9bd' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='178.66' cx='801.66' cy='95.34' stroke='%238cb9bd' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='141.065' cx='1069.81' cy='20.02' stroke='%238cb9bd' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='133.53' cx='169.8' cy='283.95' stroke='%238cb9bd' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='177.13' cx='1045.11' cy='424.81' stroke='%238cb9bd' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='68.645' cx='225.41' cy='484.46' stroke='%238cb9bd' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3c/g%3e%3cdefs%3e%3cclipPath id='SvgjsClipPath1042'%3e%3crect width='1440' height='560' x='0' y='0'%3e%3c/rect%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover;
  background-position: center;
} */
</style>
