<script setup>
import HelloWorld from '../components/HelloWorld.vue';
import HelloTailwind from '../components/HelloTailwind.vue';
import NavbarSection from '../components/NavbarSection.vue';
import SectionOne from '../components/SectionOne.vue';
</script>

<template>
  <NavbarSection />
  <SectionOne />
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="h-24 p-6 transition duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo"/>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="h-24 p-6 transition duration-300 hover:drop-shadow-[0_0_2em_#42b883aa]" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <HelloTailwind />
</template>

<style scoped>

</style>
