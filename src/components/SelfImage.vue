<script setup>
import selfPhoto from "@/assets/images/self-photo.png";
import waveSVG from "@/assets/svg/bg-wave.svg";

// Variables
const wave = waveSVG;
</script>

<template>
  <figure
    class="h-56 relative custom-bg"
    :style="{ backgroundImage: `url(${wave})` }"
  >
    <img
      :src="selfPhoto"
      alt="self photo"
      class="w-full h-full object-cover object-top rounded-md shadow-image"
    />
    <figcaption
      class="text-light-color dark:text-dark-color px-2 py-1 absolute -left-16 bottom-16 text-base font-bold font-rubik -rotate-90"
    >
      NICE TO MEET YOU
    </figcaption>
    <figcaption
      class="font-rubik font-bold text-dark-color dark:text-light-color absolute bottom-0 left-8"
    >
      LET'S CREATE TOGETHER
    </figcaption>
  </figure>
</template>

<style scoped></style>
