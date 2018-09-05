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
    <el-menu
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>
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
<transition name="el-fade-in-linear" mode="out-in">
      <router-view></router-view>
</transition>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import router from "./routers";
export default {
  name: "App",
  created() {
    console.log("router", this);
  }
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  position: relative;
  height: 100%;
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
