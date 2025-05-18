<template>
  <div class="max-w-screen-xl mx-auto py-20 my-40">
    <!-- Imagen destacada con texto y botón superpuestos -->
    <div class="relative rounded-2xl overflow-hidden my-10">
      <img
        class="w-full object-cover w-full h-90"
        src="/src/assets/images/bgindexone.jpg"
        alt="Banner"
      />
      <div class="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
      <div
        class="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-20"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-4 my-20 mx-30">
          Lorem ipsum dolor sit amet adipisicing elit. Quisquam, voluptatibus.
        </h2>
        <div class="flex items-center justify-end w-fit">
          <div
            class="group flex items-center cursor-pointer text-neutral-800 text-md font-bold transition bg-linear-to-bl from-yellow-400/90 to-yellow-500 hover:bg-gradient-to-bl hover:from-yellow-400/80 hover:to-yellow-500/90 rounded-full px-4 py-2"
          >
            <span class="transition duration-300">Revisa ahora</span>
            <div
              class="transition-transform transform duration-300 ml-1 group-hover:translate-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección de ítems informativos -->
    <div class="grid md:grid-cols-2 gap-10 my-20 mx-5">
      <div class="flex gap-4">
        <img
          class="w-40 h-40 rounded-lg object-cover mx-5"
          src="/src/assets/images/pasillo.jpg"
          alt="Ícono"
        />
        <div>
          <h3 class="text-lg font-semibold">Lorem ipsum Titulo</h3>
          <p class="text-gray-700 mt-1 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Facere harum repudiandae illum quod, doloremque dolores.
          </p>
        </div>
      </div>
      <div class="flex gap-4">
        <img
          class="w-40 h-40 rounded-lg object-cover mx-5"
          src="/src/assets/images/bgindexone.jpg"
          alt="Ícono"
        />
        <div>
          <h3 class="text-lg font-semibold">Lorem ipsum Titulo</h3>
          <p class="text-gray-700 mt-1 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Facere harum repudiandae illum quod, doloremque dolores.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
