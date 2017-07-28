import Vue from 'vue'
import Component from 'vue-class-component'
import template from './template.html'
import './Hello2.css'
// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
  // 所有的组件选项都可以放在这里
  template: template
})
export default class extends Vue {
  // 初始数据可以直接声明为实例的属性
  message: string = 'Hello22222222!'
  // 组件方法也可以直接声明为实例的方法
  onClick(): void {
    window.alert(this.message)
  }
}