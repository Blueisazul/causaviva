<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div class="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-gray-800">Crear Cuenta <br> de Voluntario</h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                    <label for="dni" class="block mb-2 text-sm font-medium text-gray-700">D.N.I.</label>
                    <input type="text" id="dni" v-model="dni" required class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-700">Nombres Completos</label>
                    <input type="text" id="name" v-model="name" required class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-700">Correo Electrónico</label>
                    <input type="email" id="email" v-model="email" required class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label for="phoneNumber" class="block mb-2 text-sm font-medium text-gray-700">Telefono</label>
                    <input type="email" id="phoneNumber" v-model="phoneNumber" required class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-700">Contraseña</label>
                    <input type="password" id="password" v-model="password" required class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label for="passwordConfirm" class="block mb-2 text-sm font-medium text-gray-700">Confirmar Contraseña</label>
                    <input type="password" id="passwordConfirm" v-model="passwordConfirm" required class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                </div>
                <button type="submit" class="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Registrar</button>
            </form>
            <p class="mt-4 text-sm text-center text-gray-600">
                ¿Ya tienes una cuenta? 
                <router-link to="/login" class="text-blue-600 hover:underline">Iniciar Sesión</router-link>
            </p>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

// Variables reactivas para el formulario
const dni = ref<string>('')
const name = ref<string>('')
const email = ref<string>('')
const phoneNumber = ref<string>('')
const password = ref<string>('')
const passwordConfirm = ref<string>('')

// Función para manejar el envío del formulario
function handleSubmit() {
  console.log('Enviando datos:', {
    name: name.value,
    email: email.value,
    password: password.value
  })

  // Aquí podrías agregar validación o enviar a una API, etc.
}
</script>