import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

// var Gello = require('./components/Gello')
// import List from './components/List'

// import Life1 from './components/life1'
// import Life2 from './components/life2'
// import Life3 from './components/life3'
import App,{a} from './components/es6com'

// var App = React.createClass({
//   changeCom() {
//     console.log(ReactDOM.render(<Life2 />))
//   },
//   componentDidMount() {
//     // console.log(this.refs.thisCom)
//   },
//   render() {
//     var title = this.props.title
//     return (
//       <div>
//         <div ref='thisCom' > <Com title={title} /></div >
//         <input type='button' value='改变组件' onClick={this.changeCom} />
//       </div >
//     )
//   }
// })

console.log(a)

ReactDOM.render(<App title='没失踪没失踪'/>, document.getElementById('app'));

// 两秒后修改,
// setTimeout(function() {
//   ReactDOM.render(<App title='失踪失踪'/>, document.getElementById('app'));
// }, 2000);
