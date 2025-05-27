<template>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <div class="bg-gray-50 pt-20">
      <!-- Filtros -->
      <div class="max-w-6xl mx-auto px-4 py-8">
        <div class="flex flex-wrap gap-4">
          <select
            class="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option>Categoría</option>
            <option>Educación</option>
            <option>Medio Ambiente</option>
            <option>Salud</option>
          </select>
          <select
            class="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option>Ubicación</option>
            <option>Lima</option>
            <option>Arequipa</option>
            <option>Cusco</option>
          </select>
          <select
            class="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option>Modalidad</option>
            <option>Presencial</option>
            <option>Virtual</option>
            <option>Híbrido</option>
          </select>
          <button
            class="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition"
          >
            Filtrar
          </button>
          <div class="relative flex items-center">
            <input
              type="text"
              placeholder="Buscar voluntariados..."
              class="w-full py-3 px-4 rounded-lg focus:outline-none"
            />
            <button
              class="absolute right-2 bg-amber-700 text-white p-2 rounded-lg"
            >
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Listado de Voluntariados -->
    <div class="max-w-6xl mx-auto px-4 py-8">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">
        Voluntariados disponibles
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Cards generadas dinámicamente -->
        <div
          v-for="vol in voluntariados"
          :key="vol.id"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
        >
          <div class="relative">
            <img
              src="/src/assets/images/ban1.jpg"
              alt="Voluntariado"
              class="w-full h-48 object-cover"
            />
            <div
              class="absolute top-2 right-2 bg-amber-400 text-white text-xs px-2 py-1 rounded-full"
            >
              {{ vol.detalles.categoria }}
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center mb-2">
              <span class="font-semibold text-gray-700">{{ vol.organizacion.nombre }}</span>
              <span v-if="vol.organizacion.verificada" class="ml-2 text-blue-500">
                        <!-- Verificación -->
                    <svg class="w-4 h-4 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
              </span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">
              {{ vol.titulo }}
            </h3>
            <p class="text-gray-600 mb-4">
              {{ vol.descripcion }}
            </p>

            <div class="flex items-center text-gray-500 mb-4">
              <i class="fas fa-calendar-alt mr-2"></i>
              <span>
                {{ formatDate(vol.fechas.inicio) }} - {{ formatDate(vol.fechas.fin) }} ({{ vol.fechas.duracion }})
              </span>
            </div>

            <div class="flex items-center text-gray-500 mb-4">
              <i class="fas fa-map-marker-alt mr-2"></i>
              <span>{{ vol.detalles.ubicacion }}</span>
            </div>

            <div class="mb-4">
              <div class="flex justify-between text-sm text-gray-600 mb-1">
                <span>{{ vol.estadisticas.voluntarios_inscritos }} voluntarios</span>
                <span>
                  {{  
                    Math.round(
                      (vol.estadisticas.voluntarios_inscritos / vol.estadisticas.voluntarios_requeridos) * 100
                    )
                  }}% completado
                </span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-amber-400 h-2 rounded-full"
                  :style="{ width: ((vol.estadisticas.voluntarios_inscritos / vol.estadisticas.voluntarios_requeridos) * 100) + '%' }"
                ></div>
              </div>
            </div>

            <RouterLink
              to="/catalogedetalle"
              class="block w-full bg-amber-500 text-white text-center py-2 rounded-lg hover:bg-amber-700 transition"
            >
              Ver detalles
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Paginación -->
    <div class="max-w-6xl mx-auto px-4 py-8">
      <div class="flex justify-center">
        <nav class="inline-flex rounded-md shadow">
          <a
            href="#"
            class="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
          >
            <i class="fas fa-chevron-left"></i>
          </a>
          <a
            href="#"
            class="px-3 py-2 border-t border-b border-gray-300 bg-white text-amber-500 font-medium"
            >1</a
          >
          <a
            href="#"
            class="px-3 py-2 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
            >2</a
          >
          <a
            href="#"
            class="px-3 py-2 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
            >3</a
          >
          <a
            href="#"
            class="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
          >
            <i class="fas fa-chevron-right"></i>
          </a>
        </nav>
      </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      voluntariados: [
        {
          id: 1,
          titulo: "Apoyo escolar en zonas rurales",
          imagen: "/src/imagenes/ban1.jpg",
          organizacion: {
            nombre: "Unicef",
            verificada: true
          },
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi augue lacus.",
          fechas: {
            inicio: "2025-03-15",
            fin: "2025-06-15",
            duracion: "3 meses"
          },
          detalles: {
            ubicacion: "Lima, Perú",
            modalidad: "presencial",
            categoria: "Educación"
          },
          estadisticas: {
            voluntarios_requeridos: 50,
            voluntarios_inscritos: 42
          },
          enlace: "/voluntariado/1"
        },
        {
          id: 2,
          titulo: "Apoyo escolar en zonas rurales",
          imagen: "/src/imagenes/ban1.jpg",
          organizacion: {
            nombre: "Proa",
            verificada: true
          },
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi augue lacus.",
          fechas: {
            inicio: "2025-03-15",
            fin: "2025-06-15",
            duracion: "3 meses"
          },
          detalles: {
            ubicacion: "Lima, Perú",
            modalidad: "presencial",
            categoria: "Educación"
          },
          estadisticas: {
            voluntarios_requeridos: 30,
            voluntarios_inscritos: 20
          },
          enlace: "/voluntariado/2"
        },
        {
          id: 3,
          titulo: "Apoyo escolar en zonas rurales",
          imagen: "/src/imagenes/ban1.jpg",
          organizacion: {
            nombre: "Crea+",
            verificada: true
          },
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi augue lacus.",
          fechas: {
            inicio: "2025-03-15",
            fin: "2025-06-15",
            duracion: "3 meses"
          },
          detalles: {
            ubicacion: "Lima, Perú",
            modalidad: "presencial",
            categoria: "Educación"
          },
          estadisticas: {
            voluntarios_requeridos: 40,
            voluntarios_inscritos: 35
          },
          enlace: "/voluntariado/3"
        },
        {
          id: 4,
          titulo: "Apoyo escolar en zonas rurales",
          imagen: "/src/imagenes/ban1.jpg",
          organizacion: {
            nombre: "Destellos",
            verificada: false
          },
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi augue lacus.",
          fechas: {
            inicio: "2025-03-15",
            fin: "2025-06-15",
            duracion: "3 meses"
          },
          detalles: {
            ubicacion: "Lima, Perú",
            modalidad: "presencial",
            categoria: "Educación"
          },
          estadisticas: {
            voluntarios_requeridos: 50,
            voluntarios_inscritos: 42
          },
          enlace: "/voluntariado/4"
        },
        {
          id: 5,
          titulo: "Apoyo escolar en zonas rurales",
          imagen: "/src/imagenes/ban1.jpg",
          organizacion: {
            nombre: "Destellos",
            verificada: false
          },
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi augue lacus.",
          fechas: {
            inicio: "2025-03-15",
            fin: "2025-06-15",
            duracion: "3 meses"
          },
          detalles: {
            ubicacion: "Lima, Perú",
            modalidad: "presencial",
            categoria: "Educación"
          },
          estadisticas: {
            voluntarios_requeridos: 30,
            voluntarios_inscritos: 26
          },
          enlace: "/voluntariado/5"
        },
        {
          id: 6,
          titulo: "Apoyo escolar en zonas rurales",
          imagen: "/src/imagenes/ban1.jpg",
          organizacion: {
            nombre: "ONG Astaletum",
            verificada: false
          },
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi augue lacus.",
          fechas: {
            inicio: "2025-03-15",
            fin: "2025-06-15",
            duracion: "3 meses"
          },
          detalles: {
            ubicacion: "Lima, Perú",
            modalidad: "presencial",
            categoria: "Educación"
          },
          estadisticas: {
            voluntarios_requeridos: 30,
            voluntarios_inscritos: 26
          },
          enlace: "/voluntariado/6"
        }
      ]
    };
  },
  methods: {
    formatDate(dateStr) {
      const options = { day: "2-digit", month: "short" };
      const date = new Date(dateStr);
      return date.toLocaleDateString("es-PE", options);
    }
  }
};
</script>