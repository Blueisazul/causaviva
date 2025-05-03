<template>
  <div class="relative">
    <!-- Navbar dentro del fondo -->
    <NavbarSection class="absolute top-0 left-0 w-full" />
    
    <!-- Hero Start -->
    <section
      class="py-18 lg:py-36 w-full table relative bg-center bg-cover"
      :style="{ backgroundImage: `url(${bgindexone})` }"
      id="home"
    >
      <div class="absolute inset-0 bg-black opacity-80"></div>

      <div class="max-w-screen-xl mx-auto relative">
        <div class="my-8">
          <Causa class="text-white" width="300" />
        </div>
        <div class="grid grid-cols-1 my-15">
          <h4
            class="text-white lg:text-4xl text-3xl lg:leading-normal leading-normal font-medium mb-7 position-relative"
          >
            Lorem ipsum dolor sit amet,<br />consectetur adipiscing
            <a class="text-amber-300/90">
              <span
                class="typewrite relative text-type-element"
                ref="typedText"
              ></span>
            </a>
          </h4>
        </div>
      </div>
    </section>
    <!-- Hero End -->
  </div>
</template>

<script>
import NavbarSection from '../components/NavbarSection.vue';
import FooterSection from '../components/FooterSection.vue';
import bgindexone from '../assets/images/bgindexone.jpg';
import Causa from '../icons/Causa.vue';
import Typed from 'typed.js';

export default {
  name: 'SectionOne',
  components: {
    NavbarSection,
    FooterSection,
    Causa,
    Typed,
  },
  data() {
    return {
      typed: null,
      bgindexone,
    };
  },
  mounted() {
    this.setupTyped();
  },
  methods: {
    setupTyped() {
      const options = {
        strings: [
          'despierta conciencias',
          'cambia destinos',
          'inspira futuros',
          'construye un legado',
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      };

      this.typed = new Typed(this.$refs.typedText, options);
    },
  },
};
</script>
