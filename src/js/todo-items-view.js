var TodoItemsView = Backbone.View.extend({
  initialize: function(model) {
    this.model = model;
    this.model.bind('change:todos', _.bind(this.render, this));
    this.template = $('#todo-items-template').html();
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
    var compiled = _.template(this.template);
    var html = compiled(this.model.toJSON());

    this.$el.html(html);
  }
});
