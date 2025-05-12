<template>
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
        </div>
    </div>
</template>

<script>

</script>