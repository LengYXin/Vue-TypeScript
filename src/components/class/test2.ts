import Vue from 'vue'
import Component from 'vue-class-component'
// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
  // 所有的组件选项都可以放在这里
  template: `
  <div>
  <p>Class Template 组件</p>
  <span>{{count}}</span>
  <input type="text" v-model="count">
  <button @click="onClick">{{message}}</button>
  </div>
  `
})
export default class  extends Vue {
  // 初始数据可以直接声明为实例的属性
  message = 'Hello!'
  count=0
  // 组件方法也可以直接声明为实例的方法
  onClick() {
    this.count++;
    // window.alert(this.message)
  }
}