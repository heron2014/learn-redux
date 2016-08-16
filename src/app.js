var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

// ReactDOM.render(
//   <h1>Boilerplate</h1>,
//   document.getElementById('app'));
//
// require('./redux-example.jsx');
require('./redux-todo-example.jsx');
