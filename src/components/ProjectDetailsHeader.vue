<script setup>
import cafeVideo from "@/assets/videos/cafe-video.webm";
</script>

<template>
  <header class="font-rubik w-90vw">
    <p
      class="border-4 border-double p-2 border-nav-light mb-4 rounded-md text-xs xs:text-sm md:text-base text-center md:w-2/3 lg:w-3/4 md:mx-auto text-dark-color dark:text-light-color font-montserrat"
    >
      A site for the local coffee shop I used to own with my wife in Ishikawa,
      Japan. When I first started my self-taught journey I told my self that my
      first goal would be creating our shops site! Here is the final product!
    </p>
    <div
      class="mx-auto md:flex md:flex-col md:justify-center md:items-center lg:grid lg:grid-cols-2 lg:w-3/4 lg:space-x-16"
    >
      <video
        :src="cafeVideo"
        controls
        class="rounded-md custom-shadow mx-auto"
      ></video>

      <div
        class="flex flex-col justify-center space-y-2 items-center w-full text-light-color dark:text-dark-color"
      >
        <h2
          class="font-extrabold text-4xl my-2 mx-auto text-center tracking-wider md:text-6xl text-dark-color dark:text-light-color lg:-ml-20"
        >
          CAFE TRIANGLE
        </h2>
        <div
          class="space-x-4 divide-x-2 text-xs w-full mx-auto flex justify-center text-dark-color dark:text-light-color lg:-ml-10"
        >
          <button class="">
            Source Code<i
              class="fa-brands fa-github block text-2xl md:text-lg"
            ></i>
          </button>
          <button class="pl-5">
            Live Site<i
              class="fa-solid fa-display block text-2xl md:text-xl"
            ></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
