import Vue from 'vue'
import Component from 'vue-class-component'
import template from './template.html'
// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
  // 所有的组件选项都可以放在这里
  template
})
export default class extends Vue {
  // 初始数据可以直接声明为实例的属性
  message = '获取数据!'
  list: { id: number, name: string, age: number }[] = [];
  loading = false;
  // 组件方法也可以直接声明为实例的方法
  onClick() {
    this.loading = true;
    setTimeout(() => {
      const list = [{
        id: Math.floor(Math.random() * 10000),
        name: "Name" + Math.floor(Math.random() * 100),
        age: Math.floor(Math.random() * 100),
      }, {
        id: Math.floor(Math.random() * 10000),
        name: "Name" + Math.floor(Math.random() * 100),
        age: Math.floor(Math.random() * 100),
      }, {
        id: Math.floor(Math.random() * 10000),
        name: "Name" + Math.floor(Math.random() * 100),
        age: Math.floor(Math.random() * 100),
      },];
      this.list = [...this.list, ...list];
      this.loading = false;
    }, 1500);
  }

}