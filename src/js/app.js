var $ = require('jquery');

var TodoItem = require('./models/todo-model');
var TodoFormView = require('./views/todo-form-view');
var TodoItemsView = require('./views/todo-items-view');

$(function() {
  var data = [
    {"id": 1, "description": "再不杀人，就开学了", status: true},
    {"id": 2, "description": "黑杨栋和马强", status: true},
  ];

  var model = new TodoItem({'todos': data});

  var todoForm = new TodoFormView(model);
  var todoItems = new TodoItemsView(model);

  todoForm.render();
  todoItems.render();
});
