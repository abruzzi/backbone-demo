var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');

var TodoItemView = require('./todo-item-view');
var template = require('../templates/todo-items.hbs');

module.exports = Backbone.View.extend({
  initialize: function(model) {
    this.model = model;
    this.views = [];
    // this.model.bind('change:todos', _.bind(this.render, this));
  },

  createSubView: function(model) {
    return new TodoItemView(new Backbone.Model(model));
  },

  getDom: function (view) {
  		return view.render().el;
  },

  render: function() {
    var todos = this.model.get('todos');
    this.views = todos.map(this.createSubView, this);
    this.$el.append(_.map(this.views, this.getDom, this));

    // console.log(result);
    // var html = template(this.model.toJSON());
    // this.$el.html(html);

    return this.$el;
  }
});
