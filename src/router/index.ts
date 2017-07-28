import Vue from 'vue'
import Router from 'vue-router'
import components from '../components'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: components.Hello
    },
    {
      path: '/Hello2',
      name: 'Hello2',
      component: components.Hello2
    }
  ]
})
