import { createApp } from 'vue'
import App from './App.vue'
import VeyraUI from 'veyra'

const app = createApp(App)
app.use(VeyraUI)
app.mount('#app')
