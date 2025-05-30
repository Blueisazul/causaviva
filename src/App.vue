<template>
  <div :class="{ 'layout': showSidebar, 'layout-no-flex': !showSidebar }">
    <Sidebar v-if="showSidebar" />
    <div :class="{ 'content': showSidebar, 'full-content': !showSidebar }">
      <router-view />
    </div>
  </div>
</template>


<script setup lang="ts">
import Sidebar from '../src/layout/composables/AppSidebar.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Define cuándo mostrar el sidebar (por ejemplo, solo en "/portal" y otras rutas privadas)
const showSidebar = computed(() => route.path.startsWith('/portal')); // Sidebar solo en portal

</script>

<style scoped>
.layout {
  width: 100%;
  height: 100vh;
  display: flex;
  /* Se activa cuando el sidebar está presente */
}

.layout-no-flex {
  width: 100%;
  height: 100vh;
  display: block;
  /* Se desactiva flex cuando el sidebar no está */
}

/* Cuando el sidebar está presente */
.content {
  width: calc(100% - 250px);
  height: 100vh;
  /* Espacio para el sidebar */
  flex: 1;
  padding: 20px;
}

/* Cuando el sidebar NO está presente */
.full-content {
  margin-left: 0;
  /* Ocupa todo el ancho */
  flex: 1;
}
</style>
