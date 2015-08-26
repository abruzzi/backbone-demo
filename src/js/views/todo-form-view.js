var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');

var template = require('../templates/todo-form.hbs');

module.exports = Backbone.View.extend({
  initialize: function(model) {
    this.model = model;
  },

  events: {
    'click #addButton': 'addTodoItem'
  },

  addTodoItem: function(e) {
    e.preventDefault();

    var item = this.$el.find('#todoInput').val();
    var todos = _.cloneDeep(this.model.get('todos'));

    todos.push({"id": _.uniqueId('todo_'), "description": item, "status": false});
    this.model.set('todos', todos);
  },

  render: function() {
    var html = template();
    this.$el.html(html);

    return this.$el;
  }
});
