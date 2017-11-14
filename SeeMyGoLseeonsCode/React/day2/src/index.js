import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

var Gello = require('./components/Gello')
import List from './components/List'

ReactDOM.render(<List/>, document.getElementById('app'));
