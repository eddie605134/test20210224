import { createApp } from 'vue'
import Apps from './Apps.vue'
import router from './router'
import '@/assets/css/reset.css'

createApp(Apps).use(router).mount('#app')
