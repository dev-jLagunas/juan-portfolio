<script setup>
import projectsData from "@/data/projects.js";
</script>

<template>
  <article
    v-for="project in projectsData"
    :key="project.id"
    class="w-56 mx-auto xs:w-72 md:w-64 mt-10 h-max custom-shadow px-2 overflow-hidden"
  >
    <h2
      class="mb-2 px-3 py-1 mt-4 text-sm rounded-tr-full custom-radius text-light-color w-40 slide-in-left"
      :class="[project.bgColor]"
    >
      // {{ project.framework }}
    </h2>
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
        class="absolute rotate-12 h-40 -bottom-10 -right-2 custom-hover hover:rotate-0 duration-500 shadow-image"
      />
    </figure>
    <div class="font-rubik pb-3">
      <h3
        class="w-max mb-2 px-3 py-1 mt-4 rounded-ee-full text-light-color"
        :class="[project.bgColor]"
      >
        // {{ project.title }}
      </h3>
      <p
        class="text-xs px-4 py-2 text-light-color w-max rounded-tr-full"
        :class="[project.bgColor]"
      >
        {{ project.description
        }}<i class="pl-2" :class="[project.iconClass]"></i>
      </p>
    </div>
  </article>
</template>

<style scoped>
.custom-shadow {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
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
