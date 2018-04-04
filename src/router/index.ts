import Vue from 'vue'
import Router from 'vue-router'
// import components from '../components'
import Hello from "../components/Hello/component"
import Hello2 from "../components/Hello2/component"

Vue.use(Router)
let rot:any={
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
  ]
}
export default new Router(rot)
