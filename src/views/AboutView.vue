<script setup>
import TitleHeader from "@/components/TitleHeader.vue";
import ButtonWrapper from "@/components/ButtonsWrapper.vue";
import SpecializationSection from "@/components/SpecializeSection.vue";
import TeckStack from "@/components/TechnologiesSection.vue";
import PassionsSection from "@/components/PassionsSection.vue";
import SelfImage from "@/components/SelfImage.vue";

// Props to pass down
const titleOne = "About";
const titleTwo = "Me";
const comment = "Learn More About Me";
</script>

<template>
  <section class="pt-32 pb-10 lg:h-screen">
    <title-header
      :titleOne="titleOne"
      :titleTwo="titleTwo"
      :comment="comment"
    />
    <div
      class="font-montserrat w-90vw mx-auto mt-8 flex flex-col gap-4 px-8 custom-width"
    >
      <specialization-section />
      <div class="flex flex-col gap-4 md:grid md:grid-cols-2">
        <teck-stack />
        <passions-section />
      </div>
      <self-image />
    </div>
    <button-wrapper />
  </section>
</template>

<style scoped>
li {
  isolation: isolate;
}

.shadow-image {
  filter: drop-shadow(0 0 5px #000);
}

@media (min-width: 1024px) {
  .custom-width {
    width: 900px;
  }
}
</style>
