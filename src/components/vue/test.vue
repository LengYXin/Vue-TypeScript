<template>
  <div>
    VUE组件
    <input type="text" v-model="name">
    <span>{{name}}</span>
    <button @click="add">点击按钮</button>

    <div>
    <table style="border: 1px solid red;width: 300px">
        <tr style="border: 1px solid red">
            <td>id</td>
            <td>name</td>
            <td>age</td>
        </tr>
        <tr v-for="t in list" :key="t.id">
            <td style="border: 1px solid red">{{t.id}}</td>
            <td style="border: 1px solid red">{{t.name}}</td>
            <td style="border: 1px solid red">{{t.age}}</td>
        </tr>
        <tr v-if="loading">
            <td colspan="3" style="text-align: center;color: red">Loading...</td>
        </tr>
    </table>
    <button @click="onClick">获取数据</button>
</div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      name: 1,
      loading: false,
      list: []
    };
  },
  methods: {
    add() {
      this.name++;
      console.log("哈哈哈");
    },
    onClick() {
      this.loading = true;
      setTimeout(() => {
        const list = [
          {
            id: Math.floor(Math.random() * 10000),
            name: "Name" + Math.floor(Math.random() * 100),
            age: Math.floor(Math.random() * 100)
          },
          {
            id: Math.floor(Math.random() * 10000),
            name: "Name" + Math.floor(Math.random() * 100),
            age: Math.floor(Math.random() * 100)
          },
          {
            id: Math.floor(Math.random() * 10000),
            name: "Name" + Math.floor(Math.random() * 100),
            age: Math.floor(Math.random() * 100)
          }
        ];
        this.list = [...this.list, ...list];
        this.loading = false;
      }, 1500);
    }
  }
};
</script>

<style>

</style>
