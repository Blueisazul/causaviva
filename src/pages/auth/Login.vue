<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center text-gray-800">Iniciar Sesión</h2>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input type="email" id="email" v-model="email" required class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-700">Contraseña</label>
            <input type="password" id="password" v-model="password" required class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
          </div>
          <button type="submit" class="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Iniciar Sesión</button>
        </form>
        <p class="mt-4 text-sm text-center text-gray-600">
          ¿No tienes una cuenta? 
          <router-link to="/register" class="text-blue-600 hover:underline">Crear Cuenta</router-link>
        </p>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref<string>('')
const password = ref<string>('')

function handleSubmit() {
  console.log('Iniciando sesión con:', {
    email: email.value,
    password: password.value
  })

  // Aquí podrías enviar los datos a una API
}
</script>
