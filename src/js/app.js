var $ = require('jquery');
var React = require('react');
var _ = require('lodash');

var TodoList = require('./components/todo-list.jsx');
var TodoApp = require('./components/todos-app.jsx');

$(function() {
  var data = [
    {"id": 1, description: "再不杀人，就开学了", status: false},
    {"id": 2, description: "黑杨栋和马强", status: true},
  ];

  React.render(<TodoApp todos={data}/>, document.getElementById('container'));
});
