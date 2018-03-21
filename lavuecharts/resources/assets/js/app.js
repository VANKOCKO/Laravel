import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import App from './components/App'
import AddComponent from './components/AddComponent'

const router = new VueRouter({
    mode: 'history',
    routes: [
     
        {
            path: '/coin',
            name: 'coin',
            component: AddComponent,
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
