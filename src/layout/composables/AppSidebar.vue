<template>
    <div class="sidebar">
        <PanelMenu :model="menuItems" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import PanelMenu from 'primevue/panelmenu';
import LoginService from '../../services/LoginService';

const menuItems = ref([]);
const router = useRouter();

async function loadMenu() {
    try {
        const idUser = localStorage.getItem('organizationId');
        if (!idUser) {
            console.error('No se encontró idUser en localStorage');
            return;
        }
        const response = await LoginService.OrganizationLogin(idUser);
        menuItems.value = response.data.menus.map(menu => ({
            label: menu.nombre,
            icon: menu.icono,
            to: menu.ruta,
            command: () => router.push(menu.ruta)
        }));
        console.log('Menús cargados:', menuItems.value);
    } catch (error) {
        console.error('Error al cargar los menús:', error);
    }
}

onMounted(() => {
    loadMenu();
});
</script>

<style scoped>
.sidebar {
    width: 250px;
    height: 100vh;
    background: #e0ae22;
    color: black;
    padding: 20px;
    overflow-y: auto;
}

.profile {
    display: flex;
    align-items: center;
    margin-top: 20px;
}

.profile img {
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
}

.sidebar::-webkit-scrollbar-thumb {
    background-color: rgba(255,255,255,0.2);
    border-radius: 3px;
}

:deep(.p-panelmenu .p-panelmenu-header .p-panelmenu-header-link) {

  background: #1e40af; /* azul tailwind (blue-900) */
  color: #fff;
  border-radius: 0.5rem;
}

:deep(.p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link) {
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    border-radius: 8px;
    color: rgba(255,255,255,0.8);
}

:deep(.p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:hover) {
    background: rgba(23, 176, 117, 0.1);
    color: white;
}

:deep(.p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-menuitem-icon) {
    color: #93c5fd;
    margin-right: 0.75rem;
}

:deep(.p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-submenu-icon) {
    color: rgba(255,255,255,0.6);
}

:deep(.p-menuitem-icon) {
    @apply text-blue-300;
}
:deep(.p-menuitem-text) {
    @apply text-white/90;
}
</style>
