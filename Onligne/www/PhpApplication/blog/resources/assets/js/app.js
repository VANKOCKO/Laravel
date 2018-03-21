import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)


import App from './components/App'
import chartComponent from './components/Chart'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/chart',
            name: 'chart',
            component: chartComponent,
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
