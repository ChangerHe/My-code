import React from 'react'

// var data =

var List = React.createClass({
  // 设置状态的默认值
  getInitialState() {
    return {data: []}
  },
  render() {
    var datas = this.state.data
    return (
      <ul>
        {datas.map((v, i) => {
          return <li key={i}>{v.name}</li>
        })}
      </ul>
    )
  },
  componentDidMount() {
    var that = this
    var ajax = new XMLHttpRequest()
    ajax.open('get', '/components/data/user.json')
    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4 && ajax.status == 200) {
        var data = JSON.parse(ajax.responseText)
        console.log(typeof data)
        that.setState({ data })
      }
    }
    ajax.send()
  }
})


module.exports = List
