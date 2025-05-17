<template>
<<<<<<< HEAD
  <div class="flex flex-col gap-5">
    <div class="grid grid-cols-5 grid-rows-5 gap-5 px-5">
      <!-- div1 ocupa de fila 1 a 3 y de columna 1 a 3 -->
      <div class="col-start-1 col-end-3 row-start-1 row-end-3 relative">
        <img
          src="/src/assets/images/bgindexone.jpg"
          class="w-full h-80 object-cover rounded-xl"
          alt="div1"
        />
        <div class="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span class="text-white text-center p-4">
            Conoce a nuestros aliados y descubre cómo juntos estamos marcando la
            diferencia.
          </span>
=======
    <div class="p-3 justify-self-center">
        <div class="relative inline-flex flex-col items-start justify-end gap-2.5">
            <img class="h-auto w-full rounded-2xl" src="/src/assets/images/sectionThreeBg.jpg" />

            <!-- Fondo oscuro encima de la imagen, pero detrás del texto -->
            <div class="absolute inset-0 z-10 rounded-2xl bg-black opacity-50 "></div>

            <!-- Contenedor del texto con z-20 para que esté encima del fondo oscuro -->
            <div class="absolute inset-0 z-20 flex flex-col justify-end max-w-screen-xl mx-auto my-20">
                <div class=" text-6xl font-semibold text-white py-10 w-[60%] self-start">Juntos por un <br> Entorno Más Limpio</div>
                <div class="mt-4 text-lg font-medium text-white pb-15 w-[60%] self-start">Desde el corazón de Los Olivos, nuestros voluntarios promueven acciones <br> responsables con el medio ambiente. Cada jornada de limpieza es una oportunidad para educar, inspirar y transformar nuestro entorno. </div>
            </div>
>>>>>>> 986b609e9e9c707e223ede14b6a827c043b23ae5
        </div>
      </div>

      <!-- div2 ocupa de fila 1 a 3 y de columna 3 a 6 -->
      <div class="col-start-3 col-end-6 row-start-1 row-end-3 relative">
        <img
          src="/src/assets/images/pasillo.jpg"
          class="w-full h-80 object-cover rounded-xl"
          alt="div2"
        />
        <div class="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span class="rounded-xl text-white text-center p-4">
            Dejemos que las marcas hablen por nosotros. Conoce a nuestros
            aliados y descubre cómo juntos estamos marcando la diferencia.
          </span>
        </div>
      </div>

      <!-- div3 ocupa de fila 3 a 5 y de columna 1 a 4 -->
      <div class="col-start-1 col-end-4 row-start-3 row-end-5 relative">
        <img
          src="/src/assets/images/pasillo.jpg"
          class="w-full h-80 object-cover rounded-xl"
          alt="div3"
        />
        <div class="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span class="rounded-xl text-white text-center p-4">
            Juntos creamos espacios de impacto y colaboración.
          </span>
        </div>
      </div>

      <!-- div4 ocupa de fila 3 a 5 y de columna 4 a 6 -->
      <div class="col-start-4 col-end-6 row-start-3 row-end-5 relative">
        <img
          src="/src/assets/images/bgindexone.jpg"
          class="w-full h-80 object-cover rounded-xl"
          alt="div4"
        />
        <div class="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span class="rounded-xl text-white text-center p-4">
            Descubre historias que inspiran y transforman.
          </span>
        </div>
      </div>
      <div class="col-start-1 col-end-6 row-start-5 row-end-6">
        <Sponsors />
      </div>
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
