var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');

var TodoItemView = require('./todo-item-view');

module.exports = Backbone.View.extend({
  initialize: function(model) {
    this.model = model;
    this.views = [];
    this.model.bind('change:todos', _.bind(this.render, this));
  },

  createSubView: function(model) {
    return new TodoItemView(new Backbone.Model(model));
  },

  getDom: function (view) {
  		return view.render();
  },

  render: function() {
    var todos = this.model.get('todos');
    this.views = _.map(todos, _.bind(this.createSubView, this));
    this.$el.html(_.map(this.views, _.bind(this.getDom, this)));

    return this.$el;
  }
});
