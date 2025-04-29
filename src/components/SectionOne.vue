<template>
  <div>
    <NavbarSection />
     <!-- Hero Start -->
     <section class="py-36 lg:py-64 w-full table relative bg-center bg-cover" :style="{ backgroundImage: `url(${bgindexone})` }" id="home">
            <div class="absolute inset-0 bg-black opacity-80"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 mt-12">
                    <h4 class="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">Providing Brilliant Ideas <br>For Your <span class="typewrite relative text-type-element" ref="typedText" data-type='[ "Business", "Startups", "Digital Agency", "Marketing" ]'></span></h4>
                
                    <p class="text-white opacity-50 mb-0 max-w-2xl text-lg">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>
                
                    <div class="relative mt-10">
                        <a href="" class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">Get Started</a>
                    </div>
                </div>
            </div><!--end container-->
        </section><!--end section-->
        <!-- Hero End -->

    <AboutSection />
    <ServiceSection />
    <PortfolioSection />
    <TestimonialSection />
    <PricingSection />
    <TeamSection />
    <BlogSection />
    <ContactSection />
    <FooterSection />
    <SwitcherSection />
  </div>
</template>
<script>
import NavbarSection from '../components/NavbarSection.vue';
import FooterSection from '../components/FooterSection.vue';
import bgindexone from '../assets/images/bgindexone.jpg';

export default {
  name: 'SectionOne',
  components: {
    NavbarSection,
    FooterSection,
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
        strings: ["Business", "Startups", "Digital Agency", "Marketing"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      };

      this.typed = new Typed(this.$refs.typedText, options);
    },
  },
};
</script>
