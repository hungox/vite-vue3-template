import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import { key, store } from '@/store'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router).use(store, key).use(ElementPlus).mount('#app')
