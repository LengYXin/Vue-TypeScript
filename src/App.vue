<template>
  <div>
  <img src="./assets/logo.png">
  <p class="app-text">路由列表</p>
  <ul>
   <li>
   <router-link to="/class1">路由 class1</router-link></li>
   <li>
   <router-link to="/class2">路由 class2</router-link>
   </li>
   <li>
   <router-link to="/tsx">路由 tsx</router-link>
   </li>
   <li>
   <router-link to="/vueTest">路由 vueTest</router-link>
   </li>
  </ul>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 .app-text{background: red}
</style>
