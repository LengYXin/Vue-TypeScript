import Vue from 'vue'
import Router from 'vue-router'
// import components from '../components'
import test1 from "./components/class/test1"
import test2 from "./components/class/test2"
import jsxTest from './components/jsx/test';
import vueTest from './components/vue/test.vue';

// console.log(tsx)
// Vue.use(Router)
export default new Router({
  mode: 'history',
    routes: [
      {
        path: '/class1',
        name: 'class1',
        component: test1
      },
      {
        path: '/class2',
        name: 'class2',
        component: test2
      },
      {
        path: '/tsx',
        name: 'tsx',
        component: jsxTest
      },
      {
        path: '/vueTest',
        name: 'vueTest',
        component: vueTest
      }
    ]
  })
