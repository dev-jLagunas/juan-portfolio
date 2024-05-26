<script setup>
import projectsData from "@/data/projects.js";
</script>

<template>
  <article
    v-for="project in projectsData"
    :key="project.id"
    class="w-64 mx-auto xs:w-72 md:w-64 mt-10 h-max custom-shadow overflow-x-hidden font-rubik relative rounded-md"
  >
    <p
      class="bg-nav-light text-light-color text-center text-sm py-3 font-extralight dark:text-dark-color"
    >
      {{ project.description
      }}<i class="pl-2 text-xs" :class="[project.iconClass]"></i>
    </p>
    <div class="flex justify-evenly py-3">
      <img
        v-for="(technology, techIndex) in project.technologies"
        :key="techIndex"
        :src="technology"
        alt="Technology logo"
        class="h-6 scale-in-center"
      />
    </div>
    <figure class="relative w-full h-56">
      <img
        :src="project.imageDesktop"
        alt="desktop screenshot"
        :class="[project.bgColor]"
        class="object-cover h-full w-full"
      />
      <img
        :src="project.imageMobile"
        alt="mobile screenshot"
        class="absolute rotate-12 h-40 -bottom-10 -right-2 custom-hover hover:rotate-0 duration-500 shadow-image z-10"
      />
    </figure>
    <div class="font-rubik pb-3">
      <h3
        class="w-max mb-2 px-3 py-1 mt-4 rounded-ee-full text-light-color slide-in-left"
        :class="[project.bgColor]"
      >
        // {{ project.title }}
      </h3>

      <div class="flex justify-start pl-4 space-x-4">
        <button class="">
          <i
            class="fa-brands fa-github border-2 p-1 rounded-md border-nav-light text-dark-color dark:text-light-color text-sm"
          ></i>
        </button>
        <button class="">
          <i
            class="fa-solid fa-display border-2 p-1 rounded-md border-nav-light text-dark-color dark:text-light-color text-sm"
          ></i>
        </button>
      </div>
    </div>
    <button
      class="text-sm py-1 w-full bg-nav-light text-light-color dark:text-dark-color"
    >
      SEE MORE
    </button>
  </article>
</template>

<style scoped>
.custom-shadow {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.shadow-image {
  filter: drop-shadow(0 0 1px #181717);
}

.custom-hover:hover {
  transform: scale(2);
}

.slide-in-left {
  -webkit-animation: slide-in-left 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-left 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.scale-in-center {
  -webkit-animation: scale-in-center 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: scale-in-center 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
