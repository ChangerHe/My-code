import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

// import App from './components/list'
import Main from './components/Main'
import About from './components/About'
import News from './components/News'

// ReactDOM.render(<App/>, document.getElementById('app'));

ReactDOM.render(
  <Router history = {hashHistory} >
    {/* <Route path="/index" component={Index}></Route> */}
    <Route path="/main" component={Main}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/news" component={News}></Route>
  </Router>, document.getElementById('app')
)
