import { createApp } from 'vue'
import App from './App.vue'
import HelloWorld from './components/InBuilt/HelloWorld.vue'
import TheLogin from './components/TheLogin/TheLogin.vue'
import router from './router.js'

const app = createApp(App)
app.component('hello-world', HelloWorld)
app.component('the-login', TheLogin)
app.use(router)
app.mount('#app')
