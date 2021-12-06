import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


createApp(App).use(store).mount('#app')