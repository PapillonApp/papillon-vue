import { createApp } from 'vue'
import router from './router'

import App from './App.vue'

import VWave from 'v-wave'

import './assets/base.css'
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.use(VWave, {
    duration: 0.2,
    dissolveDuration: 0.2,
})

app.mount('#app')