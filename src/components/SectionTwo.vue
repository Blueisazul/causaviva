<template>
    <div class="p-40">    
        <div class="flex flex-row w-full gap-6">
            <!-- Primera columna -->
            <div class="w-1/2 flex flex-col justify-between my-10 pr-40">
            <div class="text-neutral-900 text-6xl font-semibold">
                Lorem ipsum Alianzas
            </div>

            <div class="text-zinc-400 text-md font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>

            <button class="cursor-pointer text-neutral-900 text-md font-semibold bg-yellow-300 hover:bg-amber-300 rounded-full px-4 py-2 w-fit">
                Read More
            </button>
            </div>

            <!-- Segunda columna en cuadrícula -->
            <div class="w-1/2 grid grid-cols-2 grid-rows-none gap-4">
            <!-- Arriba izquierda -->
            <div class="flex flex-col justify-end items-end p-4">
                <div class="bg-slate-200 rounded-2xl p-4 flex flex-col items-end">
                    <div class="flex flex-row items-center">
                        <div class="bg-neutral-900 h-[3px] w-18 my-2 mx-1"></div>
                        <div class="text-neutral-900 text-lg font-semibold">50k+</div>
                    </div>
                    <div class="text-neutral-900 text-md font-semibold">Goals Project</div>
                </div>
            </div>

            <!-- Arriba derecha -->
            <div class="flex items-end justify-start">
                <img class="w-full h-auto rounded-2xl" src="https://placehold.co/305x236" />
            </div>         

            <!-- Abajo izquierda -->
            <div>
                <img class="w-full h-auto rounded-2xl" src="https://placehold.co/216x210" />
            </div>

            <!-- Abajo derecha ("Crea+") -->
            <div class="flex items-end justify-end">
                <div class="text-neutral-900 text-8xl font-bold ">Crea+</div>
            </div>
            </div>
        </div>
    </div>

</template>

<script>

</script>