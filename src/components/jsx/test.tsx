import Vue from 'vue'
import Component from 'vue-class-component'
import "./style.css"
// @Component 修饰符注明了此类为一个 Vue 组件
@Component({})
export default class extends Vue {
  message = "JSX 组件";
  conut = 0;
  click(e) {
    this.conut++;
    console.log(e);
  }
  sync(prop, value) {
    this[prop] = value
  }
  list: { id: number, name: string, age: number }[] = [];
  loading = false;
  // 组件方法也可以直接声明为实例的方法
  getList() {
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
  render(h) {
    return (
      <div class="aaaaaaa">
        <p>{this.message}</p>
        <input type="text" value={this.conut} on-input={(e) => this.sync('conut', e.target.value)} />
        <button onClick={this.click}>Add {this.conut}</button>
        <span>{this.message}</span> world!

        <div>
          <table style="border: 1px solid red;width: 300px">
            <tr style="border: 1px solid red">
              <td>id</td>
              <td>name</td>
              <td>age</td>
            </tr>
            {/* 数据 */}
            {/* {this.list.map(t => <tr  >
              <td style="border: 1px solid red">{t.id}</td>
              <td style="border: 1px solid red">{t.name}</td>
              <td style="border: 1px solid red">{t.age}</td>
            </tr>)} */}
            <el-table
             v-loading={this.loading}
              data={this.list}
              style="width: 100%">
              <el-table-column
                prop="id"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="age"
                label="地址">
              </el-table-column>
            </el-table>
            {/* loading */}
            {/* {this.loading ? <tr >
              <td colspan="3" style="text-align: center;color: red">Loading...</td>
            </tr> : null} */}
          </table>
          <button on-click={this.getList}>获取数据</button>
        </div>
      </div>
    )
  }
}