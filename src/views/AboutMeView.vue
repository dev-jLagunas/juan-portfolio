<script setup>
import skaterSketch from "@/assets/images/skatersketch.png";
</script>

<template>
  <header class="relative h-screen flex flex-col justify-center pt-10">
    <h1
      class="text-5xl tracking-tighter font-extrabold font-rubik text-center text-dark-color dark:text-light-color sm:text-6xl lg:text-8xl"
    >
      &lt; JUAN <span class="block sm:inline sm:pl-3">LAGUNAS /&gt;</span>
    </h1>

    <h2
      class="font-rubik font-extrabold tracking-tighter text-center sm:my-4 sm:text-2xl lg:text-3xl"
    >
      &lt;!-- Frontend Developer --&gt;
    </h2>
    <img
      :src="skaterSketch"
      alt="skater sketch"
      class="mx-auto bg-nav-light rounded-md h-56 xs:h-64 sm:h-96"
    />
    <div
      class="flex flex-col justify-center items-center w-90vw text-center text-slate-700 mt-5 mx-auto dark:text-light-color sm:w-3/4"
    >
      <p class="text-sm px-2 sm:text-base font-montserrat">
        Programming became my compass when I felt lost in my career. Despite the
        challenges, my passion drives me to constantly improve and push my
        limits. I'm dedicated to mastering this craft, one line of code at a
        time
      </p>
      <button
        class="border-l-8 border-orange-300 py-2 px-6 rounded-sm mt-1 bg-nav-light text-light-color absolute bottom-5 tracking-widest text-sm dark:text-dark-color"
      >
        <i class="fa-solid fa-arrow-down-long pr-2 animate-bounce"></i>See
        More<i class="fa-solid fa-arrow-down-long pl-2 animate-bounce"></i>
      </button>
    </div>
  </header>
  <section class="h-screen flex flex-col justify-center">
    <article>
      <h4>Specialization:</h4>
      <p>Here I will write what I specialize in</p>
    </article>
    <article>
      <h4>Technologies:</h4>
      <p>Here I will write what technologies I work with</p>
    </article>
    <article>
      <h4>Personal Thoughts:</h4>
      <p>
        Here I will write about my thoughts on programming and what it means to
        me.
      </p>
    </article>
  </section>
</template>

<style scoped></style>
