import { createApp } from 'vue'
import router from './router'
import VWave from 'v-wave'

import App from './App.vue'

import './assets/base.css'
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(VWave)

app.mount('#app')
