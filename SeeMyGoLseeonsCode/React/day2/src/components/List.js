import React from 'react'

class List extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <a href="#/index" onClick={this.getRoute}>去首页</a>&nbsp;
        <a href="#/news" onClick={this.getRoute}>去新闻中心</a>&nbsp;
        <a href="#/concat" onClick={this.getRoute}>去联系我们</a>
        <div ref="hook" id='hook'></div>
      </div>
    )
  }

  getRoute(e) {
    var that = this
    var href = e.target.getAttribute('href').slice(2)
    var ajax = new XMLHttpRequest()
    ajax.open( 'get' ,'/page/' + href + '.html')
    ajax.send()
    ajax.onreadystatechange = function() {
      if(ajax.status === 200 && ajax.readyState === 4) {
        var data = ajax.responseText
        hook.innerHTML = data
      }
    }
  }

}

export default List
