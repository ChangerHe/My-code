import React from 'react'
import style from '../styles/globalStyle.css'

var on = {background: '#000'}
var off = {background: '#fff'}

// 开关组件
var Switch = React.createClass({
  getInitialState() {
    return {stat: false}
  },
  editState() {
    console.log(this.state.stat)
    this.setState({
      stat: !this.state.stat
    })
  },
  render() {
    return (
      <div id="childStyle" style={this.state.stat ? on : off}>
        <input type='button' onClick={this.editState} value={this.state.stat ? 'on' : 'off'}/>
      </div>
    )
  }
})

module.exports = Switch
