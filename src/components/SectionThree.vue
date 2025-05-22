<template>
  <div class="flex flex-col gap-5 py-6 px-5">
    <!-- Fila 1: dos elementos (2/5 y 3/5) -->
    <div class="flex gap-5 h-90">
      <!-- div1: 2/5 -->
      <div class="basis-2/3 relative">
        <img
          src="/src/assets/images/bgindexone.jpg"
          class="w-full h-full object-cover rounded-xl"
          alt="div1"
        />
        <div class="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span class="text-white text-center p-4">
            Conoce a nuestros aliados y descubre cómo juntos estamos marcando la diferencia.
          </span>
        </div>
      </div>

      <!-- div2: 3/5 -->
      <div class="basis-1/3 relative">
        <img
          src="/src/assets/images/pasillo.jpg"
          class="w-full h-full object-cover rounded-xl"
          alt="div2"
        />
        <div class="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span class="text-white text-center p-4">
            Dejemos que las marcas hablen por nosotros. Conoce a nuestros aliados y descubre cómo juntos estamos marcando la diferencia.
          </span>
        </div>
      </div>
    </div>

    <!-- Fila 2: dos elementos (3/5 y 2/5) -->
    <div class="flex gap-5 h-90">
      <!-- div3: 3/5 -->
      <div class="basis-1/4 relative">
        <img
          src="/src/assets/images/pasillo.jpg"
          class="w-full h-full object-cover rounded-xl"
          alt="div3"
        />
        <div class="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span class="text-white text-center p-4">
            Juntos creamos espacios de impacto y colaboración.
          </span>
        </div>
      </div>

      <!-- div4: 2/5 -->
      <div class="basis-3/4 relative">
        <img
          src="/src/assets/images/bgindexone.jpg"
          class="w-full h-full object-cover rounded-xl"
          alt="div4"
        />
        <div class="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span class="text-white text-center p-4">
            Descubre historias que inspiran y transforman.
          </span>
        </div>
      </div>
    </div>

    <!-- Fila 3: sponsors a 100% -->
    <div class="w-full">
      <Sponsors />
    </div>
  </div>


</template>

<script>
import Sponsors from "../components/Sponsors.vue";
export default {
  name: "SectionThree",
  components: {
    Sponsors,
  },
};
</script>
