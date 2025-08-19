<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo(0, 0)
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 grid px-4 py-3.5 grid-cols-12 gap-x-3 items-center z-50 mix-blend-difference">
    <button class="col-span-11 sm:col-span-5 text-white text-start cursor-pointer opacity-0" @click="scrollToTop">The International Fair of Dakar</button>
    <ul class="col-start-7 hidden sm:flex gap-x-2 text-white">
      <li>
        <a href="#manifesto" class="opacity-0">Manifesto</a>
      </li>
      <li>
        <a href="#vision" class="opacity-0">Vision</a>
      </li>
      <li>
        <a href="#sponsors" class="opacity-0">Sponsors</a>
      </li>
    </ul>
    <a href="#register" class="col-start-12 justify-self-end text-white opacity-0">Register</a>
  </nav>
</template>