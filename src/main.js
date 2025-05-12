import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Componentes from './primevue';
import 'primeicons/primeicons.css';

// createApp(App).mount('#app')

const app = createApp(App);
app.use(PrimeVue);

Object.entries(Componentes).forEach(([name, component]) => {
  app.component(name, component);
});

app.mount('#app');
