import Vue from 'vue'
import Router from 'vue-router'
// import components from '../components'
import test1 from "./components/class/test1"
import test2 from "./components/class/test2"
import jsxTest from './components/jsx/test';
import vueTest from './components/vue/test.vue';
import Login from './Login.vue';
import App from './App.vue';

// console.log(tsx)
// Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "",
      component: App,
      // beforeEnter: (to, from, next) => {
      //   console.log(to, from);
      //   next("login");
      // },
      children: [
        {
          path: '/class1',
          name: 'class1',
          component: test1,
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
    },

    // 懒加载 但是 css 提取有问题
    // {
    //   path: '/class1',
    //   name: 'class1',
    //   component: () => import("./components/class/test1")
    // },
    // {
    //   path: '/class2',
    //   name: 'class2',
    //   component: () => import("./components/class/test2")
    // },
    // {
    //   path: '/tsx',
    //   name: 'tsx',
    //   component: () => import("./components/jsx/test")
    // },
    // {
    //   path: '/vueTest',
    //   name: 'vueTest',
    //   component: () => import("./components/vue/test.vue")
    // }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to,from);
  next();
})
export default router