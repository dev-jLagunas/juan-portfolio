<script setup></script>

<template>
  <section class="w-90vw mx-auto font-montserrat mt-4 sm:w-full">
    <article class="">
      <div class="border-b-4 border-nav-light border-double">
        <h2
          class="font-rubik text-2xl text-center font-bold text-dark-color dark:text-light-color"
        >
          // GET IN TOUCH
        </h2>
      </div>
      <ul
        class="my-4 text-sm flex flex-col gap-2 items-start justify-center w-max mx-auto"
      >
        <li>
          <i class="fas fa-map-marker-alt text-orange-300 pr-2"></i> Fake
          Address, 9999 City
        </li>
        <li><i class="fas fa-phone text-orange-300 pr-2"></i> 123456789</li>
        <li>
          <i class="fas fa-envelope text-orange-300 pr-2"></i> email@example.com
        </li>
      </ul>
    </article>

    <form
      class="dark:bg-dark-color bg-light-color border-4 border-double border-nav-light rounded-md w-full mx-auto"
    >
      <label for="" class="sr-only">name</label>
      <input
        type="text"
        placeholder="name"
        class="dark:bg-dark-color bg-light-color w-full focus:outline-none border-b border-nav-light pl-4"
      />
      <label for="" class="sr-only">email</label>
      <input
        type="text"
        placeholder="email"
        class="dark:bg-dark-color w-full focus:outline-none bg-light-color border-b border-nav-light pl-4"
      />
      <label for="" class="sr-only">message</label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="message"
        class="dark:bg-dark-color focus:outline-none bg-light-color w-full pl-4"
      ></textarea>
      <button
        class="bg-nav-light w-full py-1 font-rubik text-light-color dark:text-dark-color font-bold"
      >
        // SUBMIT
      </button>
    </form>
  </section>
</template>

<style scoped></style>
