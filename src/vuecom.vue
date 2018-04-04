<template>
  <div>
    哈哈哈哈我是VUE组件
    <input type="text" v-model="name">
    <span>{{name}}</span>
    <button @click="add">点击按钮</button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      name: 1
    };
  },
  methods: {
    add() {
      this.name++;
      console.log("哈哈哈");
    }
  }
};
</script>

<style>

</style>
