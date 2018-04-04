import Vue from 'vue'
import Component from 'vue-class-component'
// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
  // 所有的组件选项都可以放在这里
  template: '<button @click="onClick">{{message}}</button>'
})
export default class Hello extends Vue {
  // 初始数据可以直接声明为实例的属性
  message = 'Hello!'
  // 组件方法也可以直接声明为实例的方法
  onClick() {
    window.alert(this.message)
  }
  
}