<script setup>
import TitleHeader from "@/components/TitleHeader.vue";
import selfPhoto from "@/assets/images/self-photo.png";
import waveSVG from "@/assets/svg/bg-wave.svg";
import ButtonWrapper from "@/components/ButtonsWrapper.vue";

// Props to pass down
const titleOne = "About";
const titleTwo = "Me";
const comment = "Learn More About Me";

// Variables
const wave = waveSVG;
const specialization = `I specialize in front-end development with Angular and Vue, and have strong skills in vanilla JavaScript and CSS, TypeScript, and frameworks like Tailwind CSS. 
I've built several dynamic projects and bring a diverse background, including business ownership and fluency in English, Spanish, and Japanese. `;
</script>

<template>
  <section class="pt-32 pb-10">
    <title-header
      :titleOne="titleOne"
      :titleTwo="titleTwo"
      :comment="comment"
    />
    <div
      class="font-montserrat w-90vw mx-auto mt-8 flex flex-col gap-4 px-8 custom-width"
    >
      <article class="border-4 border-double border-nav-light p-4 rounded-md">
        <h3 class="text-center font-rubik font-bold">SPECIALIZATION</h3>
        <p class="text-sm">{{ specialization }}</p>
      </article>
      <div class="flex flex-col gap-4 md:grid md:grid-cols-2">
        <article class="border-4 border-double border-nav-light p-4 rounded-md">
          <h3 class="text-center font-rubik font-bold">Technologies:</h3>
          <ul
            class="grid grid-cols-2 place-items-center text-sm mt-2 xs:grid-cols-3 sm:grid-cols-6 md:grid-cols-2"
          >
            <li>Angular</li>
            <li>Vue</li>
            <li>JavaScript</li>
            <li>SCSS</li>
            <li>TypeScript</li>
            <li>Bootstrap</li>
          </ul>
        </article>
        <article class="border-4 border-double border-nav-light p-4 rounded-md">
          <h3 class="text-center font-rubik font-bold">Passions:</h3>
          <ul class="grid grid-cols-4 place-items-center pt-4 text-2xl mt-2">
            <li class="relative group">
              <i class="fa-solid fa-camera"></i
              ><span
                class="hidden group-hover:block absolute bottom-full mb-2 bg-nav-light text-light-color px-2 py-1 rounded text-xs"
                >Photography</span
              >
            </li>
            <li class="relative group">
              <i class="fa-solid fa-dumbbell"></i
              ><span
                class="hidden group-hover:block absolute bottom-full mb-2 bg-nav-light text-light-color px-2 py-1 rounded text-xs"
                >Weightlifting</span
              >
            </li>
            <li class="relative group">
              <i class="fa-solid fa-person-hiking"></i
              ><span
                class="hidden group-hover:block absolute bottom-full mb-2 bg-nav-light text-light-color px-2 py-1 rounded text-xs"
                >Hiking</span
              >
            </li>
            <li class="relative group">
              <i class="fa-solid fa-person-snowboarding"></i
              ><span
                class="hidden group-hover:block absolute bottom-full mb-2 bg-nav-light text-light-color px-2 py-1 rounded text-xs"
                >Skateboarding</span
              >
            </li>
          </ul>
        </article>
      </div>
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
