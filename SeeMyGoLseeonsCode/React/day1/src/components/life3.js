import React from 'react'

var Life0 = React.createClass({
  // 初始化属性值: 在生命周期之前执行(实际上是在引入组件时执行)
  getDefaultProps() {
    console.log('0.1初始化前执行.....')
    return {title: '默认title'}
  },
  getInitialState() {
    console.log('1.1初始化状态值......')
    return {str: '状态是打开的'}
  },
  componentWillMount() {
    console.log('1.2渲染前执行......')
  },
  render() {
    console.log('1.3/2.4组件正在渲染......')
    return (
      <div>
        <h1>{this.props.title}-----{this.state.str}</h1>
        <input type='button' value='change state' onClick={this.changeState}/>
      </div>
    )
  },
  componentDidMount() {
    console.log('1.4组件渲染之后执行......')
  },
  componentWillReceiveProps(newProps) {
    console.log('2.1组件重新渲染......')
    // 因为是属性被修改前被触发, 所以这里打印出来的还是老的属性
    console.log('老的属性: ',this.props.title)
    console.log('新的属性: ',newProps.title)
  },
  shouldComponentUpdate() {
    console.log('2,2判断属性是否应该被渲染......')
    return true
  },
  componentWillUpdate() {
    console.log('2.3组件即将渲染......')
  },
  componentDidUpdate() {
    console.log('2.5组件渲染成功......')
  },
  componentWillUnmount() {
    console.log('3.1组件将要被销毁......')
  },
  changeState() {
    this.setState({
      str: this.state.str === '状态改变了22222' ? '状态是打开的2222' : '状态改变了2222'
    })
  }

})

export default Life0
