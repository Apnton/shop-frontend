import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import components from '@/components/UI'


const app = createApp(App);
const pinia = createPinia()

components.forEach((item) => {
    app.component(item.name, item.component)
})

app
    .use(router)
    .use(pinia)
    .mount('#app')
