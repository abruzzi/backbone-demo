var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');

var template = require('../templates/todo-item.hbs');

module.exports = Backbone.View.extend({
  initialize: function(model) {
    this.model = model;
    this.model.bind('change:status', _.bind(this.render, this));
  },

  events: {
    'click .toggle': 'toggleTodo'
  },

  toggleTodo: function(e) {
    e.preventDefault();
    this.model.set('status', !this.model.get('status'));
  },

  render: function() {
    var html = template(this.model.toJSON());
    this.$el.html(html);

    return this.$el;
  }
});
