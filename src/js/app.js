var $ = require('jquery');
var React = require('react');
var _ = require('lodash');

var TodoList = require('./components/todo-list.jsx');
var TodoApp = require('./components/todos-app.jsx');

$(function() {

  React.render(<TodoApp />, document.getElementById('container'));
});
