<template>
    <!-- Navbar Start -->
    <nav id="navbar" class="w-full bg-white dark:bg-slate-900 shadow-sm fixed top-0 z-50">
        <div class="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">


            <!-- Botón de menú en móvil -->
            <button onclick="toggleMenu()" class="lg:hidden text-gray-800 dark:text-white focus:outline-none">
                <span class="sr-only">Abrir menú</span>
                ☰
            </button> <!-- camibar icono-->

            <!-- Menú -->
            <div id="menu-collapse" class="hidden w-full lg:flex lg:w-auto mt-4 lg:mt-0">
                <ul class="flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0 text-gray-800 dark:text-white">
                    <li><a href="#home" onclick="scrollToSection('#home')" class="hover:text-orange-600">Home</a></li>
                    <li><a href="#about" onclick="scrollToSection('#about')" class="hover:text-orange-600">About Us</a></li>
                    <li><a href="#features" onclick="scrollToSection('#features')" class="hover:text-orange-600">Services</a></li>
                    <li><a href="#portfolio" onclick="scrollToSection('#portfolio')" class="hover:text-orange-600">Portfolio</a></li>
                    <li><a href="#testi" onclick="scrollToSection('#testi')" class="hover:text-orange-600">Review</a></li>
                    <li><a href="#pricing" onclick="scrollToSection('#pricing')" class="hover:text-orange-600">Pricing</a></li>
                    <li><a href="#blog" onclick="scrollToSection('#blog')" class="hover:text-orange-600">Blog</a></li>
                    <li><a href="#contact" onclick="scrollToSection('#contact')" class="hover:text-orange-600">Contact Us</a></li>
                </ul>
            </div>
                    <!-- Usuario -->
            <div class="flex items-center space-x-2">
                <a href="#" class="p-2 rounded-full bg-orange-600 hover:bg-orange-700 text-white">Conectarse</a>
                <a href="#" class="p-2 rounded-full bg-orange-600 hover:bg-orange-700 text-white">Registrarse</a>
            </div>
        </div>
    </nav>
    <!-- Navbar End -->
</template>
<script>

export default {
    name: 'NavbarSection',
    data() {
        return {
            active: '#home'
        }
    },
    created() {
        document.documentElement.classList.add('light');
        document.documentElement.setAttribute('dir', 'ltr');

        var bodyElement = document.body;
        bodyElement.classList.add('font-rubik', 'text-base', 'text-slate-900', 'dark:text-white', 'dark:bg-slate-900');

        window.addEventListener('scroll', (ev) => {
            ev.preventDefault();
            const navbar = document.getElementById("navbar");
            if (
                document.body.scrollTop >= 50 ||
                document.documentElement.scrollTop >= 50
            ) {
                navbar.classList.add("is-sticky");
            } else {
                navbar.classList.remove("is-sticky");
            }


            var mybutton = document.getElementById("back-to-top");
            if (mybutton != null) {
                if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                    mybutton.classList.add("block");
                    mybutton.classList.remove("hidden");
                } else {
                    mybutton.classList.add("hidden");
                    mybutton.classList.remove("block");
                }
            }
        });
    },
    methods: {
        ScrollIntoView(elem) {
            this.active = elem;
            let ele = document.querySelector(elem);
            ele.scrollIntoView({ behavior: 'smooth', block: 'start' });
        },
        toggleMenu() {
            let ele = document.getElementById('menu-collapse');
            ele.classList.toggle('hidden');
        }
    }
}

</script>