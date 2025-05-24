<template>
<div class="flex flex-col gap-5 py-6 px-5">
  <!-- Fila 1: dos elementos (2/3 y 1/3) -->
  <div class="flex gap-5 h-90">
    <!-- div1: 2/3 - Video principal - Animación tipo máquina de escribir -->
    <div class="basis-2/3 relative overflow-hidden rounded-xl">
      <video
        src="/src/assets/videos/vbanner1.mp4"
        class="w-full h-full object-cover"
        autoplay
        loop
        muted
        playsinline
      ></video>

      <div class="absolute inset-0 bg-black opacity-40"></div>

      <div
        class="absolute inset-0 flex items-center justify-center pointer-events-none p-8"
      >
        <div class="text-center space-y-4">
          <h3 class="text-4xl font-bold text-white animate-typewriter">
            Conoce a nuestros <span class="text-gold-400">aliados estratégicos</span>
          </h3>
          <p class="text-xl text-white opacity-90 animate-underline-expand">
            Descubre cómo juntos estamos creando un impacto positivo y duradero
          </p>
        </div>
      </div>
    </div>

    <!-- div2: 1/3 - Video secundario - Animación de palabras que flotan -->
    <div class="basis-1/3 relative overflow-hidden rounded-xl">
      <video
        src="/src/assets/videos/vbanner1.mp4"
        class="w-full h-full object-cover"
        autoplay
        loop
        muted
        playsinline
      ></video>

      <div class="absolute inset-0 bg-black opacity-30"></div>

      <div
        class="absolute inset-0 flex items-center justify-center pointer-events-none p-6"
      >
        <div class="text-center space-y-8">
          <p class="text-2xl font-medium text-white">
            <span class="inline-block animate-float-word-1">Innovación</span>
            <span class="inline-block animate-float-word-2">constante</span>
            <span class="inline-block animate-float-word-3">y resultados</span>
            <span class="inline-block animate-float-word-4">tangibles</span>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Fila 2: dos elementos (1/4 y 3/4) -->
  <div class="flex gap-5 h-90">
    <!-- div3: 1/4 - Video terciario - (Manteniendo tu animación favorita) -->
    <div class="basis-1/4 relative overflow-hidden rounded-xl">
      <video
        src="/src/assets/videos/vbanner1.mp4"
        class="w-full h-full object-cover"
        autoplay
        loop
        muted
        playsinline
      ></video>

      <div class="absolute inset-0 bg-black opacity-30"></div>

      <div
        class="absolute inset-0 flex items-center justify-center pointer-events-none p-4"
      >
        <div class="text-center relative h-12 w-full">
          <p class="text-2xl text-white font-light animate-rotate-words">
            <span class="absolute inset-0 flex items-center justify-center">Colaboración</span>
            <span class="absolute inset-0 flex items-center justify-center">Innova</span>
            <span class="absolute inset-0 flex items-center justify-center">Impacto</span>
            <span class="absolute inset-0 flex items-center justify-center">Resultados</span>
          </p>
        </div>
      </div>
    </div>

    <!-- div4: 3/4 - Video destacado - Animación de revelado con degradado -->
    <div class="basis-3/4 relative overflow-hidden rounded-xl">
      <video
        src="/src/assets/videos/vbanner1.mp4"
        class="w-full h-full object-cover"
        autoplay
        loop
        muted
        playsinline
      ></video>

      <div
        class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"
      ></div>

      <div
        class="absolute inset-0 flex items-center justify-start pointer-events-none pl-12 pr-24"
      >
        <div class="text-left max-w-2xl">
          <h3
            class="text-5xl font-bold text-white mb-6 animate-gradient-text"
          >
            Historias que transforman
          </h3>
          <p
            class="text-xl text-white opacity-90 leading-relaxed animate-text-reveal"
          >
            Cada proyecto es una nueva oportunidad para crear valor compartido
          </p>
          <div class="mt-8 animate-pulse-slow">
            <span
              class="inline-block px-6 py-3 bg-white/20 text-white rounded-full text-lg font-medium"
            >
              Conoce más
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Fila 3: sponsors -->
  <div class="w-full animate-fade-in-long">
    <Sponsors />
  </div>
</div>
</template>

<script>
import Sponsors from "../components/Sponsors.vue";
export default {
  name: "SectionThree",
  components: {
    Sponsors,
  },
};
</script>

<style>
/* Animación para video principal - Efecto máquina de escribir */
@keyframes typewriter {
  from { width: 0 }
  to { width: 100% }
}
@keyframes blinkCursor {
  from, to { border-color: transparent }
  50% { border-color: rgba(255, 255, 255, 0.75) }
}
.animate-typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid rgba(255, 255, 255, 0.75);
  animation: 
    typewriter 3.5s steps(40) 1s 1 normal both,
    blinkCursor 750ms steps(40) infinite;
}

/* Animación para subtítulo del video principal - Subrayado que se expande */
@keyframes underlineExpand {
  0% { background-size: 0% 2px; }
  100% { background-size: 100% 2px; }
}
.animate-underline-expand {
  background: linear-gradient(to right, white, white) no-repeat;
  background-position: 0% 100%;
  background-size: 0% 2px;
  animation: underlineExpand 2s ease-in-out 4s infinite alternate;
  padding-bottom: 4px;
}

/* Animación para video secundario - Palabras que flotan independientemente */
@keyframes floatWord1 {
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-8px) rotate(2deg); }
}
@keyframes floatWord2 {
  0%, 100% { transform: translateY(0) rotate(1deg); }
  50% { transform: translateY(-10px) rotate(-1deg); }
}
@keyframes floatWord3 {
  0%, 100% { transform: translateY(0) rotate(-1.5deg); }
  50% { transform: translateY(-6px) rotate(1.5deg); }
}
@keyframes floatWord4 {
  0%, 100% { transform: translateY(0) rotate(2deg); }
  50% { transform: translateY(-12px) rotate(-2deg); }
}
.animate-float-word-1 { animation: floatWord1 4s ease-in-out infinite; }
.animate-float-word-2 { animation: floatWord2 5s ease-in-out infinite 0.5s; }
.animate-float-word-3 { animation: floatWord3 3.5s ease-in-out infinite 0.7s; }
.animate-float-word-4 { animation: floatWord4 4.5s ease-in-out infinite 1s; }

/* Animación para video terciario - Manteniendo la original que te gusta */
@keyframes rotateWords {
  0%, 15% { opacity: 0; transform: translateY(15px); }
  20%, 30% { opacity: 1; transform: translateY(0); }
  35%, 100% { opacity: 0; transform: translateY(-15px); }
}
.animate-rotate-words span {
  animation: rotateWords 12s linear infinite;
}
.animate-rotate-words span:nth-child(2) { animation-delay: 3s; }
.animate-rotate-words span:nth-child(3) { animation-delay: 6s; }
.animate-rotate-words span:nth-child(4) { animation-delay: 9s; }

/* Animación para video destacado - Texto con degradado animado */
@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradient-text {
  background: linear-gradient(90deg, #ffffff, #f9d423, #ffffff);
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: gradientFlow 8s linear infinite;
}

/* Animación de revelado para el párrafo */
@keyframes textReveal {
  0% { clip-path: inset(0 100% 0 0); }
  100% { clip-path: inset(0 0 0 0); }
}
.animate-text-reveal {
  animation: textReveal 2s ease-out infinite alternate;
}

/* Animación para el botón */
@keyframes pulseSlow {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
}
.animate-pulse-slow {
  animation: pulseSlow 4s ease-in-out infinite;
}

/* Animación para sponsors */
@keyframes fadeInLong {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-long {
  animation: fadeInLong 2s ease-out both;
}
</style>

