<template>
    <div class="max-w-screen-xl mx-auto my-40">    
        <div class="flex flex-row w-full gap-6">
            <!-- Primera columna -->
            <div class="w-1/2 flex flex-col justify-between my-20 pr-20">
            <div class="text-gray-800 text-5xl font-semibold">
                Construyendo Alianzas para un Futuro Solidario
            </div>

            <div class="text-gray-700 text-lg font-medium">
                Colaboramos con organizaciones locales y nacionales para impulsar proyectos de voluntariado que transforman nuestra comunidad en Los Olivos. Juntos, creamos oportunidades de impacto real.
            </div>

            <!-- Contenedor padre con la clase group -->
            <div class="flex items-center justify-end w-fit">
            <div class="group flex items-center cursor-pointer text-gray-700 text-md font-bold transition bg-linear-to-bl from-yellow-400/90 to-yellow-500 hover:bg-gradient-to-bl hover:from-yellow-400/80 hover:to-yellow-500/90 rounded-full px-4 py-2">
                <span class="transition duration-300">Ver más</span>
                <div class="transition-transform transform duration-300 ml-1 group-hover:translate-x-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 22" fill="none"
                    stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-chevron-right"
                >
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
                </div>
            </div>
            </div>

            </div>

            <!-- Segunda columna en cuadrícula -->
            <div class="w-1/2 grid grid-cols-2 grid-rows-none gap-4">
            <!-- Arriba izquierda -->
            <div class="flex flex-col justify-end items-end p-4">
                <div class="w-36 h-36 bg-slate-200 rounded-2xl p-4 flex flex-col justify-end items-end">
                    <div class="flex flex-row items-center">
                        <div class="bg-neutral-800 h-[2px] w-16 my-2 mx-1"></div>
                        <div class="text-neutral-800 text-lg font-semibold">50k+</div>
                    </div>
                    <div class="text-neutral-800 text-md font-semibold">Goals Project</div>
                </div>
            </div>

            <!-- Arriba derecha -->
            <div class="flex items-end justify-start">
                <img class="w-full h-auto rounded-2xl" src="/src/assets/images/sectionTwo1.jpg" />
            </div>         

            <!-- Abajo izquierda -->
            <div>
                <img class="w-full h-auto rounded-2xl" src="/src/assets/images/sectionTwo2.jpg" />
            </div>

            <!-- Abajo derecha ("Crea+") -->
            <div class="flex items-end justify-end">
                <div class="text-gray-800 text-7xl font-bold ">Juntos+</div>
            </div>
            </div>
        </div>
    </div>

</template>

<script>

</script>