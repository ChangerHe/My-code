import React from 'react'

var Life0 = React.createClass({
  // 初始化属性值: 在生命周期之前执行(实际上是在引入组件时执行)
  getDefaultProps() {
    console.log('初始化前执行.....')
  },
  getInitialState() {
    console.log('初始化状态值......')
    return {str: '状态是打开的'}
  },
  componentWillMount() {
    console.log('渲染前执行......')
  },
  componentDidMount() {
    console.log('组件渲染之后执行......')
  },
  componentWillReceiveProps() {
    console.log('组件重新渲染......')
  },
  render() {
    console.log('组件正在渲染......')
    return (
      <div>
        <h1>{this.props.title}-----{this.state.str}</h1>
        <input type='button' value='change state' onClick={this.changeState}/>
      </div>
    )
  },
  changeState() {
    this.setState({
      str: this.state.str === '状态改变了11111' ? '状态是打开的11111' : '状态改变了11111'
    })
  }

})

export default Life0
