<template>
  <div class="relative">
    <section class="py-9 lg:py-18 w-full table relative bg-center bg-cover"
      :style="{ backgroundImage: `url(${bgindexone})` }" id="home">
      <div class="absolute inset-0 bg-black opacity-50"></div>

      <div class="max-w-screen-xl mx-auto relative">
        <!-- Usamos h-full y items-stretch para alinear -->
        <div class="flex flex-col lg:flex-row w-full h-full items-stretch gap-10 lg:gap-40">
          <!-- Izquierda -->
          <div class="w-full lg:w-1/2 flex flex-col items-center">
            <div class="w-full h-full p-6 bg-white rounded-2xl flex flex-col">
              <div class="w-full flex justify-between mb-14">
                <div class="text-gray-700 text-xl font-medium">2025</div>
                <!-- <div class="text-gray-700 text-md font-medium">Lorem ipsum</div> -->
              </div>
              <div class="w-full rounded-xl">
                <img class="h-58 w-full rounded-xl" src="/src/assets/images/sectionFive1.jpg" />
              </div>

              <div class="w-full flex flex-col">
                <div class="w-full text-gray-700 text-sm ml-2 mt-1">Foto derechos autor ipsum dolor sit</div>
                <div class="text-gray-800 text-4xl font-bold mt-10">Transformando Los Olivos</div>
                <!-- Line 2 -->
                <div class="w-full h-[2px] bg-gray-800 my-2"></div>
                <div class="flex flex-col justify-between items-end">
                  <div class="w-100 text-gray-700 text-md my-10 font-medium">
                    En Los Olivos, nuestra plataforma ha facilitado más de 50 000 acciones solidarias, conectando a
                    voluntarios con organizaciones y colectivos que transforman la comunidad.
                  </div>
                  <!-- Contenedor padre con la clase group -->
                  <div class="flex items-center justify-end w-full">
                    <div
                      class="group flex items-center cursor-pointer text-gray-800 text-md font-bold transition hover:text-gray-700">
                      <span class="transition duration-300">Descubre más</span>
                      <div class="transition-transform transform duration-300 ml-1 group-hover:translate-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 22 22" fill="none"
                          stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                          class="lucide lucide-chevron-right">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Derecha: alineado abajo -->
          <div class="w-full lg:w-1/2 flex flex-col justify-end lg:justify-end py-22 px-6">
            <div class="mt-auto"> <!-- Este div empuja el contenido hacia abajo -->
              <div class="w-full text-white text-3xl font-bold">Gestión de Voluntariado 2025</div>
              <div class="w-full text-white text-lg my-10 font-medium">
                — “La tecnología potencia la solidaridad: <br> Cada convocatoria es una oportunidad para cambiar vidas.”
              </div>
              <div class="text-white text-4xl font-bold">Cada voluntario cuenta</div>
              <!-- Line 2 -->
              <div class="w-full h-[2px] bg-white my-2"></div>
              <div class="flex justify-start items-start w-full mt-12 gap-4">
                <div class="flex flex-col items-start font-bold">
                  <div class="text-white text-5xl">115k+</div>
                  <div class="text-white text-md">Empresas <br> registradas</div>
                </div>
                <div class="flex flex-col items-start font-bold">
                  <div class="text-white text-5xl">70k+</div>
                  <div class="text-white text-md">Voluntarios</div>
                </div>
                <div class="flex flex-col items-start font-bold">
                  <div class="text-white text-5xl">47k+</div>
                  <div class="text-white text-md">Proyectos <br> exitosos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import bgindexone from '../assets/images/bgindexone.jpg';

export default {
  name: 'SectionFive',
  components: {
    // Aquí puedes importar otros componentes si es necesario
  },
  data() {
    return {
      bgindexone,
    };
  },
  methods: {
    // Aquí puedes poner los metodos
  },
};

</script>