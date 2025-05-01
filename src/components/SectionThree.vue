<template>
    <div class="p-3">
        <div class="relative inline-flex flex-col items-start justify-end gap-2.5">
            <img class="h-auto w-full rounded-2xl" src="https://placehold.co/1920x890" />

            <!-- Fondo oscuro encima de la imagen, pero detrás del texto -->
            <div class="absolute inset-0 z-10 rounded-2xl bg-black opacity-50 "></div>

            <!-- Contenedor del texto con z-20 para que esté encima del fondo oscuro -->
            <div class="absolute inset-0 z-20 flex flex-col justify-end m-20 w-[50vw]">
                <div class="w-[507px] text-6xl font-semibold text-white py-10">Lorem ipsum dolor sit amet</div>
                <div class="mt-4 text-md font-medium text-white pb-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus mauris neque, et vulputate lorem lobortis vel. Quisque molestie bibendum nisi quis ultricies. Nulla eu nunc non enim auctor blandit. Aliquam blandit elit volutpat blandit egestas.</div>
            </div>
        </div>
    </div>
</template>

<script>

</script>