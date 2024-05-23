<script setup>
import cafeVideo from "@/assets/videos/cafe-video.webm";
</script>

<template>
  <section
    class="h-screen flex flex-col items-center justify-center w-90vw mx-auto custom-bg"
  >
    <header class="flex flex-col justify-start items-start font-rubik">
      <div>
        <video :src="cafeVideo" controls class="rounded-md"></video>
      </div>
      <h2 class="font-bold text-4xl">CAFE TRIANGLE</h2>
      <button>Source Code</button>
      <button>Live Site</button>
    </header>
  </section>
</template>

<style scoped>
.custom-bg {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1132%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c483 C 96%2c429.6 288%2c234.2 480%2c216 C 672%2c197.8 768%2c427.4 960%2c392 C 1152%2c356.6 1344%2c109.6 1440%2c39L1440 560L0 560z' fill='rgba(140%2c 185%2c 189%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1132'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover;
  background-position: center;
}
</style>
