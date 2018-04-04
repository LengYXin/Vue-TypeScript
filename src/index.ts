import Vue from 'vue'
import Router from 'vue-router'
import router from "./routers"
import template from "./template.html"
Vue.config.productionTip = false
Vue.use(Router)
/* eslint-disable no-new */
new Vue({
  el: '#AppStart',
  router,
  template
//   template: `
//   <div>
//   <img src="/assets/logo.png">
//   <ul>
//    <li>
//    <router-link to="/Hello">路由 Hello</router-link></li>
//    <li>
//    <router-link to="/hello2">路由 hello2</router-link>
//    </li>
//    <li>
//    <router-link to="/tsx">路由 tsx</router-link>
//    </li>
//    <li>
//    <router-link to="/vuecom">路由 vuecom</router-link>
//    </li>
//   </ul>
  
  
//   <router-view></router-view>
// </div>
//   `,
  // components: { Help }
})
