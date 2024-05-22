<script setup>
import TitleHeader from "@/components/TitleHeader.vue";
import ContactForm from "@/components/ContactForm.vue";
import selfSketch from "@/assets/images/self-sketch.png";
import ButtonsWrapper from "@/components/ButtonsWrapper.vue";
import waveSVG from "@/assets/svg/bg-wave.svg";
import LinksDecorative from "@/components/LinksDecorative.vue";

// Props to pass down
const titleOne = "Contact";
const titleTwo = "Me";
const comment = "Send Me A Message";
</script>

<template>
  <section class="pt-32 h-max md:h-screen w-90vw mx-auto">
    <title-header
      :titleOne="titleOne"
      :titleTwo="titleTwo"
      :comment="comment"
    />

    <div class="sm:grid md:grid-cols-2 custom-width mx-auto md:gap-4">
      <figure
        class="relative z-0 w-full xs:w-96 md:w-full mx-auto"
        :style="{ backgroundImage: `url(${waveSVG})` }"
      >
        <img
          :src="selfSketch"
          alt="sketch of myself"
          class="shadow-image w-full h-full object-cover"
        />
        <links-decorative />
      </figure>

      <contact-form />
    </div>
    <buttons-wrapper />
  </section>
</template>

<style scoped>
@media (min-width: 1024px) {
  .custom-width {
    width: 900px;
  }
}
</style>
