<template>
<div class="sidebar h-screen w-64 flex flex-col overflow-y-auto transition-all duration-300 bg-gradient-to-b from-blue-900 to-blue-800 shadow-xl">
    <!-- Logo/Header -->
    <div class="p-6 mb-2 flex justify-center items-center">
        <Causa class="text-white" width="120" />
    </div>

    <!-- Menú Principal -->
    <div class="flex flex-col px-2 py-2 space-y-1">
        <template v-for="(item, index) in mainMenuItems" :key="index">
            <router-link 
                :to="item.to"
                class="flex items-center gap-3 text-white px-4 py-3 rounded hover:bg-white/30 transition-colors duration-200"
                active-class="bg-cyan-700/50"
            >
                <i :class="item.icon + ' text-lg'"></i>
                <span>{{ item.label }}</span>
            </router-link>
        </template>
    </div>
    
    <!-- Espacio inferior -->
    <div class="flex-1"></div>
    
    <!-- Menú Secundario (Perfil y Configuración) -->
    <div class="flex flex-col px-2 py-2 space-y-1 border-t border-blue-700/50">
        <template v-for="(item, index) in secondaryMenuItems" :key="index">
            <router-link 
                :to="item.to"
                class="flex items-center gap-3 text-white px-4 py-3 rounded hover:bg-white/30 transition-colors duration-200"
                active-class="bg-blue-700/50"
            >
                <i :class="item.icon + ' text-lg'"></i>
                <span>{{ item.label }}</span>
            </router-link>
        </template>
    </div>
    
    <!-- Perfil -->
    <div class="p-4">
        <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                {{ getUserInitials() }}
            </div>
            <div>
                <p class="text-sm font-medium text-white">Organización</p>
                <p class="text-xs text-blue-200">Administrador</p>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import LoginService from '../../services/LoginService';
import Causa from '../../icons/Causa.vue';

const mainMenuItems = ref([]);
const secondaryMenuItems = ref([]);
const router = useRouter();

async function loadMenu() {
    try {
        const idUser = localStorage.getItem('organizationId');
        if (!idUser) {
            console.error('No se encontró idUser en localStorage');
            return;
        }
        const response = await LoginService.OrganizationLogin(idUser);
        
        // Separamos los últimos 2 elementos para el menú secundario
        const allItems = response.data.menus.map(menu => ({
            label: menu.nombre,
            icon: menu.icono,
            to: menu.ruta
        }));
        
        // Los últimos 2 elementos van al menú secundario
        secondaryMenuItems.value = allItems.slice(-2);
        // El resto al menú principal
        mainMenuItems.value = allItems.slice(0, -2);
        
        console.log('Menús principales cargados:', mainMenuItems.value);
        console.log('Menús secundarios cargados:', secondaryMenuItems.value);
    } catch (error) {
        console.error('Error al cargar los menús:', error);
    }
}

function getUserInitials() {
    return 'O'; // Por "Organización"
}

onMounted(() => {
    loadMenu();
});
</script>

<style scoped>
.sidebar {
    scrollbar-width: thin;
    scrollbar-color: rgba(255,255,255,0.2) transparent;
}

.sidebar::-webkit-scrollbar {
    width: 6px;
}

.sidebar::-webkit-scrollbar-track {
    background: transparent;
}

.sidebar::-webkit-scrollbar-thumb {
    background-color: rgba(255,255,255,0.2);
    border-radius: 3px;
}

.router-link-active {
    background-color: rgba(99, 102, 241, 0.5);
}
</style>