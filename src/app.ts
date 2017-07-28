/// <reference path="../typings/index.d.ts" />
import Vue from 'vue'
import router from './router/index'
import template from './template.html'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template
  // template: `
  //   <div>
  //    <img src="/assets/logo.png">
  //    <router-link to="/Hello">路由 Hello</router-link>
  //    <router-link to="/hello2">路由 hello2</router-link>
  //    <router-view></router-view>
  //   </div>
  // `
  //   components: { App }
})
