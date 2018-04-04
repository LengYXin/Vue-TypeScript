/// <reference path="../typings/index.d.ts" />
import Vue from 'vue'
// import router from './router/index'
import App from './components/Hello/component'

import template from './template.html'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  // template
  template: `
    <App/>
  `,
    components: { App }
})
