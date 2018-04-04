import Vue from 'vue'
import Router from 'vue-router'
// import components from '../components'
import Help from "./Help"
import Help2 from "./Help2"
import ttt from './ttt';
import vuecom from './vuecom.vue';

// console.log(tsx)
// Vue.use(Router)
export default new Router({
  mode: 'history',
    routes: [
      {
        path: '/Hello',
        name: 'Hello',
        component: Help
      },
      {
        path: '/Hello2',
        name: 'Hello2',
        component: Help2
      },
      {
        path: '/tsx',
        name: 'tsx',
        component: ttt
      },
      {
        path: '/vuecom',
        name: 'vuecom',
        component: vuecom
      }
    ]
  })
