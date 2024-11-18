import { createApp } from 'vue';
import App from './App.vue';

import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/default.css'

// Vuetify und Styles importieren
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'; // Optional: Icons für Vuetify-Komponenten
import '@fortawesome/fontawesome-free/css/all.min.css';


// Vuetify konfigurieren
const vuetify = createVuetify();

const app = createApp(App);
app.use(vuetify); // Vuetify verwenden
app.use(VueHighlightJS)
app.mount('#app');
