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

.profile span {
    font-size: 14px;
    color: #fff;
}
</style>
