import React from 'react'
// import ReactDOM from 'react-dom'

var Gello = React.createClass({
  // 自定义事件处理函数
  show() {
    alert(1)
  },
  getDefaultProps() {
    return {title: '默认值', children: '我是默认的children'}
  },
  render() {
    var str = '今天星期一, 张三失踪了'
    var title = this.props.title
    return (
      <div>
        <h1 className="title" onClick={this.show} style={{ color: '#900' }}>{str}</h1>
        <label htmlFor='checkbox'>测试测试{title}{this.props.children}1111</label><input type='checkbox' name='checkbox' id='checkbox' />
      </div>
    )
  }
})

module.exports = Gello
