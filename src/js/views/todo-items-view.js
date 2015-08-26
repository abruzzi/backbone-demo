var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');

var template = require('../templates/todo-items.hbs');

module.exports = Backbone.View.extend({
  initialize: function(model) {
    this.model = model;
    this.model.bind('change:todos', _.bind(this.render, this));
  },

  events: {
    'click .toggle': 'toggleTodo'
  },

  toggleTodo: function(e) {
    e.preventDefault();
    var id = $(e.currentTarget).data('id');
    var todos = this.model.get('todos');
    var current = _.findWhere(todos, {"id": id});
    current.status = !current.status;
    this.model.trigger('change:todos', todos);
  },

  el: '#todoItems',

  render: function() {
    var html = template(this.model.toJSON());
    this.$el.html(html);

    return this.$el;
  }
});
