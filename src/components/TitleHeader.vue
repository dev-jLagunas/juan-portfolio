<script setup>
// Props
const props = defineProps({
  titleOne: String,
  titleTwo: String,
  comment: String,
});
</script>

<template>
  <h1
    class="text-5xl tracking-tighter font-extrabold font-rubik text-center text-dark-color dark:text-light-color sm:text-6xl"
  >
    &lt; {{ titleOne }}
    <span class="block sm:inline sm:pl-3">{{ titleTwo }} /&gt;</span>
  </h1>

  <h2
    class="font-rubik font-extrabold tracking-tighter text-center sm:my-4 sm:text-2xl lg:text-3xl"
  >
    &lt;!-- {{ comment }} --&gt;
  </h2>
</template>
