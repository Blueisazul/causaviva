<template>
  <div class="max-w-screen-xl mx-auto flex flex-col items-center justify-between py-3">
    <!-- Navbar -->
    <nav class="flex flex-row items-center justify-between w-full lg:w-auto mb-8">
      <div class="flex items-center justify-between w-full lg:w-auto">
        <!-- Logo -->
        <div class="ml-4 lg:ml-0">
          <Causa class="text-gray-800" width="100" />
        </div>

        <!-- Botón de hamburguesa -->
        <button
          @click="toggleMenu"
          class="lg:hidden text-neutral-800 dark:text-white focus:outline-none px-4"
        >
          <span class="sr-only">Abrir menú</span>
          ☰
        </button>
      </div>

      <!-- Menú -->
      <div id="menu-collapse" class="hidden lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0">
        <ul class="flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0 text-neutral-800 dark:text-white">
          <!-- Add menu items here -->
        </ul>
      </div>

      <!-- Icono de usuario -->
      <div class="text-gray-600 hover:text-gray-800 transition cursor-pointer">
        <i class="fas fa-user-circle text-2xl"></i>
      </div>
    </nav>

    <!-- Hero principal -->
    <section class="text-center py-20 px-6 w-full">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-semibold leading-tight mb-4">
          Explora oportunidades de <span class="text-amber-500">voluntariado</span>
        </h1>
        <p class="mt-4 text-lg text-gray-600 mb-8">
          Inspira, colabora y haz la diferencia.
        </p>
        <button class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
          Empieza ahora
        </button>
      </div>
    </section>
  </div>
</template>

// ... existing code ...


<script>
import Causa from "../icons/Causa.vue";

export default {
  name: "SectionOne",
  components: {
    Causa,
  },
  created() {
    document.documentElement.classList.add("light");
    document.documentElement.setAttribute("dir", "ltr");

    var bodyElement = document.body;
    bodyElement.classList.add(
      "font-rubik",
      "text-base",
      "text-slate-900",
      "dark:text-white",
      "dark:bg-slate-900"
    );

    window.addEventListener("scroll", (ev) => {
      ev.preventDefault();
      const navbar = document.getElementById("navbar");
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        navbar.classList.add("is-sticky");
      } else {
        navbar.classList.remove("is-sticky");
      }

      var mybutton = document.getElementById("back-to-top");
      if (mybutton != null) {
        if (
          document.body.scrollTop > 500 ||
          document.documentElement.scrollTop > 500
        ) {
          mybutton.classList.add("block");
          mybutton.classList.remove("hidden");
        } else {
          mybutton.classList.add("hidden");
          mybutton.classList.remove("block");
        }
      }
    });
  },
  methods: {
    ScrollIntoView(elem) {
      this.active = elem;
      let ele = document.querySelector(elem);
      ele.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    toggleMenu() {
      let ele = document.getElementById("menu-collapse");
      ele.classList.toggle("hidden");
    },
  },
};
</script>
