<template>
<el-container >
  <el-aside width="200px" style="background-color: rgb(238, 241, 246);height:100vh">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <router-link to="/class1"><el-menu-item index="1-1">
           路由 class1
          </el-menu-item>
          </router-link>
          <router-link to="/class2">
          <el-menu-item index="1-2">
            路由 class2
          </el-menu-item>
          </router-link>
          <router-link to="/tsx">
          <el-menu-item index="1-3">
            路由 tsx
          </el-menu-item>
          </router-link>
          <router-link to="/vueTest">
          <el-menu-item index="1-4">
            路由 vueTest
          </el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container style="height:100vh">
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import router from "./routers";
export default {
  name: "App",
  created() {
    console.log("router", router);
  }
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
