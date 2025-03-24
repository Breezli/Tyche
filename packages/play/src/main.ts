import { createApp } from 'vue'
import App from './App.vue'
import TycheUI from 'tyche'

const app = createApp(App)
app.use(TycheUI)
app.mount('#app')
