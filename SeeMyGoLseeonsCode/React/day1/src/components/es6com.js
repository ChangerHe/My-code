// 需求: 基于ES6语法实现React的生命周期及双向绑定

import React,{Component} from 'react'

class Com extends Component{
  constructor() {
    super()
    this.state = {
      value: 'test value'
    }
    // 因为在ES6 class环境下的this并非指向其上级的作用域
    this.changeValue = this.changeValue.bind(this)
  }
  render() {
    return (
       <div>
          <p><label htmlFor='username'>姓名: </label><input type='text' id='username' value={this.state.value} onChange={this.changeValue} /></p>
          <p><label htmlFor='email'>邮箱: </label><input type='text' id='email' defaultValue={this.state.value} /></p>
          <p><input type='button' value='老板点我' /></p>
         <h1>{this.state.value}</h1>
       </div>
    )
  }
  changeValue(e) {
    this.setState({
      value: e.target.value
    })
    console.log(e.target.value)
  }
}

export default Com
// 通过暴露多个对象, 可以实现对应的暴露, 在父组件中通过解构赋值的方式可以实现调用
export var a = 10
