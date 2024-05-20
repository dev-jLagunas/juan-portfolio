<script setup>
import skaterSketch from "@/assets/images/skatersketch.png";
import ButtonsWrapper from "@/components/ButtonsWrapper.vue";
</script>

<template>
  <section class="relative h-screen flex flex-col justify-center pt-10">
    <h1
      class="text-5xl tracking-tighter font-extrabold font-rubik text-center text-dark-color dark:text-light-color sm:text-6xl"
    >
      &lt; JUAN <span class="block sm:inline sm:pl-3">LAGUNAS /&gt;</span>
    </h1>

    <h2
      class="font-rubik font-extrabold tracking-tighter text-center sm:my-4 sm:text-2xl lg:text-3xl"
    >
      &lt;!-- Frontend Developer --&gt;
    </h2>
    <figure class="custom-width lg:mx-auto lg:flex relative lg:items-center">
      <img
        :src="skaterSketch"
        alt="skater sketch"
        class="mx-auto lg:mx-0 bg-nav-light rounded-md h-56 xs:h-64 sm:h-96 lg:ml-12"
      />
      <img
        :src="skaterSketch"
        alt=""
        class="h-72 hidden lg:flex lg:absolute lg:left-64 lg:bottom-8 lg:opacity-90"
      />
      <img
        :src="skaterSketch"
        alt=""
        class="h-52 hidden lg:flex lg:absolute lg:right-72 lg:bottom-20 lg:opacity-80"
      />
      <img
        :src="skaterSketch"
        alt=""
        class="h-32 hidden lg:flex lg:absolute lg:right-56 lg:bottom-28 lg:opacity-70"
      />
      <img
        :src="skaterSketch"
        alt=""
        class="h-20 hidden lg:flex lg:absolute lg:right-48 lg:bottom-36 lg:opacity-60"
      />
      <img
        :src="skaterSketch"
        alt=""
        class="h-16 hidden lg:flex lg:absolute lg:right-40 lg:bottom-40 lg:opacity-50"
      />
      <figcaption
        class="hidden lg:flex text-dark-color dark:text-light-color tracking-tighter ml-16 h-60 w-60 z-10 justify-center items-center font-rubik text-7xl text-center font-extrabold custom-shadow"
      >
        Let's get to work!
      </figcaption>
    </figure>
    <div
      class="flex flex-col justify-center items-center w-90vw text-center text-slate-700 mt-5 mx-auto dark:text-light-color sm:w-3/4 xl:w-1/3"
    >
      <p class="text-sm px-2 sm:text-base font-montserrat">
        Programming became my compass when I felt lost in my career. Despite the
        challenges, my passion drives me to constantly improve and push my
        limits. I'm dedicated to mastering this craft, one line of code at a
        time
      </p>
    </div>
    <buttons-wrapper />
  </section>
</template>

<style scoped>
@media (min-width: 1024px) {
  .custom-width {
    width: 900px;
  }

  .custom-shadow {
    text-shadow: 2px 2px 7px rgba(30, 37, 37, 0.5);
  }
}
</style>
