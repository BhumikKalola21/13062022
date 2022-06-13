import HelloWorld from './components/InBuilt/HelloWorld.vue'
import TheLogin from './components/TheLogin/TheLogin.vue'
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/login',
            component: TheLogin
        },
        {
            path: '/hello',
            component: HelloWorld
        }
    ]
})

export default router;
