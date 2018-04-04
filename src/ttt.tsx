import Vue from 'vue'
import Component from 'vue-class-component'
// @Component 修饰符注明了此类为一个 Vue 组件
@Component({})
export default class extends Vue {
  message = "嘻嘻嘻嘻嘻嘻嘻";
  conut = 0;
  click(e) {
    this.conut++;
    console.log(e);
  }
  sync (prop, value) {
    this[prop] = value
  }
  render(h) {
    return (
      <div class="aaaaaaa">
        <p>哈哈哈啊哈哈哈{this.message}</p>
        <input type="text" value={this.conut}  on-input={(e) => this.sync('conut', e.target.value)}/>
        <button onClick={this.click}>按钮 {this.conut}</button>

        <span>{this.message}</span> world!
      </div>
    )
  }
}