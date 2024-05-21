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
    <figcaption class="absolute top-0">nice to meet you</figcaption>
  </figure>
</template>
