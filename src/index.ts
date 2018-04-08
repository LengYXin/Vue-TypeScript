import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import router from "./routers"
import App from "./App.vue"
Vue.config.productionTip = false;
Vue.use(Router);
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#AppStart',
  router,
  render(h) {
    return h(App);
  },
})
