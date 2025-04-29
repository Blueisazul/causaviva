<template>
    <div class="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 class="text-3xl font-bold">Hello Tailwind CSS!</h1>
        <p class="mt-4 text-lg">This is a simple Vue component styled with Tailwind CSS.</p>
        <a href="https://tailwindcss.com/docs" class="mt-6 text-green-500 hover:underline">
        Learn more about Tailwind CSS
        </a>
    </div>
</template>

<script>
export default {
    name: 'NavbarSection',
data() {
        return {
            active: '#home'
        }
    },
}
</script>