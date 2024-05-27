<script setup>
import cafeInfoDesktop from "@/assets/screenshots/cafe-info-desktop.png";
import cafeMenuDesktop from "@/assets/screenshots/cafe-menu-desktop.png";
import cafeFoodDesktop from "@/assets/screenshots/cafe-food-desktop.png";
import cafeFoodMobile from "@/assets/screenshots/cafe-food-mobile.png";
import cafeMenuMobile from "@/assets/screenshots/cafe-menu-mobile.png";
import cafeHeroMobile from "@/assets/screenshots/cafe-hero-mobile.png";
import { ref } from "vue";

const isDetailsVisible = ref(true);
</script>

<template>
  <div
    class="flex flex-col justify-center items-center mx-auto gap-8 mt-8 md:flex-row relative"
  >
    <figure class="relative">
      <img
        :src="cafeFoodMobile"
        alt=""
        class="w-60 rounded-md md:w-48 custom-shadow"
      />
      <button @click="isDetailsVisible = !isDetailsVisible">
        <i
          class="fa-solid fa-square-plus absolute -top-6 -left-6 text-4xl hover:rotate-45 duration-500"
        ></i>
      </button>
      <figcaption
        class="absolute top-0 bg-nav-light p-4 scale-in-tl font-rubik tracking-widest text-center"
        v-if="isDetailsVisible"
      >
        LUNCH ITEM FILTERING
      </figcaption>
    </figure>
    <figure class="relative">
      <img
        :src="cafeMenuMobile"
        alt=""
        class="w-60 rounded-md md:w-48 custom-shadow"
      />
      <button>
        <i class="fa-solid fa-square-plus absolute -top-6 -left-6 text-4xl"></i>
      </button>
    </figure>
    <figure class="relative">
      <img
        :src="cafeHeroMobile"
        alt=""
        class="w-60 rounded-md md:w-48 custom-shadow"
      />
      <button>
        <i class="fa-solid fa-square-plus absolute -top-6 -left-6 text-4xl"></i>
      </button>
    </figure>
  </div>
  <div
    class="my-8 w-4/5 xs:w-2/3 flex flex-col mx-auto gap-8 md:grid md:grid-cols-2 md:w-3/4 md:mx-auto 2xl:w-1/2"
  >
    <figure class="relative">
      <img :src="cafeInfoDesktop" alt="" class="rounded-md custom-shadow" />
      <button>
        <i class="fa-solid fa-square-plus absolute -top-6 -left-6 text-4xl"></i>
      </button>
    </figure>
    <figure class="relative">
      <img :src="cafeMenuDesktop" alt="" class="rounded-md custom-shadow" />
      <button>
        <i class="fa-solid fa-square-plus absolute -top-6 -left-6 text-4xl"></i>
      </button>
    </figure>
  </div>
</template>

<style scoped>
.custom-shadow {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.scale-in-tl {
  -webkit-animation: scale-in-tl 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: scale-in-tl 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes scale-in-tl {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: 0% 0%;
    transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: 0% 0%;
    transform-origin: 0% 0%;
    opacity: 1;
  }
}
@keyframes scale-in-tl {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: 0% 0%;
    transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: 0% 0%;
    transform-origin: 0% 0%;
    opacity: 1;
  }
}
</style>
