import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

import App from './components/App'
import AddComponent from './components/AddComponent'
import chartComponent from './components/ChartComponent'
import CreateItem from './components/CreateItem';
import DisplayItem from './components/DisplayItem';
import EditItem from './components/EditItem';
import AjouterChart from './components/AjouterChart';

const router = new VueRouter({
    mode: 'history',
    routes: [
     
        {
            path: '/coin',
            name: 'coin',
            component: AddComponent,
        },
        {
            path: '/chart',
            name: 'chart',
            component: chartComponent,
        },
        {
            name: 'CreateItem',
            path: '/items/create',
            component: CreateItem
          },
          {
                name: 'DisplayItem',
                path: '/Items',
                component: DisplayItem
          },
          {
              name: 'EditItem',
              path: '/edit/:id',
              component: EditItem
           }
           ,
          {
              name: 'ajouterChart',
              path: '/chart/ajouter',
              component: AjouterChart
           }
    ],
});
const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
